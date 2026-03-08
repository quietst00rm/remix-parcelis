import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BlogHero from "@/components/blog/BlogHero";
import BlogFilterBar from "@/components/blog/BlogFilterBar";
import BlogPostCard from "@/components/blog/BlogPostCard";
import { blogPosts, getPostsByCategory } from "@/data/blogPosts";

const POSTS_PER_PAGE = 9;

const BlogIndexPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const pageParam = parseInt(searchParams.get("page") || "1", 10);

  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [currentPage, setCurrentPage] = useState(pageParam);

  const filteredPosts = useMemo(() => getPostsByCategory(activeCategory), [activeCategory]);
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleCategoryChange = (slug: string) => {
    setActiveCategory(slug);
    setCurrentPage(1);
    setSearchParams(slug === "all" ? {} : { category: slug });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const params: Record<string, string> = {};
    if (activeCategory !== "all") params.category = activeCategory;
    if (page > 1) params.page = String(page);
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Parcelis Blog | Shipping Protection Insights for Shopify</title>
        <meta name="description" content="Shipping protection insights, comparisons, and guides for Shopify merchants. Learn how to protect your revenue with Parcelis." />
        <link rel="canonical" href="https://parcelis-draft.lovable.app/blog" />
        <meta property="og:title" content="Parcelis Blog" />
        <meta property="og:description" content="Shipping protection insights for Shopify merchants." />
        <meta property="og:url" content="https://parcelis-draft.lovable.app/blog" />
        <meta property="og:type" content="website" />
      </Helmet>

      <BlogHero />
      <div id="blog-content">
        <BlogFilterBar activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />

      <section className="bg-[#F8FAFC] py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          {paginatedPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-[#6b7280] mb-4">No posts found in this category.</p>
              <button
                onClick={() => handleCategoryChange("all")}
                className="text-[#1e22aa] font-semibold hover:underline min-h-[44px]"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-medium text-[#1a1a2e] border border-[#e5e7eb] rounded-lg hover:bg-[#f8f9fc] disabled:opacity-40 disabled:cursor-not-allowed min-h-[44px] transition-colors"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${
                    page === currentPage
                      ? "bg-[#1e22aa] text-white"
                      : "text-[#1a1a2e] border border-[#e5e7eb] hover:bg-[#f8f9fc]"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm font-medium text-[#1a1a2e] border border-[#e5e7eb] rounded-lg hover:bg-[#f8f9fc] disabled:opacity-40 disabled:cursor-not-allowed min-h-[44px] transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
      </div>
    </>
  );
};

export default BlogIndexPage;
