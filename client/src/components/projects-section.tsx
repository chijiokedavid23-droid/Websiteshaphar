import { motion } from "framer-motion";
import { Building2, MapPin, Calendar, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import shapharRefiningLogo from "@assets/Refinary Logo_1761655481254.jpg";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-sm font-bold text-emerald tracking-wider uppercase mb-6 flex items-center justify-center">
            <div className="w-8 h-0.5 bg-emerald mr-3"></div>
            Strategic Projects
            <div className="w-8 h-0.5 bg-emerald ml-3"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 tracking-tight">
            Building Europe's{" "}
            <span className="text-emerald">Next-Generation</span>{" "}
            SAF Infrastructure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Expanding our global footprint with world-class refining capacity
          </p>
        </motion.div>

        {/* Shaphar Refining Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Column - Logo & Overview */}
            <div className="bg-gradient-to-br from-navy via-forest to-emerald p-12 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 z-0"></div>
              <div className="relative z-10">
                <div className="bg-white rounded-2xl p-8 mb-8 inline-block">
                  <img 
                    src={shapharRefiningLogo} 
                    alt="Shaphar Refining - 200,000 MT/Year HEFA SAF/HVO Refinery"
                    className="h-24"
                  />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  200,000 MT/Year HEFA Refinery
                </h3>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Developing a state-of-the-art sustainable aviation fuel and renewable diesel refinery in the Netherlands
                </p>
                
                <Link href="/projects/shaphar-refining">
                  <motion.button
                    className="bg-white text-navy px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ duration: 0.2 }}
                    data-testid="link-shaphar-refining-project"
                  >
                    View Project Details
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Right Column - Key Stats */}
            <div className="p-6 md:p-12 bg-gray-50">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                <motion.div
                  className="bg-white rounded-2xl p-4 md:p-6 shadow-md border border-gray-100"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald/10 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                    <Building2 className="w-5 h-5 md:w-6 md:h-6 text-emerald" />
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide mb-1">Capacity</div>
                  <div className="text-xl md:text-2xl font-bold text-navy">200,000 MT/year</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">SAF + HVO</div>
                </motion.div>

                <motion.div
                  className="bg-white rounded-2xl p-4 md:p-6 shadow-md border border-gray-100"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-sky/10 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-sky" />
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide mb-1">Location</div>
                  <div className="text-xl md:text-2xl font-bold text-navy">Rotterdam</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">Netherlands</div>
                </motion.div>

                <motion.div
                  className="bg-white rounded-2xl p-4 md:p-6 shadow-md border border-gray-100"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-forest/10 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                    <Calendar className="w-5 h-5 md:w-6 md:h-6 text-forest" />
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide mb-1">Target Start</div>
                  <div className="text-xl md:text-2xl font-bold text-navy">Q1 2027</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">Construction</div>
                </motion.div>

                <motion.div
                  className="bg-white rounded-2xl p-4 md:p-6 shadow-md border border-gray-100"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                    <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-gold" />
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide mb-1">Expansion</div>
                  <div className="text-xl md:text-2xl font-bold text-navy">500,000 MT/year</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">Future potential</div>
                </motion.div>
              </div>

              <div className="bg-gradient-to-br from-emerald/10 to-mint/10 rounded-2xl p-4 md:p-6 border-2 border-emerald/20">
                <h4 className="text-base md:text-lg font-bold text-navy mb-2 md:mb-3">Technology</h4>
                <p className="text-sm md:text-base text-gray-700 mb-2">
                  <strong className="text-navy">HEFA Process</strong> - Hydroprocessed Esters and Fatty Acids
                </p>
                <p className="text-gray-600 text-xs md:text-sm">
                  Multi-feedstock capability
                </p>
              </div>

              <div className="mt-4 md:mt-6 bg-white rounded-2xl p-4 md:p-6 border border-gray-100">
                <h4 className="text-base md:text-lg font-bold text-navy mb-2 md:mb-3">Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-emerald/10 text-emerald text-sm font-bold px-4 py-2 rounded-lg">ISCC EU</span>
                  <span className="bg-sky/10 text-sky text-sm font-bold px-4 py-2 rounded-lg">CORSIA</span>
                  <span className="bg-forest/10 text-forest text-sm font-bold px-4 py-2 rounded-lg">SAFc</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
