import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

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

      <section className="py-12 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to power your future with renewable energy? Our experts are
            here to help you find the perfect sustainable solution.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-card rounded-2xl p-8 shadow-card border">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2 text-foreground">
                  Contact us
                </h2>
                <p className="text-muted-foreground">
                  We'll respond within 24 hours
                </p>
              </div>

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

          <div className="xl:col-span-3">
            <Card className="border-0 shadow-elegant bg-gradient-to-br from-card to-card/80 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 p-4 bg-card rounded-lg border">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-foreground">
                      Office Hours
                    </h3>
                    <div className="text-sm text-muted-foreground">
                      <p>Monday - Saturday</p>
                      <p className="font-medium text-foreground">
                        9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                  </div>
                </CardContent>
              </Card>
            </div>
  
            {/* 
            <div className="bg-gradient-secondary rounded-lg p-6 border">
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Business Development
              </h3>
              <p className="text-muted-foreground mb-3">
                Mr. Vasanth D - Head: Business Development
              </p>
              <div className="flex items-center space-x-2 text-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:+919597055889"
                  className="font-medium hover:text-primary transition-colors"
                >
                  +91 95970 55889
                </a>
              </div>
            </div>
             */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
