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
import charlesImagePath from "@assets/Charles_1771951673745.jpeg";
import davidImagePath from "@assets/David C. Arinze_1754161237875.jpg";
import janeImagePath from "@assets/Jane_Picture_1771951543509.jpeg";
import jiGangImagePath from "@assets/Ji_Gang_(Gee_Gang)_1771951371246.jpeg";
import elvisImagePath from "@assets/Elvis_1771951421457.jpeg";
import brianImagePath from "@assets/Brian_1771951929122.jpeg";
import jeremiahImagePath from "@assets/Jeremiah_Shallangwa_1771952202886.jpeg";
import williamImagePath from "@assets/William_PM_1781523366226.jpeg";
import robImagePath from "@assets/Rob_AM_1781523987622.png";
import grazvydasImagePath from "@assets/Grazvydas_Profile_Picture_1781524602742.png";

export default function Leadership() {
  // SEO Meta Tags Setup
  useEffect(() => {
    updateSEOTags({
      ...SEO_CONFIGS.leadership,
      canonical: window.location.href,
      ogImage: `${window.location.origin}${aboutPageImagePath}`,
      structuredData: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "CollectionPage",
            "@id": "https://shaphargroup.com/leadership#page",
            "name": "Shaphargroup Leadership Team — Sustainable Aviation Fuel Executives",
            "description": "The Shaphargroup leadership team comprises SAF production experts, UCO refining specialists, European operations directors, and strategic governance leaders driving the company's mission across China, the Netherlands, and the Americas.",
            "url": "https://shaphargroup.com/leadership",
            "isPartOf": { "@id": "https://shaphargroup.com/#website" },
            "about": { "@id": "https://shaphargroup.com/#organization" }
          },
          {
            "@type": "Organization",
            "@id": "https://shaphargroup.com/#organization",
            "name": "Shaphargroup",
            "url": "https://shaphargroup.com",
            "description": "Shaphargroup is a sustainable aviation fuel company producing HEFA SAF in Shandong, China, distributing SAF and UCO in Europe from Rotterdam, and developing the Shaphar Refining HEFA refinery in the Netherlands.",
            "employee": [
              {
                "@type": "Person",
                "@id": "https://shaphargroup.com/leadership#charles-jiao",
                "name": "Charles Jiao",
                "alternateName": ["Jiao Li Guang", "Charles Jiao SAF CEO"],
                "jobTitle": "Chief Executive Officer",
                "worksFor": { "@id": "https://shaphargroup.com/#organization" },
                "description": "Seasoned industrial chemist and refinery executive with over a decade of experience in sustainable aviation fuel production and oleochemical refining. Leads Shaphargroup's SAF and UCO operations in China.",
                "knowsAbout": ["HEFA SAF Production", "UCO Refining", "Oleochemical Processing", "SAF Feedstock Science", "Sustainable Fuel Manufacturing", "ISCC Certification"],
                "hasOccupation": {
                  "@type": "Occupation",
                  "name": "Chief Executive Officer",
                  "occupationLocation": { "@type": "Country", "name": "China" }
                }
              },
              {
                "@type": "Person",
                "@id": "https://shaphargroup.com/leadership#ji-gang",
                "name": "Ji Gang",
                "alternateName": "Gee Gang",
                "jobTitle": "Production Director",
                "worksFor": { "@id": "https://shaphargroup.com/#organization" },
                "description": "Veteran oleochemical engineer with over 15 years of expertise in palm oil and UCO refining. Leads R&D and production line innovation at Shaphargroup's Shandong facility.",
                "knowsAbout": ["UCO Refining", "Palm Oil Processing", "Oleochemical Engineering", "SAF Production Lines", "Renewable Fuel Manufacturing"],
                "alumniOf": { "@type": "CollegeOrUniversity", "name": "Jiangsu University of Technology" },
                "hasOccupation": {
                  "@type": "Occupation",
                  "name": "Production Director",
                  "occupationLocation": { "@type": "Country", "name": "China" }
                }
              },
              {
                "@type": "Person",
                "@id": "https://shaphargroup.com/leadership#david-arinze",
                "name": "David Chijioke Arinze",
                "alternateName": ["David C. Arinze", "David Arinze SAF"],
                "jobTitle": "Managing Director, Europe & Americas",
                "worksFor": { "@id": "https://shaphargroup.com/#organization" },
                "description": "Visionary leader in renewable energy, SAF distribution, and sustainable trade. Drives Shaphargroup's UCO and SAF supply chains across Europe and the Americas. Leads European operations including Rotterdam distribution and Shaphar Refining development.",
                "knowsAbout": ["SAF Distribution Europe", "UCO Supply Chain", "Sustainable Aviation Fuel Trade", "ESG Strategy", "Renewable Energy Markets", "SAF Offtake Agreements", "European SAF Mandates"],
                "alumniOf": [
                  { "@type": "CollegeOrUniversity", "name": "University of Salford", "description": "M.Sc. Project Management" },
                  { "@type": "CollegeOrUniversity", "name": "Frankfurt School of Finance & Management", "description": "Diploma in SME & Digital Finance" }
                ],
                "hasOccupation": {
                  "@type": "Occupation",
                  "name": "Managing Director Europe & Americas",
                  "occupationLocation": [
                    { "@type": "City", "name": "Rotterdam", "containedInPlace": { "@type": "Country", "name": "Netherlands" } }
                  ]
                }
              },
              {
                "@type": "Person",
                "@id": "https://shaphargroup.com/leadership#jane-zhen",
                "name": "Zhen Tiyu",
                "alternateName": "Jane Zhen",
                "jobTitle": "Chief Financial Officer, Asia",
                "worksFor": { "@id": "https://shaphargroup.com/#organization" },
                "description": "Financial strategy leader with expertise in international trade finance, export tax optimization, and capital risk control for global UCO and SAF operations. Former finance leader at Michelin and Bertelsmann.",
                "knowsAbout": ["International Trade Finance", "SAF Financial Strategy", "Export Tax Optimization", "Capital Risk Management", "Renewable Energy Finance"],
                "alumniOf": { "@type": "CollegeOrUniversity", "name": "Wuxi Vocational and Technical University", "description": "Accounting" },
                "hasOccupation": {
                  "@type": "Occupation",
                  "name": "Chief Financial Officer",
                  "occupationLocation": { "@type": "Country", "name": "China" }
                }
              },
              {
                "@type": "Person",
                "@id": "https://shaphargroup.com/leadership#timothy-rose",
                "name": "Timothy Rose",
                "jobTitle": "Chief Strategy and Finance Director",
                "worksFor": { "@id": "https://shaphargroup.com/#organization" },
                "description": "Accomplished boardroom leader and Chartered Director with over 30 years of strategic governance and advisory experience across finance, renewable energy, and global development. Former World Bank leader who led the $500M Financial Sector Reform Programme and has raised over £200 million for prominent clients.",
                "knowsAbout": ["Strategic Governance", "Renewable Energy Finance", "Board Leadership", "ESG Investment", "International Development Finance", "SAF Strategy"],
                "hasCredential": [
                  { "@type": "EducationalOccupationalCredential", "name": "Chartered Director", "credentialCategory": "professional_certification" }
                ],
                "hasOccupation": {
                  "@type": "Occupation",
                  "name": "Chief Strategy and Finance Director"
                }
              },
              {
                "@type": "Person",
                "@id": "https://shaphargroup.com/leadership#elvis-cao",
                "name": "Cao Yuzhao",
                "alternateName": "Elvis Cao",
                "jobTitle": "Director of Supply Chain",
                "worksFor": { "@id": "https://shaphargroup.com/#organization" },
                "description": "Supply chain expert overseeing end-to-end sourcing, logistics, and traceability of UCO across China. Former senior logistics executive at Sinopec. Ensures secure and compliant feedstock delivery for SAF and HVO markets.",
                "knowsAbout": ["UCO Supply Chain China", "International Logistics", "SAF Feedstock Procurement", "Supply Chain Traceability", "ISCC Supply Chain Compliance"],
                "alumniOf": { "@type": "CollegeOrUniversity", "name": "North China University of Science and Technology", "description": "Chemistry" },
                "hasOccupation": {
                  "@type": "Occupation",
                  "name": "Director of Supply Chain",
                  "occupationLocation": { "@type": "Country", "name": "China" }
                }
              },
              {
                "@type": "Person",
                "@id": "https://shaphargroup.com/leadership#brian-jelier",
                "name": "Brian Jelier",
                "jobTitle": "Director of Operations Europe",
                "worksFor": { "@id": "https://shaphargroup.com/#organization" },
                "description": "Operations leader driving Shaphargroup's European operational strategy, including SAF and UCO distribution infrastructure in Rotterdam and development of the Shaphar Refining HEFA refinery in the Netherlands.",
                "knowsAbout": ["SAF Operations Europe", "HEFA Refinery Operations", "European Energy Regulations", "Renewable Energy Project Delivery", "SAF Distribution Infrastructure"],
                "hasOccupation": {
                  "@type": "Occupation",
                  "name": "Director of Operations Europe",
                  "occupationLocation": { "@type": "City", "name": "Rotterdam", "containedInPlace": { "@type": "Country", "name": "Netherlands" } }
                }
              },
              {
                "@type": "Person",
                "@id": "https://shaphargroup.com/leadership#jeremiah-shallangwa",
                "name": "Jeremiah Shallangwa",
                "jobTitle": "Director of Energy Infrastructure",
                "worksFor": { "@id": "https://shaphargroup.com/#organization" },
                "description": "Energy infrastructure specialist integrating sustainable energy solutions across Shaphargroup's European operations. Aligns HEFA SAF production capabilities with European energy infrastructure and regulatory requirements.",
                "knowsAbout": ["Energy Infrastructure", "HEFA Process Integration", "SAF Energy Systems", "European Energy Regulations", "Renewable Fuel Technologies", "Energy Transition Strategy"],
                "hasOccupation": {
                  "@type": "Occupation",
                  "name": "Director of Energy Infrastructure",
                  "occupationLocation": { "@type": "Country", "name": "Netherlands" }
                }
              }
            ]
          },
          {
            "@type": "FAQPage",
            "@id": "https://shaphargroup.com/leadership#faq",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Who is the CEO of Shaphargroup?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The CEO of Shaphargroup is Charles Jiao (also known as Jiao Li Guang), a seasoned industrial chemist and refinery executive with over a decade of experience in sustainable aviation fuel production and UCO refining in China."
                }
              },
              {
                "@type": "Question",
                "name": "Who leads Shaphargroup's European operations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "David Chijioke Arinze (David C. Arinze) serves as Managing Director for Europe and the Americas. He leads Shaphargroup's SAF and UCO distribution in Europe from Rotterdam, Netherlands, including overseeing the Shaphar Refining HEFA refinery development project."
                }
              },
              {
                "@type": "Question",
                "name": "Who manages Shaphargroup's SAF and UCO supply chain in China?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Elvis Cao (Cao Yuzhao) is Director of Supply Chain at Shaphargroup, overseeing UCO sourcing, logistics, and traceability across China. He is a former senior executive at Sinopec with over 10 years in renewable fuel supply chains."
                }
              },
              {
                "@type": "Question",
                "name": "Who is responsible for Shaphargroup's European refinery operations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Brian Jelier, as Director of Operations Europe, leads the operational strategy for Shaphargroup's European activities including SAF distribution from Rotterdam and development of the Shaphar Refining 200,000 MT/year HEFA refinery in the Netherlands."
                }
              },
              {
                "@type": "Question",
                "name": "What is Shaphargroup's leadership experience in sustainable aviation fuel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Shaphargroup's leadership team combines deep technical expertise across the SAF value chain: CEO Charles Jiao has 10+ years in SAF and oleochemical refining; Production Director Ji Gang has 15+ years in UCO refining; MD David Arinze leads SAF trade and distribution across Europe and Americas; CFO Jane Zhen brings expertise from Michelin and Bertelsmann; and Chief Strategy Director Timothy Rose is a Chartered Director with 30+ years in strategic governance including the World Bank's $500M Financial Sector Reform Programme."
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

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const leadership = [
    {
      name: "William Abraham",
      title: "Chief Structuring & Legal Officer",
      image: williamImagePath,
      bio: "Chief Structuring and Legal Officer\n\nWilliam Abraham serves as Chief Structuring and Legal Officer at Shaphargroup, bringing over three decades of elite transactional and governance experience spanning international law firm partnership, public-sector board appointments, and serial entrepreneurship in project finance and energy infrastructure.\n\nWilliam's career includes partner-level positions at Baker & McKenzie Singapore and Squire Patton Boggs, where he led the International Projects and Finance Group and personally delivered over €15 billion in cross-border infrastructure and energy transactions. His renewable fuels expertise is direct and extensive: he structured GAE's high-FFA waste lipid refining platform in Ajman, led Conduit Capital's tyre-to-oil recycling rollout, and handled major wind and offshore energy mandates including Vattenfall's €5 billion/5,000 MW programme and the London Array offshore consortium. His regulatory-credit expertise spans CDM, EU ETS, and Kyoto Protocol implementation, directly supporting Shaphargroup's RED compliance framework and carbon credit structures.\n\nHe holds a Juris Doctor (JD) degree, Master of Laws (LL.M) from the University of Cambridge, and Fellowship of the Chartered Institute of Credit Services (FCCS). Since 2008, he has operated as founder and strategic lead across multiple project-development platforms including CAP Incubation LLC. His public-sector governance credentials include a Ministerial appointment as Non-Executive Director and Chair of the Audit Committee for Northern Ireland Ambulance NHS Trust — a £125 million organisation with approximately 1,300 employees."
    },
    {
      name: "Rob Groeliker",
      title: "Chief Operating Officer",
      image: robImagePath,
      bio: "Chief Operating Officer\n\nRob Groeliker serves as Chief Operating Officer at Shaphargroup, bringing over 30 years of leadership experience spanning industrial-scale biorefining, renewable energy operations, and sustainable supply chain development across Europe.\n\nRob's career is defined by full-cycle industrial project execution at scale. He served as the founding employee and Managing Director of Abengoa Bioenergy Rotterdam (2006–2011), where he delivered a €530 million greenfield bioethanol plant from concept to 110% operational capacity — Europe's largest facility at the time. Since 2011, he has led Viterra Biofuels Europe (now part of Bunge Ltd), managing biodiesel operations across the Netherlands and Germany with revenues exceeding €500 million and teams of 110–260 employees. His operational leadership transformed Viterra from dramatic losses in 2011 to lowest-cost-producer status through systematic efficiency improvements and feedstock optimization.\n\nRob's public affairs expertise is extensive: he currently serves as President of the Nederlandse Vereniging voor Duurzame Brandstoffen (NVDB) and chairs the MVO Biodiesel working group, while previously holding a Board seat at the European Biodiesel Board. Fluent in Dutch, English, and German, his managerial philosophy centres on servant leadership."
    },
    {
      name: "Jiao Li Guang (Charles)",
      title: "CEO",
      image: charlesImagePath,
      bio: "A seasoned industrial chemist and refinery executive, Charles Jiao has over a decade of frontline experience in waste oil processing, advanced oleochemicals, and sustainable aviation fuel (SAF) systems. As CEO of Shaphargroup Industry (Hainan) Co., Ltd., he oversees the production of ISCC-certified UCO and SAF. Charles has led multiple refinery expansions, optimized distillation processes for high-purity outputs, and spearheaded compliance with global SAF standards. His deep command of feedstock science and market dynamics positions him as a key figure in Asia's clean energy transformation."
    },
    {
      name: "Grazvydas Bajoras",
      title: "Commercial Lead",
      image: grazvydasImagePath,
      bio: "Commercial Lead\n\nGrazvydas Bajoras serves as Commercial Lead at Shaphargroup, bringing over 20 years of experience spanning global energy markets, aviation fuel supply, and sustainable aviation fuel (SAF) commercialisation across Europe and the United States.\n\nGrazvydas's career trajectory reflects deliberate positioning at the intersection of conventional jet fuel supply and the energy transition. He began with senior roles at Williams Energy refining and BP, gaining deep exposure to refining economics and wholesale fuel markets, then transitioned into international oil supply and trading leadership, building and leading organisations across Europe and the United States that generated multi-billion-dollar annual revenues. Early in his career, he served as part of the founding management team of FL Technics, contributing to the development of aviation maintenance and leasing services for European markets — experience that provides him with rare insight into airline operational requirements and procurement behaviour.\n\nIn his current work, he operates as a conventional jet fuel and SAF originator and commercial strategist, actively managing airline fuel tenders (Jet A-1), sourcing SAF across EU and US markets, and engaging with SAF developers on supply contracts and investment structures. His live market engagement provides real-time intelligence on SAF pricing dynamics, feedstock benchmarks, and the commercial viability of production economics. His ability to bridge SAF production, airline demand, and project financing positions him to secure the offtake agreements that will determine Shaphargroup's revenue certainty and debt serviceability for the Rotterdam refinery project."
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
      bio: "Managing Director, Europe & Americas\n\nDavid Chijioke Arinze is Managing Director for Shaphargroup's European and Americas operations, leading the development of the company's €400 million HEFA-SAF refinery at the Port of Rotterdam — one of Northwest Europe's first large-scale sustainable aviation fuel facilities.\n\nWith over 15 years of experience spanning renewable energy infrastructure, international commodity trading, and project finance, David has built and operationalized complex energy assets from concept through commercial operation. He Co-founded Shaphargroup in 2019 and subsequently delivered a 200,000 MT/year ISCC EU and CORSIA-certified waste feedstock pretreatment facility in Shandong, China — managing the project end-to-end from contractor selection through dual certification and commercial ramp-up."
    },
    {
      name: "Zhen Tiyu (Jane Zhen)",
      title: "CFO Asia",
      image: janeImagePath,
      bio: "As Chief Financial Officer of Shaphargroup Industry (Hainan), Jane Zhen leads financial strategy across global UCO and SAF trade operations. With deep expertise in international trade finance, export tax optimization, and capital risk control, she ensures the group's financial resilience and compliance. Jane holds a degree in Accounting from Wuxi Vocational and Technical University and has led finance teams at Michelin and Bertelsmann. Her leadership is instrumental in aligning Shaphargroup's financial structure with its global growth and sustainability goals."
    },
    {
      name: "Timothy Rose",
      title: "Chief Strategy and Finance Director",
      image: timRoseImagePath,
      bio: "An accomplished boardroom leader and Chartered Director, Timothy brings over 30 years of strategic governance and high-impact advisory experience across finance, renewable energy, and global development sectors. He has chaired and advised numerous public and private boards, including multi-million-pound turnarounds, international fund management, and ESG-driven growth. Timothy previously led the World Bank's $500M Financial Sector Reform Programme and has raised over £200 million for prominent clients. His global insight and disciplined board leadership make him a cornerstone of Shaphargroup's growth and governance strategy."
    },
    {
      name: "Cao Yuzhao (Elvis)",
      title: "Director Supply Chain",
      image: elvisImagePath,
      bio: "Elvis Cao is Director of Supply Chain at Shaphargroup, where he oversees the end-to-end sourcing, logistics, and traceability of UCO across China. With a degree in Chemistry from North China University of Science and Technology, he brings over 10 years of experience managing international supply chains in the renewable fuels sector. Prior to Shaphargroup, Elvis held a senior logistics role at Sinopec, one of China's largest energy companies. His expertise ensures secure, scalable, and compliant feedstock delivery for SAF and HVO markets."
    },
    {
      name: "Brian Jelier",
      title: "Director of Operations Europe",
      image: brianImagePath,
      bio: "Brian Jelier is Director of Operations Europe at Shaphargroup, where he leads the company's operational strategy and execution across European markets. With extensive experience in industrial operations, process optimization, and renewable energy project delivery, Brian oversees the development and scaling of Shaphargroup's European refining and logistics infrastructure. His deep understanding of European regulatory frameworks, sustainability mandates, and SAF market dynamics ensures operational excellence and compliance across the region. Brian's leadership is central to advancing Shaphargroup's RefuelOne project and expanding its European footprint in the sustainable aviation fuel sector."
    },
    {
      name: "Jeremiah Shallangwa",
      title: "Director of Energy Infrastructure",
      image: jeremiahImagePath,
      bio: "Jeremiah Shallangwa serves as Lead Energy Integration Europe at Shaphargroup, where he spearheads the integration of sustainable energy solutions across the company's European operations. With a strong background in energy systems engineering, renewable fuel technologies, and cross-border project coordination, Jeremiah plays a pivotal role in aligning Shaphargroup's SAF production capabilities with European energy infrastructure and regulatory requirements. His expertise in energy transition strategies, HEFA process integration, and stakeholder engagement ensures seamless collaboration between technical teams, regulatory bodies, and commercial partners. Jeremiah's work is integral to Shaphargroup's mission of delivering scalable, sustainable aviation fuel solutions to the European market."
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