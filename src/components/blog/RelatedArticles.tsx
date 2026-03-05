import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import type { BlogPost } from "@/data/blogPosts";

interface RelatedArticlesProps {
  currentSlug: string;
  currentCategory: string;
}

const RelatedArticles = ({ currentSlug, currentCategory }: RelatedArticlesProps) => {
  const otherPosts = blogPosts.filter((p) => p.slug !== currentSlug);

  // Prioritize same category, then most recent
  const sameCategory = otherPosts.filter((p) => p.categorySlug === currentCategory);
  const rest = otherPosts
    .filter((p) => p.categorySlug !== currentCategory)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const related = [...sameCategory, ...rest].slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-[#e5e7eb] mb-12 print:hidden">
      <h2 className="font-heading text-2xl font-bold text-[#1a1a2e] mb-6">
        Related Articles
      </h2>
      <div className="space-y-4">
        {related.map((post) => (
          <RelatedCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
};

const RelatedCard = ({ post }: { post: BlogPost }) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-row gap-4 rounded-lg hover:bg-[#f8f9fc] transition-all duration-200 p-2 -mx-2"
    >
      <div className="w-[120px] h-[80px] shrink-0 overflow-hidden rounded-lg">
        <img
          src={post.featuredImage}
          alt={`${post.title}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-center min-w-0">
        <h3 className="font-heading text-sm font-semibold text-[#1a1a2e] line-clamp-2 group-hover:text-[#1e22aa] transition-colors mb-1">
          {post.title}
        </h3>
        <div className="flex items-center gap-2 text-xs text-[#6b7280]">
          <span className="bg-[#1e22aa]/10 text-[#1e22aa] font-medium px-1.5 py-0.5 rounded">
            {post.category}
          </span>
          <span>·</span>
          <time dateTime={post.date}>{formattedDate}</time>
        </div>
      </div>
    </Link>
  );
};

export default RelatedArticles;
