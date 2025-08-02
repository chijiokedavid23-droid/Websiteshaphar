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
      image: "https://shaphargroup.com/wp-content/uploads/2025/06/54553304794_d731ca50ea_b-768x512.jpg",
      category: "News",
      date: "June 4, 2025",
      author: "Admin",
      link: "https://shaphargroup.com/news/%e2%9c%88%ef%b8%8f-shaphargroups-david-c-arinze-speaks-at-saf-investors-summit-london-2025/"
    },
    {
      title: "Controlling the Future of SAF: Why Integration, Not Size, Will Define the Next Energy Giants",
      excerpt: "By David C. Arinze, Managing Partner | Shaphargroup, Renewable Energy Strategist | UCO & SAF Advocate. An analysis of market dynamics in the sustainable aviation fuel industry.",
      image: "https://shaphargroup.com/wp-content/uploads/2025/06/ChatGPT-Image-Jun-2-2025-04_00_37-PM-768x512.png",
      category: "Insights & Thought Leadership",
      date: "June 2, 2025",
      author: "David C. Arinze",
      link: "https://shaphargroup.com/uco-saf-market-perspective/controlling-the-future-of-saf-why-integration-not-size-will-define-the-next-energy-giants/"
    },
    {
      title: "Shaphargroup Achieves ISCC CORSIA Certification (SAF)",
      excerpt: "Shaphargroup is proud to announce that we have been awarded the ISCC CORSIA International Sustainability and Carbon Certification, a globally recognized standard that underscores our commitment to producing and supplying sustainable biofuels for the aviation industry.",
      image: "https://shaphargroup.com/wp-content/uploads/2025/05/ISCC-CORSIA-SAF-CERTIFICATE-768x1027.jpeg",
      category: "SAF",
      date: "May 6, 2025",
      author: "Admin",
      link: "https://shaphargroup.com/saf/shaphargroup-achieves-iscc-corsia-certification-saf/"
    },
    {
      title: "Refinery Investment in Yangxin County Welcomed by Government Officials",
      excerpt: "Top government officials welcome Shaphargroup's strategic investment in sustainable fuel infrastructure, marking a significant step forward for the region.",
      image: "https://shaphargroup.com/wp-content/uploads/2025/01/Yangxin-county-meeting-1-150x150.png",
      category: "Investment News",
      date: "April 20, 2025",
      author: "Admin",
      link: "https://mp.weixin.qq.com/s/-BH7ORo8MU2Qv620mGrI4g"
    },
    {
      title: "From UCO to Jet Fuel: The Journey Toward Sustainable Aviation",
      excerpt: "As the aviation industry races to meet its net-zero targets, one solution is already proving both practical and scalable: Sustainable Aviation Fuel (SAF) made from Used Cooking Oil (UCO).",
      image: "https://shaphargroup.com/wp-content/uploads/2025/05/ChatGPT-Image-May-14-2025-11_03_27-PM-768x512.png",
      category: "Insights & Thought Leadership",
      date: "May 14, 2025",
      author: "David C. Arinze",
      link: "https://shaphargroup.com/uco-saf-market-perspective/from-uco-to-jet-fuel-the-journey-toward-sustainable-aviation/"
    },
    {
      title: "Shaphargroup's David C. Arinze to Speak at SAF Investors Conference in London",
      excerpt: "We're excited to announce that David C. Arinze, Managing Partner of Shaphargroup and head of our European and American operations, will be speaking at the upcoming SAF Investors Conference in London.",
      image: "https://shaphargroup.com/wp-content/uploads/2025/05/SAF-LONDON2-768x384.png",
      category: "News",
      date: "May 13, 2025",
      author: "Admin",
      link: "https://shaphargroup.com/news/shaphargroups-david-c-arinze-to-speak-at-saf-investors-conference-in-london/"
    },
    {
      title: "Powering Aviation's Green Future: How Strategic Feedstock Partnerships Can Accelerate SAF Adoption",
      excerpt: "The aviation sector is under mounting pressure to decarbonize, with the EU's ReFuelEU Aviation mandate requiring a minimum of 6% Sustainable Aviation Fuel (SAF) by 2030.",
      image: "https://shaphargroup.com/wp-content/uploads/2025/05/ChatGPT-Image-May-12-2025-12_01_28-AM-768x512.png",
      category: "Insights & Thought Leadership",
      date: "May 12, 2025",
      author: "David C. Arinze",
      link: "https://shaphargroup.com/uco-saf-market-perspective/powering-aviations-green-future-how-strategic-feedstock-partnerships-can-accelerate-saf-adoption/"
    },
    {
      title: "Building a Trustworthy UCO Supply Chain: Why Certification and Transparency Matter More Than Ever",
      excerpt: "In today's race toward decarbonization, used cooking oil (UCO) has emerged as a critical feedstock for renewable fuels, especially Sustainable Aviation Fuel (SAF).",
      image: "https://shaphargroup.com/wp-content/uploads/2025/04/ChatGPT-Image-Apr-28-2025-11_56_32-AM-768x512.png",
      category: "Insights & Thought Leadership",
      date: "April 28, 2025",
      author: "David C. Arinze",
      link: "https://shaphargroup.com/uco-saf-market-perspective/building-a-trustworthy-uco-supply-chain/"
    },
    {
      title: "The Critical Role of UCO in Achieving Global Sustainable Aviation Fuel (SAF) Targets",
      excerpt: "In a world racing toward net-zero emissions, aviation stands at a historic crossroads. Airlines, governments, and fuel producers are investing billions into Sustainable Aviation Fuel (SAF) development.",
      image: "https://shaphargroup.com/wp-content/uploads/2025/04/ChatGPT-Image-Apr-26-2025-01_12_52-PM-768x512.png",
      category: "Insights & Thought Leadership",
      date: "April 26, 2025",
      author: "David C. Arinze",
      link: "https://shaphargroup.com/uco-saf-market-perspective/the-critical-role-of-uco-in-achieving-global-sustainable-aviation-fuel-saf-targets/"
    },
    {
      title: "How Used Cooking Oil Is Powering a Greener Future",
      excerpt: "As the world intensifies its shift toward clean energy, Used Cooking Oil (UCO) is emerging as one of the most exciting feedstocks for sustainable fuel production.",
      image: "https://shaphargroup.com/wp-content/uploads/2025/04/ChatGPT-Image-Apr-16-2025-12_02_05-PM-768x512.png",
      category: "News",
      date: "April 16, 2025",
      author: "Admin",
      link: "https://shaphargroup.com/news/uco-is-the-new-gold-how-used-cooking-oil-is-powering-a-greener-future/"
    },
    {
      title: "Shaphargroup Meets with Yanzhou District Government: Expands SAF Investment Agenda in Shandong",
      excerpt: "A senior delegation from Shaphargroup visited the Yanzhou District Government and met with key officials to discuss expanding sustainable aviation fuel investment opportunities in the region.",
      image: "https://shaphargroup.com/wp-content/uploads/2025/02/ChatGPT-Image-Feb-15-2025-11_13_15-AM-768x512.png",
      category: "News",
      date: "February 15, 2025",
      author: "Admin",
      link: "https://shaphargroup.com/news/shaphargroup-meets-with-yanzhou-district-government-expands-saf-investment-agenda-in-shandong/"
    }
  ];

  const categories = [
    "All Posts",
    "News",
    "Insights & Thought Leadership", 
    "SAF",
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