import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Plane, Factory, Globe, Award } from "lucide-react";

export default function SAF() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-forest/80 to-emerald/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sustainable Aviation Fuel for a <span className="text-emerald-300">Net-Zero Future</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering the aviation industry with traceable, premium feedstock and high-yield HEFA-SPK production for Jet-A blending.
          </motion.p>
        </div>
      </section>

      {/* SAF Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://shaphargroup.com/wp-content/uploads/2025/04/SAF-mandate-emission-reduction-1024x683.webp"
                alt="SAF mandate emission reduction"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                The Only Viable Drop-in Replacement
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  <strong className="text-forest">SAF is the only viable, drop-in replacement to fossil-based Jet-A1</strong> that can be deployed with current infrastructure. Through HEFA-SPK and other technologies, SAF reduces lifecycle GHG emissions by up to <strong className="text-emerald">80%</strong>, while improving energy security and airline ESG performance.
                </p>
                <p>
                  Global aviation contributes nearly 3% of annual greenhouse gas (GHG) emissions. With air travel demand rising, Sustainable Aviation Fuel (SAF) is no longer optional—it is the path to a net-zero future.
                </p>
                <p>
                  The <strong className="text-navy">EU SAF blending mandate (ReFuelEU Aviation)</strong> and <strong className="text-navy">U.S. SAF Grand Challenge</strong> are accelerating adoption. By 2050, SAF could replace over 65% of conventional aviation fuel.
                </p>
              </div>
              <div className="mt-8 p-6 bg-emerald/10 rounded-2xl border-l-4 border-emerald">
                <p className="text-xl font-semibold text-forest">
                  At Shaphargroup, we are more than ready—we are already delivering.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
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
              Shaphargroup Partnership
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://shaphargroup.com/wp-content/uploads/2025/07/Partnership-and-drive-768x504.jpeg"
                alt="Partnership and drive"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Shaphargroup, one of China's leading SAF producers, collaborates with top global distributors, fuel suppliers, and aggregators to deliver high-quality HEFA-SPK directly to international airline partners.
              </p>
              <p className="text-xl font-semibold text-emerald mb-8">
                The outcome: a clean, traceable, and scalable SAF solution fully compliant with ASTM D7566 and CORSIA standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* UCO Traceability Section */}
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
              UCO Traceability and Verified Supply Chain Integrity
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Airlines and SAF offtakers today demand traceability, integrity, and accountability. With Shaphargroup, you get it all.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://shaphargroup.com/wp-content/uploads/2025/04/refining-Process-Image-1024x683.webp"
                alt="Refining process"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-navy mb-6">We implement:</h3>
              <div className="space-y-4">
                {[
                  "Feedstock traceability systems tied to ISCC and RED II requirements",
                  "A verified network of collection, pre-treatment, and refining partners",
                  "Real-time compliance documentation for SAF buyers, SAF plants, and investors",
                  "Volume transparency and carbon intensity scorecards tied to every metric ton"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-6 h-6 text-emerald mr-4 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="bg-navy text-white rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xl leading-relaxed mb-8">
              With our deep operational roots across <strong className="text-emerald-300">China, the Netherlands, and the U.S.</strong>, we <strong>do not simply trade feedstock—we engineer the supply chain</strong>.
            </p>
            
            <h3 className="text-2xl font-bold mb-6">Airlines and SAF refiners choose Shaphargroup because:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "We deliver high-grade UCO with maximum yield potential for SAF production",
                "We maintain physical refining capabilities and on-the-ground logistics",
                "We offer end-to-end transparency, compliance, and documentation",
                "We align with both environmental values and operational performance goals"
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-6 h-6 text-emerald-300 mr-4 flex-shrink-0 mt-1" />
                  <span className="text-gray-200">{reason}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-emerald-300 text-xl font-semibold">
                We don't talk about change—we fuel it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-gradient-to-br from-emerald to-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://shaphargroup.com/wp-content/uploads/2025/04/why-partner-with-Shaphargroup-1024x683.webp"
                alt="Why partner with Shaphargroup"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Partner? Let's Build the SAF Market Together
              </h2>
              <p className="text-xl text-emerald-100 mb-6">
                Whether you're a SAF refiner, airline sustainability director, or a biofuel investor, Shaphargroup is your reliable feedstock partner.
              </p>
              <p className="text-lg text-emerald-200 mb-8">
                Our production volumes are expanding. Our UCO is traceable. Our SAF collaborations are real.
              </p>
              <blockquote className="text-xl font-semibold text-white mb-8 pl-6 border-l-4 border-emerald-300">
                Let's lead aviation into a greener future—together.
              </blockquote>
              
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-white text-emerald hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 px-8 py-4"
              >
                Let's Connect
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}