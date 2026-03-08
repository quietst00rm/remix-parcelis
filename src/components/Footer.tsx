import React from "react";
import { Link } from "react-router-dom";
import { Mail, Shield } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const productLinks = [
  { name: "How It Works", path: "/how-it-works" },
  { name: "Pricing", path: "/pricing" },
  { name: "Risk Calculator", path: "/risk-calculator" },
];

const companyLinks = [
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Get Parcelis", path: "https://apps.shopify.com/parcelis", external: true },
  { name: "Blog", path: "/blog" },
];

const legalLinks = [
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms of Use", path: "/terms" },
  { name: "Affiliate Program", path: "/affiliate-program" },
];

const FooterHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h4 className="text-[13px] font-semibold uppercase tracking-[0.05em] text-ds-neutral-400 mb-5">
    {children}
  </h4>
);

const FooterLink: React.FC<{ to: string; external?: boolean; children: React.ReactNode }> = ({ to, external, children }) => (
  <li>
    {external ? (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[15px] text-ds-neutral-300 hover:text-white transition-colors duration-200"
      >
        {children}
      </a>
    ) : (
      <Link
        to={to}
        className="text-[15px] text-ds-neutral-300 hover:text-white transition-colors duration-200"
      >
        {children}
      </Link>
    )}
  </li>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-ds-surface-dark" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-14 md:pt-16 pb-10">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 text-center sm:text-left">
          {/* Brand */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
            <Link to="/" aria-label="PARCELIS Home">
              <img src={logoWhite} alt="PARCELIS Logo" className="h-10 w-auto mb-5" />
            </Link>
            <p className="text-[14px] text-ds-neutral-400 leading-relaxed max-w-xs mb-3">
              Turn package protection into profit. Zero hassle. Real insurance.
            </p>
            <p className="text-[13px] text-ds-neutral-500 leading-relaxed max-w-xs">
              Licensed package protection backed by InsureShip.
            </p>
          </div>

          {/* Product */}
          <div className="lg:col-span-2 lg:col-start-6">
            <FooterHeading>Product</FooterHeading>
            <ul className="flex flex-col gap-3" role="list">
              {productLinks.map((link) => (
                <FooterLink key={link.path} to={link.path}>
                  {link.name}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <FooterHeading>Company</FooterHeading>
            <ul className="flex flex-col gap-3" role="list">
              {companyLinks.map((link) => (
                <FooterLink key={link.path} to={link.path} external={'external' in link && link.external}>
                  {link.name}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div className="lg:col-span-2">
            <FooterHeading>Legal</FooterHeading>
            <ul className="flex flex-col gap-3 mb-8" role="list">
              {legalLinks.map((link) => (
                <FooterLink key={link.path} to={link.path}>
                  {link.name}
                </FooterLink>
              ))}
            </ul>

            <FooterHeading>Contact</FooterHeading>
            <a
              href="mailto:hello@myparcelis.com"
              className="inline-flex items-center gap-2 text-[15px] text-ds-neutral-300 hover:text-white transition-colors duration-200"
              aria-label="Email hello@myparcelis.com"
            >
              <Mail size={16} />
              hello@myparcelis.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-ds-neutral-500">
            &copy; {new Date().getFullYear()} PARCELIS. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[13px] text-ds-neutral-500">
            <span>Powered by</span>
            <div className="bg-white/10 px-3 py-1 rounded-full flex items-center gap-1.5 text-ds-neutral-300 font-semibold text-[13px]">
              <Shield size={13} />
              InsureShip
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
