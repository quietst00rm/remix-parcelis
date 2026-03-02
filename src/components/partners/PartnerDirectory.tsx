import { useState, useEffect } from "react";
import {
  Search,
  X,
  Package,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxParcels from "@/components/ParallaxParcels";

/* ── types ── */
interface PartnerStat {
  value: string;
  label: string;
}

interface Partner {
  id: string;
  name: string;
  categories: string[];
  description: string;
  
  fullDescription: string;
  whyWeTrust: string;
  stats: PartnerStat[];
  website: string;
  logoUrl?: string;
}

/* ── partner data ── */
const partners: Partner[] = [
  {
    id: "swiftship",
    name: "SwiftShip",
    categories: ["Fulfillment & Logistics"],
    description:
      "End-to-end logistics for e-commerce brands, from manufacturer to customer doorstep across 20+ countries.",
    fullDescription:
      "SwiftShip provides end-to-end logistics solutions for e-commerce brands, from manufacturer to customer doorstep. Their network spans 20+ countries with specialized handling for fragile and high-value goods.",
    whyWeTrust:
      "SwiftShip has maintained a 99.4% on-time delivery rate across our shared clients. Their real-time tracking integration helps us verify claims faster and reduce disputes.",
    stats: [
      { value: "99.4%", label: "On-Time Rate" },
      { value: "20+", label: "Countries" },
    ],
    
    website: "https://example.com",
  },
  {
    id: "claimguard",
    name: "ClaimGuard",
    categories: ["Chargeback Protection"],
    description:
      "Automated chargeback prevention and recovery that monitors every transaction in real time.",
    fullDescription:
      "ClaimGuard uses AI-driven dispute management to prevent chargebacks before they happen and recover revenue from illegitimate disputes. They process over $300M in protected transactions annually.",
    whyWeTrust:
      "ClaimGuard's proactive approach complements Parcelis shipping protection perfectly — together we cover both transit and post-delivery financial risks for merchants.",
    stats: [
      { value: "$300M+", label: "Protected Volume" },
      { value: "72%", label: "Win Rate" },
    ],
    
    website: "https://example.com",
  },
  {
    id: "tradelaw",
    name: "TradeLaw Pro",
    categories: ["Compliance & Customs"],
    description:
      "Cross-border compliance and trade regulation advisory built for e-commerce sellers.",
    fullDescription:
      "TradeLaw Pro specializes in international trade compliance, customs regulations, and consumer protection law for e-commerce businesses shipping across borders.",
    whyWeTrust:
      "TradeLaw Pro ensures our mutual clients stay compliant with shipping regulations in every market, reducing legal exposure and customs delays.",
    stats: [
      { value: "40+", label: "Jurisdictions" },
      { value: "98%", label: "Compliance Rate" },
    ],
    
    website: "https://example.com",
  },
  {
    id: "returnflow",
    name: "ReturnFlow",
    categories: ["Returns Management"],
    description:
      "Branded returns portal that turns refund requests into exchanges and store credit.",
    
    fullDescription:
      "ReturnFlow provides a branded returns experience that converts refund requests into exchanges and store credit, recovering revenue that would otherwise be lost.",
    whyWeTrust:
      "ReturnFlow's approach reduces net refund rates, which complements Parcelis shipping protection by minimizing post-delivery revenue loss for merchants.",
    stats: [
      { value: "34%", label: "Exchange Rate" },
      { value: "2.1x", label: "Repeat Purchase" },
    ],
    
    website: "https://example.com",
  },
  {
    id: "pixelpush",
    name: "PixelPush",
    categories: ["Marketing & Retention", "Customer Experience"],
    description:
      "Post-purchase email and SMS flows that drive repeat revenue from existing customers.",
    fullDescription:
      "PixelPush creates high-converting post-purchase communication flows that drive repeat revenue. Their data-driven approach has helped merchants achieve an average 4.2x ROI.",
    whyWeTrust:
      "PixelPush ensures customers stay engaged after purchase, which reduces disputes and increases lifetime value across our merchant network.",
    stats: [
      { value: "4.2x", label: "Average ROI" },
      { value: "850+", label: "Merchants" },
    ],
    
    website: "https://example.com",
  },
  {
    id: "shipmetrics",
    name: "ShipMetrics",
    categories: ["Analytics & Reporting"],
    description:
      "Shipping cost intelligence platform that identifies carrier savings across your entire operation.",
    fullDescription:
      "ShipMetrics analyzes shipping spend across all carriers to identify cost savings opportunities. Their platform has analyzed over 12M shipments, finding an average 18% savings for merchants.",
    whyWeTrust:
      "ShipMetrics data feeds directly into our risk models, helping us price protection more accurately and identify cost optimization opportunities.",
    stats: [
      { value: "18%", label: "Avg Savings" },
      { value: "12M+", label: "Shipments Analyzed" },
    ],
    
    website: "https://example.com",
  },
];

const categories = [
  "All",
  "Fulfillment & Logistics",
  "Returns Management",
  "Chargeback Protection",
  "Compliance & Customs",
  "Marketing & Retention",
  "Analytics & Reporting",
  "Customer Experience",
];

/* ── component ── */
const PartnerDirectory = () => {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (selectedPartner) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPartner]);

  const filteredPartners = partners.filter((p) => {
    const matchCat =
      activeCategory === "All" || p.categories.includes(activeCategory);
    const matchSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  /* ── Logo Placeholder ── */
  const LogoPlaceholder = ({ name, size = 48, variant = "default" }: { name: string; size?: number; variant?: "default" | "modal" }) => {
    const initials = name.split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();
    return (
      <div
        className="flex items-center justify-center rounded-lg flex-shrink-0"
        style={{
          width: size,
          height: size,
          backgroundColor: variant === "modal" ? "#FFFFFF" : "#F3F4F6",
          border: variant === "modal" ? "none" : "1px dashed #D1D5DB",
        }}
      >
        <span
          className="font-semibold"
          style={{ fontSize: size * 0.35, color: variant === "modal" ? "#101155" : "#9CA3AF" }}
        >
          {initials}
        </span>
      </div>
    );
  };

  /* ── Partner Card ── */
  const PartnerCard = ({
    partner,
    index,
  }: {
    partner: Partner;
    index: number;
  }) => (
    <ScrollReveal delay={index * 60}>
      <div
        className="group relative flex flex-col h-full bg-white rounded-xl cursor-pointer transition-all duration-200 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
        style={{
          border: "1px solid #E0E0E0",
          borderRadius: 12,
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          padding: 24,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#1E22AA";
          e.currentTarget.style.boxShadow =
            "0 4px 12px rgba(30,34,170,0.10)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#E0E0E0";
          e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06)";
        }}
      >

        {/* ROW 1 — Logo */}
        <div className="flex items-center mb-4">
          {partner.logoUrl ? (
            <img
              src={partner.logoUrl}
              alt={`${partner.name} logo`}
              className="w-12 h-12 object-contain rounded-lg flex-shrink-0"
            />
          ) : (
            <LogoPlaceholder name={partner.name} size={48} />
          )}
        </div>

        {/* ROW 2 — Category Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {partner.categories.map((cat) => (
            <span
              key={cat}
              className="inline-flex items-center font-semibold"
              style={{
                backgroundColor: "#F0F0FF",
                color: "#1E22AA",
                fontSize: 11,
                fontWeight: 600,
                padding: "3px 10px",
                borderRadius: 20,
                border: "1px solid #E0E0FF",
              }}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* ROW 3 — Company Name */}
        <h3
          className="truncate mb-1.5"
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#101155",
            lineHeight: 1.3,
          }}
        >
          {partner.name}
        </h3>

        {/* ROW 4 — Description */}
        <p
          className="mb-4"
          style={{
            fontSize: 14,
            fontWeight: 400,
            color: "#6B7280",
            lineHeight: 1.5,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {partner.description}
        </p>

        {/* ROW 5 — Stat Badges */}
        <div
          className="grid mb-4"
          style={{
            gridTemplateColumns:
              partner.stats.length === 3
                ? "1fr 1fr 1fr"
                : partner.stats.length === 2
                ? "1fr 1fr"
                : "1fr",
            gap: 8,
          }}
        >
          {partner.stats.map((s, idx) => (
            <div
              key={idx}
              className="text-center"
              style={{
                backgroundColor: "#FAFAFA",
                border: "1px solid #EBEBEB",
                borderRadius: 8,
                padding: "8px 12px",
              }}
            >
              <div
                style={{ fontSize: 14, fontWeight: 700, color: "#101155" }}
              >
                {s.value}
              </div>
              <div
                style={{ fontSize: 11, fontWeight: 400, color: "#9CA3AF" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* ROW 6 — Divider */}
        <div
          className="w-full mb-4"
          style={{ height: 1, backgroundColor: "#F0F0F0" }}
        />

        {/* ROW 7 — CTA */}
        <button
          type="button"
          onClick={() => setSelectedPartner(partner)}
          aria-label={`View details for ${partner.name}`}
          className="w-full text-center font-semibold cursor-pointer transition-all duration-150 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "#1E22AA",
            backgroundColor: "transparent",
            border: "1px solid #E0E0E0",
            borderRadius: 8,
            padding: "10px 0",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#F5F5FF";
            e.currentTarget.style.borderColor = "#1E22AA";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.borderColor = "#E0E0E0";
          }}
        >
          View Partner →
        </button>
      </div>
    </ScrollReveal>
  );

  return (
    <div className="bg-background min-h-screen">
      {/* ── Hero ── */}
      <div className="relative bg-brand overflow-hidden pt-24 md:pt-40 pb-32 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#101155] via-[#1e22aa] to-[#2e32d4] z-0"></div>
        <ParallaxParcels />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-tight mb-6">
            The Parcelis Partner Ecosystem
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
            Vetted service providers offering exclusive benefits to Parcelis-protected merchants.
          </p>
        </div>
      </div>

      {/* ── Filter / Search Bar ── */}
      <section className="sticky top-0 z-30 bg-white border-b border-[hsl(220,13%,91%)]">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-3 sm:gap-4">
            <nav
              aria-label="Filter partners by category"
              className="relative flex-shrink-0 w-full sm:w-auto"
            >
              <div
                className="flex gap-2 overflow-x-auto scrollbar-hide pr-8 sm:pr-0 -mx-1 px-1"
                role="tablist"
                aria-label="Partner categories"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={activeCategory === cat}
                    aria-controls="partner-grid"
                    onClick={() => setActiveCategory(cat)}
                    className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 min-h-[44px] min-w-[44px]"
                    style={
                      activeCategory === cat
                        ? {
                            backgroundColor: "#1E22AA",
                            color: "#FFFFFF",
                          }
                        : {
                            backgroundColor: "#F3F4F6",
                            color: "#4B5563",
                          }
                    }
                    onMouseEnter={(e) => {
                      if (activeCategory !== cat) {
                        e.currentTarget.style.backgroundColor = "#E5E7EB";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeCategory !== cat) {
                        e.currentTarget.style.backgroundColor = "#F3F4F6";
                      }
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none sm:hidden" />
            </nav>

            <div className="relative w-full sm:w-auto sm:ml-auto sm:min-w-[260px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search partners..."
                aria-label="Search partners"
                className="w-full rounded-lg py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground transition-all min-h-[44px]"
                style={{
                  border: "1px solid #E5E7EB",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#1E22AA";
                  e.currentTarget.style.outline = "none";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(30,34,170,0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#E5E7EB";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Partner Grid ── */}
      <section
        className="bg-[hsl(220,14%,96%)]"
        id="partner-grid"
        role="tabpanel"
      >
        <div className="container mx-auto px-4 py-8 md:py-12">
          {filteredPartners.length === 0 ? (
            <div className="text-center py-20">
              <Package className="h-10 w-10 text-muted-foreground/40 mx-auto mb-3" />
              <p className="text-muted-foreground text-base mb-3">
                No partners found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="text-sm font-medium text-primary hover:underline min-h-[44px]"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
              {filteredPartners.map((partner, i) => (
                <PartnerCard
                  key={partner.id}
                  partner={partner}
                  index={i}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Detail Modal ── */}
      {selectedPartner && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPartner(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedPartner.name} partner details`}
        >
          <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Header */}
            <div
              className="relative rounded-t-2xl px-5 py-6 sm:px-8 sm:py-8"
              style={{
                background:
                  "linear-gradient(135deg, #101155 0%, #1E22AA 50%, #2e32d4 100%)",
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 pr-10 sm:pr-0">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    {selectedPartner.logoUrl ? (
                      <img
                        src={selectedPartner.logoUrl}
                        alt={`${selectedPartner.name} logo`}
                        className="w-14 h-14 object-contain rounded-lg"
                      />
                    ) : (
                      <LogoPlaceholder name={selectedPartner.name} size={56} variant="modal" />
                    )}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                      {selectedPartner.name}
                    </h2>
                    <p className="text-sm text-blue-200">
                      {selectedPartner.categories.join(" · ")}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success px-3 py-1.5 text-xs font-semibold text-success-foreground self-start sm:self-auto">
                  <CheckCircle className="h-3.5 w-3.5" />
                  Verified Partner
                </span>
              </div>

              <button
                onClick={() => setSelectedPartner(null)}
                aria-label="Close partner details"
                className="absolute top-4 right-4 rounded-full p-2.5 bg-white/10 text-white hover:bg-white/20 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-5 md:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Who They Are
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedPartner.fullDescription}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {selectedPartner.stats.map((s, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-border bg-secondary/50 p-4 text-center border-l-2 border-l-success"
                    >
                      <p className="text-2xl font-bold text-success">
                        {s.value}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

              </div>

              <div className="space-y-6 border-t border-border/40 pt-6 md:border-t-0 md:pt-0">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Why We Trust Them
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedPartner.whyWeTrust}
                  </p>
                </div>

              </div>
            </div>

            {/* Footer */}
            <div className="px-5 pb-5 md:px-8 md:pb-8 space-y-3">
              <a
                href={selectedPartner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors min-h-[44px]"
              >
                Visit Partner Website
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                onClick={() => setSelectedPartner(null)}
                className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors py-2 min-h-[44px]"
              >
                ← Back to Directory
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnerDirectory;
