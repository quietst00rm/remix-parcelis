import { useMemo } from "react";

interface BlogPostContentProps {
  content: string;
  featuredImage?: string;
  featuredImageAlt?: string;
}

const BlogPostContent = ({ content, featuredImage, featuredImageAlt }: BlogPostContentProps) => {
  const contentWithImage = useMemo(() => {
    if (!featuredImage) return content;
    const imgHtml = `<img src="${featuredImage}" alt="${featuredImageAlt || "Featured image"}" class="w-full max-h-[360px] object-cover rounded-lg border border-[#e5e7eb] shadow-sm my-8" loading="eager" />`;
    // Insert after first H2 + its following paragraphs (after closing </p> that follows the first <h2>)
    const firstH2End = content.indexOf("</h2>");
    if (firstH2End === -1) return imgHtml + content;
    // Find the end of the paragraph(s) after the first H2
    const afterH2 = content.indexOf("<h2", firstH2End + 5);
    const afterH3 = content.indexOf("<h3", firstH2End + 5);
    let insertPos: number;
    if (afterH2 === -1 && afterH3 === -1) {
      insertPos = content.length;
    } else if (afterH2 === -1) {
      insertPos = afterH3;
    } else if (afterH3 === -1) {
      insertPos = afterH2;
    } else {
      insertPos = Math.min(afterH2, afterH3);
    }
    return content.slice(0, insertPos) + imgHtml + content.slice(insertPos);
  }, [content, featuredImage, featuredImageAlt]);

  return (
    <article
      className="blog-prose max-w-[760px]"
      dangerouslySetInnerHTML={{ __html: contentWithImage }}
    />
  );
};

export default BlogPostContent;
