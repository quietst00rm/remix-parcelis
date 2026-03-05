import { Star, CheckCircle, AlertTriangle, Check, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";
import type { ComparisonData } from "@/data/blogPosts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ComparisonPostContentProps {
  data: ComparisonData;
  postTitle: string;
  postDescription: string;
  postDate: string;
  postUrl: string;
  featuredImage?: string;
  featuredImageAlt?: string;
}

const StarRating = ({ rating, count }: { rating: number; count: number }) => (
  <span className="inline-flex items-center gap-1.5">
    <Star className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
    <span className="font-semibold">{rating}</span>
    <span className="text-[#6b7280]">({count.toLocaleString()} reviews)</span>
  </span>
);

const ComparisonPostContent = ({
  data,
  postTitle,
  postDescription,
  postDate,
  postUrl,
  featuredImage,
  featuredImageAlt,
}: ComparisonPostContentProps) => {
  const { appA, appB } = data;

  const tableRows: { label: string; a: React.ReactNode; b: React.ReactNode }[] = [
    { label: "Core Model", a: appA.modelType, b: appB.modelType },
    { label: "Best For", a: appA.bestFor.split(".")[0], b: appB.bestFor.split(".")[0] },
    {
      label: "Rating",
      a: <StarRating rating={appA.rating} count={appA.reviewCount} />,
      b: <StarRating rating={appB.rating} count={appB.reviewCount} />,
    },
    { label: "Pricing", a: appA.pricingModel, b: appB.pricingModel },
    { label: "Risk Bearer", a: appA.riskBearer, b: appB.riskBearer },
    { label: "Support Type", a: appA.supportType, b: appB.supportType },
    { label: "Key Strength", a: appA.keyStrengths[0], b: appB.keyStrengths[0] },
    {
      label: "Key Limitation",
      a: appA.keyWeaknesses[0],
      b: appB.keyWeaknesses[0],
    },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: postTitle,
    description: postDescription,
    datePublished: postDate,
    dateModified: postDate,
    author: { "@type": "Organization", name: "Parcelis" },
    publisher: {
      "@type": "Organization",
      name: "Parcelis",
      url: "https://myparcelis.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://myparcelis.com${postUrl}`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const parcelisBullets = [
    "Real insurance backed by The Hartford (Fortune 500 underwriter)",
    "Merchants set their own pricing and keep the markup",
    "Zero monthly subscription fees, free to install",
    "100% human support team, no AI chatbots",
    "5-7 day claims resolution target",
    "No long-term contracts, cancel anytime",
  ];

  return (
    <article className="blog-prose max-w-[760px]">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Section 1: Quick Verdict */}
      <section>
        <h2 id="quick-verdict">Quick Verdict</h2>
        <div className="bg-[#f0f4ff] rounded-xl p-6 border-l-4 border-[#1e22aa] not-prose">
          <p className="text-sm leading-relaxed text-[#374151]">
            {data.quickVerdict.split(new RegExp(`(${appA.name}|${appB.name})`, "g")).map((part, i) =>
              part === appA.name || part === appB.name ? (
                <strong key={i} className="font-semibold text-[#1a1a2e]">{part}</strong>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </p>
        </div>
      </section>

      {/* Featured image between Quick Verdict and At a Glance */}
      {featuredImage && (
        <img
          src={featuredImage}
          alt={featuredImageAlt || "Featured image"}
          className="w-full max-h-[360px] object-cover rounded-lg border border-[#e5e7eb] shadow-sm my-8"
          loading="eager"
        />
      )}

      {/* Section 2: At a Glance Table */}
      <section>
        <h2 id="at-a-glance">{appA.name} vs {appB.name} at a Glance</h2>
        <div className="overflow-x-auto rounded-lg border border-[#e5e7eb] not-prose">
          <table className="w-full text-sm border-collapse table-fixed">
            <colgroup>
              <col className="w-[30%]" />
              <col className="w-[35%]" />
              <col className="w-[35%]" />
            </colgroup>
            <thead>
              <tr>
                <th className="text-left p-3 bg-[#f9fafb] font-medium text-[#374151]">&nbsp;</th>
                <th className="text-center p-3 bg-[#1e22aa] text-white font-semibold">{appA.name}</th>
                <th className="text-center p-3 bg-[#1a1a6e] text-white font-semibold">{appB.name}</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-[#f9fafb]"}>
                  <td className="p-3 font-medium text-[#374151]">{row.label}</td>
                  <td className="p-3 text-center text-[#374151] break-words">{row.a}</td>
                  <td className="p-3 text-center text-[#374151] break-words">{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: App A Deep Dive */}
      <section>
        <h2 id={`${appA.slug}-deep-dive`}>{appA.name}: What Merchants Need to Know</h2>

        <h3 id={`how-${appA.slug}-works`}>How {appA.name} Works</h3>
        <p>{data.appAContent.howItWorks}</p>

        <h3 id={`${appA.slug}-pricing`}>Pricing</h3>
        <div className="bg-[#f9fafb] rounded-lg p-4 border border-[#e5e7eb] not-prose mb-6">
          <p className="text-sm text-[#374151] leading-relaxed">{appA.pricingSummary}</p>
        </div>

        <h3 id={`${appA.slug}-strengths`}>Strengths</h3>
        <ul className="not-prose space-y-2 mb-6">
          {appA.keyStrengths.map((s, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-[#374151]">
              <CheckCircle className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
              <span>{s}</span>
            </li>
          ))}
        </ul>

        <h3 id={`${appA.slug}-weaknesses`}>Weaknesses & Watch-Outs</h3>
        <ul className="not-prose space-y-2 mb-6">
          {appA.keyWeaknesses.map((w, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-[#374151]">
              <AlertTriangle className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
              <span>{w}</span>
            </li>
          ))}
        </ul>

        <h3 id={`${appA.slug}-best-for`}>Best For</h3>
        <p>{appA.bestFor}</p>
      </section>

      {/* Section 4: App B Deep Dive */}
      <section>
        <h2 id={`${appB.slug}-deep-dive`}>{appB.name}: What Merchants Need to Know</h2>

        <h3 id={`how-${appB.slug}-works`}>How {appB.name} Works</h3>
        <p>{data.appBContent.howItWorks}</p>

        <h3 id={`${appB.slug}-pricing`}>Pricing</h3>
        <div className="bg-[#f9fafb] rounded-lg p-4 border border-[#e5e7eb] not-prose mb-6">
          <p className="text-sm text-[#374151] leading-relaxed">{appB.pricingSummary}</p>
        </div>

        <h3 id={`${appB.slug}-strengths`}>Strengths</h3>
        <ul className="not-prose space-y-2 mb-6">
          {appB.keyStrengths.map((s, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-[#374151]">
              <CheckCircle className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
              <span>{s}</span>
            </li>
          ))}
        </ul>

        <h3 id={`${appB.slug}-weaknesses`}>Weaknesses & Watch-Outs</h3>
        <ul className="not-prose space-y-2 mb-6">
          {appB.keyWeaknesses.map((w, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-[#374151]">
              <AlertTriangle className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
              <span>{w}</span>
            </li>
          ))}
        </ul>

        <h3 id={`${appB.slug}-best-for`}>Best For</h3>
        <p>{appB.bestFor}</p>
      </section>

      {/* Section 5: Trade-Offs */}
      <section>
        <h2 id="trade-offs">Head-to-Head: The Trade-Offs That Actually Matter</h2>

        <h3 id="pricing-model">Pricing Model</h3>
        <p>{data.tradeoffs.pricing}</p>

        <h3 id="risk-liability">Risk & Liability</h3>
        <p>{data.tradeoffs.risk}</p>

        <h3 id="support-claims">Support & Claims Experience</h3>
        <p>{data.tradeoffs.support}</p>

        <h3 id="technology-integration">Technology & Integration</h3>
        <p>{data.tradeoffs.technology}</p>
      </section>

      {/* Section 6: The Pivot */}
      <section>
        <h2 id="what-comparison-pages-wont-tell-you">What Most Comparison Pages Won't Tell You</h2>
        <p>{data.categoryFraming}</p>

        <div className="not-prose bg-gradient-to-br from-[#1e22aa] to-[#1a1a6e] rounded-xl p-6 md:p-8 text-white mt-6 mb-6">
          <p className="text-xs uppercase tracking-widest text-[#4FC3F7] mb-2 font-semibold">
            THE FOURTH OPTION
          </p>
          <h3 className="font-heading text-xl font-bold text-white mb-5">
            Parcelis: Real Insurance. Merchant Profit. Zero Monthly Fees.
          </h3>
          <ul className="space-y-3 mb-6">
            {parcelisBullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-white">
                <Check className="w-4 h-4 text-[#4FC3F7] shrink-0 mt-0.5" />
                <span className="text-white">{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://apps.shopify.com/parcelis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1e22aa] font-semibold rounded-lg px-6 py-3 hover:shadow-lg hover:scale-[1.02] transition-all duration-150 text-sm min-h-[44px]"
            >
              Install Free on Shopify
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://myparcelis.com/calculate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-white text-white rounded-lg px-6 py-3 hover:bg-white/10 transition-all duration-150 text-sm font-semibold min-h-[44px]"
            >
              Calculate Your Revenue
            </a>
          </div>
          <a
            href="https://apps.shopify.com/parcelis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-[#4FC3F7] hover:underline mt-3"
          >
            View on Shopify App Store
          </a>
        </div>
      </section>

      {/* Section 7: Conclusion */}
      <section>
        <h2 id="bottom-line">The Bottom Line</h2>
        <p>{data.conclusion}</p>
      </section>

      {/* Section 8: FAQ */}
      <section>
        <h2 id="faq">Frequently Asked Questions</h2>
        <div className="not-prose">
          <Accordion type="single" collapsible className="w-full">
            {data.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-[#e5e7eb]">
                <AccordionTrigger className="text-left font-heading text-base font-medium text-[#1f2937] hover:no-underline py-4 min-h-[44px]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#6b7280] leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </article>
  );
};

export default ComparisonPostContent;
