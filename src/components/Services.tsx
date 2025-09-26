import { Card, CardContent, CardTitle } from "@/components/ui/card";
import windImg from "@/assets/wind_energy.jpg";
import solarImg from "@/assets/solar_power.jpg";
import operImg from "@/assets/operatation_maintanace.jpg";
import itImg from "@/assets/it_solutions.jpg";
import dataImg from "@/assets/data_analysis.jpg";
import socialImg from "@/assets/social_responsibility.jpg";
import windSectorImg from "@/assets/wind_sector.jpg";
import solarSectorImg from "@/assets/solar_sector.jpg";

import { Badge } from "@/components/ui/badge";
import {
  Wind,
  Sun,
  Settings,
  Laptop,
  Users,
  ArrowRight,
  MapPin,
  Zap,
  TrendingUp,
  CheckCircle,
  Heart,
  Building,
  Target,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Wind,
      title: "Wind Energy Projects",
      description:
        "Wind power is a proven and powerful way to generate large-scale renewable energy. Capable of producing substantial electricity, wind energy has emerged as a reliable solution for powering industries, businesses, and communities.",
      image: windImg,
      path: "/services/wind-energy",
      highlights: [
        "Large-scale renewable energy",
        "BOOT & CAPS models",
        "Proven technology",
      ],
    },
    {
      icon: Sun,
      title: "Solar Power Projects",
      description:
        "At JMK Groups, we deliver comprehensive solar energy solutions that power businesses, industries, and communities. As a leading EPC partner and project developer, we provide end-to-end services.",
      image: solarImg,
      path: "/services/solar-power",
      highlights: [
        "End-to-end EPC services",
        "Site acquisition to O&M",
        "Industrial & commercial",
      ],
    },
    {
      icon: Settings,
      title: "Operations & Maintenance",
      description:
        "Comprehensive O&M services designed to ensure optimal performance, maximum uptime, and long-term reliability of your renewable energy assets.",
      image: operImg,
      path: "/services/operation-maintenance",
      highlights: [
        "Maximum uptime",
        "Long-term reliability",
        "Optimal performance",
      ],
    },
    {
      icon: Laptop,
      title: "IT Solutions",
      description:
        "We provide advanced technology solutions for energy management, monitoring, and data analytics, enabling businesses and utilities to optimize performance and improve efficiency.",
      image: itImg,
      path: "/services/it-solutions",
      highlights: [
        "Smart monitoring",
        "Real-time tracking",
        "Predictive analytics",
      ],
    },
    {
      icon: TrendingUp,
      title: "Data Analysis",
      description:
        "We offer comprehensive data analytics solutions to optimize energy generation, monitor system performance, and enable predictive maintenance for renewable energy assets.",
      image: dataImg,
      path: "/services/data-analysis",
      highlights: [
        "Performance optimization",
        "Predictive maintenance",
        "Actionable insights",
      ],
    },
    {
      icon: Heart,
      title: "Social Responsibility",
      description:
        "At JMK Groups, we are committed to community development and sustainable practices that create lasting positive impact in the regions where we operate.",
      image: socialImg,
      path: "/services/social-responsibility",
      highlights: [
        "Community development",
        "Education & healthcare",
        "Economic growth",
      ],
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
      <section className="py-8 sm:py-10 lg:py-12 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4 animate-fade-in">
              Comprehensive Renewable Energy Solutions
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comprehensive renewable energy services designed to meet specific
              client needs, leveraging decades of experience and cutting-edge
              technology for reliable and efficient outcomes.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
            {keyHighlights.map((highlight, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 text-foreground border-primary/20 text-sm"
              >
                {highlight}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              From renewable energy development to maintenance and data
              analytics
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12 sm:mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="relative overflow-hidden bg-gradient-card shadow-card border-0 hover:shadow-glow transition spring group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent"></div>
                  <div className="relative p-4 sm:p-6 flex flex-col justify-end">
                    <CardTitle className="text-xl sm:text-2xl font-bold mb-3 text-white leading-tight">
                      {service.title}
                    </CardTitle>
                    <p className="text-sm sm:text-base text-white/90 mb-4 line-clamp-3 leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      to={service.path ?? "/services"}
                      className="inline-flex items-center text-white hover:text-white/80 font-semibold transition-all duration-200 text-sm sm:text-base group-hover:translate-x-1 transform hover:underline"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Sectors
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialized expertise across wind and solar energy sectors with
              comprehensive solutions
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 mb-8 sm:mb-12">
            <Card className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition spring">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                    <img 
                      src={windSectorImg} 
                      alt="Wind Energy" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Wind Energy Sector
                  </h3>
                </div>
                <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-muted-foreground">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Zap className="w-4 h-4 text-primary mr-2" />
                      Annual O&M Security Service Contracts
                    </h4>
                    <p>
                      Developers conduct extensive wind resource assessments to
                      identify suitable locations for wind farms. Areas with
                      consistent and strong wind speeds are preferred.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Settings className="w-4 h-4 text-primary mr-2" />
                      Turn Key Projects
                    </h4>
                    <p>
                      With our expertise gained over 20 years, we will identify
                      the right load and location, perform micrositing, land
                      deals, Transportation, foundation, Balance of plants and
                      TANGEDCO powering.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Users className="w-4 h-4 text-primary mr-2" />
                      Power Requirements
                    </h4>
                    <p>
                      We offer consultation mentorship and Govt liaison services
                      right from power registering to catering power needs
                      between the organizations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition spring">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                    <img 
                      src={solarSectorImg} 
                      alt="Solar Energy" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Solar Energy Sector
                  </h3>
                </div>
                <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-muted-foreground">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Building className="w-4 h-4 text-primary mr-2" />
                      Dedicated Solar Energy Wing
                    </h4>
                    <p>
                      We have end to-end in-house capabilities across all
                      aspects; we follow global best practices across Products,
                      Process, Technology and Safety.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Target className="w-4 h-4 text-primary mr-2" />
                      Customized Solar Projects
                    </h4>
                    <p>
                      JMK is committed to developing customized solar Projects
                      for Industrial, Commercial, and Institutional consumers.
                      We offer each customer an innovative solution concept.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Award className="w-4 h-4 text-primary mr-2" />
                      Professional Project Management
                    </h4>
                    <p>
                      With an experienced Project management team, we follow an
                      exceptionally professional and systematic approach to all
                      our solar projects.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-0 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Our Project Sites
              </h2>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              We have successfully executed projects across multiple locations
              in Tamil Nadu, India's renewable energy hub.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {projectSites.map((site, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default bg-gradient-card shadow-card border-primary/20"
              >
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