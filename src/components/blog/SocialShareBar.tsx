import { useState, useCallback } from "react";
import { Twitter, Linkedin, Facebook, LinkIcon, Check } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SocialShareBarProps {
  title: string;
  url: string;
}

const SocialShareBar = ({ title, url }: SocialShareBarProps) => {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "Share on X",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      icon: Twitter,
    },
    {
      name: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: Linkedin,
    },
    {
      name: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: Facebook,
    },
  ];

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [url]);

  return (
    <TooltipProvider delayDuration={200}>
      {/* Desktop floating bar */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-2 print:hidden">
        {shareLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Tooltip key={link.name}>
              <TooltipTrigger asChild>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="w-10 h-10 rounded-full bg-[#f8f9fc] border border-[#e5e7eb] flex items-center justify-center text-[#6b7280] hover:bg-[#1e22aa] hover:text-white hover:border-[#1e22aa] hover:scale-110 hover:shadow-md transition-all duration-200"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              </TooltipTrigger>
              <TooltipContent side="right"><p>{link.name}</p></TooltipContent>
            </Tooltip>
          );
        })}
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={handleCopy}
              aria-label="Copy link"
              className="w-10 h-10 rounded-full bg-[#f8f9fc] border border-[#e5e7eb] flex items-center justify-center text-[#6b7280] hover:bg-[#1e22aa] hover:text-white hover:border-[#1e22aa] hover:scale-110 hover:shadow-md transition-all duration-200"
            >
              {copied ? <Check className="w-[18px] h-[18px]" /> : <LinkIcon className="w-[18px] h-[18px]" />}
            </button>
          </TooltipTrigger>
          <TooltipContent side="right"><p>{copied ? "Link copied!" : "Copy link"}</p></TooltipContent>
        </Tooltip>
      </div>

      {/* Mobile inline bar */}
      <div className="lg:hidden flex items-center justify-center gap-4 mt-10 pt-6 border-t border-[#e5e7eb] print:hidden">
        {shareLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#f8f9fc] border border-[#e5e7eb] text-[#6b7280] hover:bg-[#1e22aa] hover:text-white hover:border-[#1e22aa] transition-all duration-200 text-xs font-medium min-h-[44px]"
            >
              <Icon className="w-[18px] h-[18px]" />
              <span className="hidden sm:inline">{link.name.replace("Share on ", "")}</span>
            </a>
          );
        })}
        <button
          onClick={handleCopy}
          aria-label="Copy link"
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#f8f9fc] border border-[#e5e7eb] text-[#6b7280] hover:bg-[#1e22aa] hover:text-white hover:border-[#1e22aa] transition-all duration-200 text-xs font-medium min-h-[44px]"
        >
          {copied ? <Check className="w-[18px] h-[18px]" /> : <LinkIcon className="w-[18px] h-[18px]" />}
          <span className="hidden sm:inline">{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>
    </TooltipProvider>
  );
};

export default SocialShareBar;
