import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import type { BlogPost } from "@/data/blogPosts";

interface RelatedComparisonsProps {
  currentSlug: string;
  currentTags: string[];
}

const RelatedComparisons = ({ currentSlug, currentTags }: RelatedComparisonsProps) => {
  const comparisonPosts = blogPosts.filter(
    (p) => p.isComparison && p.slug !== currentSlug
  );

  // Score by shared tags
  const scored = comparisonPosts.map((p) => ({
    post: p,
    score: p.tags.filter((t) => currentTags.includes(t)).length,
  }));
  scored.sort((a, b) => b.score - a.score || new Date(b.post.date).getTime() - new Date(a.post.date).getTime());

  const related = scored.slice(0, 3).map((s) => s.post);

  if (related.length === 0) return null;

  return (
    <section className="mt-12 pt-10 border-t border-[#e5e7eb] print:hidden">
      <h2 className="font-heading text-2xl font-bold text-[#1a1a2e] mb-6" id="related-comparisons">
        Related Comparisons
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
  const route = `/blog/${post.slug}`;
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      to={route}
      className="group flex flex-col sm:flex-row gap-4 rounded-lg border border-[#e5e7eb] bg-white hover:shadow-md hover:-translate-y-px transition-all duration-200 overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#1e22aa] focus:ring-offset-2"
    >
      <div className="sm:w-[120px] sm:h-[90px] h-[160px] shrink-0 overflow-hidden">
        <img
          src={post.featuredImage}
          alt={`${post.title} - comparison article`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-3 sm:py-3 sm:pr-4 sm:pl-0 flex flex-col justify-center">
        <h3 className="font-heading text-sm font-semibold text-[#1a1a2e] line-clamp-2 group-hover:text-[#1e22aa] transition-colors mb-1">
          {post.title}
        </h3>
        <div className="flex items-center gap-2 text-xs text-[#6b7280]">
          <span>{post.author}</span>
          <span>·</span>
          <time dateTime={post.date}>{formattedDate}</time>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
};

export default RelatedComparisons;
