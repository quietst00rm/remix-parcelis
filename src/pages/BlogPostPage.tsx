import { useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getPostBySlug } from "@/data/blogPosts";
import type { ComparisonData } from "@/data/blogPosts";
import BlogBreadcrumbs from "@/components/blog/BlogBreadcrumbs";
import BlogPostContent from "@/components/blog/BlogPostContent";
import ComparisonPostContent from "@/components/blog/ComparisonPostContent";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogMobileToc from "@/components/blog/BlogMobileToc";
import AiSummarizeWidget from "@/components/blog/AiSummarizeWidget";
import RelatedComparisons from "@/components/blog/RelatedComparisons";
import RelatedArticles from "@/components/blog/RelatedArticles";
import SocialShareBar from "@/components/blog/SocialShareBar";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import BackToTopButton from "@/components/blog/BackToTopButton";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function extractToc(html: string): TocItem[] {
  const regex = /<h([23])\s+id="([^"]+)"[^>]*>(.*?)<\/h[23]>/gi;
  const items: TocItem[] = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    items.push({
      level: parseInt(match[1]),
      id: match[2],
      text: match[3].replace(/<[^>]+>/g, ""),
    });
  }
  return items;
}

function buildComparisonToc(data: ComparisonData): TocItem[] {
  const { appA, appB } = data;
  return [
    { id: "quick-verdict", text: "Quick Verdict", level: 2 },
    { id: "at-a-glance", text: `${appA.name} vs ${appB.name} at a Glance`, level: 2 },
    { id: `${appA.slug}-deep-dive`, text: `${appA.name}: Deep Dive`, level: 2 },
    { id: `how-${appA.slug}-works`, text: `How ${appA.name} Works`, level: 3 },
    { id: `${appA.slug}-pricing`, text: "Pricing", level: 3 },
    { id: `${appA.slug}-strengths`, text: "Strengths", level: 3 },
    { id: `${appA.slug}-weaknesses`, text: "Weaknesses", level: 3 },
    { id: `${appB.slug}-deep-dive`, text: `${appB.name}: Deep Dive`, level: 2 },
    { id: `how-${appB.slug}-works`, text: `How ${appB.name} Works`, level: 3 },
    { id: `${appB.slug}-pricing`, text: "Pricing", level: 3 },
    { id: `${appB.slug}-strengths`, text: "Strengths", level: 3 },
    { id: `${appB.slug}-weaknesses`, text: "Weaknesses", level: 3 },
    { id: "trade-offs", text: "Trade-Offs That Matter", level: 2 },
    { id: "pricing-model", text: "Pricing Model", level: 3 },
    { id: "risk-liability", text: "Risk & Liability", level: 3 },
    { id: "support-claims", text: "Support & Claims", level: 3 },
    { id: "technology-integration", text: "Technology", level: 3 },
    { id: "what-comparison-pages-wont-tell-you", text: "What Others Won't Tell You", level: 2 },
    { id: "bottom-line", text: "The Bottom Line", level: 2 },
    { id: "faq", text: "FAQ", level: 2 },
  ];
}

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const post = slug ? getPostBySlug(slug) : undefined;

  const hasComparisonData = !!(post?.comparisonData);

  const toc = useMemo(() => {
    if (!post) return [];
    if (hasComparisonData && post.comparisonData) return buildComparisonToc(post.comparisonData);
    return extractToc(post.content);
  }, [post, hasComparisonData]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f9fc] pt-24">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold text-[#1a1a2e] mb-4">Post Not Found</h1>
          <p className="text-[#6b7280] mb-6">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center justify-center bg-[#1e22aa] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#151885] transition-colors min-h-[44px]"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const postUrl = `/blog/${post.slug}`;
  const canonicalUrl = `https://myparcelis.com${postUrl}`;
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <ReadingProgressBar />
      <BackToTopButton />

      <Helmet>
        <title>{post.title} | Parcelis Blog</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={post.featuredImage} />
      </Helmet>

      {/* Hero area */}
      <section
        className="relative overflow-x-clip -mt-[76px]"
        style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #172554 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 65% 40%, rgba(59,130,246,0.15) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-[800px] mx-auto px-6 pt-[200px] pb-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1 text-sm mb-6">
            <Link to="/" className="text-white/50 hover:text-white transition-colors min-h-[44px] flex items-center">
              Home
            </Link>
            <span className="text-white/30 mx-0.5">/</span>
            <Link to="/blog" className="text-white/50 hover:text-white transition-colors min-h-[44px] flex items-center">
              Blog
            </Link>
            <span className="text-white/30 mx-0.5">/</span>
            <Link
              to={`/blog?category=${post.categorySlug}`}
              className="text-white/50 hover:text-white transition-colors min-h-[44px] flex items-center"
            >
              {post.category}
            </Link>
            <span className="text-white/30 mx-0.5">/</span>
            <span className="text-white/70 font-medium line-clamp-1">{post.title}</span>
          </nav>

          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          {/* Print-only canonical URL */}
          <p className="hidden print:block text-xs text-white/50 mb-2">{canonicalUrl}</p>

          <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold print:hidden">
                {post.author.charAt(0)}
              </div>
              <span className="font-medium text-white">{post.author}</span>
            </div>
            <span className="text-white/40">·</span>
            <time dateTime={post.date}>{formattedDate}</time>
            <span className="text-white/40">·</span>
            <span>{post.readTime}</span>
            <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full print:hidden">
              {post.category}
            </span>
          </div>
        </div>

        {/* Bottom curve */}
        <div className="absolute bottom-0 left-0 right-0 z-[2]">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-[30px] sm:h-[40px] md:h-[60px] block">
            <path d="M0,60 L0,20 Q720,60 1440,20 L1440,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Content area */}
      <section className="bg-white py-10 md:py-14">
        <div className="container mx-auto px-5 max-w-[1180px]">
          <BlogMobileToc toc={toc} />
          <div className="flex gap-12">
            <div className="flex-1 min-w-0">
              {hasComparisonData && post.comparisonData ? (
                <ComparisonPostContent
                  data={post.comparisonData}
                  postTitle={post.title}
                  postDescription={post.metaDescription}
                  postDate={post.date}
                  postUrl={postUrl}
                  featuredImage={post.featuredImage}
                  featuredImageAlt={`${post.title} - featured image`}
                />
              ) : (
                <BlogPostContent
                  content={post.content}
                  featuredImage={post.featuredImage}
                  featuredImageAlt={`${post.title} - featured image`}
                />
              )}

              {/* Share bar - static horizontal row between content and related */}
              <div className="mt-10 pt-8 border-t border-[#e5e7eb]">
                <SocialShareBar title={post.title} url={canonicalUrl} />
              </div>

              {/* Related content */}
              {hasComparisonData ? (
                <RelatedComparisons currentSlug={post.slug} currentTags={post.tags} />
              ) : (
                <RelatedArticles currentSlug={post.slug} currentCategory={post.categorySlug} />
              )}
            </div>
            <BlogSidebar toc={toc} articleUrl={canonicalUrl} />
          </div>

          {/* Mobile AI Summary */}
          <div className="lg:hidden">
            <AiSummarizeWidget articleUrl={canonicalUrl} layout="mobile" />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;
