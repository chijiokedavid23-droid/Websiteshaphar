import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import safSummitImage from "@assets/54553304794_d731ca50ea_b_1754155828424.jpg";
import signing1Image from "@assets/Signing_1_v2_1775771352528.jpg";
import refineryInvestmentImage from "@assets/Yangxin county meeting 1_1754156293882.png";
import isccCertificationImage from "@assets/image_1754156625874.png";
import timRoseImage from "@assets/MR TIM_1754156709435.jpg";

export default function NewsSection() {
  const [, setLocation] = useLocation();

  const newsItems = [
    {
      image: signing1Image,
      category: "Partnership",
      title: "Shaphargroup Selects Honeywell UOP Technology for Rotterdam SAF Facility",
      description: "A landmark agreement formalises Honeywell UOP's Ecofining™ process technology as licensor for Shaphargroup's 200,000 MT/year SAF refinery at the Port of Rotterdam.",
      internalLink: "/article/honeywell-loa-announcement"
    },
    {
      image: refineryInvestmentImage,
      category: "Investment News",
      title: "Refinery Investment in Yangxin County Welcomed by Officials",
      description: "Top government officials welcome Shaphargroup's strategic investment in sustainable fuel infrastructure.",
      internalLink: "/blog" // This article isn't in our internal system yet, so link to blog page
    },
    {
      image: isccCertificationImage,
      category: "Certification",
      title: "Shaphargroup Achieves ISCC CORSIA Certification (SAF)",
      description: "Major milestone in sustainable aviation fuel certification and compliance.",
      internalLink: "/article/iscc-corsia-certification"
    },
    {
      image: timRoseImage,
      category: "Leadership",
      title: "Tim Rose Joins Shaphargroup Board as Strategic Executive Director",
      description: "Strategic leadership expansion strengthens company's global market position.",
      internalLink: "/article/tim-rose-joins-board"
    }
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-sm font-semibold text-emerald tracking-wide uppercase mb-4">
            Latest News
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setLocation(item.internalLink)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="text-emerald text-sm font-medium mb-2">{item.category}</div>
                <h3 className="text-lg font-bold text-navy mb-3 line-clamp-2 group-hover:text-emerald transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex items-center text-gold text-sm font-medium group-hover:text-emerald transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
