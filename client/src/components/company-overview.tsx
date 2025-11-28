import { motion } from "framer-motion";
import { CheckCircle, FileText } from "lucide-react";
import { Link } from "wouter";
import chinaTeamImagePath from "@assets/Tanks_1764341200861.jpg";

export default function CompanyOverview() {
  const features = [
    "REACH-Certified for both neat and blended SAF",
    "ISCC EU Chain of Custody Compliant",
    "Delivered DAP or CIF from China to UK/EU terminals"
  ];

  return (
    <section id="about" className="py-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <div className="text-sm font-bold text-emerald tracking-wider uppercase flex items-center mb-4">
                <div className="w-8 h-0.5 bg-emerald mr-3"></div>
                Who We Are
              </div>
              <div className="flex justify-end">
                <Link href="/market-intelligence/china-europe-saf-index-september">
                  <motion.div
                    className="text-sm font-bold text-navy tracking-wider uppercase flex items-center gap-2 hover:text-emerald transition-colors cursor-pointer border-2 border-navy hover:border-emerald px-4 py-2 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FileText className="w-4 h-4" />
                    China - Europe SAF Market Report
                  </motion.div>
                </Link>
              </div>
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
              src={chinaTeamImagePath}
              alt="Shaphargroup leadership team visiting China facility with industrial storage tanks in background"
              className="relative rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500 z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
