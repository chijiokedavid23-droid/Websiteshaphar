import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown, Send, Factory, Plane, Zap, Globe } from "lucide-react";
import { Link } from "wouter";
// Using the new main page hero image with green aircraft
import heroImagePath from "@assets/Main page_1754669989825.png";
const aviationImageUrl = heroImagePath;

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16">
      {/* Dynamic background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-[20s] ease-out"
        style={{
          backgroundImage: `url(${aviationImageUrl})`
        }}
        role="img"
        aria-label="Green sustainable aircraft flying over lush landscape representing Shaphargroup's commitment to eco-friendly aviation fuel solutions"
      />
      
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/60 via-black/30 to-forest/50 z-10"></div>
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              opacity: [0, 1, 0], 
              y: [-10, -60, -10], 
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Main content container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        
        {/* Left side - Main content */}
        <motion.div 
          className="text-left lg:pr-8 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge/Tag */}
          <motion.div
            className="inline-flex items-center gap-2 bg-emerald/20 backdrop-blur-sm border border-emerald/30 rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Zap className="w-4 h-4 text-emerald-300" />
            <span className="text-emerald-100 text-sm font-medium">CORSIA Certified • 2% SAF Mandate Ready</span>
          </motion.div>

          {/* Main Headlines */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Powering
            <span className="block text-emerald-400 bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              Net-Zero Aviation
            </span>
            Today
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed font-light max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Supplying HEFA Sustainable Aviation Fuel (SAF) — backed by certified refining, proven logistics, and global reach.
          </motion.p>
          
          <motion.p 
            className="text-sm text-gray-400 mb-8 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Powering airlines to meet ReFuelEU's 2% mandate and beyond
          </motion.p>
          
          {/* Action buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-emerald hover:bg-emerald/90 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-emerald/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </Link>
            
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-navy font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300"
            >
              <a href="https://sg-uco.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Factory className="w-5 h-5 mr-2" />
                Explore UCO Refinery
              </a>
            </Button>
          </motion.div>
          
          {/* Key metrics */}
          <motion.div 
            className="grid grid-cols-3 gap-6 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-1">HEFA</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Certified Process</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-1">Global</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Logistics Network</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-1">2025</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">SAF Ready</div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right side - Feature highlights */}
        <motion.div 
          className="lg:pl-8 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-emerald/20 rounded-xl flex items-center justify-center">
                <Plane className="w-6 h-6 text-emerald-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">CORSIA Certified</h3>
                <p className="text-sm text-gray-300">International compliance ready</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-emerald/20 rounded-xl flex items-center justify-center">
                <Factory className="w-6 h-6 text-emerald-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">UCO Refining</h3>
                <p className="text-sm text-gray-300">Certified sustainable process</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-emerald/20 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-emerald-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Global Reach</h3>
                <p className="text-sm text-gray-300">Proven logistics network</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Professional scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.button
          onClick={() => scrollToSection("about")}
          className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center items-start pt-2 hover:border-white/60 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div 
            className="w-1 h-2 bg-white/60 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.button>
      </motion.div>
    </section>
  );
}