import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, Leaf } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your enquiry. We'll get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="w-full pl-8 pr-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Section - Contact Form */}
          <div>
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4 text-foreground">
                Get In Touch
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to power your future with renewable energy? Our experts are here to help you find the perfect sustainable solution.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-4 shadow-medium border mb-8">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-1">Contact us</h2>
                <p className="text-muted-foreground text-base">We'll respond within 24 hours</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="resize-none"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Right Section - Company Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Contact Information
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Reach out through any of these channels. We're here to help with your renewable energy needs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-card rounded-xl border shadow-soft">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p><a href="tel:+919941066695" className="hover:text-primary transition-colors">+91 99410 66695</a></p>
                    <p><a href="tel:+919597055889" className="hover:text-primary transition-colors">+91 95970 55889</a></p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-card rounded-xl border shadow-soft">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@jmkgroups.in" className="hover:text-primary transition-colors">
                      info@jmkgroups.in
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-card rounded-xl border shadow-soft">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No.46, Ramar Koil St<br />
                    Ramnagar, Coimbatore<br />
                    Tamil Nadu 641009
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-card rounded-xl border shadow-soft">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Office Hours</h3>
                  <div className="text-muted-foreground">
                    <p>Monday - Saturday</p>
                    <p className="font-medium">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-secondary rounded-xl p-6 border shadow-soft">
              <h3 className="text-xl font-semibold mb-2 text-accent-foreground">
                Business Development
              </h3>
              <p className="text-accent-foreground/80 mb-3">
                Mr. Vasanth D - Head: Business Development
              </p>
              <div className="flex items-center space-x-2 text-accent-foreground">
                <Phone className="w-4 h-4" />
                <a 
                  href="tel:+919597055889" 
                  className="font-medium hover:underline"
                >
                  +91 95970 55889
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;