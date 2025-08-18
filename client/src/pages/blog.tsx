import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { useEffect } from "react";
import { updateSEOTags, SEO_CONFIGS, optimizePagePerformance } from "@/lib/seo";
import unlockingSafImage from "@assets/Unlocking SAF_1754168191181.jpeg";
import yangxinMeetingImage from "@assets/Yangxin county meeting 1_1754487367075.png";
import ucoCertificateImage from "@assets/uco certificate_1754487529555.jpeg";
import shaphargroupImage from "@assets/shaphargroup image_1754487899319.jpeg";
import ucoSampleImage from "@assets/SG UCO sample_1754488157265.jpeg";
import yanzhouMeetingImage from "@assets/Yangxin county meeting 1_1754488489140.png";
import safcRegistryImage from "@assets/image_1754657993774.png";
import mrTimImage from "@assets/MR TIM_1754156709435.jpg";
import safFactoryImage from "@assets/SAF Factory to jet_1754154741557.png";
import safInvestorsImage from "@assets/54553304794_d731ca50ea_b_1754155828424.jpg";
import jetToFImage from "@assets/jet to f_1755325839322.png";
import controllingSafImage from "@assets/ChatGPT Image Jun 2, 2025, 04_00_37 PM_1755326081288.png";
import isccCorsiaImage from "@assets/ISCC CORSIA SAF CERTIFICATE_1755326293852.jpeg";
import safJourneyImage from "@assets/saf_1755326663109.jpeg";
import safInvestorAnnouncementImage from "@assets/SAF Investor annoucement_1755327378929.jpeg";
import ucoImage from "@assets/UCO_1755327993085.png";
import biofuelFillingStationImage from "@assets/biofuel-filling-station_1456616751_840x560px_1755340629654.jpg";


// Function to map article titles to article IDs
const getArticleId = (title: string): string | null => {
  const titleMap: Record<string, string> = {
    "Shaphargroup Secures SAFc Approval to Deliver Verified Sustainable Aviation Fuel Credits (Scope 3) Globally": "safc-approval-scope-3-credits",
    "Tim Rose Joins Shaphargroup Board as Strategic Executive Director": "tim-rose-joins-board",
    "Why Europe and China Must Collaborate to Meet Net Zero — Not Compete": "europe-china-collaboration",
    "✈️ Shaphargroup's David C. Arinze Speaks at SAF Investors Summit London 2025": "saf-investors-summit",
    "Controlling the Future of SAF: Why Integration, Not Size, Will Define the Next Energy Giants": "controlling-future-of-saf",
    "Shaphargroup Achieves ISCC CORSIA Certification (SAF)": "iscc-corsia-certification",
    "From UCO to Jet Fuel: The Journey Toward Sustainable Aviation": "uco-to-jet-fuel",
    "Powering Aviation's Green Future: How Strategic Feedstock Partnerships Can Accelerate SAF Adoption": "powering-aviation-green-future",
    "Building a Trustworthy UCO Supply Chain: Why Certification and Transparency Matter More Than Ever": "building-trustworthy-uco-supply-chain",
    "The Critical Role of UCO in Achieving Global Sustainable Aviation Fuel (SAF) Targets": "critical-role-uco-saf-targets",
    "How Used Cooking Oil Is Powering a Greener Future": "uco-greener-future",
    "SAF: The Fuel Taking Aviation Toward Net Zero": "saf-fuel-aviation-net-zero",
    "The Biodiesel Boom: Cleaner Engines, Healthier Planet": "biodiesel-boom-cleaner-engines"
  };
  
  return titleMap[title] || null;
};

