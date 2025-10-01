import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useEffect } from "react";
import { updateSEOTags, SEO_CONFIGS, optimizePagePerformance } from "@/lib/seo";
import { motion } from "framer-motion";
import { MapPin, Building, Phone, Mail, Clock, Globe, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import contactPageImagePath from "@assets/contact page_1754672222924.png";

export default function Contact() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // SEO Meta Tags Setup
  useEffect(() => {
    updateSEOTags({
      ...SEO_CONFIGS.contact,
      canonical: window.location.href,
      ogImage: `${window.location.origin}${contactPageImagePath}`,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Shaphargroup",
        "image": {
          "@type": "ImageObject",
          "url": `${window.location.origin}${contactPageImagePath}`,
          "description": "Peaceful green landscape with lush fields and trees under blue sky representing environmental sustainability and welcoming business atmosphere",
          "width": "1024",
          "height": "1024"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "Business Inquiries",
            "availableLanguage": ["English", "Chinese"],
            "contactOption": "TollFree"
          }
        ],
        "address": [
          {
            "@type": "PostalAddress",
            "addressLocality": "Rotterdam",
            "addressCountry": "Netherlands", 
            "streetAddress": "Coolsingel 104, 3011 AG"
          },
          {
            "@type": "PostalAddress",
            "addressLocality": "Yangxin County, Shandong",
            "addressCountry": "China",
            "streetAddress": "South of Industrial 6th Road, Economic Development Zone"
          }
        ],
        "mainEntity": [
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Sustainable Aviation Fuel (SAF)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sustainable Aviation Fuel (SAF) is a renewable alternative to traditional jet fuel, produced from waste and sustainable feedstocks such as Used Cooking Oil (UCO). SAF reduces lifecycle greenhouse gas emissions by up to 80% compared to fossil-based Jet A. It is drop-in compatible, meaning it can be used in existing aircraft engines and fueling infrastructure without modification. SAF plays a critical role in helping airlines and corporates achieve net-zero carbon targets by 2030 and 2050."
                }
              },
              {
                "@type": "Question",
                "name": "How is SAF made from Used Cooking Oil (UCO)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Shaphargroup produces SAF through the HEFA (Hydroprocessed Esters and Fatty Acids) pathway. The process begins with collecting UCO and waste fats. These are pretreated to remove impurities, then hydroprocessed with hydrogen under high pressure. The output is refined into hydrocarbons that match the properties of jet fuel. A final step, isomerization, ensures energy density and freezing point standards are met."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between SAF and Jet A fuel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The main difference lies in carbon intensity and sustainability. Jet A is made from crude oil, releasing new CO₂ when burned. SAF recycles carbon already in the environment from waste oils, fats, or other biomass. This results in up to 80% lower emissions over its lifecycle. Both fuels meet strict ASTM standards, ensuring identical performance in aircraft."
                }
              },
              {
                "@type": "Question",
                "name": "Why is Used Cooking Oil (UCO) an important SAF feedstock?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "UCO is one of the most sustainable and widely available waste feedstocks for SAF production. It has no competition with food markets, avoids land-use change, and contributes to circular economy goals. By recycling waste oil into jet fuel, Shaphargroup reduces environmental pollution and creates a renewable, high-value product. UCO-based SAF is certified under international sustainability standards such as ISCC and RSB."
                }
              },
              {
                "@type": "Question",
                "name": "What are Scope 1, Scope 2, and Scope 3 emissions in aviation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Scope 1: Direct emissions from aircraft fuel combustion. Scope 2: Indirect emissions from purchased electricity and operations. Scope 3: Indirect emissions in the supply chain, including corporate travel. SAF reduces Scope 1 emissions when physically used in aircraft. Through Book & Claim, SAF can also reduce Scope 3 emissions for corporates. Shaphargroup offers both physical SAF supply and Scope 3 certificates."
                }
              },
              {
                "@type": "Question",
                "name": "What is the Book & Claim model for SAF?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Book & Claim separates the physical SAF from its environmental attributes. Shaphargroup supplies SAF into the aviation system, and the associated carbon reduction is documented through certificates. Corporates or airlines that cannot access physical SAF can purchase these certificates to reduce their Scope 3 emissions. This model ensures wider participation in decarbonization."
                }
              },
              {
                "@type": "Question",
                "name": "Is SAF more expensive than Jet A fuel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, today SAF is more expensive than fossil Jet A due to limited production scale and higher feedstock processing costs. However, government incentives, scaling refineries, and corporate commitments are rapidly narrowing this gap. Over time, SAF prices are expected to align more closely with Jet A."
                }
              },
              {
                "@type": "Question",
                "name": "What certifications does Shaphargroup hold?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Shaphargroup is certified under key international frameworks: ISCC EU and ISCC CORSIA for UCO and SAF supply, RSB (in progress) for advanced sustainability compliance, IATA SAFc for Book & Claim systems, and EU Union Database (UDB) registration for imports. These certifications guarantee traceability, carbon accounting, and global recognition."
                }
              },
              {
                "@type": "Question",
                "name": "Where does Shaphargroup operate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Shaphargroup oversees Sustainable Aviation Fuel (SAF) refining directly, while its subsidiary, Shandong Prophet Energy, operates the group's UCO and waste oil refining activities in China. Strategic offices in the Netherlands and the United States manage global supply chains, compliance, and customer relations. Together, this structure enables Shaphargroup to deliver physical SAF, UCO, and Scope 3 solutions across Asia, Europe, and the Americas."
                }
              },
              {
                "@type": "Question",
                "name": "Why partner with Shaphargroup for SAF supply?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Shaphargroup combines technical expertise, certified operations, and a global footprint to deliver reliable SAF and UCO solutions. With flexible models (physical supply, Book & Claim, or joint blending partnerships), Shaphargroup ensures that airlines, corporates, and energy companies can achieve their sustainability goals efficiently."
                }
              }
            ]
          }
        ]
      }
    });

    // Performance optimizations removed to prevent preload console warnings

    return () => {
      document.title = 'Shaphargroup - Sustainable Aviation Fuel | UCO Refining & HEFA SAF Production';
    };
  }, []);

  const offices = [
    {
      country: "USA",
      title: "US Operations",
      address: "5718 Westheimer Rd, Suite 1000, Houston, Texas 77057",
      icon: MapPin,
      color: "bg-navy"
    },
    {
      country: "Netherlands",
      title: "European Operations Hub",
      address: "Coolsingel 104, 3011 AG, Rotterdam, Netherlands",
      icon: Building,
      color: "bg-emerald"
    },
    {
      country: "China",
      title: "Primary Refinery & Production",
      address: "South of Industrial 6th Road, Economic Development Zone, Yangxin County, Binzhou City, Shandong Province, 251800",
      icon: Globe,
      color: "bg-forest"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      value: "info@shaphargroup.com",
      link: "mailto:info@shaphargroup.com"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      value: "+31 649-902-224 / +86-186-5635-3968",
      link: "tel:+31649902224"
    },
    {
      icon: Clock,
      title: "Work Hours",
      value: "Monday to Friday: 7am – 7pm, Weekend: 10am – 5pm",
      link: null
    }
  ];

  const faqData = [
    {
      question: "What is Sustainable Aviation Fuel (SAF)?",
      answer: "Sustainable Aviation Fuel (SAF) is a renewable alternative to traditional jet fuel, produced from waste and sustainable feedstocks such as Used Cooking Oil (UCO). SAF reduces lifecycle greenhouse gas emissions by up to 80% compared to fossil-based Jet A. It is \"drop-in\" compatible, meaning it can be used in existing aircraft engines and fueling infrastructure without modification. SAF plays a critical role in helping airlines and corporates achieve net-zero carbon targets by 2030 and 2050."
    },
    {
      question: "How is SAF made from Used Cooking Oil (UCO)?",
      answer: "Shaphargroup produces SAF through the HEFA (Hydroprocessed Esters and Fatty Acids) pathway. The process begins with collecting UCO and waste fats. These are pretreated to remove impurities, then hydroprocessed with hydrogen under high pressure. The output is refined into hydrocarbons that match the properties of jet fuel. A final step, isomerization, ensures energy density and freezing point standards are met. The result is a clean, high-quality fuel that can be blended with Jet A or used neat."
    },
    {
      question: "What is the difference between SAF and Jet A fuel?",
      answer: "The main difference lies in carbon intensity and sustainability. Jet A is made from crude oil, releasing new CO₂ when burned. SAF, by contrast, recycles carbon already in the environment (from waste oils, fats, or other biomass). This results in up to 80% lower emissions over its lifecycle. Both fuels meet strict ASTM standards, ensuring identical performance in aircraft. SAF is, therefore, the most effective near-term solution for aviation's decarbonization."
    },
    {
      question: "Why is Used Cooking Oil (UCO) an important SAF feedstock?",
      answer: "UCO is one of the most sustainable and widely available waste feedstocks for SAF production. It has no competition with food markets, avoids land-use change, and contributes to circular economy goals. By recycling waste oil into jet fuel, Shaphargroup reduces environmental pollution and creates a renewable, high-value product. UCO-based SAF is also certified under international sustainability standards such as ISCC and RSB, ensuring traceability and compliance."
    },
    {
      question: "What are Scope 1, Scope 2, and Scope 3 emissions in aviation?",
      answer: "Scope 1: Direct emissions from aircraft fuel combustion. Scope 2: Indirect emissions from purchased electricity and operations. Scope 3: Indirect emissions in the supply chain, including corporate travel. SAF reduces Scope 1 emissions when physically used in aircraft. Through Book & Claim, SAF can also reduce Scope 3 emissions for corporates, even if the fuel is consumed elsewhere. Shaphargroup offers both physical SAF supply and Scope 3 certificates."
    },
    {
      question: "What is the Book & Claim model for SAF?",
      answer: "Book & Claim separates the physical SAF from its environmental attributes. Shaphargroup supplies SAF into the aviation system, and the associated carbon reduction is documented through certificates. Corporates or airlines that cannot access physical SAF can purchase these certificates to reduce their Scope 3 emissions. This model ensures wider participation in decarbonization, even where SAF logistics are limited."
    },
    {
      question: "Is SAF more expensive than Jet A fuel?",
      answer: "Yes, today SAF is more expensive than fossil Jet A due to limited production scale and higher feedstock processing costs. For example, if Jet A costs $1,000/ton and SAF costs $2,000/ton, a 20% blend results in a price of $1,200/ton. However, government incentives, scaling refineries, and corporate commitments are rapidly narrowing this gap. Over time, SAF prices are expected to align more closely with Jet A."
    },
    {
      question: "What certifications does Shaphargroup hold?",
      answer: "Shaphargroup is certified under key international frameworks to ensure compliance and sustainability: ISCC EU and ISCC CORSIA for UCO and SAF supply. RSB (in progress) for advanced sustainability compliance. IATA SAFc for Book & Claim systems. EU Union Database (UDB) registration for imports. These certifications guarantee traceability, carbon accounting, and global recognition."
    },
    {
      question: "Where does Shaphargroup operate?",
      answer: "Shaphargroup oversees Sustainable Aviation Fuel (SAF) refining directly, while its subsidiary, Shandong Prophet Energy, operates the group's UCO and waste oil refining activities in China. Strategic offices in the Netherlands and the United States manage global supply chains, compliance, and customer relations. Together, this structure enables Shaphargroup to deliver physical SAF, UCO, and Scope 3 solutions across Asia, Europe, and the Americas."
    },
    {
      question: "Why partner with Shaphargroup for SAF supply?",
      answer: "Shaphargroup combines technical expertise, certified operations, and a global footprint to deliver reliable SAF and UCO solutions. With flexible models (physical supply, Book & Claim, or joint blending partnerships), Shaphargroup ensures that airlines, corporates, and energy companies can achieve their sustainability goals efficiently. As a growth-stage company, Shaphargroup also offers partners the opportunity to shape the global SAF market together."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 to-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${contactPageImagePath})`
          }}
          role="img"
          aria-label="Peaceful green landscape with lush fields and trees under blue sky representing environmental sustainability and welcoming business atmosphere"
        />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight text-overlay-strong"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-emerald-300">Contact</span> Us
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto text-overlay"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are providing waste-to-fuel solutions for a net-zero future. Want to partner with us? Reach out to us.
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact-info" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6">
              Global Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out to our teams across China, Netherlands, and the US for sustainable aviation fuel solutions.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div 
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-emerald rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      className="text-gray-600 hover:text-emerald transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.value}</p>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Office Locations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {offices.map((office, index) => {
              const IconComponent = office.icon;
              return (
                <motion.div 
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 shadow-lg"
                  initial={{ opacity: 0, x: index === 0 ? -50 : index === 1 ? 0 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 ${office.color} rounded-2xl flex items-center justify-center mr-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy">{office.country}</h3>
                      <p className="text-gray-600">{office.title}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Building className="w-5 h-5 text-emerald mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-charcoal">Address</div>
                        <div className="text-gray-600">
                          {office.address}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about Sustainable Aviation Fuel, UCO, and partnering with Shaphargroup.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-emerald/20 hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-navy pr-4">
                      {faq.question}
                    </h3>
                    {openFAQ === index ? (
                      <ChevronUp className="w-6 h-6 text-emerald flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-emerald flex-shrink-0" />
                    )}
                  </div>
                </button>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-6"
                  >
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}