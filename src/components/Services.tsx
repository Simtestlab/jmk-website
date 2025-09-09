import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import windImg from "@/assets/wind_energy.jpg";
import solarImg from "@/assets/solar_power.jpg";
import operImg from "@/assets/operatation_maintanace.jpg";
import itImg from "@/assets/it_solutions.jpg";
import { Button } from "@/components/ui/button";
import { Wind, Sun, Settings, Database, Laptop, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Wind,
      title: "Wind Energy Projects",
      description: "Complete wind farm development, installation, and maintenance services with multi-brand O&M capabilities.",
      image: windImg,
      path: "/services/wind-energy"
    },
    {
      icon: Sun,
      title: "Solar Power Projects",
      description: "End-to-end solar solutions from design to commissioning with EPC and turnkey project capabilities.",
      image: solarImg,
      path: "/services/solar-power"
    },
    {
      icon: Settings,
      title: "Operation & Maintenance",
  description: "Comprehensive O&M services ensuring optimal performance and maximum uptime for renewable energy assets.",
  image: operImg,
      path: "/services/operation-maintenance"
    },
    {
      icon: Laptop,
      title: "IT Solutions",
      description: "Advanced technology solutions for energy management, monitoring, and data analytics.",
      image: itImg,
      path: "/services/it-solutions"
    },
    {
      icon: Database,
      title: "Data Analysis",
      description: "Comprehensive data analytics for energy optimization, performance monitoring, and predictive maintenance.",
      path: "/services/data-analysis"
    },
    {
      icon: Users,
      title: "Social Responsibility",
      description: "Community development initiatives and sustainable practices that benefit local communities.",
      path: "/services/social-responsibility"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive renewable energy solutions tailored to meet your specific needs, 
            backed by decades of expertise and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className={"bg-gradient-card shadow-card border-0 hover:shadow-glow transition-spring group bg-cover bg-center bg-no-repeat"}
              style={service.image ? { backgroundImage: `url(${service.image})` } : undefined}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <Button variant="energy" size="sm" asChild>
                  <Link to={service.path ?? "/services"} className="flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-hero border-0 text-white">
            <CardContent className="p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Energy Future?
              </h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Let our team of experts help you design and implement the perfect 
                renewable energy solution for your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact" className="flex items-center">
                    Get Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Link to="/projects">
                    View Our Projects
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;