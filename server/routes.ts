import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactFormEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, company, message } = req.body;
      
      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({ 
          error: "Missing required fields: name, email, and message are required" 
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          error: "Invalid email format" 
        });
      }

      // Send email
      const emailSent = await sendContactFormEmail({
        name: name.trim(),
        email: email.trim(),
        company: company?.trim(),
        message: message.trim()
      });

      if (emailSent) {
        res.status(200).json({ 
          success: true, 
          message: "Your message has been sent successfully! We'll get back to you soon." 
        });
      } else {
        res.status(500).json({ 
          error: "Failed to send email. Please try again or contact us directly." 
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ 
        error: "An unexpected error occurred. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
