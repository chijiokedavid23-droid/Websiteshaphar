import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Globe, Award, Building, Info } from "lucide-react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { updateSEOTags, SEO_CONFIGS, optimizePagePerformance } from "@/lib/seo";
import aboutPageImagePath from "@assets/About page_1754671131671.png";
import timRoseImagePath from "@assets/Tim_1771950388205.png";
import charlesImagePath from "@assets/Charles JIOAa_1754162241994.jpg";
import davidImagePath from "@assets/David C. Arinze_1754161237875.jpg";
import janeImagePath from "@assets/Jane pics_1754161615576.jpg";
import jiGangImagePath from "@assets/Gee_1754161789665.jpg";
import elvisImagePath from "@assets/Elvis.jpg2_1754161974007.jpg";

export default function Leadership() {
  // SEO Meta Tags Setup
  useEffect(() => {
    updateSEOTags({
      ...SEO_CONFIGS.leadership,
      canonical: window.location.href,
      ogImage: `${window.location.origin}${aboutPageImagePath}`,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Shaphargroup",
        "image": {
          "@type": "ImageObject",
          "url": `${window.location.origin}${aboutPageImagePath}`,
          "description": "Shaphargroup industrial refinery facility with storage tanks representing the company's leadership in sustainable aviation fuel production",
          "width": "1024",
          "height": "1024"
        },
        "employee": [
          {
            "@type": "Person",
            "name": "Charles Jiao",
            "alternateName": "Jiao Li Guang",
            "jobTitle": "Chief Executive Officer",
            "description": "Seasoned industrial chemist with expertise in SAF production and oleochemical refining"
          },
          {
            "@type": "Person",
            "name": "Ji Gang",
            "jobTitle": "Production Director",
            "description": "Expert in UCO refining operations and sustainable fuel production"
          },
          {
            "@type": "Person",
            "name": "David Chijioke Arinze",
            "alternateName": "David C. Arinze",
            "jobTitle": "MD Europe & Americas",
            "description": "Leading expert in sustainable aviation fuel and renewable energy markets"
          },
          {
            "@type": "Person",
            "name": "Jane Zhen",
            "jobTitle": "Chief Financial Officer",
            "description": "Financial expert specializing in sustainable energy investments and operations"
          },
          {
            "@type": "Person",
            "name": "Timothy Rose",
            "jobTitle": "Chief Strategy and Finance Director",
            "description": "Distinguished governance leader and strategic advisor"
          },
          {
            "@type": "Person",
            "name": "Elvis Cao",
            "jobTitle": "Director Supply Chain",
            "description": "Supply chain expert managing global UCO procurement and logistics"
          }
        ]
      }
    });

    // Performance optimizations removed to prevent preload console warnings
    
    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Meet Shaphargroup\'s leadership team of sustainable aviation fuel experts, including CEO Charles Jiao, CFO Jane Zhen, and our global directors driving SAF innovation across Asia, Europe, and Americas.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Meet Shaphargroup\'s leadership team of sustainable aviation fuel experts, including CEO Charles Jiao, CFO Jane Zhen, and our global directors driving SAF innovation across Asia, Europe, and Americas.';
      document.head.appendChild(meta);
    }

    // Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Shaphargroup leadership, SAF executives, sustainable aviation fuel team, Charles Jiao CEO, Jane Zhen CFO, David Arinze, Timothy Rose, Ji Gang, Elvis Cao, UCO refining experts, renewable energy leaders');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'Shaphargroup leadership, SAF executives, sustainable aviation fuel team, Charles Jiao CEO, Jane Zhen CFO, David Arinze, Timothy Rose, Ji Gang, Elvis Cao, UCO refining experts, renewable energy leaders';
      document.head.appendChild(meta);
    }

    // Open Graph Tags
    const updateOrCreateOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    };

    updateOrCreateOGTag('og:title', 'Leadership Team - Sustainable Aviation Fuel Experts | Shaphargroup');
    updateOrCreateOGTag('og:description', 'Meet Shaphargroup\'s leadership team of sustainable aviation fuel experts driving SAF innovation globally.');
    updateOrCreateOGTag('og:type', 'website');
    updateOrCreateOGTag('og:url', window.location.href);
    updateOrCreateOGTag('og:site_name', 'Shaphargroup');

    // Twitter Card Tags
    const updateOrCreateTwitterTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    };

    updateOrCreateTwitterTag('twitter:card', 'summary_large_image');
    updateOrCreateTwitterTag('twitter:title', 'Leadership Team - Shaphargroup');
    updateOrCreateTwitterTag('twitter:description', 'Meet our expert leadership team driving sustainable aviation fuel innovation.');

    // Structured Data for Organization and People
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Shaphargroup",
      "url": "https://www.shaphargroup.com",
      "description": "Leading sustainable aviation fuel producer specializing in UCO refining and HEFA SAF production",
      "employee": [
        {
          "@type": "Person",
          "name": "Jiao Li Guang",
          "alternateName": "Charles Jiao",
          "jobTitle": "Chief Executive Officer",
          "worksFor": {
            "@type": "Organization",
            "name": "Shaphargroup Industry (Hainan) Co., Ltd."
          },
          "description": "Seasoned industrial chemist and refinery executive with over a decade of experience in sustainable aviation fuel systems."
        },
        {
          "@type": "Person",
          "name": "Ji Gang",
          "alternateName": "Gee Gang",
          "jobTitle": "Production Director",
          "worksFor": {
            "@type": "Organization",
            "name": "Shaphargroup"
          },
          "description": "Veteran oleochemical engineer with 15+ years expertise in palm oil and UCO refining."
        },
        {
          "@type": "Person",
          "name": "David Chijioke Arinze",
          "jobTitle": "Managing Director, Europe & Americas",
          "worksFor": {
            "@type": "Organization",
            "name": "Shaphargroup"
          },
          "description": "Visionary leader in renewable energy and sustainable trade with M.Sc. in Project Management."
        },
        {
          "@type": "Person",
          "name": "Zhen Tiyu",
          "alternateName": "Jane Zhen",
          "jobTitle": "Chief Financial Officer",
          "worksFor": {
            "@type": "Organization",
            "name": "Shaphargroup Industry (Hainan)"
          },
          "description": "Financial strategy leader with expertise in international trade finance and capital risk control."
        },
        {
          "@type": "Person",
          "name": "Timothy Rose",
          "jobTitle": "Chief Strategy and Finance Director",
          "worksFor": {
            "@type": "Organization",
            "name": "Shaphargroup"
          },
          "description": "Chartered Director with 30+ years strategic governance experience, former World Bank leader."
        },
        {
          "@type": "Person",
          "name": "Cao Yuzhao",
          "alternateName": "Elvis Cao",
          "jobTitle": "Director Supply Chain",
          "worksFor": {
            "@type": "Organization",
            "name": "Shaphargroup"
          },
          "description": "Supply chain expert overseeing UCO sourcing and logistics across China, former Sinopec executive."
        }
      ]
    };

    // Remove existing structured data script
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      // Reset title on unmount
      document.title = 'Shaphargroup - Sustainable Aviation Fuel | UCO Refining & HEFA SAF Production';
    };
  }, []);

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
      name: "Ji Gang (Gee Gang)",
      title: "Production Director",
      image: jiGangImagePath,
      bio: "Ji Gang is a veteran oleochemical engineer with over 15 years of expertise in palm oil and UCO refining. As Director of R&D at Shaphargroup, he leads the design and innovation of next-generation UCO production lines that meet global SAF and biodiesel standards. Ji earned a Bachelor's in Chemistry from Jiangsu University of Technology and spent 16 years at PT. Duakuda Indonesia driving efficiency in oleochemical operations. His leadership ensures Shaphargroup's technology stays ahead in sustainable fuel refinement."
    },
    {
      name: "David Chijioke Arinze",
      title: "MD Europe & Americas",
      image: davidImagePath,
      bio: "A visionary leader in renewable energy and sustainable trade, David serves as Managing Director, Europe and Americas at Shaphargroup, driving global UCO and SAF supply chains across the U.S., EU, and China. With a strong foundation in business and project leadership, he holds an M.Sc. in Project Management from the University of Salford (UK), a diploma in SME & Digital Finance from the Frankfurt School (Germany), and a B.Sc. in Business Administration. He brings deep expertise in ESG, digital finance, and cross-border execution. David's strategic direction continues to expand Shaphargroup's global footprint in the clean energy sector."
    },
    {
      name: "Zhen Tiyu (Jane Zhen)",
      title: "CFO",
      image: janeImagePath,
      bio: "As Chief Financial Officer of Shaphargroup Industry (Hainan), Jane Zhen leads financial strategy across global UCO and SAF trade operations. With deep expertise in international trade finance, export tax optimization, and capital risk control, she ensures the group's financial resilience and compliance. Jane holds a degree in Accounting from Wuxi Vocational and Technical University and has led finance teams at Michelin and Bertelsmann. Her leadership is instrumental in aligning Shaphargroup's financial structure with its global growth and sustainability goals."
    },
    {
      name: "Timothy Rose",
      title: "Chief Strategy and Finance Director",
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
      <header className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20" role="banner" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 to-forest/80 z-15"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${aboutPageImagePath})`
          }}
          role="img"
          aria-label="Shaphargroup sustainable aviation fuel refinery facility"
        />
        
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="text-sm font-bold text-emerald-200 tracking-wide uppercase mb-4 text-overlay"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Leadership
          </motion.div>
          <motion.h1 
            id="hero-heading"
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight text-overlay-strong"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Meet the <span className="text-emerald-200 font-extrabold">Visionaries</span> Behind Shaphargroup
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-medium text-overlay"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our experienced leadership team guides Shaphargroup's mission to transform the global energy landscape through sustainable aviation fuel innovation and expertise in UCO refining.
          </motion.p>
        </div>
      </header>

      {/* Leadership Team */}
      <main role="main">
        <section className="py-20 bg-white" aria-labelledby="team-section-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 id="team-section-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6">
                Sustainable Aviation Fuel Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet our executive team of SAF experts, UCO refining specialists, and renewable energy leaders driving global sustainability in aviation fuel.
              </p>
            </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                    alt={`${member.name}, ${member.title} at Shaphargroup - Sustainable Aviation Fuel Expert`}
                    className="w-full h-64 object-contain bg-gray-50"
                    data-testid={`img-leader-${index}`}
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent pointer-events-none"></div>
                  
                  {/* Mobile-friendly bio button - always visible on mobile, hover on desktop */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="absolute top-4 right-4 bg-emerald/95 hover:bg-emerald text-white p-3 rounded-full shadow-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform hover:scale-110 touch-manipulation" data-testid={`button-bio-${index}`}>
                        <Info className="w-5 h-5" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
                      <DialogHeader>
                        <DialogTitle className="text-xl md:text-2xl font-bold text-navy pr-8">
                          {member.name}
                        </DialogTitle>
                        <p className="text-emerald font-semibold text-base md:text-lg">{member.title}</p>
                      </DialogHeader>
                      <div className="mt-4">
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
                          <img 
                            src={member.image}
                            alt={member.name}
                            className="w-20 h-20 sm:w-24 sm:h-24 object-contain bg-gray-50 rounded-lg mx-auto sm:mx-0 flex-shrink-0"
                          />
                          <div className="flex-1">
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">{member.bio}</p>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-2" data-testid={`text-leader-name-${index}`}>{member.name}</h3>
                  <p className="text-emerald font-semibold mb-3" data-testid={`text-leader-title-${index}`}>{member.title}</p>
                  
                  {/* Mobile-friendly bio link */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-sm text-gray-500 hover:text-emerald transition-colors flex items-center gap-1 py-2 px-3 rounded-md hover:bg-gray-50 touch-manipulation" data-testid={`link-bio-${index}`}>
                        <Info className="w-4 h-4" />
                        View Biography
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
                      <DialogHeader>
                        <DialogTitle className="text-xl md:text-2xl font-bold text-navy pr-8">
                          {member.name}
                        </DialogTitle>
                        <p className="text-emerald font-semibold text-base md:text-lg">{member.title}</p>
                      </DialogHeader>
                      <div className="mt-4">
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
                          <img 
                            src={member.image}
                            alt={member.name}
                            className="w-20 h-20 sm:w-24 sm:h-24 object-contain bg-gray-50 rounded-lg mx-auto sm:mx-0 flex-shrink-0"
                          />
                          <div className="flex-1">
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">{member.bio}</p>
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
      </main>

      <Footer />
    </div>
  );
}