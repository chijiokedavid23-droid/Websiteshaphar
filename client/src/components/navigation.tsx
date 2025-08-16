import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoPath from "@assets/Shaphargroup logo logo browser_1754153550144.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "SAF", path: "/saf" },
    { name: "Sustainability", path: "/sustainability" },
    { 
      name: "About", 
      path: "/about",
      dropdown: [
        { name: "Our Story", path: "/about" },
        { name: "Leadership", path: "/leadership" }
      ]
    },
    { name: "FutureFuel Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" onClick={scrollToTop} className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src={logoPath} 
                alt="Shaphargroup" 
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className={`flex items-center ${
                      isScrolled ? 'text-navy hover:text-emerald' : 'text-white hover:text-emerald'
                    } transition-colors duration-200 font-medium ${
                      location === item.path || item.dropdown.some(subItem => location === subItem.path) ? 'text-emerald font-semibold' : ''
                    }`} data-testid="dropdown-about">
                      {item.name}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white shadow-lg border border-gray-200 rounded-lg">
                      {item.dropdown.map((subItem) => (
                        <DropdownMenuItem key={subItem.path} className="hover:bg-gray-50">
                          <Link href={subItem.path} onClick={scrollToTop} className="w-full text-navy hover:text-emerald font-medium" data-testid={`link-${subItem.name.toLowerCase().replace(' ', '-')}`}>
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link href={item.path} onClick={scrollToTop} className={`${
                    isScrolled ? 'text-navy hover:text-emerald' : 'text-white hover:text-emerald'
                  } transition-colors duration-200 font-medium ${
                    location === item.path ? 'text-emerald font-semibold' : ''
                  }`} data-testid={`link-${item.name.toLowerCase().replace(' ', '-')}`}>
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="/contact" onClick={scrollToTop} className="hidden sm:inline-block bg-emerald text-white hover:bg-emerald/90 transition-all duration-200 font-medium shadow-md hover:shadow-lg px-4 py-2 rounded-md touch-manipulation">
                Contact Us
              </Link>
            </motion.div>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-charcoal" />
              ) : (
                <Menu className="w-6 h-6 text-charcoal" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-2 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.path}>
                  {item.dropdown ? (
                    <div>
                      <div className="text-charcoal font-semibold py-2">{item.name}</div>
                      {item.dropdown.map((subItem) => (
                        <Link 
                          key={subItem.path} 
                          href={subItem.path} 
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            scrollToTop();
                          }}
                          className={`block w-full text-left py-2 pl-4 text-charcoal hover:text-emerald transition-colors ${
                            location === subItem.path ? 'text-emerald font-semibold' : ''
                          }`}
                          data-testid={`mobile-link-${subItem.name.toLowerCase().replace(' ', '-')}`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link 
                      href={item.path} 
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        scrollToTop();
                      }}
                      className={`block w-full text-left py-2 text-charcoal hover:text-emerald transition-colors ${
                        location === item.path ? 'text-emerald font-semibold' : ''
                      }`}
                      data-testid={`mobile-link-${item.name.toLowerCase().replace(' ', '-')}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
