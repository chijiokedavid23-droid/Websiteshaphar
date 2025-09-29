import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import { updateSEOTags, SEO_CONFIGS } from "@/lib/seo";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, FileText, Download, Calendar, DollarSign, AlertCircle, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import reportPdfPath from "@assets/Shaphargroups-China-Europe-SAF-Bridge-Report-August-edition Copy_1759177805394.pdf";

export default function ChinaEuropeSAFIndex() {
  const [currentMonth] = useState("August 2025");

  useEffect(() => {
    updateSEOTags({
      title: "China → Europe SAF Index – August 2025 | Shaphargroup Market Intelligence",
      description: "Monthly market intelligence report on China-Europe UCO and SAF deals, prices, policy updates, and supply chain dynamics. Essential insights for European buyers and Chinese suppliers in the sustainable aviation fuel market.",
      keywords: "China Europe SAF index, UCO prices, sustainable aviation fuel market, HEFA SAF, China UCO export, European SAF import, aviation fuel prices, SAF market intelligence, Book and Claim",
      canonical: window.location.href,
      structuredData: [
        {
          "@context": "https://schema.org",
          "@type": "Report",
          "name": "China → Europe SAF Bridge Report – August 2025",
          "description": "Monthly market intelligence report providing essential insights for European SAF buyers and Chinese suppliers navigating the sustainable aviation fuel landscape",
          "datePublished": "2025-08-26",
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
          "name": "China-Europe SAF and UCO Price Index - August 2025",
          "description": "Monthly price data for UCO and SAF between China and Europe markets",
          "url": window.location.href,
          "temporalCoverage": "2025-08",
          "spatialCoverage": ["China", "Europe"],
          "variableMeasured": [
            "UCO T1 CIF ARA Price",
            "UCO FOB China Price", 
            "SAF FOB ARA Price",
            "SAF FOB China Price"
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
              "name": "China → Europe SAF Index",
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
      { period: "Early Aug", price: 1113 },
      { period: "Mid Aug", price: 1119 },
      { period: "End Aug", price: 1145 }
    ],
    ucoChina: [
      { period: "Early Aug", price: 1065 },
      { period: "Mid Aug", price: 1105 },
      { period: "End Aug", price: 1120 }
    ],
    safARA: [
      { period: "Early Aug", price: 2025 },
      { period: "Mid Aug", price: 2253 },
      { period: "End Aug", price: 2410 }
    ],
    safChina: [
      { period: "Early Aug", price: 1850 },
      { period: "Mid Aug", price: 1900 },
      { period: "End Aug", price: 2300 }
    ]
  };

  const benchmarks = [
    { label: "UCO T1 CIF ARA", value: "$1,145", change: "+$32 vs Aug 1", trend: "up" },
    { label: "UCO Ex-Works NL", value: "€1,065", change: "T2 grade, late-month", trend: "neutral" },
    { label: "UCO FOB China", value: "$1,120", change: "Standard grade, late-month", trend: "up" },
    { label: "SAF FOB ARA", value: "$2,410", change: "Late-month assessment", trend: "up" }
  ];

  const policyUpdates = [
    {
      title: "UK Anti-Dumping Duties",
      description: "15.68% duty for named exporters; 54.64% for all others on CN biodiesel/HVO. SAF explicitly excluded. Narrows UK arbitrage for CN biodiesel/HVO; strengthens premium for EU/UK provenance."
    },
    {
      title: "Germany Draft Biofuel Law",
      description: "Shifts sustainability liability to buyers when fraud is discovered – higher contractual risk, stronger KYC/traceability demands."
    },
    {
      title: "Ireland SAF Roadmap",
      description: "Issued its first SAF roadmap supporting product, market certainty, collaboration, and uptake."
    },
    {
      title: "Standards & Metrology",
      description: "FOBAS highlights energy-content mismeasurement in FAME blends; ISO 8217:2024 recommends ASTM D240 calorimetry for accurate NSE."
    }
  ];

  const dealHighlights = [
    {
      title: "SAIL Amsterdam",
      date: "August 20",
      description: "Event vessels to run on GoodFuels HVO100 (FincoEnergies) – showcasing drop-in readiness and premium for high-blend provenance."
    },
    {
      title: "Viking Line × Gasum",
      date: "August",
      description: "Bio-LNG deployment on RoPax (FuelEU Maritime pooling) – growing alternative compliance pathways within Europe."
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
              {currentMonth}
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
            <a href={reportPdfPath} download="Shaphargroup-China-Europe-SAF-Index-August-2025.pdf">
              <Button className="bg-emerald hover:bg-emerald/90 text-white px-8 py-6 text-lg" data-testid="button-download-report">
                <Download className="w-5 h-5 mr-2" />
                Download Full Report
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
            <p className="text-xl text-gray-600">What Moved in August</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="bg-gradient-to-br from-navy/5 to-emerald/5 rounded-2xl p-8 border border-emerald/20"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-navy mb-4">Europe Inland UCO</h3>
              <p className="text-gray-700 leading-relaxed">
                Tightened modestly mid-month as traceable EU/UK-origin material commanded a premium (e.g., UCO FOB ARA EU/UK ~€1,115/t; Spain→Scandinavia mid-€1,100s/t; UK bulk bids ↑ +€25/t). Rising compliance scrutiny is rewarding provenance and documentation quality.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-forest/5 to-sky/5 rounded-2xl p-8 border border-forest/20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-navy mb-4">China Collection</h3>
              <p className="text-gray-700 leading-relaxed">
                Strained as multiple traders paused offers due to low inventories; palm oil strength supported waste oil prices. Standard UCO DAP China frequently quoted RMB 7,800–8,100/t over the month.
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
                  <span>Prioritize provenance and documentation quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-emerald mt-1 flex-shrink-0" />
                  <span>Focus on traceable EU/UK-origin material</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-emerald mt-1 flex-shrink-0" />
                  <span>Accept premium for compliance certainty</span>
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
                Bridge Takeaway: Chinese Suppliers
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-forest mt-1 flex-shrink-0" />
                  <span>Lead with transparent documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-forest mt-1 flex-shrink-0" />
                  <span>Demonstrate consistent collection capacity</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-forest mt-1 flex-shrink-0" />
                  <span>Prove certification upfront</span>
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
            <p className="text-xl text-gray-600">End-Month Levels and Trends</p>
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

              <div className="mt-6 p-4 bg-emerald/10 rounded-lg border border-emerald/20">
                <div className="flex items-center gap-2 text-emerald font-bold">
                  <TrendingUp className="w-5 h-5" />
                  <span>+$32 ARA Premium Growth</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">UCO T1 CIF ARA gained $32/t from Aug 1 to Aug 26</p>
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
                  <YAxis domain={[1050, 1130]} />
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

              <div className="mt-6 p-4 bg-forest/10 rounded-lg border border-forest/20">
                <div className="flex items-center gap-2 text-forest font-bold">
                  <TrendingUp className="w-5 h-5" />
                  <span>+$55 China Price Rise</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">UCO FOB China standard increased $55/t through August</p>
              </div>
            </motion.div>
          </div>

          {/* SAF Price Rally */}
          <motion.div
            className="bg-gradient-to-br from-navy to-forest rounded-2xl p-8 text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">SAF Price Rally</h3>
            <p className="text-gray-200 mb-8">SAF markets showed strong momentum through August, with both ARA and China experiencing significant price increases.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-emerald-300">SAF FOB ARA</h4>
                <div className="space-y-3">
                  {priceData.safARA.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                      <span className="text-gray-200">{item.period}</span>
                      <span className="text-xl font-bold text-white">${item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4 text-emerald-300">SAF FOB China</h4>
                <div className="space-y-3">
                  {priceData.safChina.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                      <span className="text-gray-200">{item.period}</span>
                      <span className="text-xl font-bold text-white">${item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
              <p className="text-sm text-yellow-100">
                <strong>Arbitrage Update:</strong> Chinese UCOME → EU remained closed on generic duties (~$300/t closed late Aug; $116–124/t closed for cooperating duty bands).
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

          <motion.div
            className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-800">
              <strong className="text-amber-800">Bridge Takeaway:</strong> Policy risk now sits closer to the buyer (DE draft law; UK duties). Contracts must price in sustainability liability and potential tariff exposure.
            </p>
          </motion.div>
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
              Deal Highlights
            </h2>
            <p className="text-xl text-gray-600">Notable August transactions and partnerships</p>
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
            <p className="text-xl text-gray-300">Plain-English actions you can take right now</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                  <span><strong>Lock a slice of volume now.</strong> SAF in ARA jumped in August; secure part of Q4/Q1 and keep some flexibility for later. Use Book & Claim (SAFc) to cover any shortfall.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-emerald/20 text-emerald-300 font-bold px-3 py-1 rounded-lg flex-shrink-0">2</span>
                  <span><strong>Prioritise paperwork over headline price.</strong> Choose suppliers who can hand you ISCC/CORSIA certificates, chain-of-custody and origin proof on day one.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-emerald/20 text-emerald-300 font-bold px-3 py-1 rounded-lg flex-shrink-0">3</span>
                  <span><strong>Protect yourself in the contract.</strong> Add warranties on origin/sustainability, audit rights, remedies if certificates fail.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-emerald/20 text-emerald-300 font-bold px-3 py-1 rounded-lg flex-shrink-0">4</span>
                  <span><strong>Keep logistics optionality.</strong> Ask for quotes both flexi vs ISO and CIF vs DAP.</span>
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
                  <span><strong>Lead with documentation.</strong> Share ISCC/CORSIA IDs, recent lab results/CoAs, mass-balance/collection records.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-emerald/20 text-emerald-300 font-bold px-3 py-1 rounded-lg flex-shrink-0">2</span>
                  <span><strong>Quote clearly.</strong> State specs (FFA %, moisture/impurities), container (flexi/ISO), Incoterms, lead-time.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-emerald/20 text-emerald-300 font-bold px-3 py-1 rounded-lg flex-shrink-0">3</span>
                  <span><strong>Prove reliability.</strong> Explain how you secure collection, show inventory buffers and shipment schedules.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-emerald/20 text-emerald-300 font-bold px-3 py-1 rounded-lg flex-shrink-0">4</span>
                  <span><strong>Offer compliance comfort.</strong> Accept KYC checks, allow third-party audits.</span>
                </li>
              </ol>
            </motion.div>
          </div>
        </div>
      </section>

      {/* August Benchmarks */}
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
              August Benchmarks
            </h2>
            <p className="text-xl text-gray-600">Key end-of-month price indicators</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  benchmark.trend === "up" ? "text-emerald" : "text-gray-600"
                }`}>
                  {benchmark.trend === "up" && <TrendingUp className="w-4 h-4" />}
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
              <h3 className="text-2xl font-bold text-navy mb-2">August 2025</h3>
              <p className="text-gray-600 mb-4">Latest market intelligence and price signals</p>
              <Button className="w-full bg-emerald hover:bg-emerald/90 text-white" data-testid="button-view-august-report">
                View Report
              </Button>
            </motion.div>

            <motion.div
              className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center border-2 border-dashed border-gray-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500 font-medium">Previous months' reports will appear here</p>
              </div>
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
              <Button className="bg-white text-navy hover:bg-gray-100 px-8 py-6 text-lg" data-testid="button-contact-sales">
                Contact Our Team
              </Button>
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
          <p className="text-sm text-gray-600 text-center">
            <strong>Disclaimer:</strong> This report is compiled from curated market information for August 2025. It is for information only and not investment advice. Market levels are indicative and may differ from executed prices depending on specs, terms, and logistics. Figures are indicative; trade terms (FOB/CIF/DAP), container type (flexi/ISO), FFA%, and EUR.1 status materially affect price comparability.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
