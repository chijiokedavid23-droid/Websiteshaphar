import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";

export default function Blog() {
  const featuredPost = {
    title: "Tim Rose Joins Shaphargroup Board as Strategic Executive Director",
    excerpt: "We are pleased to announce that Tim Rose, a distinguished governance leader and board advisor, has joined our team.",
    image: "https://shaphargroup.com/wp-content/uploads/2025/07/MR-TIM.jpg",
    category: "News",
    date: "July 16, 2025",
    author: "Admin",
    link: "https://shaphargroup.com/news/tim-rose-joins-shaphargroup-board-as-strategic-executive-director/"
  };

  const blogPosts = [
    {
      title: "Why Europe and China Must Collaborate to Meet Net Zero — Not Compete",
      excerpt: "Whenever China is mentioned in Western political debates, the focus often shifts to national security concerns rather than collaborative opportunities.",
      image: "https://shaphargroup.com/wp-content/uploads/2025/07/jet-to-f-768x512.png",
      category: "Insights & Thought Leadership",
      date: "July 7, 2025",
      author: "David C. Arinze",
      link: "https://shaphargroup.com/uco-saf-market-perspective/why-europe-and-china-must-collaborate-to-meet-net-zero-not-compete/"
    },
    {
      title: "✈️ Shaphargroup's David C. Arinze Speaks at SAF Investors Summit London 2025",
      excerpt: "London, UK – May 29, 2025. Shaphargroup proudly participated in the SAF Investors Summit London 2025, one of the premier events for sustainable aviation fuel stakeholders.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      category: "News",
      date: "June 4, 2025",
      author: "Admin",
      link: "https://shaphargroup.com/news/shaphargroups-david-c-arinze-speaks-at-saf-investors-summit-london-2025/"
    },
    {
      title: "Controlling the Future of SAF: Why Integration, Not Size, Will Define the Next Energy Giants",
      excerpt: "By David C. Arinze, Managing Partner | Shaphargroup, Renewable Energy Strategist | UCO & SAF Advocate. An analysis of market dynamics in the sustainable aviation fuel industry.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      category: "Insights & Thought Leadership",
      date: "June 2, 2025",
      author: "David C. Arinze",
      link: "https://shaphargroup.com/uco-saf-market-perspective/controlling-the-future-of-saf-why-integration-not-size-will-define-the-next-energy-giants/"
    },
    {
      title: "Shaphargroup Achieves ISCC CORSIA Certification for Sustainable Aviation Fuel",
      excerpt: "Major milestone in sustainable aviation fuel certification and compliance, reinforcing our commitment to transparency and environmental responsibility.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      category: "Certification",
      date: "May 15, 2025",
      author: "Admin",
      link: "https://shaphargroup.com/saf/shaphargroup-achieves-iscc-corsia-certification-saf/"
    },
    {
      title: "Refinery Investment in Yangxin County Welcomed by Government Officials",
      excerpt: "Top government officials welcome Shaphargroup's strategic investment in sustainable fuel infrastructure, marking a significant step forward for the region.",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      category: "Investment News",
      date: "April 20, 2025",
      author: "Admin",
      link: "https://mp.weixin.qq.com/s/-BH7ORo8MU2Qv620mGrI4g"
    },
    {
      title: "The Future of Sustainable Aviation: UCO as a Climate Solution",
      excerpt: "Exploring how Used Cooking Oil (UCO) is transforming from waste product to a critical component in aviation's sustainability journey.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      category: "Industry Insights",
      date: "March 28, 2025",
      author: "David C. Arinze",
      link: "#"
    }
  ];

  const categories = [
    "All Posts",
    "News",
    "Insights & Thought Leadership", 
    "Industry Insights",
    "Certification",
    "Investment News"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-forest/80 to-emerald/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            FutureFuel <span className="text-emerald-300">Blog</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Insights, news, and thought leadership from the sustainable aviation fuel industry
          </motion.p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  index === 0 
                    ? 'bg-emerald text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-emerald hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
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
              Featured Article
            </h2>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onClick={() => window.open(featuredPost.link, '_blank')}
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative overflow-hidden">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover min-h-[400px] hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-navy mb-4 leading-tight hover:text-emerald transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6 space-x-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {featuredPost.author}
                  </div>
                </div>
                <div className="flex items-center text-emerald font-medium hover:text-forest transition-colors">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
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
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest insights on sustainable aviation fuel, industry trends, and company updates.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => window.open(post.link, '_blank')}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy mb-3 line-clamp-2 group-hover:text-emerald transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  <div className="flex items-center text-emerald text-sm font-medium group-hover:text-forest transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest insights on sustainable aviation fuel and industry developments.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald"
              />
              <button className="bg-emerald text-white px-6 py-3 rounded-lg hover:bg-emerald/90 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}