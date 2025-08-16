import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, Building, Calendar } from "lucide-react";

export default function ContactSection() {

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* CTA Section */}
      <section className="py-8 bg-gradient-to-br from-emerald to-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's Shape the Future of Sustainable Aviation Together
          </motion.h2>
          <motion.p 
            className="text-xl text-emerald-900 mb-12 max-w-3xl mx-auto font-semibold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Do you have any questions about our SAF solutions, certifications, or global supply capabilities?
          </motion.p>
          
          <motion.div 
            className="flex justify-center items-center w-full px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="bg-white border-2 border-white text-emerald hover:bg-emerald hover:text-white transition-all duration-300 font-semibold text-lg px-8 py-4"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Call
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-semibold text-emerald tracking-wide uppercase mb-4">
              Contact Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Global Operations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out to our teams across China, Netherlands, and beyond for sustainable aviation fuel solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* China Office */}
            <motion.div 
              className="bg-gray-50 rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mr-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy">China Operations</h3>
                  <p className="text-gray-600">Primary Refinery & Production</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Building className="w-5 h-5 text-emerald mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-charcoal">Address</div>
                    <div className="text-gray-600">
                      South of Industrial 6th Road, Economic Development Zone, Yangxin County, Shandong China
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Netherlands Office */}
            <motion.div 
              className="bg-gray-50 rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-emerald rounded-2xl flex items-center justify-center mr-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy">Netherlands Office</h3>
                  <p className="text-gray-600">European Operations Hub</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Building className="w-5 h-5 text-emerald mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-charcoal">Address</div>
                    <div className="text-gray-600">
                      Coolsingel 104, 3011 AG, Rotterdam, Netherlands
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>


        </div>
      </section>
    </>
  );
}
