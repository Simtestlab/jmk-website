import { Card, CardContent, CardTitle } from "@/components/ui/card";
import windImg from "@/assets/wind_energy.jpg";
import solarImg from "@/assets/solar_power.jpg";
import operImg from "@/assets/operatation_maintanace.jpg";
import itImg from "@/assets/it_solutions.jpg";
import dataImg from "@/assets/data_analysis.jpg";
import socialImg from "@/assets/social_responsibility.jpg";

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

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive renewable energy solutions with detailed expertise
              and proven track record
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 mb-8 sm:mb-12">
            <Card className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition spring relative group">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                    <img
                      src={windImg}
                      alt="Wind Energy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Wind Energy Projects
                  </h3>
                </div>
                <div className="space-y-4 text-sm sm:text-base text-muted-foreground mb-4">
                  <p>
                    Wind power is a proven and powerful way to generate
                    large-scale renewable energy. Capable of producing
                    substantial electricity, wind energy has emerged as a
                    reliable solution for powering industries, businesses, and
                    communities.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Large-scale renewable energy solutions</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>BOOT & CAPS model implementations</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Proven technology with 20+ years experience</span>
                    </div>
                  </div>
                </div>
                <Link
                  to="/services/wind-energy"
                  className="absolute bottom-4 right-4 inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-all duration-200 text-sm group-hover:translate-x-1 transform"
                >
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition spring relative group">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                    <img
                      src={solarImg}
                      alt="Solar Energy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Solar Power Projects
                  </h3>
                </div>
                <div className="space-y-4 text-sm sm:text-base text-muted-foreground mb-4">
                  <p>
                    At JMK Groups, we deliver comprehensive solar energy
                    solutions that power businesses, industries, and
                    communities. As a leading EPC partner and project developer,
                    we provide end-to-end services.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>End-to-end EPC services</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Site acquisition to O&M</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Industrial & commercial solutions</span>
                    </div>
                  </div>
                </div>
                <Link
                  to="/services/solar-power"
                  className="absolute bottom-4 right-4 inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-all duration-200 text-sm group-hover:translate-x-1 transform"
                >
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition spring relative group">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                    <img
                      src={operImg}
                      alt="Operations & Maintenance"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Operations & Maintenance
                  </h3>
                </div>
                <div className="space-y-4 text-sm sm:text-base text-muted-foreground mb-4">
                  <p>
                    Comprehensive O&M services designed to ensure optimal
                    performance, maximum uptime, and long-term reliability of
                    your renewable energy assets with multi-brand expertise.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Maximum uptime guarantee</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Long-term reliability assurance</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Multi-brand service expertise</span>
                    </div>
                  </div>
                </div>
                <Link
                  to="/services/operation-maintenance"
                  className="absolute bottom-4 right-4 inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-all duration-200 text-sm group-hover:translate-x-1 transform"
                >
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition spring relative group">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                    <img
                      src={itImg}
                      alt="IT Solutions"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    IT Solutions
                  </h3>
                </div>
                <div className="space-y-4 text-sm sm:text-base text-muted-foreground mb-4">
                  <p>
                    We provide advanced technology solutions for energy
                    management, monitoring, and data analytics, enabling
                    businesses and utilities to optimize performance and improve
                    efficiency.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Smart monitoring systems</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Real-time performance tracking</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Advanced analytics & reporting</span>
                    </div>
                  </div>
                </div>
                <Link
                  to="/services/it-solutions"
                  className="absolute bottom-4 right-4 inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-all duration-200 text-sm group-hover:translate-x-1 transform"
                >
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition spring relative group">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                    <img
                      src={dataImg}
                      alt="Data Analysis"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Data Analysis
                  </h3>
                </div>
                <div className="space-y-4 text-sm sm:text-base text-muted-foreground mb-4">
                  <p>
                    We offer comprehensive data analytics solutions to optimize
                    energy generation, monitor system performance, and enable
                    predictive maintenance for renewable energy assets.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Performance optimization</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Predictive maintenance</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Actionable insights & reporting</span>
                    </div>
                  </div>
                </div>
                <Link
                  to="/services/data-analysis"
                  className="absolute bottom-4 right-4 inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-all duration-200 text-sm group-hover:translate-x-1 transform"
                >
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition spring relative group">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                    <img
                      src={socialImg}
                      alt="Social Responsibility"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Social Responsibility
                  </h3>
                </div>
                <div className="space-y-4 text-sm sm:text-base text-muted-foreground mb-4">
                  <p>
                    At JMK Groups, we are committed to community development and
                    sustainable practices that create lasting positive impact in
                    the regions where we operate.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Community development programs</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Education & healthcare initiatives</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Local economic growth support</span>
                    </div>
                  </div>
                </div>
                <Link
                  to="/services/social-responsibility"
                  className="absolute bottom-4 right-4 inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-all duration-200 text-sm group-hover:translate-x-1 transform"
                >
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
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
