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
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div className="bg-emerald/5 border-l-4 border-emerald p-6 rounded-r-lg">
                <p className="text-lg text-gray-700 font-medium">
                  At Shaphargroup, we are committed to protecting your privacy and personal information. This Privacy Statement explains how we collect, use, and safeguard your data when you interact with our sustainable aviation fuel services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  Shaphargroup collects the following types of information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, and company details when you contact us</li>
                  <li><strong>Business Information:</strong> Details about your organization's fuel requirements and sustainability goals</li>
                  <li><strong>Technical Information:</strong> IP address, browser type, and website usage data through cookies</li>
                  <li><strong>Communication Records:</strong> Correspondence and inquiries about our SAF and UCO refining services</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use your personal information for the following business purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide information about our sustainable aviation fuel and UCO refining services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Process business transactions and maintain customer relationships</li>
                  <li>Send updates about our sustainability initiatives and industry developments</li>
                  <li>Improve our website and services based on usage analytics</li>
                  <li>Comply with legal and regulatory requirements in the energy sector</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Information Sharing and Disclosure</h2>
                <p className="text-gray-700 mb-4">
                  Shaphargroup does not sell, rent, or trade your personal information. We may share information in these limited circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>With trusted business partners to fulfill service requests</li>
                  <li>To comply with legal obligations or regulatory requirements</li>
                  <li>To protect our rights, property, or safety, or that of our customers</li>
                  <li>In connection with business transfers or corporate restructuring</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Data Security and Retention</h2>
                <p className="text-gray-700 mb-4">
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Secure servers and encrypted data transmission</li>
                  <li>Access controls limiting data access to authorized personnel only</li>
                  <li>Regular security assessments and updates</li>
                  <li>Data retention policies aligned with business and legal requirements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">International Data Transfers</h2>
                <p className="text-gray-700 mb-4">
                  As a global company with operations in China, the Netherlands, and the United States, Shaphargroup may transfer personal information across borders to support our business operations. We ensure appropriate safeguards are in place for international data transfers in compliance with applicable privacy laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Your Privacy Rights</h2>
                <p className="text-gray-700 mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate data</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request data portability where applicable</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Cookies and Tracking</h2>
                <p className="text-gray-700 mb-4">
                  Our website uses cookies and similar tracking technologies to enhance user experience and analyze website performance. You can manage cookie preferences through your browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Updates to This Privacy Statement</h2>
                <p className="text-gray-700 mb-4">
                  We may update this Privacy Statement periodically to reflect changes in our practices or applicable laws. We will notify you of significant changes through our website or direct communication.
                </p>
              </div>
              
              <div className="bg-navy/5 border-l-4 border-navy p-6 rounded-r-lg">
                <h2 className="text-2xl font-bold text-navy mb-4">Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions about this Privacy Statement or wish to exercise your privacy rights, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> privacy@shaphargroup.com</p>
                  <p><strong>General Inquiries:</strong> info@shaphargroup.com</p>
                  <p><strong>Headquarters:</strong> Shandong, China</p>
                  <p><strong>European Office:</strong> Netherlands</p>
                  <p><strong>US Office:</strong> United States</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}