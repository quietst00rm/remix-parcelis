import { categories } from "@/data/blogPosts";

interface BlogFilterBarProps {
  activeCategory: string;
  onCategoryChange: (slug: string) => void;
}

const BlogFilterBar = ({ activeCategory, onCategoryChange }: BlogFilterBarProps) => {
  return (
    <section className="bg-[#F8FAFC] border-b border-[#E2E8F0] sticky top-[76px] z-20">
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => onCategoryChange(cat.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 min-h-[44px] ${
                  isActive
                    ? "bg-[#1E3A8A] text-white"
                    : "bg-white text-[#475569] border border-[#E2E8F0] hover:border-[#1E3A8A] hover:text-[#1E3A8A]"
                }`}
                aria-pressed={isActive}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogFilterBar;
