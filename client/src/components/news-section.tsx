import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function NewsSection() {
  const newsItems = [
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Recent Event",
      title: "David C. Arinze Speaks at SAF Investors Summit London 2025",
      description: "Shaphargroup's leadership addresses key industry stakeholders at prestigious aviation summit.",
      link: "https://shaphargroup.com/news/shaphargroups-david-c-arinze-speaks-at-saf-investors-summit-london-2025/"
    },
    {
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Investment News",
      title: "Refinery Investment in Yangxin County Welcomed by Officials",
      description: "Top government officials welcome Shaphargroup's strategic investment in sustainable fuel infrastructure.",
      link: "https://mp.weixin.qq.com/s/-BH7ORo8MU2Qv620mGrI4g"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Certification",
      title: "Shaphargroup Achieves ISCC CORSIA Certification (SAF)",
      description: "Major milestone in sustainable aviation fuel certification and compliance.",
      link: "https://shaphargroup.com/saf/shaphargroup-achieves-iscc-corsia-certification-saf/"
    },
    {
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Leadership",
      title: "Tim Rose Joins Shaphargroup Board as Strategic Executive Director",
      description: "Strategic leadership expansion strengthens company's global market position.",
      link: "https://shaphargroup.com/news/tim-rose-joins-shaphargroup-board-as-strategic-executive-director/"
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
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Industry Updates & Achievements
          </h2>
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
              onClick={() => window.open(item.link, '_blank')}
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
