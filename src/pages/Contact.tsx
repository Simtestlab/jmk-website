import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Clock, Send, Mail, Phone, Building2, Zap } from "lucide-react";
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

      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Let's Power Your Future
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to embrace renewable energy? Our experts are here to help you find the perfect sustainable solution for your needs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <p className="text-sm text-muted-foreground mb-3">Available Mon-Sat, 9 AM - 6 PM</p>
                <a href="tel:+919597055889" className="text-primary hover:underline font-medium">
                  +91 95970 55889
                </a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground mb-3">We'll respond within 24 hours</p>
                <a href="mailto:info@jmkgroups.in" className="text-primary hover:underline font-medium">
                  info@jmkgroups.in
                </a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Office Hours</h3>
                <p className="text-sm text-muted-foreground mb-3">Monday - Saturday</p>
                <p className="text-primary font-medium">9:00 AM - 6:00 PM</p>
              </CardContent>
            </Card>
          </div>

          {/* Office Locations */}
          <div className="mb-12">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <Building2 className="h-6 w-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">Our Offices</h2>
              </div>
              <p className="text-muted-foreground text-lg">We have multiple locations across India. Visit us at the nearest office.</p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm rounded-3xl p-6 md:p-10 border shadow-2xl">

                {
                  (() => {
                    const isOdd = addresses.length % 2 === 1;
                    const main = isOdd ? addresses.slice(0, -1) : addresses;
                    const last = isOdd ? addresses[addresses.length - 1] : null;
                    return (
                      <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {main.map((addr, i) => (
                            <div key={i} className="group rounded-2xl border border-primary/10 bg-card overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                              <div className="relative h-40 overflow-hidden">
                                <img 
                                  src={addr.image} 
                                  alt={`Office location ${i + 1}`}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                <div className="absolute top-3 right-3 p-2.5 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                                  <MapPin className="h-5 w-5 text-primary" />
                                </div>
                              </div>
                              <div className="p-5 bg-gradient-to-br from-card to-card/80">
                                <address className="not-italic text-muted-foreground leading-relaxed text-center text-sm">
                                  {addr.lines.map((l, idx) => (
                                    <div key={idx} className="font-medium">{l}</div>
                                  ))}
                                </address>
                              </div>
                            </div>
                          ))}
                        </div>

                        {last && (
                          <div className="mt-6 flex justify-center">
                            <div className="sm:w-1/2 group rounded-2xl border border-primary/10 bg-card overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                              <div className="relative h-40 overflow-hidden">
                                <img 
                                  src={last.image} 
                                  alt="GST Office"
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                <div className="absolute top-3 right-3 p-2.5 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                                  <MapPin className="h-5 w-5 text-primary" />
                                </div>
                              </div>
                              <div className="p-5 bg-gradient-to-br from-card to-card/80">
                                <address className="not-italic text-muted-foreground leading-relaxed text-center text-sm">
                                  {last.lines.map((l, idx) => (
                                    <div key={idx} className="font-medium">{l}</div>
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
