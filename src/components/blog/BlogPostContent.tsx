interface BlogPostContentProps {
  content: string;
}

const BlogPostContent = ({ content }: BlogPostContentProps) => {
  return (
    <article
      className="blog-prose max-w-[720px]"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default BlogPostContent;
