import { Card, CardContent, CardTitle } from "@/components/ui/card";
import windImg from "@/assets/wind_energy.jpg";
import solarImg from "@/assets/solar_power.jpg";
import operImg from "@/assets/operatation_maintanace.jpg";
import itImg from "@/assets/it_solutions.jpg";
import dataImg from "@/assets/data_analysis.jpg";
import socialImg from "@/assets/social_responsibility.jpg";

import operationsMaintenanceImg from "@/assets/operations-maintenance.jpg";
import epcProjectsImg from "@/assets/epc-projects.jpg";
import humanResourcesImg from "@/assets/human-resources.jpg";
import solarPlantsImg from "@/assets/solar-plants.jpg";
import powerTradingImg from "@/assets/power-trading.jpg";
import corporateSolutionsImg from "@/assets/corporate-solutions.jpg";
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

  const businessVerticals = [
    {
      title: "Operations & Maintenance",
      image: operationsMaintenanceImg,
      description: "100+ WEG under Operations and Maintenance",
      coverage: "Coimbatore, Tirupur, Tirunelveli and Kanyakumari Districts",
    },
    {
      title: "EPC Projects",
      image: epcProjectsImg,
      description: "100 Cr Turn Over Projects – Solar and Wind EPC",
      coverage: "Large-scale turnkey project delivery",
    },
    {
      title: "Human Resources",
      image: humanResourcesImg,
      description: "Experienced and Skilled Man power team",
      coverage: "150+ professionals with extensive expertise",
    },
    {
      title: "Solar Plants",
      image: solarPlantsImg,
      description: "Solar plants at Tirupur, Tirunelveli, Tuticorin Districts",
      coverage: "100+ MW solar capacity installed",
    },
    {
      title: "Power Trading",
      image: powerTradingImg,
      description: "Power supplier with 100+ clients and 1000+ MW",
      coverage: "Pan-India power distribution network",
    },
    {
      title: "Corporate Solutions",
      image: corporateSolutionsImg,
      description:
        "Supplying power to Corporates, Industries, Shopping Malls, Hospitals",
      coverage: "Diverse client portfolio across sectors",
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
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4 animate-fade-in">
              Comprehensive Renewable Energy Solutions
            </h1>
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Our Services
            </Badge>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comprehensive renewable energy services designed to meet specific
              client needs, leveraging decades of experience and cutting-edge
              technology for reliable and efficient outcomes.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
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

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
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
                className="relative overflow-hidden bg-gradient-card shadow-card border-0 hover:shadow-glow transition-spring group h-full"
              >
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-4 sm:p-6 flex-grow flex flex-col">
                  <CardTitle className="text-lg sm:text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </CardTitle>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 flex-grow">
                    {service.description}
                  </p>

                  <Link
                    to={service.path ?? "/services"}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors text-sm sm:text-base"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Sectors */}
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
            {/* Wind Energy Sector */}
            <Card className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition-spring">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Wind className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
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

            {/* Solar Energy Sector */}
            <Card className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition-spring">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
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

      {/* Business Verticals */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              JMK - THE BRAND
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive renewable energy solutions across multiple business
              verticals
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6 sm:mb-8">
            {businessVerticals.map((vertical, index) => (
              <Card
                key={index}
                className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition-spring group overflow-hidden h-full"
              >
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative h-32 sm:h-40 overflow-hidden">
                    <img
                      src={vertical.image}
                      alt={vertical.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-2 sm:bottom-3 left-3 sm:left-4 right-3 sm:right-4">
                      <h3 className="text-sm sm:text-lg font-bold text-white group-hover:text-primary-glow transition-colors">
                        {vertical.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 flex-grow flex flex-col">
                    <p className="text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3 flex-grow">
                      {vertical.description}
                    </p>
                    <div className="flex items-start">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {vertical.coverage}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pan-India Operations */}
          <Card className="bg-gradient-hero shadow-glow border-0 overflow-visible">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="text-white">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                    Pan-India Operations
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 opacity-90">
                    Leading renewable energy provider with extensive
                    infrastructure and proven track record
                  </p>
                </div>
                <div className="bg-white/10 p-4 sm:p-6 lg:p-8 backdrop-blur-sm rounded-lg">
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <div className="text-center">
                      <Building className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mx-auto mb-2 text-white" />
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                        100+
                      </div>
                      <div className="text-xs sm:text-sm text-white/80">
                        Clients Served
                      </div>
                    </div>
                    <div className="text-center">
                      <Zap className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mx-auto mb-2 text-white" />
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                        1000+
                      </div>
                      <div className="text-xs sm:text-sm text-white/80">
                        MW Capacity
                      </div>
                    </div>
                    <div className="text-center">
                      <Award className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mx-auto mb-2 text-white" />
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                        100Cr+
                      </div>
                      <div className="text-xs sm:text-sm text-white/80">
                        Project Value
                      </div>
                    </div>
                    <div className="text-center">
                      <Target className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mx-auto mb-2 text-white" />
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                        Pan
                      </div>
                      <div className="text-xs sm:text-sm text-white/80">
                        India Reach
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Project Sites */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
