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
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  User,
  Send,
  Clock,
  Zap,
  Wind,
} from "lucide-react";
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

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5"></div>
        <div className="relative container py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
              <Zap className="h-4 w-4" />
              Renewable Energy Experts
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Let's Build a
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Sustainable Future
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get in touch with our renewable energy specialists for your solar
              and wind energy projects
            </p>
          </div>
        </div>
      </section>

      <main className="container py-16 -mt-8 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
          {/* Contact Cards */}
          <div className="xl:col-span-2 space-y-6">
            {/* Quick Contact */}
            <Card className="overflow-hidden border-0 shadow-elegant bg-gradient-to-br from-card to-card/80">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Quick Contact</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                    <p className="text-sm text-muted-foreground mb-1">
                      General Enquiries
                    </p>
                    <a
                      href="tel:+919941066695"
                      className="text-lg font-semibold text-primary hover:underline"
                    >
                      +91 99410 66695
                    </a>
                  </div>
                  <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href="mailto:info@jmkgroups.in"
                      className="text-lg font-semibold text-primary hover:underline"
                    >
                      info@jmkgroups.in
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Head */}
            <Card className="overflow-hidden border-0 shadow-elegant bg-gradient-to-br from-card to-card/80">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <User className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Business Development
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      Mr. Vasanth D
                    </h4>
                    <p className="text-muted-foreground">
                      Head: Business Development
                    </p>
                  </div>
                  <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                    <a
                      href="tel:+919597055889"
                      className="text-primary hover:underline font-medium"
                    >
                      +91 9597055889
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="overflow-hidden border-0 shadow-elegant bg-gradient-to-br from-card to-card/80">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Visit Our Office</h3>
                </div>
                <address className="not-italic text-muted-foreground leading-relaxed">
                  No.46, Ramar Koil St, Ramnagar,
                  <br />
                  Coimbatore 641009
                  <br />
                  Tamil Nadu, India
                </address>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="xl:col-span-3">
            <Card className="border-0 shadow-elegant bg-gradient-to-br from-card to-card/80 overflow-hidden">
              <CardContent className="p-8">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Send className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Start Your Project</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Ready to switch to renewable energy? Fill out the form and
                    we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className="h-12 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="h-12 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="h-12 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="enquire-for"
                        className="text-sm font-medium"
                      >
                        I'm Interested In
                      </Label>
                      <Select
                        value={formData.enquireFor}
                        onValueChange={(value) =>
                          handleInputChange("enquireFor", value)
                        }
                      >
                        <SelectTrigger className="h-12 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20">
                          <SelectValue placeholder="Select your interest" />
                        </SelectTrigger>
                        <SelectContent className="z-50 bg-popover border border-border shadow-elegant">
                          <SelectItem value="solar-energy">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-accent rounded-full"></div>
                              Solar Energy Solutions
                            </div>
                          </SelectItem>
                          <SelectItem value="wind-energy">
                            <div className="flex items-center gap-2">
                              <Wind className="h-4 w-4 text-primary" />
                              Wind Energy Projects
                            </div>
                          </SelectItem>
                          <SelectItem value="both">
                            <div className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-accent" />
                              Solar + Wind Hybrid
                            </div>
                          </SelectItem>
                          <SelectItem value="maintenance">
                            O&M Services
                          </SelectItem>
                          <SelectItem value="trading">Power Trading</SelectItem>
                          <SelectItem value="consultation">
                            Project Consultation
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Project Details
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your energy requirements, project scope, timeline, and any specific needs..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium shadow-elegant hover:shadow-glow transition-all duration-300"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
