import { useEffect, useState, useRef } from "react";

const ReadingProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const article = document.querySelector(".blog-prose");
        if (!article) return;

        const rect = article.getBoundingClientRect();
        const articleTop = rect.top + window.scrollY;
        const articleHeight = rect.height;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollY < articleTop) {
          setProgress(0);
        } else if (scrollY + windowHeight >= articleTop + articleHeight) {
          setProgress(100);
        } else {
          const scrolled = scrollY - articleTop;
          const total = articleHeight - windowHeight;
          setProgress(total > 0 ? Math.min(100, (scrolled / total) * 100) : 0);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent print:hidden" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
      <div
        className="h-full bg-[#1e22aa] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingProgressBar;
