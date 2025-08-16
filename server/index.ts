import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import * as fs from "fs";
import path from "path";

const app = express();
// Explicitly set the environment based on NODE_ENV
app.set('env', process.env.NODE_ENV || 'development');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  // Smart production detection - multiple fallbacks to ensure deployment works
  const distPathExists = await fs.promises.access(path.resolve(import.meta.dirname, "public")).then(() => true).catch(() => false);
  const isDeployment = process.env.REPLIT_DEPLOYMENT === "1" || 
                      process.env.NODE_ENV === "production" ||
                      distPathExists; // If built files exist, we're in production
  
  console.log(`🚀 Environment Detection:`);
  console.log(`   NODE_ENV: ${process.env.NODE_ENV}`);
  console.log(`   REPLIT_DEPLOYMENT: ${process.env.REPLIT_DEPLOYMENT}`);
  console.log(`   Built files exist: ${distPathExists}`);
  console.log(`   → Running in: ${isDeployment ? 'PRODUCTION' : 'DEVELOPMENT'} mode`);
  
  if (!isDeployment) {
    console.log("🔧 Starting development server with Vite hot reload");
    await setupVite(app, server);
  } else {
    console.log("⚡ Starting production server with optimized static files");
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
