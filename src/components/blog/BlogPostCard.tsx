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
      className="group block rounded-lg overflow-hidden bg-white border border-[#e5e7eb] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1e22aa] focus:ring-offset-2"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-[#1e22aa] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          {post.category}
        </span>
      </div>
      <div className="p-5">
        <h2 className="font-heading text-xl font-semibold text-[#1a1a2e] mb-2 line-clamp-2 group-hover:text-[#1e22aa] transition-colors">
          {post.title}
        </h2>
        <p className="text-sm text-[#6b7280] mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-[#6b7280]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#1e22aa] flex items-center justify-center text-white text-[10px] font-bold">
              {post.author.charAt(0)}
            </div>
            <span className="font-medium text-[#1a1a2e]">{post.author}</span>
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
