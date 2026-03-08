import { Link } from "react-router-dom";
import type { BlogPost } from "@/data/blogPosts";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const route = `/blog/${post.slug}`;
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      to={route}
      className="group block rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-[2px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-[#1E3A8A] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          {post.category}
        </span>
      </div>
      <div className="p-6">
        <h2 className="font-heading text-xl font-semibold text-[#0F172A] mb-2 line-clamp-2 group-hover:text-[#1E3A8A] transition-colors">
          {post.title}
        </h2>
        <p className="text-sm text-[#64748B] mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-[#64748B]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#1E3A8A] flex items-center justify-center text-white text-[10px] font-bold">
              {post.author.charAt(0)}
            </div>
            <span className="font-medium text-[#0F172A]">{post.author}</span>
            <span>·</span>
            <time dateTime={post.date}>{formattedDate}</time>
          </div>
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
