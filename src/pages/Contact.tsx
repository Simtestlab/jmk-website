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

  const addresses = [
    {
      lines: [
        "JMK Energy Infra Pvt.Ltd,NO.46,",
        "Malavia st, Ramar Koli St, Ramnagar,",
        "Coimbatore - 641009.",
      ],
      image: "/src/assets/corporate-solutions.jpg",
    },
    {
      lines: [
        "JMK Energy Infra Pvt.Ltd, NO.1112/D1,",
        "Desigar Sannathi street, Keeraimandabam, Pillaiyarpalayam,",
        "Kanchipuram - 631501.",
      ],
      image: "/src/assets/renewable-energy-landscape.jpg",
    },
    {
      lines: [
        "JMK Energy Infra Pvt.Ltd, 544/4A1&4A2,",
        "Kumarapuram Village, Kannupothai Road, Aralvaimozhi,",
        "Tirunelveli - 627105.",
      ],
      image: "/src/assets/wind_power.jpg",
    },
    {
      lines: [
        "JMK Energy Infra Pvt.Ltd, Solar Plant, 111/2B, 113/3,",
        "Kottakudi Village, Melur- Taluk,",
        "Madurai - 625106",
      ],
      image: "/src/assets/solar-plants.jpg",
    },
    {
      lines: ["JMK ENERGY INFRA PVT LTD", "Gst 33AAGCJ0424N1ZN", "Coimbatore"],
      image: "/src/assets/epc-projects.jpg",
    },
  ];

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
            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center mb-6 gap-4">
                <h2 className="text-4xl font-bold text-foreground text-center">Contact us</h2>
                <div className="ml-auto hidden lg:block" />
              </div>
            </div>
            <div className="lg:col-span-2 flex justify-center">
              <div className="w-full max-w-4xl bg-gradient-to-br from-card to-card/80 rounded-2xl p-8 shadow-elegant border">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-semibold">Visit Our Office</h3>
                  </div>
                  <p className="text-muted-foreground">We have multiple locations across India. Find the nearest office below.</p>
                </div>

                {
                  (() => {
                    const isOdd = addresses.length % 2 === 1;
                    const main = isOdd ? addresses.slice(0, -1) : addresses;
                    const last = isOdd ? addresses[addresses.length - 1] : null;
                    return (
                      <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {main.map((addr, i) => (
                            <div key={i} className="rounded-2xl border bg-card overflow-hidden hover:shadow-lg transition-shadow">
                              <div className="relative h-32 overflow-hidden">
                                <img 
                                  src={addr.image} 
                                  alt={`Office location ${i + 1}`}
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute top-2 right-2 p-2 bg-white/90 rounded-lg">
                                  <MapPin className="h-4 w-4 text-primary" />
                                </div>
                              </div>
                              <div className="p-4">
                                <address className="not-italic text-muted-foreground leading-snug text-center text-sm">
                                  {addr.lines.map((l, idx) => (
                                    <div key={idx}>{l}</div>
                                  ))}
                                </address>
                              </div>
                            </div>
                          ))}
                        </div>

                        {last && (
                          <div className="mt-6 flex justify-center">
                            <div className="sm:w-1/2 rounded-2xl border bg-card overflow-hidden hover:shadow-lg transition-shadow">
                              <div className="relative h-32 overflow-hidden">
                                <img 
                                  src={last.image} 
                                  alt="GST Office"
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute top-2 right-2 p-2 bg-white/90 rounded-lg">
                                  <MapPin className="h-4 w-4 text-primary" />
                                </div>
                              </div>
                              <div className="p-4">
                                <address className="not-italic text-muted-foreground leading-snug text-center text-sm">
                                  {last.lines.map((l, idx) => (
                                    <div key={idx}>{l}</div>
                                  ))}
                                </address>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    );
                  })()
                }
              </div>
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
