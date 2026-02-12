import { useState } from "react";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    {
      name: "Projects",
      href: "/projects",
      dropdown: [
        { name: "Ongoing Projects", href: "/projects/ongoing" },
        { name: "Completed Projects", href: "/projects/completed" },
      ],
    },
    { name: "Blog", href: "/blog" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];
  
  if (isOpen && desktopDropdownOpen) setDesktopDropdownOpen(false);

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={logo}
                alt="JMK Group"
                className="w-14 h-14 rounded-lg object-contain"
              />
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-foreground">
                  JMK GROUP
                </div>
                <div className="text-xs text-muted-foreground">
                  Energy Solutions
                </div>
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) =>
                item.name === "Projects" ? (
                  <div key={item.name} className="relative">
                    <button
                      className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors ${
                                  isActive("/projects")
                                    ? "text-primary font-semibold"
                                    : "text-foreground hover:opacity-90"
                      }`}
                      onClick={() => setDesktopDropdownOpen((open) => !open)}
                      aria-expanded={desktopDropdownOpen}
                    >
                      {item.name}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {desktopDropdownOpen && (
                      <div className="absolute left-0 mt-1 w-48 bg-white border border-muted-foreground/10 rounded-md shadow-lg z-20">
                        <Link
                          to="/projects/ongoing"
                          className={`block px-4 py-2 text-sm rounded-md ${isActive("/projects/ongoing") ? "text-primary font-semibold" : "text-foreground hover:opacity-90"}`}
                        >
                          Ongoing Projects
                        </Link>
                        <Link
                          to="/projects/completed"
                          className={`block px-4 py-2 text-sm rounded-md ${isActive("/projects/completed") ? "text-primary font-semibold" : "text-foreground hover:opacity-90"}`}
                        >
                          Completed Projects
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-primary font-semibold"
                        : "text-foreground hover:opacity-90"
                    }`}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              style={{ background: "none", border: "none", padding: 0, margin: 0, borderRadius: "1rem", width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
            {navigation.map((item) =>
              item.name === "Projects" ? (
                <div key={item.name} className="mb-2">
                  <button
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                      isActive("/projects")
                        ? "text-primary font-semibold"
                        : "text-foreground hover:opacity-90"
                    }`}
                    onClick={() => setMobileDropdownOpen((open) => !open)}
                    aria-expanded={mobileDropdownOpen}
                  >
                    {item.name}
                    <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {mobileDropdownOpen && (
                    <div className="pl-4">
                      <Link
                        to="/projects/ongoing"
                        className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/projects/ongoing") ? "text-primary font-semibold" : "text-foreground hover:opacity-90"}`}
                        onClick={() => setIsOpen(false)}
                        aria-current={isActive("/projects/ongoing") ? "page" : undefined}
                      >
                        Ongoing Projects
                      </Link>
                      <Link
                        to="/projects/completed"
                        className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/projects/completed") ? "text-primary font-semibold" : "text-foreground hover:opacity-90"}`}
                        onClick={() => setIsOpen(false)}
                        aria-current={isActive("/projects/completed") ? "page" : undefined}
                      >
                        Completed Projects
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary font-semibold"
                      : "text-foreground hover:opacity-90"
                  }`}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;