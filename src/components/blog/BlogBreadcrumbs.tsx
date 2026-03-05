import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface BlogBreadcrumbsProps {
  category: string;
  categorySlug: string;
  postTitle: string;
  postUrl: string;
}

const BlogBreadcrumbs = ({ category, categorySlug, postTitle, postUrl }: BlogBreadcrumbsProps) => {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://parcelis-draft.lovable.app/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://parcelis-draft.lovable.app/blog" },
      { "@type": "ListItem", position: 3, name: category, item: `https://parcelis-draft.lovable.app/blog?category=${categorySlug}` },
      { "@type": "ListItem", position: 4, name: postTitle, item: `https://parcelis-draft.lovable.app${postUrl}` },
    ],
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1 text-sm mb-4">
        <Link to="/" className="text-[#6b7280] hover:text-[#1e22aa] hover:underline transition-colors min-h-[44px] flex items-center">
          Home
        </Link>
        <ChevronRight className="w-4 h-4 text-[#9ca3af] shrink-0" />
        <Link to="/blog" className="text-[#6b7280] hover:text-[#1e22aa] hover:underline transition-colors min-h-[44px] flex items-center">
          Blog
        </Link>
        <ChevronRight className="w-4 h-4 text-[#9ca3af] shrink-0" />
        <Link
          to={`/blog?category=${categorySlug}`}
          className="text-[#6b7280] hover:text-[#1e22aa] hover:underline transition-colors min-h-[44px] flex items-center"
        >
          {category}
        </Link>
        <ChevronRight className="w-4 h-4 text-[#9ca3af] shrink-0" />
        <span className="text-[#374151] font-medium">{postTitle}</span>
      </nav>
    </>
  );
};

export default BlogBreadcrumbs;
