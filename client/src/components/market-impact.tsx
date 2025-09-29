import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import facilityImage from "@assets/SAF Shaphar_1759180227545.png";

export default function MarketImpact() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-8 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src={facilityImage}
              alt="Commercial aircraft ascending through golden sunset clouds representing sustainable aviation fuel transformation"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Helping Airlines Meet SAF Mandates and Emission Targets
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              With mandates rolling out across Europe, the U.S., and Asia, airlines face pressure 
              to meet SAF blend ratios.
            </p>
            <p className="text-lg text-emerald-300 mb-8 font-semibold">
              ShapharGroup is already in the field— not just talking, but executing, delivering 
              real fuel, to real jets, reducing real emissions.
            </p>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Trustworthy Supply. Transparent Pricing. Certified Quality.
              </h3>
              <p className="text-gray-300">
                Shaphargroup is already delivering in 2025 — with full traceability, fast shipping 
                cycles, and contract-backed refinery capacity.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-gold text-white hover:bg-gold/90 transition-all duration-300 font-semibold text-lg shadow-xl px-8 py-4"
              >
                Partner with Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
