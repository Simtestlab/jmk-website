import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

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
    { name: "Contact", href: "/contact" },
  ];
  
  if (isOpen && desktopDropdownOpen) setDesktopDropdownOpen(false);

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={logo}
                alt="JMK Groups"
                className="w-14 h-14 rounded-lg object-contain"
              />
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-foreground">
                  JMK GROUPS
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
                      className="px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 text-foreground"
                      onClick={() => setDesktopDropdownOpen((open) => !open)}
                    >
                      {item.name}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {desktopDropdownOpen && (
                      <div className="absolute left-0 mt-1 w-48 bg-white border border-muted-foreground/10 rounded-md shadow-lg z-20">
                        <Link
                          to="/projects/ongoing"
                          className="block px-4 py-2 text-sm text-foreground rounded-md"
                        >
                          Ongoing Projects
                        </Link>
                        <Link
                          to="/projects/completed"
                          className="block px-4 py-2 text-sm text-foreground rounded-md"
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
                    className="px-3 py-2 rounded-md text-sm font-medium text-foreground"
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
                    className="block px-3 py-2 rounded-md text-base font-medium text-foreground w-full text-left"
                    onClick={() => setMobileDropdownOpen((open) => !open)}
                  >
                    {item.name}
                    <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {mobileDropdownOpen && (
                    <div className="pl-4">
                      <Link
                        to="/projects/ongoing"
                        className="block px-3 py-2 rounded-md text-base font-medium text-foreground"
                        onClick={() => setIsOpen(false)}
                      >
                        Ongoing Projects
                      </Link>
                      <Link
                        to="/projects/completed"
                        className="block px-3 py-2 rounded-md text-base font-medium text-foreground"
                        onClick={() => setIsOpen(false)}
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
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground"
                  onClick={() => setIsOpen(false)}
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
