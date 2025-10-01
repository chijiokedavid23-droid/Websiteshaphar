import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useEffect } from "react";
import { updateSEOTags } from "@/lib/seo";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, FileText, Download, Calendar, DollarSign, AlertCircle, Briefcase, ArrowRight, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { Link } from "wouter";
import septemberPdfPath from "@assets/September Shaphargroups-China-Europe-SAF-Bridge-Report-edition_1759358960847.pdf";

export default function ChinaEuropeSAFIndexSeptember() {
  useEffect(() => {
    updateSEOTags({
      title: "China → Europe SAF Index – September 2025 | Shaphargroup Market Intelligence",
      description: "September 2025 monthly market intelligence report on China-Europe UCO and SAF deals, prices, policy updates, and supply chain dynamics. Essential insights for European buyers and Chinese suppliers.",
      keywords: "China Europe SAF index, UCO prices, sustainable aviation fuel market, HEFA SAF, China UCO export, European SAF import, aviation fuel prices, SAF market intelligence, September 2025",
      canonical: window.location.href,
      structuredData: [
        {
          "@context": "https://schema.org",
          "@type": "Report",
          "name": "China → Europe SAF Bridge Report – September 2025",
          "description": "Monthly market intelligence report providing essential insights for European SAF buyers and Chinese suppliers navigating the sustainable aviation fuel landscape",
          "datePublished": "2025-09-30",
          "publisher": {
            "@type": "Organization",
            "name": "Shaphargroup",
            "url": "https://shaphargroup.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://shaphargroup.com/logo.png"
            }
          },
          "about": [
            {
              "@type": "Thing",
              "name": "Sustainable Aviation Fuel"
            },
            {
              "@type": "Thing",
              "name": "Used Cooking Oil"
            },
            {
              "@type": "Thing",
              "name": "China Europe Trade"
            }
          ],
          "spatialCoverage": [
            {
              "@type": "Place",
              "name": "China"
            },
            {
              "@type": "Place",
              "name": "Europe"
            }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "Dataset",
          "name": "China-Europe SAF and UCO Price Index - September 2025",
          "description": "Monthly price data for UCO and SAF between China and Europe markets",
          "url": window.location.href,
          "temporalCoverage": "2025-09",
          "spatialCoverage": ["China", "Europe"],
          "variableMeasured": [
            "UCO T1 CIF ARA Price",
            "UCO FOB China Price", 
            "SAF FOB ARA Price",
            "SAF FOB China Price",
            "UCOME FOB ARA Price"
          ],
          "publisher": {
            "@type": "Organization",
            "name": "Shaphargroup"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://shaphargroup.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Market Intelligence",
              "item": "https://shaphargroup.com/market-intelligence"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "China → Europe SAF Index - September",
              "item": window.location.href
            }
          ]
        }
      ],
      ogImage: `${window.location.origin}/og-market-intelligence.png`
    });

    return () => {
      document.title = 'Shaphargroup - Sustainable Aviation Fuel | UCO Refining & HEFA SAF Production';
    };
  }, []);

  const priceData = {
    ucoARA: [
      { period: "Early Sep", price: 1145 },
      { period: "Mid Sep", price: 1170 },
      { period: "End Sep", price: 1163 }
    ],
    ucoChina: [
      { period: "Early Sep", price: 1110 },
      { period: "Mid Sep", price: 1150 },
      { period: "End Sep", price: 1130 }
    ],
    safARA: [
      { period: "Early Sep", price: 2647 },
      { period: "Mid Sep", price: 2670 },
      { period: "End Sep", price: 2710 }
    ],
    safChina: [
      { period: "Early Sep", price: 2100 },
      { period: "Mid Sep", price: 2300 },
      { period: "End Sep", price: 2125 }
    ]
  };

  const benchmarks = [
    { label: "UCO T1 CIF ARA", value: "$1,163", change: "flexi, 5% FFA (end-month)", trend: "neutral" },
    { label: "UCO Ex-Works NL", value: "€1,078", change: "end-month pricing", trend: "neutral" },
    { label: "UCO FOB China (std)", value: "$1,130", change: "bulk, end-month", trend: "down" },
    { label: "UCO FOB China (HVO)", value: "$1,165", change: "bulk, end-month", trend: "down" },
    { label: "UCOME FOB ARA", value: "$1,493", change: "end-month pricing", trend: "down" },
    { label: "SAF FOB ARA", value: "$2,710", change: "end-month pricing", trend: "up" }
  ];

  const policyUpdates = [
    {
      title: "EC Anti-Dumping Extension",
      description: "Extended anti-dumping/anti-subsidy to HEFA-SAF from US/Indonesia/Argentina (immediate). Goal: protect EU SAF build-out and prevent SAF leaking into road fuels."
    },
    {
      title: "China SAF Monitoring",
      description: "China SAF under monitoring (TARIC codes noted by EC); export whitelist continues to constrain near-term CN SAF outflows despite stronger EU interest."
    },
    {
      title: "Refinery Updates",
      description: "BP halts standalone Rotterdam biofuels project (after Shell's cancellation); co-processing up at Castellón → incremental supply, but no step-change."
    },
    {
      title: "Germany EEG Support",
      description: "Germany adds ~€7.9bn to EEG biogas support (bigger auctions, higher flexibility bonus). Neutral for UCO/SAF near-term."
    }
  ];

  const dealHighlights = [
    {
      title: "Christiania Shipping × FincoEnergies",
      date: "September",
      description: "First GoodFuels B100 bunkering completed in Europe – showcases high-blend readiness and provenance value in the marine fuel sector."
    },
    {
      title: "Bunker One Sweden",
      date: "September",
      description: "Long-term charter Sagafjord – expands Nordic bio-bunkering capability and future-fuels readiness across Scandinavian markets."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-navy via-forest to-emerald">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="inline-block bg-emerald/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-emerald-300 font-semibold flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              September 2025
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-overlay-strong"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            China → Europe<br />
            <span className="text-emerald-300">SAF Bridge Report</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto text-overlay"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Curated, buyer-focused insights bridging Chinese supply with European demand
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a href={septemberPdfPath} download="Shaphargroup-China-Europe-SAF-Bridge-September-2025.pdf">
              <Button className="bg-emerald hover:bg-emerald/90 text-white px-8 py-6 text-lg" data-testid="button-download-september-report">
                <Download className="w-5 h-5 mr-2" />
                Download September Report
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Market Flow Snapshot */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6">
              Market Flow Snapshot
            </h2>
            <p className="text-xl text-gray-600">What Moved in September</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="bg-gradient-to-br from-navy/5 to-emerald/5 rounded-2xl p-8 border border-emerald/20"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-navy mb-4">Europe</h3>
              <p className="text-gray-700 leading-relaxed">
                Import T1 UCO CIF ARA held tight at $1,163/t (flexi, 5% FFA) as buyers returned after summer. Inland Ex-Works NL eased to €1,078/t while EU/UK-origin FOB ARA tracked lower at €1,129/t but maintained provenance premium. October inland demand building, especially in Iberia.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-forest/5 to-sky/5 rounded-2xl p-8 border border-forest/20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-navy mb-4">China</h3>
              <p className="text-gray-700 leading-relaxed">
                Standard UCO FOB softened late-month to $1,130/t bulk after mid-month firmness. HVO-grade eased to $1,165/t. Light US interest and fewer EU inquiries reported, while export-permit (whitelist) limits continued to cap near-term SAF export optionality.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              className="bg-emerald/10 rounded-2xl p-8 border-l-4 border-emerald"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-navy mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-emerald" />
                Bridge Takeaway: EU Buyers
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-emerald mt-1 flex-shrink-0" />
                  <span>Provenance premiums persist for EU/UK-origin materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-emerald mt-1 flex-shrink-0" />
                  <span>Documentary quality requirements tightening</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-emerald mt-1 flex-shrink-0" />
                  <span>October demand building, especially Iberian markets</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-emerald mt-1 flex-shrink-0" />
                  <span>Forward planning needed for Q4/Q1 volumes</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-forest/10 rounded-2xl p-8 border-l-4 border-forest"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-navy mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-forest" />
                Bridge Takeaway: CN Suppliers
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-forest mt-1 flex-shrink-0" />
                  <span>Export-permit headroom critical for SAF access</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-forest mt-1 flex-shrink-0" />
                  <span>Documentation standards must meet EU requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-forest mt-1 flex-shrink-0" />
                  <span>HVO-grade specifications commanding premiums</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-forest mt-1 flex-shrink-0" />
                  <span>US interest light, EU inquiries fewer than expected</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Price & Premium Signals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6">
              Price & Premium Signals
            </h2>
            <p className="text-xl text-gray-600">Early/Mid/End September & Direction</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* UCO ARA Price Chart */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-emerald" />
                UCO T1 CIF ARA
              </h3>
              
              <ChartContainer
                config={{
                  price: {
                    label: "Price ($/t)",
                    color: "hsl(160, 84%, 39%)",
                  },
                }}
                className="h-[200px] w-full"
              >
                <LineChart data={priceData.ucoARA}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="period" />
                  <YAxis domain={[1140, 1175]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke="var(--color-price)" 
                    strokeWidth={3}
                    dot={{ fill: "var(--color-price)", r: 6 }}
                  />
                </LineChart>
              </ChartContainer>

              <div className="mt-6 p-4 bg-gray-100 rounded-lg border border-gray-300">
                <div className="flex items-center gap-2 text-gray-700 font-bold">
                  <Minus className="w-5 h-5" />
                  <span>Within ±$10 range</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Held tight at $1,163/t (flexi, 5% FFA) end-month</p>
              </div>
            </motion.div>

            {/* UCO China Price Chart */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-forest" />
                UCO FOB China (Standard)
              </h3>
              
              <ChartContainer
                config={{
                  price: {
                    label: "Price ($/t)",
                    color: "hsl(155, 55%, 25%)",
                  },
                }}
                className="h-[200px] w-full"
              >
                <LineChart data={priceData.ucoChina}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="period" />
                  <YAxis domain={[1100, 1160]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke="var(--color-price)" 
                    strokeWidth={3}
                    dot={{ fill: "var(--color-price)", r: 6 }}
                  />
                </LineChart>
              </ChartContainer>

              <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-300">
                <div className="flex items-center gap-2 text-amber-700 font-bold">
                  <TrendingDown className="w-5 h-5" />
                  <span>-$20 Mid to End Month</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Softened late-month to $1,130/t bulk after mid-month firmness</p>
              </div>
            </motion.div>
          </div>

          {/* Arbitrage Analysis */}
          <motion.div
            className="bg-gradient-to-br from-navy to-forest rounded-2xl p-8 text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">Arbitrage Analysis</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold text-emerald-300 mb-2">$319</div>
                <div className="text-sm font-semibold text-gray-200 mb-2">UCOME CN → EU</div>
                <p className="text-sm text-gray-300">Closed by $319/t at generic duty (month-end)</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold text-emerald-300 mb-2">$142</div>
                <div className="text-sm font-semibold text-gray-200 mb-2">Cooperating Duty</div>
                <p className="text-sm text-gray-300">Closed by $142/t at cooperating duty rate</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold text-emerald-300 mb-2">+$35</div>
                <div className="text-sm font-semibold text-gray-200 mb-2">CN Premium UCO</div>
                <p className="text-sm text-gray-300">Averaged +$35/t vs bulk early-Sept, easing to ~+$30/t late-month</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
              <p className="text-sm text-yellow-100">
                Mid-September UCOME/FAME0/RME premiums were volatile as higher gasoil lifted flats. Chinese premium UCO maintained consistent premiums throughout the month.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policy & Certification Watch */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6">
              Policy & Certification Watch
            </h2>
            <p className="text-xl text-gray-600">Key regulatory developments shaping the market</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {policyUpdates.map((update, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 border-l-4 border-navy"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-emerald" />
                  {update.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{update.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deal Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6">
              Deal & Partnership Highlights
            </h2>
            <p className="text-xl text-gray-600">Notable September transactions and partnerships</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dealHighlights.map((deal, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-emerald/10 p-3 rounded-lg">
                    <FileText className="w-6 h-6 text-emerald" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy mb-2">{deal.title}</h3>
                    <p className="text-sm text-gray-500">{deal.date}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{deal.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-800">
              These partnerships signal growing confidence in high-blend biofuel capabilities and the importance of established supply chains for sustainable aviation and marine fuels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Implications - What to Do Now */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Implications – What to Do Now
            </h2>
            <p className="text-xl text-gray-300">Actions you can take right now</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-emerald-300 mb-6">For European Buyers</h3>
              <ol className="space-y-4 text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="bg-emerald/20 text-emerald-300 font-bold px-3 py-1 rounded-lg flex-shrink-0">1</span>
                  <span><strong>Stage Q4/Q1 volumes:</strong> SAF ARA firmed late-month; use SAFc/Book-&-Claim as flexibility on top of physical</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-emerald/20 text-emerald-300 font-bold px-3 py-1 rounded-lg flex-shrink-0">2</span>
                  <span><strong>Price provenance & liability:</strong> Pay up for EU/UK-origin or fully documented CN supply; add duty & sustainability-liability clauses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-emerald/20 text-emerald-300 font-bold px-3 py-1 rounded-lg flex-shrink-0">3</span>
                  <span><strong>Check deliverability:</strong> For CN SAF, confirm export-permit headroom and shipment windows before value-locking</span>
                </li>
              </ol>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-emerald-300 mb-6">For Chinese Suppliers</h3>
              <ol className="space-y-4 text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="bg-emerald/20 text-emerald-300 font-bold px-3 py-1 rounded-lg flex-shrink-0">1</span>
                  <span><strong>Lead with documentation:</strong> ISCC/CORSIA IDs, CoAs, collection trails; state flexi vs ISO, FFA%, EUR.1 if applicable</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-emerald/20 text-emerald-300 font-bold px-3 py-1 rounded-lg flex-shrink-0">2</span>
                  <span><strong>Show permit capacity:</strong> Include whitelist proof and remaining export quota in offers; propose allocations beyond October</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-emerald/20 text-emerald-300 font-bold px-3 py-1 rounded-lg flex-shrink-0">3</span>
                  <span><strong>Offer delivery optionality:</strong> CIF/DAP to core EU ports; match HVO-grade specs when targeting refiner demand</span>
                </li>
              </ol>
            </motion.div>
          </div>

          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-emerald-300 mb-4">For Financiers & Trade Credit</h3>
            <p className="text-gray-200 leading-relaxed">
              Re-underwrite spreads: mild softness in UCOME vs firmer SAF ARA shifts cash-flow timing; stress at ±$100/t. Maintain elevated documentation risk discipline amid tighter buyer-liability regimes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* September Benchmarks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6">
              Quick Reference – September Benchmarks
            </h2>
            <p className="text-xl text-gray-600">Key end-of-month price indicators</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benchmarks.map((benchmark, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-navy/5 to-emerald/5 rounded-2xl p-8 text-center border border-emerald/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-navy mb-2">{benchmark.value}</div>
                <div className="text-sm font-semibold text-gray-700 mb-3">{benchmark.label}</div>
                <div className={`inline-flex items-center gap-1 text-sm ${
                  benchmark.trend === "up" ? "text-emerald" : benchmark.trend === "down" ? "text-amber-600" : "text-gray-600"
                }`}>
                  {benchmark.trend === "up" && <TrendingUp className="w-4 h-4" />}
                  {benchmark.trend === "down" && <TrendingDown className="w-4 h-4" />}
                  {benchmark.trend === "neutral" && <Minus className="w-4 h-4" />}
                  {benchmark.change}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Archive */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6">
              Report Archive
            </h2>
            <p className="text-xl text-gray-600">Access previous months' market intelligence reports</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-emerald bg-emerald/10 px-3 py-1 rounded-full">Current</span>
                <Calendar className="w-5 h-5 text-emerald" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">September 2025</h3>
              <p className="text-gray-600 mb-4">Latest market intelligence and price signals</p>
              <Button className="w-full bg-emerald hover:bg-emerald/90 text-white" data-testid="button-view-september-report">
                Current Report
              </Button>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Previous</span>
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">August 2025</h3>
              <p className="text-gray-600 mb-4">Previous month's market report</p>
              <Link href="/market-intelligence/china-europe-saf-index">
                <Button variant="outline" className="w-full border-navy text-navy hover:bg-navy hover:text-white" data-testid="button-view-august-report">
                  View August Report
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 mb-4">Get notified when new reports are published</p>
            <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white" data-testid="button-subscribe-reports">
              Subscribe to Updates
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald to-forest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Ready to Bridge China and Europe?
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-navy hover:bg-gray-100 px-8 py-6 text-lg" data-testid="button-contact-sales">
                  Contact Our Team
                </Button>
              </Link>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg" data-testid="button-view-archive">
                View Report Archive
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-600 text-center mb-4">
            <strong>Disclaimer:</strong> This report is compiled from curated market information for September 2025. It is for information only and not investment advice. Market levels are indicative and may differ from executed prices depending on specs, terms, and logistics. Figures are indicative; terms/specs affect comparability. UK duties note: SAF excluded.
          </p>
          <p className="text-sm text-gray-600 text-center">
            <strong>Methodology & Sources:</strong> Curated from September market notes and price checks (Sept 2025) and supplementary assessor commentary. Trade terms (FOB/CIF/DAP), container type (flexi/ISO), FFA%, and EUR.1 status materially affect comparability.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
