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
    <section className="bg-white py-14 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <h2 className="font-heading text-[30px] md:text-[40px] font-bold text-ds-neutral-900 tracking-[-0.02em] leading-[1.2] text-center mb-4">
          Seamlessly Integrated
        </h2>
        <p className="font-dm text-[16px] md:text-[18px] text-ds-neutral-500 leading-[1.7] max-w-[620px] mx-auto text-center mb-14">
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
                className={`rounded-[12px] p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-[2px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] cursor-pointer ${
                  isApi
                    ? "border-2 border-dashed border-ds-neutral-300"
                    : "border border-ds-neutral-200"
                }`}
              >
                <div className="h-8 flex items-center justify-center mb-4">
                  {item.logo ? (
                    <img src={item.logo} alt={`${item.name} logo`} className="h-8 w-auto object-contain" />
                  ) : (
                    <Code2 size={28} className="text-ds-neutral-500" />
                  )}
                </div>
                <h3 className="text-[16px] font-semibold text-ds-neutral-900 mb-2">{item.name}</h3>
                <div className="flex items-center gap-1.5 mb-2">
                  <span
                    className={`inline-block w-[8px] h-[8px] rounded-full live-dot ${
                      item.status === "LIVE" ? "bg-ds-teal" : "bg-ds-neutral-400"
                    }`}
                  />
                  <span
                    className={`text-[13px] font-medium ${
                      item.status === "LIVE" ? "text-ds-teal" : "text-ds-neutral-500"
                    }`}
                  >
                    {item.status === "LIVE" ? "Live" : "Available"}
                  </span>
                </div>
                <p className="text-[14px] text-ds-neutral-500">{item.description}</p>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeIntegrations;
