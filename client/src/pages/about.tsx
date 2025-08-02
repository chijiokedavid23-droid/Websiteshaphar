import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building, Users, Globe, Award, Target, Heart } from "lucide-react";
import timRoseImagePath from "@assets/MR TIM_1754156709435.jpg";
import charlesImagePath from "@assets/Charls 3_1754161125449.jpg";

export default function About() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  const leadership = [
    {
      name: "Jiao Li Guang (Charles)",
      title: "CEO",
      image: charlesImagePath
    },
    {
      name: "Zhen Tiyu (Jane)",
      title: "CFO",
      image: "https://shaphargroup.com/wp-content/uploads/2025/01/CFO-Zhen-Tiyu-Jane-150x150.jpg"
    },
    {
      name: "David C. Arinze",
      title: "MD Europe & Americas",
      image: "https://shaphargroup.com/wp-content/uploads/2025/01/MD-Europe-Americas-David-C.-Arinze-150x150.jpg"
    },
    {
      name: "Ji Gang",
      title: "Production Director",
      image: "https://shaphargroup.com/wp-content/uploads/2025/01/Production-Director-Ji-Gang-150x150.jpg"
    },
    {
      name: "Tim Rose",
      title: "Non Executive Director",
      image: timRoseImagePath
    },
    {
      name: "Cao Yuzhao (Elvis)",
      title: "Director Supply Chain",
      image: "https://shaphargroup.com/wp-content/uploads/2025/01/Director-Supply-Chain-Cao-Yuzhao-Elvis-150x150.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/80 to-forest/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://shaphargroup.com/wp-content/uploads/2025/07/Shaphargroup-refinery-768x512.jpeg')"
          }}
        />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="text-sm font-semibold text-emerald-300 tracking-wide uppercase mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Story
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Shaphargroup: Pioneering <span className="text-emerald-300">Sustainable Biofuels</span> Worldwide
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
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
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
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=800"
                alt="Modern sustainable refinery facility"
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

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team guides Shaphargroup's mission to transform the global energy landscape through sustainable innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-2">{member.name}</h3>
                  <p className="text-emerald font-semibold">{member.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
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

              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-emerald text-white hover:bg-emerald/90 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 px-8 py-4"
              >
                Contact Us
              </Button>
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
                  <div className="text-2xl font-bold text-white mb-2">ISCC</div>
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