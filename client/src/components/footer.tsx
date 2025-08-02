import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "SAF", href: "/saf" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "About", href: "/about" },
    { name: "FutureFuel Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "UCO Refinery", href: "https://sg-uco.com/", external: true }
  ];

  const services = [
    { name: "SAF Production", href: "/saf" },
    { name: "UCO Refining", href: "/saf" },
    { name: "Global Logistics", href: "/about" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Certification", href: "/sustainability" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];



  return (
    <footer className="bg-gradient-to-b from-navy to-navy/95 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold mb-6">Shaphargroup</div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Driving the clean energy revolution with innovative, scalable SAF solutions from 
              Shandong to global markets. Powering the future of sustainable aviation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-emerald rounded-lg flex items-center justify-center hover:bg-emerald/80 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-emerald transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-emerald transition-colors text-left"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-emerald transition-colors text-left"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-700 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300">
            © 2025 Shaphargroup. All rights reserved. | Powering Net-Zero Aviation Today.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
