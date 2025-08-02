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
    <section id="capabilities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-sm font-semibold text-emerald tracking-wide uppercase mb-4">
            Our Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Built for Reliability at Scale
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're meeting blending mandates or decarbonizing voluntarily, we provide 
            ready-to-export, drop-in HEFA SAF — at scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`w-16 h-16 ${capability.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">{capability.title}</h3>
                <p className="text-gray-600 mb-4">{capability.description}</p>
                <div className="text-3xl font-bold text-gold">{capability.metric}</div>
                <div className="text-sm text-gray-500 font-medium">{capability.unit}</div>
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
