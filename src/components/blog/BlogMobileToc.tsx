import { useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface BlogMobileTocProps {
  toc: TocItem[];
}

const BlogMobileToc = ({ toc }: BlogMobileTocProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  if (toc.length === 0) return null;

  return (
    <div className="lg:hidden mb-8 bg-[#f8f9fc] rounded-lg border border-[#e5e7eb] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-sm font-semibold text-[#6b7280] uppercase tracking-wider min-h-[44px]"
        aria-expanded={open}
      >
        Table of Contents
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`transition-all duration-200 ease-in-out overflow-hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Table of contents" className="px-4 pb-4">
          <ul className="space-y-0">
            {toc.map((item) => {
              const isH3 = item.level === 3;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleClick(e, item.id)}
                    className={`block text-sm transition-colors duration-150 min-h-[44px] flex items-center ${
                      isH3
                        ? "pl-4 font-normal text-[#6b7280]"
                        : "font-medium text-[#374151]"
                    } hover:text-[#1e22aa]`}
                  >
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BlogMobileToc;
