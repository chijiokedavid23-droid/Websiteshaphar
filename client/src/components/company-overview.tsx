import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import safFactoryImagePath from "@assets/SAF Factory to jet_1754154741557.png";

export default function CompanyOverview() {
  const features = [
    "REACH-Certified for both neat and blended SAF",
    "ISCC EU Chain of Custody Compliant",
    "Delivered DAP or CIF from China to UK/EU terminals"
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-bold text-emerald tracking-wider uppercase mb-6 flex items-center">
              <div className="w-8 h-0.5 bg-emerald mr-3"></div>
              Who We Are
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-8 leading-tight tracking-tight">
              An Integrated SAF Refiner and Exporter with a{" "}
              <span className="text-emerald">Global Footprint</span>
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed font-light">
              Shaphargroup is a vertically integrated SAF and biofuels refiner and supplier with 
              operations in China, the Netherlands, and the United States. We specialize in the 
              production, certification, and delivery of HEFA-SPK Sustainable Aviation Fuel (SAF) 
              refined from waste-based feedstocks like UCO and animal fats.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              With end-to-end logistics and regulatory compliance to deliver REACH-compliant SAF 
              directly into the UK and EU.
            </p>
            
            <div className="space-y-5">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-white rounded-lg p-4 shadow-sm border border-gray-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-emerald/10 rounded-full p-2 mr-4 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-emerald" />
                  </div>
                  <span className="text-gray-800 font-medium leading-relaxed">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald/20 to-mint/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src={safFactoryImagePath}
              alt="SAF Factory to Jet - Sustainable Aviation Fuel production and delivery process"
              className="relative rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              key="saf-factory-image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
