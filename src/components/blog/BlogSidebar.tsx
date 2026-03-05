interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface BlogSidebarProps {
  toc: TocItem[];
}

const BlogSidebar = ({ toc }: BlogSidebarProps) => {
  return (
    <aside className="hidden lg:block w-[280px] shrink-0">
      <div className="sticky top-[100px] space-y-6">
        {/* Table of Contents */}
        <div className="bg-[#f8f9fc] rounded-lg p-5 border border-[#e5e7eb]">
          <h3 className="font-heading text-sm font-bold text-[#1a1a2e] uppercase tracking-wider mb-3">
            Table of Contents
          </h3>
          <nav aria-label="Table of contents">
            <ul className="space-y-2">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`text-sm text-[#6b7280] hover:text-[#1e22aa] transition-colors block min-h-[44px] flex items-center ${
                      item.level === 3 ? "pl-4" : ""
                    }`}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
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