export default function Blog() {
  // SEO Meta Tags Setup
  useEffect(() => {
    updateSEOTags({
      ...SEO_CONFIGS.blog,
      canonical: window.location.href,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Shaphargroup SAF Industry Blog",
        "description": "Latest insights on sustainable aviation fuel, HEFA SAF production, and aviation decarbonization",
        "publisher": {
          "@type": "Organization",
          "name": "Shaphargroup"
        },
        "about": ["Sustainable Aviation Fuel", "HEFA SAF", "UCO Refining", "Aviation Decarbonization"]
      }
    });

    // Performance optimizations removed to prevent preload console warnings

    return () => {
      document.title = 'Shaphargroup - Sustainable Aviation Fuel | UCO Refining & HEFA SAF Production';
    };
  }, []);
  const featuredPost = {
    title: "Shaphargroup Secures SAFc Approval to Deliver Verified Sustainable Aviation Fuel Credits (Scope 3) Globally",
    excerpt: "Shaphargroup is proud to announce its official approval as a supplier on the Sustainable Aviation Fuel Certificate (SAFc) platform, enabling the company to deliver verified Scope 3 emissions reduction certificates to airlines, corporate flyers, and sustainability-focused organizations worldwide.",
    image: safcRegistryImage,
    category: "SAF",
    date: "August 8, 2025",
    author: "Admin",
    link: "https://shaphargroup.com/saf/shaphargroup-secures-safc-approval-verified-sustainable-aviation-fuel-credits-scope-3-globally/"
  };

  const blogPosts = [
    {
      title: "Tim Rose Joins Shaphargroup Board as Strategic Executive Director",
      excerpt: "We are pleased to announce that Tim Rose, a distinguished governance leader and board advisor, has joined our team.",
      image: mrTimImage,
      category: "News",
      date: "July 16, 2025",
      author: "Admin",
      link: "https://shaphargroup.com/news/tim-rose-joins-shaphargroup-board-as-strategic-executive-director/"
    },
    {
      title: "SAF: The Fuel Taking Aviation Toward Net Zero",
      excerpt: "Aviation accounts for nearly 3% of global carbon emissions—but that's changing fast. Sustainable Aviation Fuel (SAF) is revolutionizing the skies, and Shaphargroup is right at the forefront of this transformation.",
      image: safFactoryImage,
      category: "SAF",
      date: "July 20, 2025",
      author: "Admin",
      link: "https://shaphargroup.com/saf-bluewhale/saf-the-fuel-taking-aviation-toward-net-zero/"
    },
    {
      title: "Why Europe and China Must Collaborate to Meet Net Zero — Not Compete",
      excerpt: "Whenever China is mentioned in Western political debates, the focus often shifts to national security concerns rather than collaborative opportunities.",
      image: jetToFImage,
      category: "Insights & Thought Leadership",
      date: "July 7, 2025",
      author: "David C. Arinze",
      link: "https://shaphargroup.com/uco-saf-market-perspective/why-europe-and-china-must-collaborate-to-meet-net-zero-not-compete/"
    },
    {
      title: "✈️ Shaphargroup's David C. Arinze Speaks at SAF Investors Summit London 2025",
      excerpt: "London, UK – May 29, 2025. Shaphargroup proudly participated in the SAF Investors Summit London 2025, one of the premier events for sustainable aviation fuel stakeholders.",
      image: safInvestorsImage,
      category: "News",
      date: "June 4, 2025",
      author: "Admin",
      link: "https://shaphargroup.com/news/%e2%9c%88%ef%b8%8f-shaphargroups-david-c-arinze-speaks-at-saf-investors-summit-london-2025/"
    },
    {
      title: "Controlling the Future of SAF: Why Integration, Not Size, Will Define the Next Energy Giants",
      excerpt: "By David C. Arinze, Managing Partner | Shaphargroup, Renewable Energy Strategist | UCO & SAF Advocate. An analysis of market dynamics in the sustainable aviation fuel industry.",
      image: controllingSafImage,
      category: "Insights & Thought Leadership",
      date: "June 2, 2025",
      author: "David C. Arinze",
      link: "https://shaphargroup.com/uco-saf-market-perspective/controlling-the-future-of-saf-why-integration-not-size-will-define-the-next-energy-giants/"
    },
    {
      title: "Shaphargroup Achieves ISCC CORSIA Certification (SAF)",
      excerpt: "Shaphargroup is proud to announce that we have been awarded the ISCC CORSIA International Sustainability and Carbon Certification, a globally recognized standard that underscores our commitment to producing and supplying sustainable biofuels for the aviation industry.",
      image: isccCorsiaImage,
      category: "SAF",
      date: "May 6, 2025",
      author: "Admin",
      link: "https://shaphargroup.com/saf/shaphargroup-achieves-iscc-corsia-certification-saf/"
    },
    {
      title: "Refinery Investment in Yangxin County Welcomed by Government Officials",
      excerpt: "Top government officials welcome Shaphargroup's strategic investment in sustainable fuel infrastructure, marking a significant step forward for the region.",
      image: yangxinMeetingImage,
      category: "Investment News",
      date: "April 20, 2025",
      author: "Admin",
      link: "https://mp.weixin.qq.com/s/-BH7ORo8MU2Qv620mGrI4g"
    },
    {
      title: "From UCO to Jet Fuel: The Journey Toward Sustainable Aviation",
      excerpt: "As the aviation industry races to meet its net-zero targets, one solution is already proving both practical and scalable: Sustainable Aviation Fuel (SAF) made from Used Cooking Oil (UCO).",
      image: safJourneyImage,
      category: "Insights & Thought Leadership",
      date: "May 14, 2025",
      author: "David C. Arinze",
      link: "https://shaphargroup.com/uco-saf-market-perspective/from-uco-to-jet-fuel-the-journey-toward-sustainable-aviation/"
    },
    {
      title: "Shaphargroup's David C. Arinze to Speak at SAF Investors Conference in London",
      excerpt: "We're excited to announce that David C. Arinze, Managing Partner of Shaphargroup and head of our European and American operations, will be speaking at the upcoming SAF Investors Conference in London.",
      image: safInvestorAnnouncementImage,
      category: "News",
      date: "May 13, 2025",
      author: "Admin",
      link: "https://www.safinvestor.com/event/145508/saf-investor-london-2025/#speakers"
    },
    {
      title: "Powering Aviation's Green Future: How Strategic Feedstock Partnerships Can Accelerate SAF Adoption",
      excerpt: "The aviation sector is under mounting pressure to decarbonize, with the EU's ReFuelEU Aviation mandate requiring a minimum of 6% Sustainable Aviation Fuel (SAF) by 2030.",
      image: ucoImage,
      category: "Insights & Thought Leadership",
      date: "May 12, 2025",
      author: "David C. Arinze",
      link: "https://shaphargroup.com/uco-saf-market-perspective/powering-aviations-green-future-how-strategic-feedstock-partnerships-can-accelerate-saf-adoption/"
    },
    {
      title: "Building a Trustworthy UCO Supply Chain: Why Certification and Transparency Matter More Than Ever",
      excerpt: "In today's race toward decarbonization, used cooking oil (UCO) has emerged as a critical feedstock for renewable fuels, especially Sustainable Aviation Fuel (SAF).",
      image: ucoCertificateImage,
      category: "Insights & Thought Leadership",
      date: "April 28, 2025",
      author: "David C. Arinze",
      link: "https://shaphargroup.com/uco-saf-market-perspective/building-a-trustworthy-uco-supply-chain/"
    },
    {
      title: "The Critical Role of UCO in Achieving Global Sustainable Aviation Fuel (SAF) Targets",
      excerpt: "In a world racing toward net-zero emissions, aviation stands at a historic crossroads. Airlines, governments, and fuel producers are investing billions into Sustainable Aviation Fuel (SAF) development.",
      image: shaphargroupImage,
      category: "Insights & Thought Leadership",
      date: "April 26, 2025",
      author: "David C. Arinze",
      link: "https://shaphargroup.com/uco-saf-market-perspective/the-critical-role-of-uco-in-achieving-global-sustainable-aviation-fuel-saf-targets/"
    },
    {
      title: "How Used Cooking Oil Is Powering a Greener Future",
      excerpt: "As the world intensifies its shift toward clean energy, Used Cooking Oil (UCO) is emerging as one of the most exciting feedstocks for sustainable fuel production.",
      image: ucoSampleImage,
      category: "News",
      date: "April 16, 2025",
      author: "Admin",
      link: "https://shaphargroup.com/news/uco-is-the-new-gold-how-used-cooking-oil-is-powering-a-greener-future/"
    },
    {
      title: "Shaphargroup Meets with Yanzhou District Government: Expands SAF Investment Agenda in Shandong",
      excerpt: "A senior delegation from Shaphargroup visited the Yanzhou District Government and met with key officials to discuss expanding sustainable aviation fuel investment opportunities in the region.",
      image: yanzhouMeetingImage,
      category: "News",
      date: "February 15, 2025",
      author: "Admin",
      link: "https://shaphargroup.com/news/shaphargroup-meets-with-yanzhou-district-government-expands-saf-investment-agenda-in-shandong/"
    },
    {
      title: "The Biodiesel Boom: Cleaner Engines, Healthier Planet",
      excerpt: "Biodiesel is not just a trend—it's a global movement. As the world looks for cleaner alternatives to fossil diesel, biodiesel has emerged as a powerful solution for heavy-duty transport and agricultural sectors.",
      image: biofuelFillingStationImage,
      category: "Biodiesel",
      date: "July 25, 2025",
      author: "Admin",
      link: "https://shaphargroup.com/biodiesel/the-biodiesel-boom-cleaner-engines-healthier-planet/"
    }
  ];

  const categories = [
    "All Posts",
    "News",
    "Insights & Thought Leadership", 
    "SAF",
    "Biodiesel",
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
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onClick={() => {
              const articleId = getArticleId(featuredPost.title);
              if (articleId) {
                window.location.href = `/article/${articleId}`;
              } else {
                window.open(featuredPost.link, '_blank');
              }
            }}
          >
            <div className="grid md:grid-cols-5 gap-4">
              <div className="relative overflow-hidden md:col-span-2">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className={`w-full h-full min-h-[200px] hover:scale-105 transition-transform duration-300 ${
                    featuredPost.image === safcRegistryImage || featuredPost.image === isccCorsiaImage
                      ? "object-contain bg-white p-6" 
                      : featuredPost.image === safInvestorAnnouncementImage
                      ? "object-cover" 
                      : "object-cover"
                  }`}
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-emerald text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="p-4 md:p-6 flex flex-col justify-center md:col-span-3">
                <h3 className="text-xl font-bold text-navy mb-2 leading-tight hover:text-emerald transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                  {featuredPost.excerpt.substring(0, 120)}...
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {featuredPost.author}
                  </div>
                </div>
                <div className="flex items-center text-emerald font-medium hover:text-forest transition-colors">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => {
                  const articleId = getArticleId(post.title);
                  if (articleId) {
                    window.location.href = `/article/${articleId}`;
                  } else {
                    window.open(post.link, '_blank');
                  }
                }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className={`w-full h-32 group-hover:scale-105 transition-transform duration-300 ${
                      post.image === safcRegistryImage || post.image === isccCorsiaImage
                        ? "object-contain bg-white p-4" 
                        : "object-cover"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-2 left-2">
                    <span className="bg-emerald text-white px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-bold text-navy mb-2 line-clamp-2 group-hover:text-emerald transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center text-emerald text-xs font-medium group-hover:text-forest transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
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