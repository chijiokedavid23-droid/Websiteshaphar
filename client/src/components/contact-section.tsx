import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { MapPin, Building, Send, Phone, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald to-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's Shape the Future of Sustainable Aviation Together
          </motion.h2>
          <motion.p 
            className="text-xl text-emerald-900 mb-12 max-w-3xl mx-auto font-semibold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Do you have any questions about our SAF solutions, certifications, or global supply capabilities?
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-white text-emerald hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Us Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="bg-white border-2 border-white text-emerald hover:bg-emerald hover:text-white transition-all duration-300 font-semibold text-lg px-8 py-4"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Call
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-semibold text-emerald tracking-wide uppercase mb-4">
              Contact Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Global Operations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out to our teams across China, Netherlands, and beyond for sustainable aviation fuel solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* China Office */}
            <motion.div 
              className="bg-gray-50 rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mr-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy">China Operations</h3>
                  <p className="text-gray-600">Primary Refinery & Production</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Building className="w-5 h-5 text-emerald mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-charcoal">Address</div>
                    <div className="text-gray-600">
                      South of Industrial 6th Road, Economic Development Zone, Yangxin County, Shandong China
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Netherlands Office */}
            <motion.div 
              className="bg-gray-50 rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-emerald rounded-2xl flex items-center justify-center mr-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy">Netherlands Office</h3>
                  <p className="text-gray-600">European Operations Hub</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Building className="w-5 h-5 text-emerald mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-charcoal">Address</div>
                    <div className="text-gray-600">
                      Coolsingel 104, 3011 AG, Rotterdam, Netherlands
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            className="bg-gray-50 rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-navy mb-8 text-center">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-charcoal mb-2">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Your Name"
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="company" className="text-sm font-medium text-charcoal mb-2">
                  Company
                </Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="Your Company"
                  className="w-full"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-charcoal mb-2">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@company.com"
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-charcoal mb-2">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="w-full"
                />
              </div>
              
              <div className="md:col-span-2">
                <Label htmlFor="subject" className="text-sm font-medium text-charcoal mb-2">
                  Subject
                </Label>
                <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="saf-inquiry">SAF Supply Inquiry</SelectItem>
                    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                    <SelectItem value="technical">Technical Specifications</SelectItem>
                    <SelectItem value="certification">Certification Questions</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="md:col-span-2">
                <Label htmlFor="message" className="text-sm font-medium text-charcoal mb-2">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your SAF requirements, volume needs, timeline, and any specific questions..."
                  className="w-full"
                  required
                />
              </div>
              
              <div className="md:col-span-2 text-center">
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-emerald text-white hover:bg-emerald/90 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 px-8 py-4"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
