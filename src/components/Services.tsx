import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import windImg from "@/assets/wind_energy.jpg";
import solarImg from "@/assets/solar_power.jpg";
import operImg from "@/assets/operatation_maintanace.jpg";
import itImg from "@/assets/it_solutions.jpg";
import dataImg from "@/assets/data_analysis.jpg";
import socialImg from "@/assets/social_responsibility.jpg";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Wind,
  Sun,
  Settings,
  Database,
  Laptop,
  Users,
  ArrowRight,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Wind,
      title: "Wind Energy Projects",
      description:
        "Developers conduct extensive wind resource assessments to identify suitable locations for wind farms. With our expertise gained over 20 years, we provide turnkey projects and comprehensive O&M services.",
      image: windImg,
      path: "/services/wind-energy",
    },
    {
      icon: Sun,
      title: "Solar Power Projects",
      description:
        "JMK Energy Infra provides turnkey solutions for solar projects from CONCEPT TO COMMISSIONING. This includes Engineering, Procurement & Construction (EPC) solutions for Grid-connected ground-mounted solar and Rooftop solar projects.",
      image: solarImg,
      path: "/services/solar-power",
    },
    {
      icon: Settings,
      title: "Operation & Maintenance",
      description:
        "Operation and Maintenance (O&M) involves regular activities and tasks necessary to ensure the optimal performance, reliability, and safety of the facility throughout its operational life.",
      image: operImg,
      path: "/services/operation-maintenance",
    },
    {
      icon: Laptop,
      title: "IT Solutions",
      description:
        "IT solutions encompass a wide range of technologies, services, and strategies designed to address specific business needs and challenges using computer systems, software, and networking technologies.",
      image: itImg,
      path: "/services/it-solutions",
    },
    {
      icon: Database,
      title: "Data Analysis",
      description:
        "Data analysis involves the process of inspecting, cleaning, transforming, and modeling data to discover useful information, draw conclusions, and support decision-making.",
      image: dataImg,
      path: "/services/data-analysis",
    },
    {
      icon: Users,
      title: "Corporate Social Responsibility",
      description:
        "As our organization believes in giving back to the society, we take part in various activities such as aiding for education among the downtrodden, promotion of scientific temper, Tribal welfare, women upliftment, and green environment activities.",
      image: socialImg,
      path: "/services/social-responsibility",
    },
  ];

  const projectSites = [
    "Muppandal",
    "Avaraikulam",
    "Surundai",
    "Tenkasi",
    "Devarkulam",
    "Palladam",
    "Kovilpatti",
    "Kayathar",
    "Theni",
    "Udumalpet",
  ];

  const keyHighlights = [
    "20+ Years of Experience",
    "Multi-brand O&M Service Providers",
    "EPC/Turnkey Project Specialists",
    "Power Trading Experts",
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              What We Do
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              JMK Groups Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are doing Solar Projects EPC/Turnkey Projects along with WindMills Multi brand O&M Service providers and Power Traders. India's largest wind Energy and Solar Project corridor Muppandal Belt, Tamilnadu.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {keyHighlights.map((highlight, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2">
                {highlight}
              </Badge>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="relative overflow-hidden bg-gradient-card shadow-card border-0 hover:shadow-glow transition-spring group bg-cover bg-center bg-no-repeat h-44 md:h-56"
                style={
                  service.image
                    ? {
                        backgroundImage: `url(${service.image})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }
                    : undefined
                }
              >
                <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />
                <div className="relative z-10 flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-primary-glow">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <p className="text-white/90 mb-4 line-clamp-3">{service.description}</p>
                    <Link
                      to={service.path ?? "/services"}
                      className="inline-flex items-center text-white/90 hover:text-white font-semibold"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Sectors</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Wind Energy Sector</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Comprehensive Annual Operation and Maintenance Security Service Contracts</h4>
                  <p>Developers conduct extensive wind resource assessments to identify suitable locations for wind farms. Areas with consistent and strong wind speeds are preferred.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Turn Key Projects</h4>
                  <p>With our expertise gained over 20 years, we will identify the right load and location, perform micrositing, land deals, Transportation, foundation, Balance of plants and TANGEDCO powering.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Power Requirements</h4>
                  <p>We offer consultation mentorship and Govt liaison services right from power registering to catering power needs between the organizations.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Sun className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Solar Energy Sector</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">JMK Groups dedicated wing for solar energy</h4>
                  <p>We have end to-end in-house capabilities across all aspects; we follow global best practices across Products, Process, Technology and Safety.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Customized Solar Projects</h4>
                  <p>JMK is committed to developing customized solar Projects for Industrial, Commercial, and Institutional consumers. We offer each customer an innovative solution concept.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Professional Project Management</h4>
                  <p>With an experienced Project management team, we follow an exceptionally professional and systematic approach to all our solar projects.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <MapPin className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-center">Our Project Sites</h2>
          </div>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            We have successfully executed projects across multiple locations in Tamil Nadu, India's renewable energy hub.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {projectSites.map((site, index) => (
              <Badge key={index} variant="outline" className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                {site}
              </Badge>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
