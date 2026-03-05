import { useMemo } from "react";
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
      <SocialShareBar title={post.title} url={canonicalUrl} />
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

      {/* Header area */}
      <div className="bg-[#f8f9fc] pt-28 md:pt-36 pb-8 md:pb-12">
        <div className="container mx-auto px-4 max-w-[1100px]">
          <BlogBreadcrumbs
            category={post.category}
            categorySlug={post.categorySlug}
            postTitle={post.title}
            postUrl={postUrl}
          />
          <h1 className="font-heading text-2xl md:text-4xl font-bold text-[#1a1a2e] mb-4 max-w-[800px]">
            {post.title}
          </h1>
          {/* Print-only canonical URL */}
          <p className="hidden print:block text-xs text-[#6b7280] mb-2">{canonicalUrl}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#6b7280] mb-6 print:mb-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#1e22aa] flex items-center justify-center text-white text-xs font-bold print:hidden">
                {post.author.charAt(0)}
              </div>
              <span className="font-medium text-[#1a1a2e]">{post.author}</span>
            </div>
            <span>·</span>
            <time dateTime={post.date}>{formattedDate}</time>
            <span>·</span>
            <span>{post.readTime}</span>
            <span className="bg-[#1e22aa]/10 text-[#1e22aa] text-xs font-semibold px-2.5 py-1 rounded-full print:hidden">
              {post.category}
            </span>
          </div>
          <img
            src={post.featuredImage}
            alt={`${post.title} - featured image`}
            className="w-full max-h-[400px] object-cover rounded-lg"
            loading="eager"
          />
        </div>
      </div>

      {/* Content area */}
      <section className="bg-white py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-[1100px]">
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
                />
              ) : (
                <BlogPostContent content={post.content} />
              )}

              {/* Related comparisons for comparison posts */}
              {post.isComparison && (
                <RelatedComparisons currentSlug={post.slug} currentTags={post.tags} />
              )}

              {/* Mobile share bar */}
              <div className="lg:hidden">
                <SocialShareBar title={post.title} url={canonicalUrl} />
              </div>
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
