import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getPostBySlug } from "@/data/blogPosts";
import BlogBreadcrumbs from "@/components/blog/BlogBreadcrumbs";
import BlogPostContent from "@/components/blog/BlogPostContent";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogMobileToc from "@/components/blog/BlogMobileToc";

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

const BlogPostPage = ({ isComparison = false }: { isComparison?: boolean }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const toc = useMemo(() => (post ? extractToc(post.content) : []), [post]);

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

  const postUrl = isComparison ? `/blog/compare/${post.slug}` : `/blog/${post.slug}`;
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Helmet>
        <title>{post.title} | Parcelis Blog</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={`https://parcelis-draft.lovable.app${postUrl}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:url" content={`https://parcelis-draft.lovable.app${postUrl}`} />
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
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#6b7280] mb-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#1e22aa] flex items-center justify-center text-white text-xs font-bold">
                {post.author.charAt(0)}
              </div>
              <span className="font-medium text-[#1a1a2e]">{post.author}</span>
            </div>
            <span>·</span>
            <time dateTime={post.date}>{formattedDate}</time>
            <span>·</span>
            <span>{post.readTime}</span>
            <span className="bg-[#1e22aa]/10 text-[#1e22aa] text-xs font-semibold px-2.5 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full max-h-[400px] object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Content area */}
      <section className="bg-white py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-[1100px]">
          <BlogMobileToc toc={toc} />
          <div className="flex gap-12">
            <div className="flex-1 min-w-0">
              <BlogPostContent content={post.content} />
            </div>
            <BlogSidebar toc={toc} />
          </div>

          {/* Mobile AI Summary */}
          <div className="lg:hidden mt-10 bg-[#f8f9fc] rounded-lg p-5 border border-[#e5e7eb]">
            <h3 className="font-heading text-sm font-bold text-[#1a1a2e] uppercase tracking-wider mb-3">
              Summarize with AI
            </h3>
            <p className="text-sm text-[#6b7280] mb-3">
              Get an AI-generated summary of this article.
            </p>
            <button
              className="w-full bg-[#1e22aa] text-white text-sm font-semibold rounded-lg py-2.5 hover:bg-[#151885] transition-colors min-h-[44px]"
              disabled
            >
              Coming Soon
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;
