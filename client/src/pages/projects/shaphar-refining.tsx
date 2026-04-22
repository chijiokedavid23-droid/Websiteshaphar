import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Leaf, TrendingUp, Mail, MapPin, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { updateSEOTags } from "@/lib/seo";
import shapharRefiningLogo from "@assets/Refinary Logo_1761655481254.jpg";

export default function ShapharRefining() {
  useEffect(() => {
    updateSEOTags({
      title: "Shaphar Refining | 200,000 MT/Year HEFA SAF Refinery Rotterdam Netherlands | 2029",
      description: "Shaphar Refining (a Shaphargroup subsidiary) is building a 200,000 MT/year HEFA SAF and HVO refinery near Rotterdam, Netherlands. Processing UCO and waste feedstocks. Production target: 2029. Scalable to 500,000 MT/year.",
      keywords: "Shaphar Refining, HEFA refinery Rotterdam, SAF refinery Netherlands, HVO refinery Rotterdam, SAF factory Netherlands 2029, sustainable aviation fuel refinery Europe, UCO refinery Rotterdam, HEFA SAF Netherlands, Shaphargroup Rotterdam, SAF production Europe, renewable fuel refinery Netherlands, SAF capacity Netherlands",
      canonical: window.location.href,
      structuredData: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "name": "Shaphar Refining",
            "description": "Shaphargroup subsidiary developing a 200,000 MT/year HEFA SAF and HVO refinery in the Netherlands near Rotterdam, targeting production in 2029. The facility will process UCO, animal fats, and PFAD using HEFA technology and is designed to scale to 500,000 MT/year.",
            "parentOrganization": {
              "@type": "Organization",
              "name": "Shaphargroup",
              "url": "https://shaphargroup.com"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Rotterdam",
              "addressRegion": "Zuid-Holland",
              "addressCountry": "NL"
            },
            "areaServed": "Europe",
            "knowsAbout": [
              "HEFA SAF Production",
              "HVO Renewable Diesel Production",
              "UCO Refining",
              "ReFuelEU Aviation Compliance",
              "ISCC Certification"
            ]
          },
          {
            "@type": "Project",
            "name": "Shaphar Refining — HEFA SAF Refinery Rotterdam",
            "description": "A 200,000 MT/year HEFA-based sustainable aviation fuel and HVO refinery under development in the Netherlands near Rotterdam by Shaphargroup. Processing UCO, animal fats, and PFAD feedstocks. Production target: 2029. Scalable to 500,000 MT/year. Expected to reduce CO₂ emissions by approximately 450,000 tons per year.",
            "status": "Under Development",
            "startDate": "2024",
            "endDate": "2029",
            "location": {
              "@type": "Place",
              "name": "Rotterdam, Netherlands",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Rotterdam",
                "addressRegion": "Zuid-Holland",
                "addressCountry": "NL"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": "Shaphargroup",
              "url": "https://shaphargroup.com"
            },
            "about": [
              "HEFA Sustainable Aviation Fuel",
              "HVO Renewable Diesel",
              "200000 MT/year production capacity",
              "UCO feedstock processing",
              "ReFuelEU Aviation mandate support"
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Shaphar Refining?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Shaphar Refining is a subsidiary of Shaphargroup that is developing a 200,000 metric ton per year HEFA-based sustainable aviation fuel (SAF) and HVO refinery in the Netherlands, near Rotterdam. The facility will process waste-based feedstocks including UCO, animal fats, and PFAD, targeting commercial production in 2029."
                }
              },
              {
                "@type": "Question",
                "name": "Where is the Shaphar Refining refinery located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Shaphar Refining HEFA SAF and HVO refinery is being developed in the Netherlands, near Rotterdam — Europe's largest port and a major hub for sustainable fuel logistics. Rotterdam's position provides direct access to key feedstock supply chains from China and distribution to European airlines and fuel blenders."
                }
              },
              {
                "@type": "Question",
                "name": "What is the production capacity of the Shaphar Refining plant?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Shaphar Refining facility is designed to produce 200,000 metric tons of SAF and HVO per year at initial capacity, with an engineering design scalable to 500,000 MT/year. This capacity supports the EU's ReFuelEU Aviation SAF blending mandates and will deliver approximately 450,000 tons of CO₂ reduction annually."
                }
              },
              {
                "@type": "Question",
                "name": "When will the Shaphar Refining refinery start production?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Shaphar Refining is targeting commercial production in 2029. The refinery is currently in the development and permitting phase, with HEFA technology selected for its proven commercial viability and compliance with ISCC, CORSIA, and ASTM D7566 SAF certification standards."
                }
              },
              {
                "@type": "Question",
                "name": "What feedstocks will the Shaphar Refining refinery use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Shaphar Refining will process multiple waste-based feedstocks: Used Cooking Oil (UCO), animal fats, and Palm Fatty Acid Distillate (PFAD). UCO will be sourced from China through Shaphargroup's Shandong Prophet Energy supply chain, providing a vertically integrated China-to-Europe feedstock pipeline."
                }
              }
            ]
          }
        ]
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
    { label: "Target Start", value: "2029", sublabel: "Production" },
    { label: "Location", value: "Netherlands", sublabel: "" },
    { label: "Future Expansion", value: "500,000 MT/year", sublabel: "Scalability built-in" },
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
            className="mb-12"
          >
            <img 
              src={shapharRefiningLogo} 
              alt="Shaphar Refining Logo"
              className="h-40 mx-auto bg-white px-12 py-6 rounded-2xl shadow-2xl"
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
            className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Developing Europe's next-generation sustainable aviation fuel and renewable diesel refinery in the Netherlands
          </motion.p>
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
              Shaphar Refining is developing <strong className="text-navy">RefuelOne</strong>, a <strong className="text-navy">200,000 metric ton per year HEFA-based SAF/HVO refinery</strong> in the Netherlands, designed to produce sustainable aviation fuel and renewable diesel using waste-based feedstocks such as used cooking oil (UCO), tallow, and PFAD.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The facility will utilize advanced <strong className="text-navy">HEFA (Hydroprocessed Esters and Fatty Acids) technology</strong> with multi-feedstock capability, enabling flexible production to meet evolving market demands and regulatory requirements.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Located in <strong className="text-navy">Netherlands</strong>, the refinery is strategically positioned to serve European markets and integrate with existing logistics infrastructure.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              With a production target start of <strong className="text-navy">2029</strong>, this project represents a strategic investment to support Europe's energy transition and help airlines meet ReFuelEU Aviation targets.
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

      {/* Section 5 - Investment & Collaboration */}
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
                href="mailto:davis.c@shaphargroup.com"
                className="inline-flex items-center text-2xl font-bold text-emerald-300 hover:text-emerald-200 transition-colors"
              >
                <Mail className="w-6 h-6 mr-3" />
                davis.c@shaphargroup.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6 - Contact */}
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
                  <a href="mailto:davis.c@shaphargroup.com" className="text-lg text-navy hover:text-emerald transition-colors">
                    davis.c@shaphargroup.com
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
