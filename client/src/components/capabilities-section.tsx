import { motion } from "framer-motion";
import { Factory, Plane, Ship, Award, Clock, Handshake } from "lucide-react";

export default function CapabilitiesSection() {
  const capabilities = [
    {
      icon: Factory,
      title: "Premium UCO Refining",
      description: "High-quality, certified feedstock processing",
      metric: "500,000",
      unit: "MT/year capacity",
      color: "bg-emerald"
    },
    {
      icon: Plane,
      title: "SAF Production",
      description: "Fueling Europe's green transition",
      metric: "350,000",
      unit: "MT/year target",
      color: "bg-sky"
    },
    {
      icon: Ship,
      title: "Global Logistics",
      description: "End-to-end supply chain management",
      metric: "100%",
      unit: "REACH compliant",
      color: "bg-forest"
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Certified Quality",
      description: "Advanced refinery oversight & third-party inspection (SGS-supervised loading)"
    },
    {
      icon: Clock,
      title: "Reliable Delivery",
      description: "Export-ready infrastructure with firm shipping timelines"
    },
    {
      icon: Handshake,
      title: "Flexible Partnerships",
      description: "Structured for long-term offtake or spot supply"
    }
  ];

  return (
    <section id="capabilities" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-sm font-bold text-emerald tracking-wider uppercase mb-6 flex items-center justify-center">
            <div className="w-8 h-0.5 bg-emerald mr-3"></div>
            Our Capabilities
            <div className="w-8 h-0.5 bg-emerald ml-3"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-8 tracking-tight">
            Built for{" "}
            <span className="text-emerald">Reliability</span>{" "}
            at Scale
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Whether you're meeting blending mandates or decarbonizing voluntarily, we provide 
            ready-to-export, drop-in HEFA SAF — at scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald/5 to-mint/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className={`w-18 h-18 ${capability.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <IconComponent className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-emerald transition-colors duration-300">{capability.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{capability.description}</p>
                  <div className="text-4xl font-bold text-emerald">{capability.metric}</div>
                  <div className="text-sm text-gray-500 font-medium tracking-wide">{capability.unit}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key Features */}
        <motion.div 
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-navy mb-8 text-center">
            Why Choose Shaphargroup?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <IconComponent className="w-12 h-12 text-emerald mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-navy mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
