import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building, Users, Globe, Award, Target, Heart } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import { updateSEOTags, SEO_CONFIGS, optimizePagePerformance } from "@/lib/seo";
import aboutPageImagePath from "@assets/About page_1754671131671.png";
import greenEarthImagePath from "@assets/green earth_1754163467882.jpg";

export default function About() {
  // SEO Meta Tags Setup
  useEffect(() => {
    updateSEOTags({
      ...SEO_CONFIGS.about,
      canonical: window.location.href,
      ogImage: `${window.location.origin}${aboutPageImagePath}`,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization", 
        "name": "Shaphargroup",
        "description": "Global sustainable aviation fuel producer specializing in HEFA SAF and UCO refining",
        "image": {
          "@type": "ImageObject",
          "url": `${window.location.origin}${aboutPageImagePath}`,
          "description": "Shaphargroup industrial refinery facility with storage tanks showing energy processing, global operations, and fuel production capabilities",
          "width": "1024",
          "height": "1024"
        },
        "foundingDate": "2020",
        "mission": "Transforming aviation through sustainable fuel production and circular economy principles",
        "knowsAbout": [
          "Sustainable Aviation Fuel Production",
          "HEFA SAF Manufacturing", 
          "UCO Refining",
          "Aviation Decarbonization",
          "Biofuel Technology",
          "Circular Economy"
        ],
        "hasCredential": [
          "ISCC EU Certification",
          "ISCC PLUS Certification", 
          "REACH Compliance"
        ]
      }
    });

    optimizePagePerformance();
    return () => {
      document.title = 'Shaphargroup - Sustainable Aviation Fuel | UCO Refining & HEFA SAF Production';
    };
  }, []);


  const companyValues = [
    {
      icon: Target,
      title: "Sustainability First",
      description: "We are committed to advancing clean energy solutions that protect the environment and support a greener future for all."
    },
    {
      icon: Heart,
      title: "Integrity in Action",
      description: "We operate with transparency, honesty, and responsibility in every partnership, transaction, and process."
    },
    {
      icon: Award,
      title: "Innovation-Driven",
      description: "We embrace change, invest in cutting-edge technology, and constantly seek smarter, more efficient ways to deliver value."
    },
    {
      icon: Globe,
      title: "Global Collaboration",
      description: "We build meaningful partnerships across continents, cultures, and industries to drive impactful change at scale."
    }
  ];



  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Stronger overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 to-forest/80 z-15"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${aboutPageImagePath})`
          }}
          role="img"
          aria-label="Shaphargroup industrial refinery facility with storage tanks showing energy processing, global operations, and fuel production capabilities"
        />
        
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="text-sm font-bold text-emerald-200 tracking-wide uppercase mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Story
          </motion.div>
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight text-overlay-strong"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Shaphargroup: Pioneering <span className="text-emerald-200 font-extrabold">Sustainable Biofuels</span> Worldwide
          </motion.h1>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                Transforming Waste into Opportunity
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Headquartered in Shandong, China, with offices in the Netherlands and the US, Shaphargroup is a premier UCO and SAF refinery and distributor transforming waste into opportunity.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our state-of-the-art facilities refine <strong className="text-emerald">500,000 metric tons of ISCC-certified used cooking oil (UCO)</strong> and <strong className="text-emerald">350,000MT of SAF annually</strong>, supplying top-tier feedstock for sustainable aviation fuel (SAF) and hydrotreated vegetable oil (HVO).
              </p>
              <div className="bg-emerald/10 rounded-2xl p-6 border-l-4 border-emerald">
                <p className="text-lg font-semibold text-forest">
                  We distribute SAF across Europe, powering airlines and fleets to meet ReFuelEU's 2% mandate and beyond.
                </p>
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
                src={greenEarthImagePath}
                alt="Green earth sustainability concept"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
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
              Company Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-emerald rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section id="certifications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Shaphargroup maintains the highest industry standards through internationally recognized certifications, 
              ensuring sustainable and traceable biofuel production across our global operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-emerald rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">ISCC-EU Certification</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                International Sustainability and Carbon Certification for European Union markets, 
                ensuring our biofuels meet strict sustainability criteria and greenhouse gas emission reduction requirements.
              </p>
              <div className="bg-emerald/10 rounded-lg p-4">
                <p className="text-emerald font-semibold">✓ EU Renewable Energy Directive Compliant</p>
                <p className="text-emerald font-semibold">✓ Traceable Supply Chain</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-sky rounded-xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">ISCC CORSIA Certification</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Carbon Offsetting and Reduction Scheme for International Aviation (CORSIA) certification, 
                enabling airlines worldwide to meet ICAO sustainability requirements with our SAF products.
              </p>
              <div className="bg-sky/10 rounded-lg p-4">
                <p className="text-sky font-semibold">✓ ICAO CORSIA Eligible</p>
                <p className="text-sky font-semibold">✓ Aviation Carbon Reduction</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-forest rounded-xl flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Book and Claim Certification</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Advanced sustainability accounting mechanism that allows for flexible, cost-effective procurement 
                of sustainable biofuels while maintaining full traceability and environmental integrity.
              </p>
              <div className="bg-forest/10 rounded-lg p-4">
                <p className="text-forest font-semibold">✓ Mass Balance Certified</p>
                <p className="text-forest font-semibold">✓ Flexible Procurement</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="mt-12 bg-white rounded-2xl p-8 shadow-lg border-l-4 border-emerald"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-navy mb-4">Comprehensive Compliance Framework</h3>
            <p className="text-lg text-gray-600 mb-6">
              Our multi-certification approach ensures Shaphargroup biofuels meet the most stringent international standards, 
              providing customers with verified, traceable, and compliant sustainable aviation fuel for global markets.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-navy mb-2">Quality Assurance</h4>
                <p className="text-gray-600">Rigorous testing and verification at every production stage</p>
              </div>
              <div>
                <h4 className="font-semibold text-navy mb-2">Supply Chain Transparency</h4>
                <p className="text-gray-600">Full traceability from feedstock sourcing to final delivery</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Why Partner Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                With a robust buyer network and a commitment to decarbonization, Shaphargroup bridges global resources with local impact—ready to scale with you.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-300 rounded-full mr-4"></div>
                  <p className="text-gray-300">SAF, made from renewable feedstocks like UCO, animal fats, or agricultural waste, can <strong className="text-emerald-300">cut lifecycle emissions by up to 80%</strong></p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-300 rounded-full mr-4"></div>
                  <p className="text-gray-300">UCO is not just a waste product—it's a climate solution</p>
                </div>
              </div>

              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-emerald text-white hover:bg-emerald/90 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 px-8 py-4"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Building className="w-12 h-12 text-emerald-300 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">500K</div>
                  <div className="text-gray-300 text-sm">MT UCO Capacity</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Globe className="w-12 h-12 text-emerald-300 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">3</div>
                  <div className="text-gray-300 text-sm">Global Offices</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Award className="w-12 h-12 text-emerald-300 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">Triple</div>
                  <div className="text-gray-300 text-sm">Certified</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Users className="w-12 h-12 text-emerald-300 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">350K</div>
                  <div className="text-gray-300 text-sm">MT SAF Annually</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}