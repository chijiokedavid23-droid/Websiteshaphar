import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: January 2025</p>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-6">
                Shaphargroup collects information you provide directly to us, such as when you contact us through our website, subscribe to our newsletter, or engage with our services.
              </p>
              
              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-6">
                We use the information we collect to provide, maintain, and improve our services, respond to your inquiries, and communicate with you about our sustainable aviation fuel solutions.
              </p>
              
              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Information Sharing</h2>
              <p className="text-gray-700 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
              </p>
              
              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about this Privacy Policy, please contact us at info@shaphargroup.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}