import { useEffect, useState, useCallback } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface BlogSidebarProps {
  toc: TocItem[];
}

const BlogSidebar = ({ toc }: BlogSidebarProps) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (toc.length === 0) return;

    const headingEls = toc
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (headingEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    headingEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [toc]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  if (toc.length === 0) return null;

  return (
    <aside className="hidden lg:block w-[280px] shrink-0">
      <div className="sticky top-[100px] space-y-6">
        {/* Table of Contents */}
        <div className="bg-[#f8f9fc] rounded-lg p-5 border border-[#e5e7eb]">
          <h3 className="font-heading text-sm font-semibold text-[#6b7280] uppercase tracking-wider pb-3 mb-3 border-b border-[#e5e7eb]">
            Table of Contents
          </h3>
          <nav
            aria-label="Table of contents"
            className="max-h-[calc(100vh-140px)] overflow-y-auto blog-toc-scroll"
          >
            <ul className="space-y-0">
              {toc.map((item) => {
                const isActive = activeId === item.id;
                const isH3 = item.level === 3;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleClick(e, item.id)}
                      className={`block text-sm transition-colors duration-150 ${
                        isH3 ? "pl-4 py-1 font-normal" : "py-1.5 font-medium"
                      } ${
                        isActive
                          ? "text-[#1e22aa] border-l-2 border-[#1e22aa] pl-3"
                          : isH3
                          ? "text-[#6b7280] hover:text-[#1e22aa]"
                          : "text-[#374151] hover:text-[#1e22aa]"
                      }`}
                      aria-current={isActive ? "location" : undefined}
                    >
                      {item.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* AI Summary placeholder */}
        <div className="bg-[#f8f9fc] rounded-lg p-5 border border-[#e5e7eb]">
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
    </aside>
  );
};

export default BlogSidebar;
