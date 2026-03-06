

## Problem

Clicking a "Related Comparisons" link on a blog post page changes the URL and content but does not scroll to the top. The user stays at the bottom of the page where the related links are, making it feel like the content just swapped in place rather than navigating to a new page.

This is a standard React Router SPA behavior: route changes within the same component don't trigger a scroll reset.

## Fix

Add a scroll-to-top effect in `BlogPostPage.tsx` that fires whenever the `slug` parameter changes. This ensures every blog-to-blog navigation scrolls the viewport to the top, matching the expected behavior of a traditional multi-page blog.

### File: `src/pages/BlogPostPage.tsx`

Add a `useEffect` that watches the `slug` param:

```tsx
useEffect(() => {
  window.scrollTo(0, 0);
}, [slug]);
```

This single change covers all blog post navigation: Related Comparisons, Related Articles, and any other internal blog links.

### Files changed
- `src/pages/BlogPostPage.tsx` (add one `useEffect`)

