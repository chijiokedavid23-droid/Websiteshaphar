import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import SAF from "@/pages/saf";
import Sustainability from "@/pages/sustainability";
import About from "@/pages/about";
import Leadership from "@/pages/leadership";
import Blog from "@/pages/blog";
import Article from "@/pages/article";
import Contact from "@/pages/contact";
import ChinaEuropeSAFIndex from "@/pages/market-intelligence/china-europe-saf-index";
import ChinaEuropeSAFIndexSeptember from "@/pages/market-intelligence/china-europe-saf-index-september";
import ShapharRefining from "@/pages/projects/shaphar-refining";
import SAFProject from "@/pages/saf-project";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import NotFound from "@/pages/not-found";

const basePath = "";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/saf" component={SAF} />
      <Route path="/sustainability" component={Sustainability} />
      <Route path="/about" component={About} />
      <Route path="/leadership" component={Leadership} />
      <Route path="/blog" component={Blog} />
      <Route path="/article/:id" component={Article} />
      <Route path="/contact" component={Contact} />
      <Route path="/market-intelligence/china-europe-saf-index" component={ChinaEuropeSAFIndex} />
      <Route path="/market-intelligence/china-europe-saf-index-september" component={ChinaEuropeSAFIndexSeptember} />
      <Route path="/projects/shaphar-refining" component={ShapharRefining} />
      <Route path="/saf-project" component={SAFProject} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router base={basePath}>
          <Toaster />
          <AppRoutes />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
