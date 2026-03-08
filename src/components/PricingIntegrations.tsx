import React from "react";
import { Code2 } from "lucide-react";
import shopifyLogo from "@/assets/platforms/shopify.svg";
import nextLogo from "@/assets/platforms/29next.png";
import woocommerceLogo from "@/assets/platforms/woocommerce.svg";
import bigcommerceLogo from "@/assets/platforms/bigcommerce.svg";
import magentoLogo from "@/assets/platforms/magento.svg";

interface Integration {
  name: string;
  status: "LIVE" | "AVAILABLE";
  logo?: string;
  isApi?: boolean;
  description: string;
  href?: string;
}

const INTEGRATIONS: Integration[] = [
  { name: "Shopify", status: "LIVE", logo: shopifyLogo, description: "One-click app", href: "https://apps.shopify.com/parcelis" },
  { name: "NEXT Commerce", status: "LIVE", logo: nextLogo, description: "Full integration" },
  { name: "WooCommerce", status: "LIVE", logo: woocommerceLogo, description: "Plugin available" },
  { name: "BigCommerce", status: "LIVE", logo: bigcommerceLogo, description: "Full integration" },
  { name: "Magento", status: "LIVE", logo: magentoLogo, description: "Extension available" },
  { name: "Custom API", status: "AVAILABLE", isApi: true, description: "RESTful API" },
];

const PricingIntegrations: React.FC = () => {
  return (
    <section className="bg-[#F8FAFC] py-14 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <h2 className="font-heading text-[30px] md:text-[40px] font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.2] text-center mb-4">
          Seamless Platform Integration
        </h2>
        <p className="font-dm text-[16px] md:text-[18px] text-[#64748B] leading-[1.7] max-w-[620px] mx-auto text-center mb-14">
          Connect Parcelis to your platform in minutes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {INTEGRATIONS.map((item) => {
            const isApi = item.isApi;
            const Tag = item.href ? "a" : "div";
            const linkProps = item.href
              ? { href: item.href, target: "_blank" as const, rel: "noopener noreferrer" }
              : {};

            return (
              <Tag
                key={item.name}
                {...linkProps}
                className={`rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-0.5 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-lg cursor-pointer ${
                  isApi
                    ? "border-2 border-dashed border-[#CBD5E1]"
                    : "border border-[#E2E8F0]"
                }`}
              >
                <div className="h-10 flex items-center justify-center mb-4">
                  {item.logo ? (
                    <img src={item.logo} alt={`${item.name} logo`} className="h-10 w-auto object-contain" />
                  ) : (
                    <Code2 size={30} className="text-[#64748B]" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mt-4">{item.name}</h3>
                <div className="flex items-center justify-center gap-1.5 mt-2">
                  <span
                    className={`inline-block w-2 h-2 rounded-full ${
                      item.status === "LIVE" ? "bg-[#0D9488] animate-pulse" : "bg-[#94A3B8]"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium ${
                      item.status === "LIVE" ? "text-[#0D9488]" : "text-[#64748B]"
                    }`}
                  >
                    {item.status === "LIVE" ? "Live" : "Available"}
                  </span>
                </div>
                <p className="text-sm text-[#64748B] mt-1">{item.description}</p>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingIntegrations;
