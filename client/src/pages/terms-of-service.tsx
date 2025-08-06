import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last updated: January 2025</p>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 mb-6">
                By accessing and using Shaphargroup's website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              
              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Use License</h2>
              <p className="text-gray-700 mb-6">
                Permission is granted to temporarily access the materials on Shaphargroup's website for personal, non-commercial transitory viewing only.
              </p>
              
              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Disclaimer</h2>
              <p className="text-gray-700 mb-6">
                The materials on Shaphargroup's website are provided on an 'as is' basis. Shaphargroup makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              
              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Business Information</h2>
              <p className="text-gray-700 mb-6">
                Shaphargroup is a sustainable aviation fuel company with operations in China, Netherlands, and the United States. We specialize in HEFA SAF production, UCO refining, and renewable energy solutions.
              </p>
              
              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-6">
                For questions regarding these Terms of Service, please contact us at info@shaphargroup.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}