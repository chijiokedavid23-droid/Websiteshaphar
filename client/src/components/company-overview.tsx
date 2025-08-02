import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function CompanyOverview() {
  const features = [
    "REACH-Certified for both neat and blended SAF",
    "ISCC EU Chain of Custody Compliant",
    "Delivered DAP or CIF from China to UK/EU terminals"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-semibold text-emerald tracking-wide uppercase mb-4">
              Who We Are
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              An Integrated SAF Refiner and Exporter with a Global Footprint
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Shaphargroup is a vertically integrated SAF and biofuels refiner and supplier with 
              operations in China, the Netherlands, and the United States. We specialize in the 
              production, certification, and delivery of HEFA-SPK Sustainable Aviation Fuel (SAF) 
              refined from waste-based feedstocks like UCO and animal fats.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With end-to-end logistics and regulatory compliance to deliver REACH-compliant SAF 
              directly into the UK and EU.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-emerald mr-4 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800"
              alt="Modern industrial refinery with clean technology"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
