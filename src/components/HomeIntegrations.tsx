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

const HomeIntegrations: React.FC = () => {
  return (
    <section className="bg-white" style={{ padding: "96px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-heading text-[30px] md:text-[40px] font-bold text-ds-neutral-900 tracking-[-0.02em] leading-[1.2] text-center mb-14">
          Seamlessly Integrated
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className={`rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] cursor-pointer ${
                  isApi
                    ? "border-2 border-dashed border-ds-neutral-300 bg-white"
                    : "border border-ds-neutral-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                }`}
              >
                {/* Logo / Icon */}
                <div className="h-8 flex items-center justify-center mb-4">
                  {item.logo ? (
                    <img src={item.logo} alt={`${item.name} logo`} className="h-8 w-auto object-contain" />
                  ) : (
                    <Code2 size={28} className="text-ds-primary" />
                  )}
                </div>

                {/* Name */}
                <h3 className="text-[16px] font-semibold text-ds-neutral-900 mb-2">{item.name}</h3>

                {/* Status */}
                <div className="flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.status === "LIVE" ? "bg-ds-teal animate-pulse" : "bg-ds-primary-light"
                    }`}
                  />
                  <span
                    className={`text-[13px] font-medium ${
                      item.status === "LIVE" ? "text-ds-teal" : "text-ds-primary-light"
                    }`}
                  >
                    {item.status === "LIVE" ? "Live" : "Available"}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[14px] text-ds-neutral-500 mt-2">{item.description}</p>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeIntegrations;
