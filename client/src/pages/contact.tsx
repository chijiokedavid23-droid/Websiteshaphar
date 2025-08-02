import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { MapPin, Building, Send, Phone, Mail, Clock, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
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
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const offices = [
    {
      country: "USA",
      title: "US Operations",
      address: "5718 Westheimer Rd, Suite 1000, Houston, Texas 77057",
      icon: MapPin,
      color: "bg-navy"
    },
    {
      country: "Netherlands",
      title: "European Operations Hub",
      address: "Coolsingel 104, 3011 AG, Rotterdam, Netherlands",
      icon: Building,
      color: "bg-emerald"
    },
    {
      country: "China",
      title: "Primary Refinery & Production",
      address: "South of Industrial 6th Road, Economic Development Zone, Yangxin County, Binzhou City, Shandong Province, 251800",
      icon: Globe,
      color: "bg-forest"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      value: "info@shaphargroup.com",
      link: "mailto:info@shaphargroup.com"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      value: "+31 649-902-224 / +86-186-5635-3968",
      link: "tel:+31649902224"
    },
    {
      icon: Clock,
      title: "Work Hours",
      value: "Monday to Friday: 7am – 7pm, Weekend: 10am – 5pm",
      link: null
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-navy/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-emerald-300">Contact</span> Us
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are providing waste-to-fuel solutions for a net-zero future. Want to partner with us? Reach out to us.
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
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
              Global Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out to our teams across China, Netherlands, and the US for sustainable aviation fuel solutions.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div 
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-emerald rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      className="text-gray-600 hover:text-emerald transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.value}</p>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Office Locations */}
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => {
              const IconComponent = office.icon;
              return (
                <motion.div 
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 shadow-lg"
                  initial={{ opacity: 0, x: index === 0 ? -50 : index === 1 ? 0 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 ${office.color} rounded-2xl flex items-center justify-center mr-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy">{office.country}</h3>
                      <p className="text-gray-600">{office.title}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Building className="w-5 h-5 text-emerald mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-charcoal">Address</div>
                        <div className="text-gray-600">
                          {office.address}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
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
                    <SelectItem value="investment">Investment Opportunities</SelectItem>
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

      <Footer />
    </div>
  );
}