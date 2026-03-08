import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import logo from "@/assets/logo.png";

const NAV_LINKS = [
  { name: "Home", path: "/" },
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
        className={`fixed top-0 w-full z-50 transition-all duration-300 overflow-visible ${
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
                className={`text-[14px] font-medium px-5 py-2.5 rounded-lg bg-transparent border transition-all duration-200 ${
                  isTransparent
                    ? "border-white/30 text-white hover:bg-white/10 hover:border-white"
                    : "border-slate-300 text-slate-600 hover:border-slate-400"
                }`}
              >
                File a Claim
              </a>
              <a
                href="https://apps.shopify.com/parcelis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Parcelis"
                className={`text-[14px] font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-[1px] transition-all duration-200 ${
                  isTransparent
                    ? "bg-white text-[#1E3A8A] hover:bg-gray-50"
                    : "bg-[#1E3A8A] text-white hover:bg-[#172554]"
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
        className={`fixed inset-0 z-50 bg-[#0F172A] transition-transform lg:hidden flex flex-col ${
          mobileOpen ? "translate-x-0 duration-300 ease-out" : "translate-x-full duration-200 ease-in"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between h-[76px] px-6 border-b border-white/10 flex-shrink-0">
          <Link to="/" onClick={() => setMobileOpen(false)} aria-label="PARCELIS Home">
            <img src={logoWhite} alt="PARCELIS Logo" className="h-10 w-auto" />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-11 h-11 flex items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto px-6 pt-8" aria-label="Mobile navigation links">
          {/* Main links */}
          {[
            { name: "Home", path: "/" },
            { name: "How It Works", path: "/how-it-works" },
            { name: "Pricing", path: "/pricing" },
            { name: "About", path: "/about" },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-4 text-xl font-semibold transition-colors ${
                isActive(link.path)
                  ? "text-white border-l-[3px] border-[#3B82F6] pl-4"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="border-t border-white/10 my-2" />

          {/* Resources label */}
          <span className="block text-xs uppercase tracking-widest text-[#3B82F6] font-semibold mt-6 mb-2">
            Resources
          </span>
          {[
            { name: "FAQ", path: "/faq" },
            { name: "Blog", path: "/blog" },
            { name: "Self-Insurance Risks", path: "/risk-calculator" },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 pl-4 text-lg transition-colors ${
                isActive(link.path)
                  ? "text-white border-l-[3px] border-[#3B82F6]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="border-t border-white/10 my-2" />

          {/* Contact & File a Claim */}
          {[
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-4 text-xl font-semibold transition-colors ${
                isActive(link.path)
                  ? "text-white border-l-[3px] border-[#3B82F6] pl-4"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://claims.myparcelis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-4 text-xl font-semibold text-white/70 hover:text-white transition-colors"
          >
            File a Claim
          </a>
        </nav>

        {/* Bottom CTA */}
        <div className="flex-shrink-0 px-6 pb-10 pt-4">
          <a
            href="https://apps.shopify.com/parcelis"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-white text-[#1E3A8A] font-semibold py-4 rounded-xl text-lg text-center shadow-lg hover:shadow-xl transition-all"
          >
            Get Parcelis
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
