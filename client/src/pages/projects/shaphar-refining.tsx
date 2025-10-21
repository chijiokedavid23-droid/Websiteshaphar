import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Factory, Leaf, TrendingUp, Users, Mail, MapPin, Calendar, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { updateSEOTags } from "@/lib/seo";
import shapharRefiningLogo from "@assets/Refinary Logo_1761043230419.jpg";

export default function ShapharRefining() {
  useEffect(() => {
    updateSEOTags({
      title: "Shaphar Refining | 200,000 MT/Year HEFA SAF/HVO Refinery | Netherlands",
      description: "Shaphar Refining is developing a 200,000 metric ton per year HEFA-based SAF/HVO refinery in the Netherlands, producing sustainable aviation fuel and renewable diesel from waste-based feedstocks.",
      keywords: "Shaphar Refining, HEFA refinery, SAF Netherlands, HVO refinery, sustainable aviation fuel, renewable diesel, UCO refining, Rotterdam refinery, aviation decarbonization",
      canonical: window.location.href,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Shaphar Refining",
        "description": "200,000 MT/year HEFA SAF/HVO refinery in the Netherlands",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "Netherlands",
          "addressRegion": "Rotterdam"
        }
      }
    });

    return () => {
      document.title = 'Shaphargroup - Sustainable Aviation Fuel | UCO Refining & HEFA SAF Production';
    };
  }, []);

  const keyFacts = [
    { label: "Capacity", value: "200,000 MT per year", sublabel: "(SAF + HVO)" },
    { label: "Technology", value: "HEFA Process", sublabel: "Hydroprocessed Esters and Fatty Acids" },
    { label: "Feedstock", value: "UCO, Animal Fats, PFAD", sublabel: "Multi-feedstock capability" },
    { label: "Target Start", value: "Q4 2026", sublabel: "Construction phase" },
    { label: "Location", value: "Netherlands", sublabel: "Rotterdam region (under site evaluation)" },
    { label: "Future Expansion", value: "250,000 MT/year", sublabel: "Scalability built-in" },
    { label: "Certifications", value: "ISCC EU, CORSIA, SAFc", sublabel: "Targeting all frameworks" }
  ];

  const environmentalImpact = [
    {
      icon: Leaf,
      title: "CO₂ Reduction",
      value: "~450,000 tons/year",
      description: "Equivalent to removing ~300,000 cars from the road annually"
    },
    {
      icon: TrendingUp,
      title: "ReFuelEU Contribution",
      value: "2% Mandate Support",
      description: "Supporting EU's 2025 SAF blending requirements and beyond"
    },
    {
      icon: Zap,
      title: "Circular Economy",
      value: "China → Europe",
      description: "Integrated feedstock collection in Asia, refined in Europe"
    }
  ];

  const partners = [
    { name: "Shaphargroup", role: "Project Developer (China, USA, Netherlands)" },
    { name: "Technology Licensors", role: "Honeywell, Topsoe, Axens (under discussion)" },
    { name: "Strategic Stakeholders", role: "Invest-NL, RVO, ETF-R" },
    { name: "Engineering & Consultants", role: "Selection in progress" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-forest to-emerald pt-20">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img 
              src={shapharRefiningLogo} 
              alt="Shaphar Refining Logo"
              className="h-32 mx-auto mb-8 bg-white px-8 py-4 rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            200,000 MT/Year HEFA Refinery
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Developing Europe's next-generation sustainable aviation fuel and renewable diesel refinery in the Netherlands
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button className="bg-white text-navy hover:bg-gray-100 px-8 py-6 text-lg" data-testid="button-contact-team">
              Contact Our Team
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg" data-testid="button-download-overview">
              Download Overview
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section 1 - Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Project Overview</h2>
            <div className="w-24 h-1 bg-emerald mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Shaphar Refining is developing a <strong className="text-navy">200,000 metric ton per year HEFA-based SAF/HVO refinery</strong> in the Netherlands, designed to produce sustainable aviation fuel and renewable diesel using waste-based feedstocks such as used cooking oil (UCO), tallow, and PFAD.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The facility will utilize advanced <strong className="text-navy">HEFA (Hydroprocessed Esters and Fatty Acids) technology</strong> with multi-feedstock capability, enabling flexible production to meet evolving market demands and regulatory requirements.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Located in the <strong className="text-navy">Netherlands, with potential co-location in the Rotterdam region</strong>, the refinery is strategically positioned to serve European markets and integrate with existing logistics infrastructure.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              With a target commissioning date of <strong className="text-navy">Q4 2026</strong>, this project represents a strategic investment to support Europe's energy transition and help airlines meet ReFuelEU Aviation targets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2 - Vision */}
      <section className="py-20 bg-gradient-to-br from-navy to-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Vision</h2>
            <p className="text-2xl md:text-3xl text-emerald-300 leading-relaxed max-w-5xl mx-auto font-light">
              To accelerate the transition to clean aviation and renewable fuels by building one of Europe's most efficient, multi-feedstock biorefineries — powered by circular resources and advanced refining technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3 - Key Facts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Key Facts</h2>
            <div className="w-24 h-1 bg-emerald mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald/20 hover:border-emerald transition-all"
              >
                <h3 className="text-sm font-bold text-emerald uppercase tracking-wider mb-2">{fact.label}</h3>
                <p className="text-3xl font-bold text-navy mb-2">{fact.value}</p>
                <p className="text-gray-600">{fact.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Environmental Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Environmental Impact</h2>
            <div className="w-24 h-1 bg-emerald mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contributing to Europe's decarbonization goals through circular economy integration and certified sustainable fuel production
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {environmentalImpact.map((impact, index) => {
              const IconComponent = impact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald to-forest rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-3">{impact.title}</h3>
                  <p className="text-3xl font-bold text-emerald mb-4">{impact.value}</p>
                  <p className="text-gray-600 leading-relaxed">{impact.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5 - Development Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Development Partners</h2>
            <div className="w-24 h-1 bg-emerald mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating with industry leaders and strategic stakeholders to deliver world-class refining infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-6 h-6 text-emerald" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">{partner.name}</h3>
                    <p className="text-gray-600">{partner.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 - Investment & Collaboration */}
      <section className="py-20 bg-gradient-to-br from-emerald via-forest to-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Investment & Collaboration</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Shaphar Refining welcomes partnerships with technology licensors, offtakers, and investors aligned with Europe's decarbonization goals.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border-2 border-white/20">
              <p className="text-lg text-white mb-6">
                For collaboration inquiries, contact:
              </p>
              <a 
                href="mailto:david.c@shaphargroup.com"
                className="inline-flex items-center text-2xl font-bold text-emerald-300 hover:text-emerald-200 transition-colors"
              >
                <Mail className="w-6 h-6 mr-3" />
                david.c@shaphargroup.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7 - Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-12">
              Interested in learning more about the Shaphar Refining project? We'd be happy to discuss partnership opportunities.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-12 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="flex items-center justify-center md:justify-start">
                  <Mail className="w-6 h-6 text-emerald mr-3" />
                  <a href="mailto:david.c@shaphargroup.com" className="text-lg text-navy hover:text-emerald transition-colors">
                    david.c@shaphargroup.com
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <MapPin className="w-6 h-6 text-emerald mr-3" />
                  <span className="text-lg text-navy">Rotterdam Region, Netherlands</span>
                </div>
              </div>

              <Button className="bg-emerald hover:bg-forest text-white px-12 py-6 text-lg" data-testid="button-schedule-meeting">
                Schedule a Meeting
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
