import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Globe, Award, Building, Info } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import timRoseImagePath from "@assets/MR TIM_1754156709435.jpg";
import charlesImagePath from "@assets/Charles JIOAa_1754162241994.jpg";
import davidImagePath from "@assets/David C. Arinze_1754161237875.jpg";
import janeImagePath from "@assets/Jane pics_1754161615576.jpg";
import jiGangImagePath from "@assets/Gee_1754161789665.jpg";
import elvisImagePath from "@assets/Elvis.jpg2_1754161974007.jpg";

export default function Leadership() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const leadership = [
    {
      name: "Jiao Li Guang (Charles)",
      title: "CEO",
      image: charlesImagePath,
      bio: "A seasoned industrial chemist and refinery executive, Charles Jiao has over a decade of frontline experience in waste oil processing, advanced oleochemicals, and sustainable aviation fuel (SAF) systems. As CEO of Shaphargroup Industry (Hainan) Co., Ltd., he oversees the production of ISCC-certified UCO and SAF. Charles has led multiple refinery expansions, optimized distillation processes for high-purity outputs, and spearheaded compliance with global SAF standards. His deep command of feedstock science and market dynamics positions him as a key figure in Asia's clean energy transformation."
    },
    {
      name: "Zhen Tiyu (Jane Zhen)",
      title: "CFO",
      image: janeImagePath,
      bio: "As Chief Financial Officer of Shaphargroup Industry (Hainan), Jane Zhen leads financial strategy across global UCO and SAF trade operations. With deep expertise in international trade finance, export tax optimization, and capital risk control, she ensures the group's financial resilience and compliance. Jane holds a degree in Accounting from Wuxi Vocational and Technical University and has led finance teams at Michelin and Bertelsmann. Her leadership is instrumental in aligning Shaphargroup's financial structure with its global growth and sustainability goals."
    },
    {
      name: "David Chijioke Arinze",
      title: "MD Europe & Americas",
      image: davidImagePath,
      bio: "A visionary leader in renewable energy and sustainable trade, David serves as Managing Director, Europe and Americas at Shaphargroup, driving global UCO and SAF supply chains across the U.S., EU, and China. With a strong foundation in business and project leadership, he holds an M.Sc. in Project Management from the University of Salford (UK), a diploma in SME & Digital Finance from the Frankfurt School (Germany), and a B.Sc. in Business Administration. He brings deep expertise in ESG, digital finance, and cross-border execution. David's strategic direction continues to expand Shaphargroup's global footprint in the clean energy sector."
    },
    {
      name: "Ji Gang (Gee Gang)",
      title: "Production Director",
      image: jiGangImagePath,
      bio: "Ji Gang is a veteran oleochemical engineer with over 15 years of expertise in palm oil and UCO refining. As Director of R&D at Shaphargroup, he leads the design and innovation of next-generation UCO production lines that meet global SAF and biodiesel standards. Ji earned a Bachelor's in Chemistry from Jiangsu University of Technology and spent 16 years at PT. Duakuda Indonesia driving efficiency in oleochemical operations. His leadership ensures Shaphargroup's technology stays ahead in sustainable fuel refinement."
    },
    {
      name: "Timothy Rose",
      title: "Non Executive Director",
      image: timRoseImagePath,
      bio: "An accomplished boardroom leader and Chartered Director, Timothy brings over 30 years of strategic governance and high-impact advisory experience across finance, renewable energy, and global development sectors. He has chaired and advised numerous public and private boards, including multi-million-pound turnarounds, international fund management, and ESG-driven growth. Timothy previously led the World Bank's $500M Financial Sector Reform Programme and has raised over $1 billion for prominent clients. His global insight and disciplined board leadership make him a cornerstone of Shaphargroup's growth and governance strategy."
    },
    {
      name: "Cao Yuzhao (Elvis)",
      title: "Director Supply Chain",
      image: elvisImagePath,
      bio: "Elvis Cao is Director of Supply Chain at Shaphargroup, where he oversees the end-to-end sourcing, logistics, and traceability of UCO across China. With a degree in Chemistry from North China University of Science and Technology, he brings over 10 years of experience managing international supply chains in the renewable fuels sector. Prior to Shaphargroup, Elvis held a senior logistics role at Sinopec, one of China's largest energy companies. His expertise ensures secure, scalable, and compliant feedstock delivery for SAF and HVO markets."
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
            Our Leadership
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Meet the <span className="text-emerald-300">Visionaries</span> Behind Shaphargroup
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our experienced leadership team guides Shaphargroup's mission to transform the global energy landscape through sustainable innovation and expertise in biofuel production.
          </motion.p>
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
                data-testid={`card-leader-${index}`}
              >
                <div className="relative overflow-hidden group">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-contain bg-gray-50"
                    data-testid={`img-leader-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent pointer-events-none"></div>
                  
                  {/* Bio Button - appears on hover */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="absolute top-4 right-4 bg-emerald/90 hover:bg-emerald text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" data-testid={`button-bio-${index}`}>
                        <Info className="w-5 h-5" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-navy">
                          {member.name}
                        </DialogTitle>
                        <p className="text-emerald font-semibold text-lg">{member.title}</p>
                      </DialogHeader>
                      <div className="mt-4">
                        <div className="flex gap-6 mb-6">
                          <img 
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 object-contain bg-gray-50 rounded-lg"
                          />
                          <div className="flex-1">
                            <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-2" data-testid={`text-leader-name-${index}`}>{member.name}</h3>
                  <p className="text-emerald font-semibold mb-3" data-testid={`text-leader-title-${index}`}>{member.title}</p>
                  
                  {/* Click for Bio hint */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-sm text-gray-500 hover:text-emerald transition-colors flex items-center gap-1" data-testid={`link-bio-${index}`}>
                        <Info className="w-4 h-4" />
                        View Biography
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-navy">
                          {member.name}
                        </DialogTitle>
                        <p className="text-emerald font-semibold text-lg">{member.title}</p>
                      </DialogHeader>
                      <div className="mt-4">
                        <div className="flex gap-6 mb-6">
                          <img 
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 object-contain bg-gray-50 rounded-lg"
                          />
                          <div className="flex-1">
                            <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
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
              Leading the Future of Sustainable Aviation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Under our leadership, Shaphargroup has achieved significant milestones in sustainable aviation fuel production and global operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Building className="w-12 h-12 text-emerald mx-auto mb-4" />
              <div className="text-3xl font-bold text-navy mb-2">500K</div>
              <div className="text-gray-600">MT UCO Capacity</div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Globe className="w-12 h-12 text-emerald mx-auto mb-4" />
              <div className="text-3xl font-bold text-navy mb-2">3</div>
              <div className="text-gray-600">Global Offices</div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Award className="w-12 h-12 text-emerald mx-auto mb-4" />
              <div className="text-3xl font-bold text-navy mb-2">Triple</div>
              <div className="text-gray-600">Certified</div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Users className="w-12 h-12 text-emerald mx-auto mb-4" />
              <div className="text-3xl font-bold text-navy mb-2">350K</div>
              <div className="text-gray-600">MT SAF Annually</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Partner With Industry Leaders?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with our leadership team to explore sustainable aviation fuel solutions that drive real impact for your organization and the environment.
            </p>
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-emerald text-white hover:bg-emerald/90 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 px-8 py-4"
              data-testid="button-contact"
            >
              Connect With Our Team
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}