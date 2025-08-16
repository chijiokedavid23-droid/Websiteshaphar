import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Send, Factory } from "lucide-react";
import { Link } from "wouter";
import { useRef } from "react";
// Using the new main page hero image with green aircraft
import heroImagePath from "@assets/Main page_1754669989825.png";
const aviationImageUrl = heroImagePath;

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax and fade effects based on scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 4]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={ref}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16"
    >
      {/* Enhanced background with scroll-responsive parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${aviationImageUrl})`,
          y: backgroundY,
          scale,
          filter: `blur(${blur}px)`,
        }}
        role="img"
        aria-label="Green sustainable aircraft flying over lush landscape representing Shaphargroup's commitment to eco-friendly aviation fuel solutions"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      />
      
      {/* Dynamic gradient overlay that responds to scroll */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-navy/50 via-black/30 to-forest/40 z-10"
        style={{ opacity }}
      />
      
      {/* Subtle animated overlay for premium feel */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-15"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ opacity }}
      />
      
      {/* Main content with scroll-responsive transforms */}
      <motion.div 
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center will-change-transform"
        style={{ y, opacity }}
      >
        <motion.div 
          className="max-w-6xl mx-auto space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <span className="block">Powering Net-Zero</span>
            <span className="block text-emerald-400 bg-gradient-to-r from-emerald-400 via-emerald-300 to-mint-400 bg-clip-text text-transparent">
              Aviation Today
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-6 leading-relaxed font-light max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Supplying HEFA Sustainable Aviation Fuel (SAF) — backed by certified refining, proven logistics, and global reach.
          </motion.p>
          
          <motion.p 
            className="text-sm sm:text-base text-emerald-200 mb-12 font-medium tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Powering airlines to meet ReFuelEU's 2% mandate and beyond
          </motion.p>
          
          {/* Enhanced button section with staggered animations */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-emerald hover:bg-emerald/90 text-white font-semibold text-lg px-10 py-4 rounded-xl shadow-2xl hover:shadow-emerald/25 transition-all duration-300 group"
                >
                  <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                  Contact Us
                </Button>
              </Link>
            </motion.div>
            
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
                  Explore Our UCO Refinery
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Scroll-responsive scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 will-change-transform"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{ 
          opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]),
          y: useTransform(scrollYProgress, [0, 0.3], ["0px", "30px"])
        }}
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
      
      {/* Gradient fade to next section for smooth transition */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent z-10"
        style={{
          opacity: useTransform(scrollYProgress, [0.7, 1], [0, 1])
        }}
      />
    </section>
  );
}