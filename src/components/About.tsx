import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Target,
  Users,
  Zap,
  Building,
  Award,
  Calendar,
  CheckCircle,
  Factory,
  Wind,
  Sun,
  Network,
  Briefcase,
} from "lucide-react";
import visionImg from "@/assets/vision.png";
import missionImg from "@/assets/mission.png";
import valueImg from "@/assets/value.png";
import founderPortrait from "@/assets/founder-portrait.jpg";
import renewableEnergyLandscape from "@/assets/renewable-energy-landscape.jpg";
import operationsMaintenanceImg from "@/assets/operations-maintenance.jpg";
import epcProjectsImg from "@/assets/epc-projects.jpg";
import humanResourcesImg from "@/assets/human-resources.jpg";
import solarPlantsImg from "@/assets/solar-plants.jpg";
import powerTradingImg from "@/assets/power-trading.jpg";
import corporateSolutionsImg from "@/assets/corporate-solutions.jpg";
import organizationalChart from "@/assets/organizational-chart.png";

const About = () => {
  const milestones = [
    {
      year: "2010",
      description:
        "Maple Consultancy – Govt liaisons for corporates and individual owners",
    },
    {
      year: "2016",
      description:
        "Esal green energy PVT ltd - power trading and wind asset company of 1.75 MW",
    },
    {
      year: "2017",
      description: "JDRAJ energy PVT ltd- wind assets having 1 MW",
    },
    {
      year: "2019",
      description: "Jsalis energy PVT ltd - wind assets having 1.25 MW",
    },
    {
      year: "2019",
      description:
        "Windkraft energy PVT ltd- O&M company 5 Cr turn over Windkraft projects india pvt ltd",
    },
    { year: "2019", description: "EPC and O&M Partner of EWT Netherlands" },
    {
      year: "2022",
      description: "JJA Energy Pvt Ltd - projects company 35 Cr turn over",
    },
    {
      year: "2023",
      description:
        "JMK energy infra pvt ltd Solar EPC company having work order around 100 Cr till date",
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

  const familyCompanies = [
    {
      name: "Maple Consultancy",
      year: "2010",
      focus: "Government Liaison Services",
      description:
        "Specialized consultancy for corporate and individual stakeholders",
    },
    {
      name: "Esal Green Energy Pvt Ltd",
      year: "2016",
      focus: "Power Trading & Wind Assets",
      description: "1.75 MW wind power generation and trading operations",
    },
    {
      name: "JDRAJ Energy Pvt Ltd",
      year: "2017",
      focus: "Wind Energy Assets",
      description: "1 MW dedicated wind power generation facility",
    },
    {
      name: "Jsalis Energy Pvt Ltd",
      year: "2019",
      focus: "Wind Power Generation",
      description: "1.25 MW wind energy production and management",
    },
    {
      name: "Windkraft Energy Pvt Ltd",
      year: "2019",
      focus: "O&M Services",
      description:
        "5 Cr turnover O&M company with comprehensive maintenance solutions",
    },
    {
      name: "JJA Energy Pvt Ltd",
      year: "2022",
      focus: "Project Development",
      description:
        "35 Cr turnover projects company specializing in renewable energy",
    },
    {
      name: "JMK Energy Infra Pvt Ltd",
      year: "2023",
      focus: "Solar EPC Solutions",
      description: "100 Cr+ work orders for comprehensive solar EPC services",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            About JMK GROUPS
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Established in 2010, we've grown from a small seed to a trusted
            leader in renewable energy solutions across India, guided by
            innovation and ethical values.
          </p>
        </div>

        <div className="mb-16">
          <Card className="bg-gradient-card shadow-elegant border-0 overflow-visible">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-6 lg:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Leadership & Legacy
                  </h2>
                  <div className="space-y-4 text-base text-muted-foreground">
                    <p>
                      Established in 2010, we grew with the goodwill of our
                      trusted clients. Now we deliver Solar EPC/Turnkey
                      Projects, WindMill O&M Service, and Power Trading.
                    </p>
                    <p>
                      Located in India's largest wind corridor, Muppandal Belt,
                      Tamil Nadu, we have evolved with innovations in wind and
                      solar energy for over 20 years.
                    </p>
                    <p>
                      Our team of 150+ professionals brings experience in wind,
                      solar, and related industries, driving green energy
                      operations across India.
                    </p>
                  </div>
                </div>

                <div className="relative w-full h-[220px] lg:h-[280px] overflow-hidden rounded-lg">
                  <img
                    src={renewableEnergyLandscape}
                    alt="Renewable Energy Landscape"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 flex items-center justify-center">
                    <div className="text-center text-white w-full px-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                          <div className="text-2xl font-bold mb-1">400MW</div>
                          <div className="text-xs opacity-90">
                            Wind Farms Maintained
                          </div>
                        </div>
                        <div className="backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                          <div className="text-2xl font-bold mb-1">100MW</div>
                          <div className="text-xs opacity-90">
                            Solar Projects Completed
                          </div>
                        </div>
                        <div className="backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                          <div className="text-2xl font-bold mb-1">150+</div>
                          <div className="text-xs opacity-90">
                            Team Professionals
                          </div>
                        </div>
                        <div className="backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                          <div className="text-2xl font-bold mb-1">20+</div>
                          <div className="text-xs opacity-90">
                            Years Experience
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <div className="grid gap-6 items-center lg:grid-cols-[320px_1fr]">
            <div className="bg-gradient-secondary p-6 rounded-2xl flex items-center justify-center">
              <div className="max-w-[320px] w-full">
                <img
                  src={founderPortrait}
                  alt="Mr. Muthu Kumar J - Founder and Managing Director"
                  className="w-full max-h-[360px] object-contain rounded-xl shadow-glow"
                />
              </div>
            </div>

            <div className="p-4 lg:p-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Mr. Muthu Kumar J
              </h2>
              <h3 className="text-lg md:text-xl text-primary font-semibold mb-4">
                Founder and Managing Director
              </h3>
              <div className="space-y-3 text-base md:text-lg text-muted-foreground">
                <p>
                  Under the visionary leadership of Mr. Muthu Kumar J, JMK
                  Groups has evolved into a well-established trusted
                  organization in the Green Energy Sector and a well-reputed
                  brand name in South India.
                </p>
                <p>
                  His commitment to sustainable energy solutions and ethical
                  business practices has positioned JMK Groups as a reliable
                  partner for renewable energy projects across the nation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition-spring group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-110 transition-spring">
                <img
                  src={visionImg}
                  alt="Vision"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Vision
              </h3>
              <p className="text-muted-foreground">
                Green and Clean mother earth for our children.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition-spring group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-110 transition-spring">
                <img
                  src={missionImg}
                  alt="Mission"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Mission
              </h3>
              <p className="text-muted-foreground">
                Be an organization constantly focused on catering global energy
                needs through green and clean energy led by scientific
                innovations governed by ethical values.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition-spring group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-110 transition-spring">
                <img
                  src={valueImg}
                  alt="Values"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Values
              </h3>
              <p className="text-muted-foreground">
                Innovations governed by Ethics and cater them at high Quality.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Organizational Hierarchy
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our leadership structure designed for excellence in renewable
              energy operations
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card shadow-elegant border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="flex justify-center">
                  <img
                    src={organizationalChart}
                    alt="JMK Groups Organizational Hierarchy Chart"
                    className="w-full max-w-2xl h-auto object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-3">
            Milestones We Reach
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-6">
            Our journey of growth and innovation in renewable energy
          </p>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/80 to-primary/40 z-10 md:-translate-x-1/2 rounded-full"></div>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-6 md:left-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-glow md:-translate-x-1/2 top-6 z-20"></div>
                  <div
                    className={`ml-14 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <Card className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition-spring overflow-visible">
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          <Calendar className="w-4 h-4 text-primary mr-2" />
                          <span className="font-bold text-primary text-base">
                            {milestone.year}
                          </span>
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              JMK - THE BRAND
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive renewable energy solutions across multiple business
              verticals
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {businessVerticals.map((vertical, index) => (
              <Card
                key={index}
                className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition-spring group overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={vertical.image}
                      alt={vertical.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="text-lg font-bold text-white group-hover:text-primary-glow transition-colors">
                        {vertical.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-medium text-foreground mb-3">
                      {vertical.description}
                    </p>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        {vertical.coverage}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-hero shadow-glow border-0 overflow-visible">
            <CardContent className="p-6 lg:p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Pan-India Operations
                  </h3>
                  <p className="text-base md:text-lg mb-6 opacity-90">
                    Leading renewable energy provider with extensive
                    infrastructure and proven track record
                  </p>
                </div>
                <div className="bg-white/10 p-6 lg:p-8 backdrop-blur-sm rounded-lg">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <Building className="w-10 h-10 mx-auto mb-2 text-white" />
                      <div className="text-2xl font-bold text-white">100+</div>
                      <div className="text-xs text-white/80">
                        Clients Served
                      </div>
                    </div>
                    <div className="text-center">
                      <Zap className="w-10 h-10 mx-auto mb-2 text-white" />
                      <div className="text-2xl font-bold text-white">1000+</div>
                      <div className="text-xs text-white/80">MW Capacity</div>
                    </div>
                    <div className="text-center">
                      <Award className="w-10 h-10 mx-auto mb-2 text-white" />
                      <div className="text-2xl font-bold text-white">
                        100Cr+
                      </div>
                      <div className="text-xs text-white/80">Project Value</div>
                    </div>
                    <div className="text-center">
                      <Target className="w-10 h-10 mx-auto mb-2 text-white" />
                      <div className="text-2xl font-bold text-white">Pan</div>
                      <div className="text-xs text-white/80">India Reach</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
