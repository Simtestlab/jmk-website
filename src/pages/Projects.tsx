import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Building, Zap, Award, Target } from "lucide-react";
import operationsMaintenanceImg from "@/assets/operations-maintenance.jpg";
import epcProjectsImg from "@/assets/epc-projects.jpg";
import humanResourcesImg from "@/assets/human-resources.jpg";
import solarPlantsImg from "@/assets/solar-plants.jpg";
import powerTradingImg from "@/assets/power-trading.jpg";
import corporateSolutionsImg from "@/assets/corporate-solutions.jpg";


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


const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-12 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
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
                  className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition spring group overflow-hidden h-full"
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
      </main>
      <Footer />
    </div>
  );
};

export default Projects;