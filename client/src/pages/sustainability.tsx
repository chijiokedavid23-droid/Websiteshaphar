import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Recycle, Leaf, Target, Globe, Award, Users, BarChart3 } from "lucide-react";

export default function Sustainability() {
  const impactStats = [
    { number: "500,000", unit: "MT/year", description: "Premium refined UCO capacity" },
    { number: "1.58M", unit: "tons CO₂", description: "Emissions avoided annually" },
    { number: "330,000", unit: "cars", description: "Equivalent cars removed from roads" },
    { number: "85%", unit: "reduction", description: "GHG lifecycle reduction vs fossil fuels" }
  ];

  const sustainabilityPillars = [
    {
      icon: Recycle,
      title: "Circular Economy & Waste Valorization",
      description: "Transforming waste into renewable wealth through advanced UCO processing",
      color: "bg-emerald"
    },
    {
      icon: Target,
      title: "Emissions Reduction & Climate Impact",
      description: "Directly contributing to global GHG reduction targets through clean feedstocks",
      color: "bg-forest"
    },
    {
      icon: BarChart3,
      title: "Innovation Through R&D",
      description: "Advancing next-generation feedstock technologies and refinement processes",
      color: "bg-sky"
    },
    {
      icon: Award,
      title: "Traceability & Transparency",
      description: "Full supply chain visibility from collection to aircraft tank",
      color: "bg-gold"
    }
  ];

  const certifications = [
    {
      title: "ISCC Certification",
      subtitle: "International Sustainability and Carbon Certification",
      description: "ISCC EU & ISCC PLUS Certified for sustainable biomass and waste-based feedstocks"
    },
    {
      title: "RED II Compliance",
      subtitle: "Renewable Energy Directive, EU",
      description: "Fully compliant with EU's RED II Directive for GHG reduction thresholds"
    },
    {
      title: "Environmental Impact",
      subtitle: "Waste-to-Energy Accreditation",
      description: "Certified for sustainable oil reprocessing and circular economy principles"
    },
    {
      title: "Traceability Assurance",
      subtitle: "Blockchain-enabled tracking",
      description: "Real-time UCO traceability with digital Chain-of-Custody reports"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://shaphargroup.com/wp-content/uploads/2025/04/UCO-REFINED-AND-SUPPLIED-FOR-SAF.png')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest/90 to-emerald/70 z-10"></div>
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Powering the Future of Flight and Fuel — <span className="text-emerald-300">Sustainably</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed max-w-4xl mx-auto drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Shaphargroup leads the energy transition by refining next-generation UCO feedstocks into premium biofuels — minimizing waste, maximizing impact, and ensuring cleaner skies for future generations.
          </motion.p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Shaphargroup, sustainability is not just a commitment — it's our operational DNA. Every drop of UCO we collect and refine represents our mission to close the loop on waste, support the aviation industry's decarbonization goals, and build a circular bioeconomy.
            </p>
          </motion.div>

          <motion.div 
            className="bg-emerald/10 rounded-2xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl font-semibold text-forest mb-4">
              We invite partners, suppliers, and customers to be part of a collective mission
            </p>
            <p className="text-lg text-gray-600">
              — one that fuels growth, responsibility, and global impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Impact at a Glance
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-emerald-300 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.unit}</div>
                <div className="text-gray-300 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-xl font-semibold text-emerald-300 italic">
              "We don't just refine oil—we refine the future of energy."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Our Sustainability Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our vision for sustainability goes beyond compliance—it defines who we are. We are committed to building a cleaner, low-carbon planet through innovative renewable energy solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {sustainabilityPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 ${pillar.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4">{pillar.title}</h3>
                  <p className="text-gray-600">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Alignment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8">
                Strategic Alignment
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Paris Climate Agreement",
                    description: "Contributing to the global target of limiting temperature rise to 1.5°C"
                  },
                  {
                    title: "UN Sustainable Development Goals (SDGs)",
                    description: "Supporting Affordable & Clean Energy (SDG 7), Responsible Consumption & Production (SDG 12), and Climate Action (SDG 13)"
                  },
                  {
                    title: "EU Fit for 55 & SAF Mandates",
                    description: "Enabling biofuel producers and airlines to meet ambitious emissions targets"
                  },
                  {
                    title: "CORSIA & U.S. RFS",
                    description: "Fully compliant with international aviation and renewable fuel standards"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Target className="w-6 h-6 text-emerald mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-navy mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-emerald/20 to-forest/20 rounded-2xl p-8">
                <Globe className="w-16 h-16 text-emerald mb-6" />
                <h3 className="text-2xl font-bold text-navy mb-4">Global Impact</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our operations span multiple continents, creating a truly global impact on the renewable energy transition. From our refinery in Shandong to our operations in the Netherlands and the US, we're building a cleaner future for aviation worldwide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Our Sustainability Certifications & Affiliations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Shaphargroup, credibility is not claimed — it's certified.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Award className="w-12 h-12 text-emerald mb-4" />
                <h3 className="text-xl font-bold text-navy mb-2">{cert.title}</h3>
                <h4 className="text-emerald font-semibold mb-3">{cert.subtitle}</h4>
                <p className="text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-emerald font-semibold italic">
              "Our certifications are more than credentials — they are a reflection of the integrity that fuels everything we do."
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}