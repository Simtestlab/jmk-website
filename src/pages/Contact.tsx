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
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquireFor: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your enquiry. We'll get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      enquireFor: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-2xl sm:text-2xl lg:text-5xl font-bold mb-4 text-foreground">
              Get In Touch
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
              Ready to start your renewable energy project? Contact our experts today for a personalized consultation.
            </p>
          </div>

          {/* Contact Form */}
          <div className="mb-16 lg:mb-20">
            <div className="bg-card rounded-2xl p-6 sm:p-8 lg:p-10 shadow-medium border">
              <div className="text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-semibold mb-3 text-card-foreground">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground">
                  We'll respond within 24 hours
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="h-12 border-input focus:border-ring"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="h-12 border-input focus:border-ring"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="h-12 border-input focus:border-ring"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="enquire-for" className="text-sm font-medium">
                      Service of Interest *
                    </Label>
                    <Select
                      value={formData.enquireFor}
                      onValueChange={(value) => handleInputChange("enquireFor", value)}
                      required
                    >
                      <SelectTrigger className="h-12 border-input focus:border-ring">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border border-border">
                        <SelectItem value="solar-energy">Solar Energy Solutions</SelectItem>
                        <SelectItem value="wind-energy">Wind Energy Solutions</SelectItem>
                        <SelectItem value="both">Solar + Wind Hybrid</SelectItem>
                        <SelectItem value="maintenance">O&M Services</SelectItem>
                        <SelectItem value="trading">Power Trading</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Project Details *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project requirements, location, capacity, timeline, etc."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="resize-none border-input focus:border-ring"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-medium bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center p-6 bg-secondary/50 rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-3 text-lg">Phone</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="text-sm">
                  <a 
                    href="tel:+919941066695" 
                    className="hover:text-primary transition-colors"
                  >
                    +91 99410 66695
                  </a>
                </p>
                <p className="text-sm">
                  <a 
                    href="tel:+919597055889" 
                    className="hover:text-primary transition-colors"
                  >
                    +91 95970 55889
                  </a>
                </p>
              </div>
            </div>

            <div className="text-center p-6 bg-secondary/50 rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-3 text-lg">Email</h3>
              <p className="text-sm text-muted-foreground">
                <a 
                  href="mailto:info@jmkgroups.in" 
                  className="hover:text-primary transition-colors"
                >
                  info@jmkgroups.in
                </a>
              </p>
            </div>

            <div className="text-center p-6 bg-secondary/50 rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-3 text-lg">Address</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No.46, Ramar Koil St<br />
                Ramnagar, Coimbatore<br />
                Tamil Nadu 641009
              </p>
            </div>

            <div className="text-center p-6 bg-secondary/50 rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-3 text-lg">Office Hours</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Monday - Saturday</p>
                <p className="font-medium">9:00 AM - 6:00 PM</p>
                <p className="text-xs">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Business Contact Card */}
          <div className="mt-12 lg:mt-16">
            <div className="bg-gradient-secondary rounded-2xl p-6 sm:p-8 text-center border shadow-soft">
              <h3 className="text-xl font-semibold mb-2 text-secondary-foreground">
                Business Development
              </h3>
              <p className="text-muted-foreground mb-4">
                Mr. Vasanth D - Head: Business Development
              </p>
              <div className="inline-flex items-center space-x-2 text-primary">
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