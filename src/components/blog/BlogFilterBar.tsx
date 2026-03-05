import { categories } from "@/data/blogPosts";

interface BlogFilterBarProps {
  activeCategory: string;
  onCategoryChange: (slug: string) => void;
}

const BlogFilterBar = ({ activeCategory, onCategoryChange }: BlogFilterBarProps) => {
  return (
    <section className="bg-white border-b border-[#e5e7eb] sticky top-0 z-20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => onCategoryChange(cat.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 min-h-[44px] ${
                  isActive
                    ? "bg-[#1e22aa] text-white"
                    : "bg-white text-[#1a1a2e] border border-[#e5e7eb] hover:border-[#1e22aa] hover:text-[#1e22aa]"
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
