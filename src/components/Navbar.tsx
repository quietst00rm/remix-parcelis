import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import logo from "@/assets/logo.png";

const NAV_LINKS = [
  { name: "How It Works", path: "/how-it-works" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
  {
    name: "Resources",
    path: "#",
    children: [
      { name: "FAQ", path: "/faq" },
      { name: "Blog", path: "/blog" },
      { name: "Self-Insurance Risks", path: "/risk-calculator" },
    ],
  },
  { name: "Contact", path: "/contact" },
];

// Pages where hero has a dark background and nav should start transparent with white text
const DARK_HERO_PAGES = ["/", "/how-it-works", "/pricing", "/about", "/contact", "/apply", "/faq", "/affiliate-program", "/risk-calculator", "/calculate", "/partner-with-us"];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();

  const isActive = (path: string) => location.pathname === path;
  const isChildActive = (children?: { path: string }[]) =>
    children?.some((c) => location.pathname === c.path) ?? false;

  const hasDarkHero =
    DARK_HERO_PAGES.includes(location.pathname) ||
    location.pathname.startsWith("/blog");

  const isTransparent = hasDarkHero && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close mobile on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };
  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  // Dynamic classes
  const linkColor = isTransparent ? "text-white" : "text-ds-neutral-700";
  const linkHover = isTransparent ? "hover:text-blue-200" : "hover:text-ds-primary-light";
  const activeLinkColor = isTransparent ? "text-white" : "text-ds-primary";

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isTransparent
            ? "bg-transparent"
            : "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="w-full max-w-[1440px] mx-auto pl-[40px] pr-[40px]" style={{ overflow: 'visible' }}>
           <div className="flex items-center justify-between h-[76px]">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 min-w-[120px]" aria-label="PARCELIS Home">
              <img
                src={isTransparent ? logoWhite : logo}
                alt="PARCELIS Logo"
                className="h-10 w-auto transition-opacity duration-300"
              />
            </Link>

            {/* Desktop Center Links */}
            <div className="hidden lg:flex items-center gap-2">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div
                    key={link.name}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      className={`font-dm text-[15px] font-medium px-3 py-2 rounded-lg flex items-center gap-1 transition-colors duration-200 ${
                        isChildActive(link.children)
                          ? `${activeLinkColor} border-b-2 ${isTransparent ? "border-white" : "border-ds-primary"}`
                          : `${linkColor} ${linkHover}`
                      }`}
                      onClick={() => setDropdownOpen((v) => !v)}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                      aria-label="Resources menu"
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Dropdown Panel */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white rounded-xl shadow-lg p-2 min-w-[200px] transition-all duration-200 origin-top ${
                        dropdownOpen
                          ? "opacity-100 scale-100 pointer-events-auto"
                          : "opacity-0 scale-95 pointer-events-none"
                      }`}
                      role="menu"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          role="menuitem"
                          className={`block px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors duration-150 ${
                            isActive(child.path)
                              ? "text-ds-primary bg-ds-neutral-50"
                              : "text-ds-neutral-700 hover:bg-ds-neutral-50 hover:text-ds-primary"
                          }`}
                          onClick={() => setDropdownOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`font-dm text-[15px] font-medium px-3 py-2 rounded-lg transition-colors duration-200 ${
                      isActive(link.path)
                        ? `${activeLinkColor} border-b-2 ${isTransparent ? "border-white" : "border-ds-primary"}`
                        : `${linkColor} ${linkHover}`
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://claims.myparcelis.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="File a Claim"
                className={`text-[14px] font-medium px-5 py-2.5 rounded-[10px] border-[1.5px] transition-all duration-300 ${
                  isTransparent
                    ? "border-white/35 text-white hover:border-white/50"
                    : "border-ds-neutral-300 text-ds-neutral-700 hover:border-ds-neutral-400"
                }`}
              >
                File a Claim
              </a>
              <a
                href="https://apps.shopify.com/parcelis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Parcelis"
                className={`text-[14px] font-semibold px-[22px] py-2.5 rounded-[10px] transition-all duration-300 hover:shadow-md ${
                  isTransparent
                    ? "bg-white text-ds-primary hover:bg-gray-50"
                    : "bg-ds-primary text-white hover:bg-ds-primary-dark"
                }`}
              >
                Get Parcelis
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-ds-primary-light focus:ring-offset-2"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X size={28} className={isTransparent && !mobileOpen ? "text-white" : "text-ds-neutral-900"} />
              ) : (
                <Menu size={28} className={isTransparent ? "text-white" : "text-ds-neutral-900"} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-lg text-ds-neutral-700 hover:bg-ds-neutral-50 transition-colors focus:outline-none focus:ring-2 focus:ring-ds-primary-light focus:ring-offset-2"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="px-8 flex flex-col gap-1" aria-label="Mobile navigation links">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.name}>
                <span className="block text-[13px] font-semibold uppercase tracking-[0.05em] text-ds-neutral-400 px-3 pt-4 pb-2">
                  {link.name}
                </span>
                {link.children.map((child) => (
                  <Link
                    key={child.path}
                    to={child.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-3 text-[20px] font-medium rounded-xl transition-colors ${
                      isActive(child.path)
                        ? "text-ds-primary bg-ds-neutral-50"
                        : "text-ds-neutral-700 hover:text-ds-primary hover:bg-ds-neutral-50"
                    }`}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-3 text-[20px] font-medium rounded-xl transition-colors ${
                  isActive(link.path)
                    ? "text-ds-primary bg-ds-neutral-50"
                    : "text-ds-neutral-700 hover:text-ds-primary hover:bg-ds-neutral-50"
                }`}
              >
                {link.name}
              </Link>
            )
          )}

          {/* Mobile CTAs */}
          <div className="mt-8 flex flex-col gap-3 px-3">
            <a
              href="https://claims.myparcelis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-[16px] font-medium px-5 py-3 rounded-xl border-[1.5px] border-ds-neutral-300 text-ds-neutral-700 hover:border-ds-neutral-400 transition-all"
              aria-label="File a Claim"
            >
              File a Claim
            </a>
            <a
              href="https://apps.shopify.com/parcelis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-[16px] font-semibold px-5 py-3 rounded-xl bg-ds-primary text-white hover:bg-ds-primary-dark transition-all shadow-lg"
              aria-label="Get Parcelis"
            >
              Get Parcelis
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
