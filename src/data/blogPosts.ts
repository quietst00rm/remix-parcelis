export interface ComparisonApp {
  name: string;
  slug: string;
  rating: number;
  reviewCount: number;
  pricingModel: string;
  pricingSummary: string;
  modelType: string;
  riskBearer: string;
  supportType: string;
  keyStrengths: string[];
  keyWeaknesses: string[];
  bestFor: string;
  integrations: string[];
  appStoreUrl: string;
}

export interface ComparisonData {
  appA: ComparisonApp;
  appB: ComparisonApp;
  quickVerdict: string;
  tradeoffs: {
    pricing: string;
    risk: string;
    support: string;
    technology: string;
  };
  categoryFraming: string;
  faqs: { question: string; answer: string }[];
  /** Content paragraphs for each deep-dive subsection */
  appAContent: {
    howItWorks: string;
    strengths: string;
    weaknesses: string;
    bestFor: string;
  };
  appBContent: {
    howItWorks: string;
    strengths: string;
    weaknesses: string;
    bestFor: string;
  };
  conclusion: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Comparisons" | "Guides" | "Industry News" | "Merchant Tips";
  categorySlug: string;
  author: string;
  authorAvatar?: string;
  date: string;
  readTime: string;
  featuredImage: string;
  content: string;
  metaDescription: string;
  tags: string[];
  isComparison: boolean;
  comparisonData?: ComparisonData;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "route-vs-navidium",
    title: "Route vs Navidium: Full-Service Protection vs Self-Insurance for Shopify",
    excerpt: "An in-depth comparison of Route and Navidium covering pricing models, risk exposure, claim handling, and which approach actually protects your bottom line.",
    category: "Comparisons",
    categorySlug: "comparisons",
    author: "Parcelis Team",
    date: "2026-03-04",
    readTime: "12 min read",
    featuredImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=450&fit=crop",
    metaDescription: "Route vs Navidium comparison for Shopify merchants. Compare full-service shipping protection with self-insurance models, pricing, risk, and claims handling.",
    tags: ["comparison", "route", "navidium", "shipping protection", "shopify", "self-insurance"],
    isComparison: true,
    comparisonData: {
      appA: {
        name: "Route",
        slug: "route",
        rating: 3.5,
        reviewCount: 2147,
        pricingModel: "Premium capture",
        pricingSummary: "Route collects 100% of the shipping protection premium from customers at checkout. Merchants receive no share of the premium revenue. Route keeps the full amount to fund claims and profit. Free to install, but merchants see zero revenue from the protection offering.",
        modelType: "Full-service (third-party managed)",
        riskBearer: "Route (third-party insurer)",
        supportType: "AI-first support with chatbot handling initial claims",
        keyStrengths: [
          "Large brand presence and consumer recognition",
          "Covers lost, stolen, and damaged packages",
          "Free to install with no monthly fees",
          "Automated tracking and claims portal"
        ],
        keyWeaknesses: [
          "Merchants earn $0 from protection premiums",
          "24-month contract lock-in reported by merchants",
          "3.5 star rating suggests mixed merchant satisfaction",
          "AI chatbot-first support can frustrate customers",
          "Route-branded experience, not white-labeled"
        ],
        bestFor: "Merchants who want a hands-off protection solution and are comfortable giving up all premium revenue in exchange for zero claim liability.",
        integrations: ["Shopify", "Shopify Plus", "BigCommerce", "Magento"],
        appStoreUrl: "https://apps.shopify.com/route"
      },
      appB: {
        name: "Navidium",
        slug: "navidium",
        rating: 4.9,
        reviewCount: 687,
        pricingModel: "Self-insurance (merchant keeps 100%)",
        pricingSummary: "Navidium charges a monthly subscription ($29.99-$99.99/mo depending on plan tier). Merchants keep 100% of the shipping protection premiums collected from customers. However, merchants are also responsible for paying all claims out of pocket.",
        modelType: "Self-insurance platform",
        riskBearer: "Merchant (self-insured)",
        supportType: "Email and help center support",
        keyStrengths: [
          "Merchants retain 100% of premium revenue",
          "4.9 star rating with strong merchant satisfaction",
          "Full control over protection pricing and terms",
          "No long-term contracts"
        ],
        keyWeaknesses: [
          "Merchant bears 100% of claim risk and cost",
          "Monthly subscription fee regardless of volume",
          "High-value claims can wipe out months of premium revenue",
          "No external insurance backing",
          "Requires merchants to handle claims themselves"
        ],
        bestFor: "Low-AOV merchants with very low claim rates who want to profit from premiums and are comfortable self-funding all claims.",
        integrations: ["Shopify", "Shopify Plus"],
        appStoreUrl: "https://apps.shopify.com/navidium-shipping-protection"
      },
      quickVerdict: "Route and Navidium represent opposite ends of the shipping protection spectrum. Route handles everything but keeps all premium revenue and locks merchants into long contracts. Navidium lets merchants keep 100% of premiums but exposes them to unlimited claim liability. Neither model gives merchants both revenue and risk protection simultaneously.",
      tradeoffs: {
        pricing: "Route is free to install but captures 100% of premium revenue from customers, meaning merchants earn nothing from protection. Navidium charges $29.99-$99.99/month in subscription fees but lets merchants keep all premiums collected. The real cost comparison depends on your order volume and claim rate: at scale, Navidium's model can be more profitable, but one bad month of claims can erase months of premium revenue.",
        risk: "This is the defining trade-off. Route transfers all claim risk to a third party, so merchants never pay for replacements or refunds. Navidium puts 100% of claim risk on the merchant. For a store doing 5,000 orders/month with a $75 AOV and 2% claim rate, that's $7,500/month in potential claim liability with Navidium. With Route, that liability is zero, but so is the revenue.",
        support: "Route uses an AI chatbot as the first line of support for claims, which has drawn criticism from merchants whose customers prefer human interaction. Navidium provides email-based support, but since merchants self-insure, they ultimately handle their own claims. Neither offers the kind of dedicated human support that premium merchants expect.",
        technology: "Both apps integrate with Shopify natively. Route offers a more polished consumer-facing experience with branded tracking pages and a mobile app. Navidium focuses on the merchant backend with analytics dashboards showing premium revenue and claim costs. Route's technology advantage comes at the cost of merchant branding, as the protection experience is Route-branded."
      },
      categoryFraming: "Most comparison articles frame shipping protection as a choice between Route and Navidium. But this framing misses a critical third option: real insurance backing that transfers risk away from the merchant while still letting them profit from premiums. The Route vs Navidium debate creates a false binary between giving up all revenue (Route) or absorbing all risk (Navidium).",
      appAContent: {
        howItWorks: "Route integrates into your Shopify checkout as an add-on protection option. When a customer opts in, Route collects the premium and provides coverage for lost, stolen, and damaged packages. If an issue occurs, the customer files a claim through Route's portal, where an AI chatbot handles the initial triage. Route manages the entire claims process and pays out approved claims.",
        strengths: "Route's primary value proposition is simplicity. Merchants install the app, and Route handles everything from premium collection to claims resolution. There's no financial risk to the merchant, and the integration is straightforward.",
        weaknesses: "The biggest concern for merchants is the revenue model. Route keeps 100% of the premium, meaning the merchant provides the customer base and checkout real estate while Route captures all the value. Multiple merchant reviews mention the 24-month contract lock-in as a frustration, especially when they discover the zero-revenue model after installation.",
        bestFor: "Route makes the most sense for merchants who genuinely want zero involvement in shipping protection. If you never want to think about claims, premiums, or protection analytics, Route handles it all. The trade-off is purely financial."
      },
      appBContent: {
        howItWorks: "Navidium takes the opposite approach. Instead of transferring risk to an insurer, Navidium gives merchants a platform to self-insure. Merchants set their own protection prices, collect premiums directly, and handle claims themselves. Navidium provides the checkout widget, analytics dashboard, and claim management tools, but the financial responsibility stays with the merchant.",
        strengths: "The appeal of Navidium is obvious: keep 100% of the premiums. For merchants with low claim rates and low average order values, the math can work out favorably. The 4.9-star rating reflects strong satisfaction among merchants who fit this profile.",
        weaknesses: "Self-insurance is a bet that your claim costs will stay below your premium revenue. This bet fails when claim rates spike due to carrier issues, seasonal volume, or shipping to high-theft areas. A single month of elevated claims can eliminate several months of accumulated premium profit. There's no safety net.",
        bestFor: "Navidium is well-suited for merchants shipping low-value, low-risk items with historically low claim rates (under 1%). If your AOV is under $30 and your products are rarely damaged in transit, self-insurance can be a reasonable bet."
      },
      conclusion: "The Route vs Navidium debate highlights a fundamental gap in the shipping protection market. Merchants should not have to choose between earning zero revenue (Route) and absorbing unlimited risk (Navidium). The ideal solution transfers claim risk externally while still giving merchants a meaningful share of premium revenue. Before committing to either option, consider whether a third path might offer the best of both worlds.",
      faqs: [
        {
          question: "Can I switch from Route to Navidium without losing data?",
          answer: "Yes, both Route and Navidium are standalone Shopify apps. You can uninstall one and install the other without losing your store data. However, any active protection policies from Route will not transfer to Navidium. Customers who purchased Route protection will still need to file claims through Route for those orders."
        },
        {
          question: "What happens if I have a high-claim month with Navidium?",
          answer: "With Navidium's self-insurance model, you are responsible for paying all claims out of your own revenue. If you experience a spike in claims due to carrier issues, weather events, or porch piracy, you could face claim costs that exceed the premiums you collected. There is no external insurance to absorb excess losses."
        },
        {
          question: "Does Route really lock merchants into 24-month contracts?",
          answer: "Multiple Shopify App Store reviews mention long-term contracts with Route, though specific terms may vary. It is important to read the full terms of service before installing. Some merchants have reported difficulty canceling before their contract term ends. Always confirm the contract length and cancellation policy in writing before committing."
        },
        {
          question: "Which app has better customer support for claim issues?",
          answer: "Route primarily uses AI chatbots for initial claim handling, which some merchants and customers find frustrating for complex issues. Navidium provides email-based support for the platform itself, but since merchants self-insure, they handle their own claim decisions and customer communications. Neither currently offers dedicated phone support for claims."
        },
        {
          question: "Is there a shipping protection option where merchants earn revenue without bearing all the risk?",
          answer: "Yes. Parcelis offers a model where real insurance from The Hartford backs all claims (removing merchant risk) while merchants set their own protection pricing and keep the markup. This combines the risk transfer of Route with the revenue potential of Navidium, without monthly fees or long-term contracts."
        }
      ]
    },
    content: "", // Content is rendered from comparisonData
  },
  {
    slug: "parcelis-vs-route-shipping-protection",
    title: "Parcelis vs Route: Which Shipping Protection Platform Is Right for Your Store?",
    excerpt: "A detailed comparison of Parcelis and Route covering pricing, claim resolution speed, merchant control, and customer experience for Shopify stores.",
    category: "Comparisons",
    categorySlug: "comparisons",
    author: "Parcelis Team",
    date: "2026-02-28",
    readTime: "8 min read",
    featuredImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=450&fit=crop",
    metaDescription: "Compare Parcelis vs Route for Shopify shipping protection. See how pricing, claim speeds, and merchant features stack up in this detailed analysis.",
    tags: ["comparison", "route", "shipping protection", "shopify"],
    isComparison: true,
    content: `
<h2 id="overview">Overview</h2>
<p>Choosing a shipping protection provider is one of the most impactful decisions a Shopify merchant can make. Both Parcelis and Route offer package protection, but they differ significantly in pricing structure, claim handling, and the level of control they give merchants.</p>
<p>In this comparison, we break down every major difference so you can make an informed choice for your store.</p>

<h2 id="pricing-comparison">Pricing Comparison</h2>
<p>One of the biggest differentiators between Parcelis and Route is how they handle pricing. Route typically charges customers a flat fee per order, which can vary depending on the order value. Parcelis, on the other hand, offers a transparent pricing model that scales with your business.</p>

<table>
<thead>
<tr><th>Feature</th><th>Parcelis</th><th>Route</th></tr>
</thead>
<tbody>
<tr><td>Pricing Model</td><td>Revenue share, no upfront cost</td><td>Flat fee per order</td></tr>
<tr><td>Claim Resolution</td><td>Under 24 hours</td><td>3–5 business days</td></tr>
<tr><td>Merchant Dashboard</td><td>Full analytics + controls</td><td>Basic reporting</td></tr>
<tr><td>Customer Experience</td><td>Branded, seamless</td><td>Route-branded</td></tr>
<tr><td>Integration Time</td><td>Under 5 minutes</td><td>15–30 minutes</td></tr>
</tbody>
</table>

<h2 id="claim-resolution">Claim Resolution Speed</h2>
<p>When a customer files a claim, speed matters. Parcelis resolves most claims within 24 hours, compared to Route's typical 3–5 business day window. This faster resolution directly impacts customer satisfaction and repeat purchase rates.</p>
<p>Merchants using Parcelis report a 34% increase in repeat purchases after switching from competitors, largely attributed to the improved post-purchase experience.</p>

<h2 id="merchant-control">Merchant Control & Branding</h2>
<p>With Route, the protection experience is branded with Route's logo and interface. Parcelis takes a different approach, offering a fully white-labeled experience that keeps your brand front and center throughout the entire customer journey.</p>

<h3 id="dashboard-features">Dashboard Features</h3>
<p>The Parcelis merchant dashboard provides real-time analytics on claim rates, protection opt-in rates, and revenue generated from the protection program. Route offers basic reporting but lacks the depth of analytics that data-driven merchants need.</p>

<h2 id="verdict">The Verdict</h2>
<p>For Shopify merchants who value speed, transparency, and brand control, Parcelis is the clear winner. Route may work for merchants who prefer a hands-off approach, but the trade-offs in claim speed and branding control are significant.</p>
<p>Ready to see the difference? <strong>Get started with Parcelis today</strong> and experience faster claims, better analytics, and a fully branded protection experience.</p>
`,
  },
  {
    slug: "parcelis-vs-navidium-shipping-protection",
    title: "Parcelis vs Navidium: Self-Insured vs Full-Service Shipping Protection",
    excerpt: "Understand the key differences between Parcelis's full-service model and Navidium's self-insured approach to shipping protection for e-commerce.",
    category: "Comparisons",
    categorySlug: "comparisons",
    author: "Parcelis Team",
    date: "2026-02-20",
    readTime: "7 min read",
    featuredImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=450&fit=crop",
    metaDescription: "Parcelis vs Navidium comparison: full-service vs self-insured shipping protection. Learn which model works best for your Shopify store.",
    tags: ["comparison", "navidium", "self-insured", "shipping protection"],
    isComparison: true,
    content: `
<h2 id="overview">Overview</h2>
<p>Navidium and Parcelis represent two fundamentally different approaches to shipping protection. Navidium lets merchants self-insure their packages, keeping the premiums but also assuming all the risk. Parcelis provides full-service protection where claims are handled externally.</p>

<h2 id="risk-model">Risk Model Comparison</h2>
<p>The self-insured model sounds appealing on paper—you keep 100% of the premium revenue. But when a high-value claim comes in, you're on the hook for the full replacement cost. For merchants shipping high-value items, this can be devastating.</p>

<table>
<thead>
<tr><th>Aspect</th><th>Parcelis</th><th>Navidium</th></tr>
</thead>
<tbody>
<tr><td>Risk Model</td><td>Full-service (risk transferred)</td><td>Self-insured (merchant bears risk)</td></tr>
<tr><td>Premium Revenue</td><td>Revenue share</td><td>100% retained by merchant</td></tr>
<tr><td>Claim Liability</td><td>Handled by Parcelis</td><td>Merchant pays out of pocket</td></tr>
<tr><td>Best For</td><td>All merchants</td><td>Low-value, low-risk products</td></tr>
</tbody>
</table>

<h2 id="when-self-insurance-fails">When Self-Insurance Fails</h2>
<p>Consider a merchant shipping $200 average order value products. With a 2% claim rate and 1,000 orders per month, that's 20 claims at $200 each—$4,000 in monthly claim costs. The premiums collected might only cover $2,000–$3,000, leaving the merchant in the red.</p>

<h2 id="verdict">The Verdict</h2>
<p>Self-insurance works for merchants with very low-value products and low claim rates. For everyone else, full-service protection with Parcelis provides peace of mind and predictable costs.</p>
`,
  },
  {
    slug: "parcelis-vs-insureship-comparison",
    title: "Parcelis vs InsureShip: Modern vs Traditional Shipping Insurance",
    excerpt: "How does Parcelis's modern approach compare to InsureShip's traditional insurance model? We break down the differences for Shopify merchants.",
    category: "Comparisons",
    categorySlug: "comparisons",
    author: "Parcelis Team",
    date: "2026-02-10",
    readTime: "6 min read",
    featuredImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=450&fit=crop",
    metaDescription: "Parcelis vs InsureShip: Compare modern shipping protection with traditional insurance for your Shopify store.",
    tags: ["comparison", "insureship", "traditional insurance", "shipping protection"],
    isComparison: true,
    content: `
<h2 id="overview">Overview</h2>
<p>InsureShip represents the traditional approach to shipping insurance—a model that has existed for decades. Parcelis brings a modern, technology-first approach designed specifically for e-commerce merchants.</p>

<h2 id="technology">Technology & Integration</h2>
<p>While InsureShip requires manual claim filing through email and phone, Parcelis offers a fully automated claims process integrated directly into your Shopify store. Customers can file and resolve claims without ever leaving your website.</p>

<h2 id="coverage">Coverage & Flexibility</h2>
<p>Traditional insurance models like InsureShip often have restrictive coverage terms and lengthy exclusion lists. Parcelis offers straightforward coverage for lost, stolen, and damaged packages with clear terms that both merchants and customers can understand.</p>

<h2 id="verdict">The Verdict</h2>
<p>For modern e-commerce businesses, the traditional insurance model is outdated. Parcelis provides a faster, more transparent, and better-integrated solution.</p>
`,
  },
  {
    slug: "reduce-shopify-chargebacks-shipping-protection",
    title: "How Shipping Protection Reduces Chargebacks by Up to 40%",
    excerpt: "Learn how proactive shipping protection can dramatically reduce chargeback rates and save your Shopify store thousands in dispute fees.",
    category: "Guides",
    categorySlug: "guides",
    author: "Parcelis Team",
    date: "2026-03-01",
    readTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    metaDescription: "Discover how shipping protection reduces Shopify chargebacks by up to 40%. Step-by-step guide for merchants to protect revenue.",
    tags: ["chargebacks", "guides", "shopify", "revenue protection"],
    isComparison: false,
    content: `
<h2 id="chargeback-problem">The Chargeback Problem</h2>
<p>Chargebacks cost e-commerce merchants billions every year. Beyond the lost revenue from the original order, merchants face chargeback fees ($20–$100 per dispute), increased processing rates, and the risk of losing their payment processing entirely.</p>
<p>Shipping-related chargebacks, specifically "item not received" (INR) claims, account for nearly 30% of all e-commerce chargebacks. This is where shipping protection makes a measurable difference.</p>

<h2 id="how-protection-helps">How Shipping Protection Reduces Chargebacks</h2>
<p>When customers have a clear, fast path to resolve shipping issues, they don't need to file chargebacks. Shipping protection provides that path by offering instant claim resolution for lost, stolen, or damaged packages.</p>

<h3 id="the-data">The Data</h3>
<p>Merchants who implement Parcelis shipping protection see an average 40% reduction in shipping-related chargebacks within the first 90 days. This translates to thousands of dollars in saved dispute fees and preserved revenue.</p>

<h2 id="implementation">Implementation Steps</h2>
<p>Getting started with shipping protection is straightforward. Install the Parcelis app from the Shopify App Store, configure your protection settings, and you're live in under 5 minutes. No code changes required.</p>

<h2 id="roi">Calculating Your ROI</h2>
<p>Use our <a href="/calculate">profit calculator</a> to see exactly how much shipping protection could save your store in reduced chargebacks and improved customer retention.</p>
`,
  },
  {
    slug: "shipping-protection-trends-2026",
    title: "5 Shipping Protection Trends Every Merchant Should Watch in 2026",
    excerpt: "From AI-powered claims to embedded insurance, here are the trends shaping the future of e-commerce shipping protection.",
    category: "Industry News",
    categorySlug: "industry-news",
    author: "Parcelis Team",
    date: "2026-03-03",
    readTime: "4 min read",
    featuredImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=450&fit=crop",
    metaDescription: "Discover the top 5 shipping protection trends for 2026. AI claims, embedded insurance, and more insights for Shopify merchants.",
    tags: ["trends", "industry news", "2026", "ai", "shipping protection"],
    isComparison: false,
    content: `
<h2 id="trend-1">1. AI-Powered Claim Resolution</h2>
<p>Artificial intelligence is transforming how shipping claims are processed. Instead of manual review, AI can verify claims in seconds by analyzing tracking data, delivery photos, and historical patterns.</p>

<h2 id="trend-2">2. Embedded Protection at Checkout</h2>
<p>The days of clunky pop-ups asking customers to add protection are ending. In 2026, the best providers offer seamlessly embedded protection options that feel native to the checkout experience.</p>

<h2 id="trend-3">3. Predictive Risk Analytics</h2>
<p>Advanced analytics now allow merchants to predict which shipments are most likely to experience issues, enabling proactive measures before problems occur.</p>

<h2 id="trend-4">4. Sustainability-Linked Protection</h2>
<p>As consumers demand more sustainable practices, shipping protection providers are incorporating carbon offset programs and eco-friendly claim resolution options.</p>

<h2 id="trend-5">5. Cross-Border Protection</h2>
<p>With international e-commerce growing rapidly, shipping protection is expanding to cover the unique risks of cross-border shipments, including customs delays and international carrier handoffs.</p>
`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (!category || category === "all") return blogPosts;
  return blogPosts.filter(
    (p) => p.categorySlug === category.toLowerCase().replace(/\s+/g, "-")
  );
}

export const categories = [
  { label: "All", slug: "all" },
  { label: "Comparisons", slug: "comparisons" },
  { label: "Guides", slug: "guides" },
  { label: "Industry News", slug: "industry-news" },
  { label: "Merchant Tips", slug: "merchant-tips" },
];
