import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown, Send, Factory } from "lucide-react";
import { Link } from "wouter";
import aviationImagePath from "@assets/airplane-flying-over-tropical-sea-600nw-1892755264_1754131547463.webp";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Custom aviation background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${aviationImagePath})`
        }}
      />
      
      {/* Overlay for better text readability while preserving image beauty */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/20 via-transparent to-forest/20 z-15"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Powering Net-Zero Aviation Today
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-100 mb-6 leading-relaxed font-light max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Supplying HEFA Sustainable Aviation Fuel (SAF) — backed by certified refining, proven logistics, and global reach.
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-300 mb-14 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Powering airlines to meet ReFuelEU's 2% mandate and beyond
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-emerald text-white hover:bg-emerald/90 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 px-10 py-4 rounded-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </Link>
            
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-navy transition-all duration-300 font-semibold text-lg px-10 py-4 rounded-lg"
            >
              <a href="https://sg-uco.com/" target="_blank" rel="noopener noreferrer">
                <Factory className="w-5 h-5 mr-2" />
                Explore Our UCO Refinery
              </a>
            </Button>
          </motion.div>
        </div>
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