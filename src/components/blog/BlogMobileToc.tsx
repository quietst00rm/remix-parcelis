import { useState } from "react";
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

  if (toc.length === 0) return null;

  return (
    <div className="lg:hidden mb-8 bg-[#f8f9fc] rounded-lg border border-[#e5e7eb] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-sm font-bold text-[#1a1a2e] uppercase tracking-wider min-h-[44px]"
        aria-expanded={open}
      >
        Table of Contents
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <nav aria-label="Table of contents" className="px-4 pb-4">
          <ul className="space-y-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`text-sm text-[#6b7280] hover:text-[#1e22aa] transition-colors block min-h-[44px] flex items-center ${
                    item.level === 3 ? "pl-4" : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default BlogMobileToc;
