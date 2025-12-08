import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Send, Factory } from "lucide-react";
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
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16"
    >
      {/* Static background - no movement at all */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${aviationImageUrl})`,
        }}
        role="img"
        aria-label="Green sustainable aircraft flying over lush landscape representing Shaphargroup's commitment to eco-friendly aviation fuel solutions"
      />
      
      {/* Static gradient overlay for text contrast */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-navy/40 via-black/50 to-forest/30 z-10"
      />
      
      {/* Static darker overlay for text readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-15"
      />
      
      {/* Main content - completely static, no scroll effects */}
      <div 
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div 
          className="max-w-6xl mx-auto space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-lg mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)" }}
          >
            <span className="block text-white">Powering Net-Zero</span>
            <span className="block text-emerald-300 drop-shadow-xl" style={{ textShadow: "2px 2px 12px rgba(0, 0, 0, 0.9)" }}>
              Aviation Today
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-white mb-6 leading-relaxed font-medium max-w-5xl mx-auto drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ textShadow: "1px 1px 6px rgba(0, 0, 0, 0.8)" }}
          >
            Supplying HEFA Sustainable Aviation Fuel (SAF) — backed by certified refining, proven logistics, and global reach.
          </motion.p>
          
          <motion.p 
            className="text-lg sm:text-xl text-white mb-12 font-bold tracking-wide drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ 
              textShadow: "3px 3px 8px rgba(0, 0, 0, 0.9), 0 0 10px rgba(0, 0, 0, 0.8)",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              padding: "8px 16px",
              borderRadius: "8px",
              backdropFilter: "blur(4px)"
            }}
          >
            Powering airlines to meet ReFuelEU's 2% mandate and beyond
          </motion.p>
          
          {/* Single button section with animation */}
          <motion.div 
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white hover:text-navy font-semibold text-lg px-10 py-4 rounded-xl transition-all duration-300 group"
              >
                <a href="https://sg-uco.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Factory className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Explore our UCO Pre-Treatment Plant in China: Shandong Prophet Energy Co., LTD
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Static scroll indicator - no scroll effects */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.button
          onClick={() => scrollToSection("about")}
          className="group flex flex-col items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-white/60 text-xs font-medium tracking-wider uppercase">Scroll Down</span>
          <motion.div 
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center items-start pt-2 group-hover:border-white/70 transition-colors duration-300"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div 
              className="w-1 h-2 bg-white/60 rounded-full"
              animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}