

## SEO URL Structure Analysis

Based on SEO research, here's the recommendation:

**Use a flat `/blog/[slug]` structure for all posts** -- no category subdirectories.

**Why flat wins here:**
- For a blog with fewer than ~1,000 pages, category subdirectories provide negligible topical authority benefit
- Flat URLs keep maximum link equity one hop from the domain root
- Google treats subdirectories as organizational hints, not ranking signals -- topical authority comes from internal linking and content quality, not folder nesting
- Simpler structure avoids future maintenance headaches (what if a post belongs to multiple categories? what if categories rename?)
- The category signal is already conveyed through the page content, schema markup, and internal linking

The current `/blog/compare/[slug]` pattern also uses "compare" while the category is called "comparisons" -- inconsistent. Going flat eliminates this mismatch entirely.

## Implementation Plan

### 1. Remove the `/blog/compare/:slug` route

In `src/App.tsx`, delete the dedicated comparison route. All posts (comparison and general) will be served by `/blog/:slug`.

### 2. Update all internal link generation

Four files currently build `/blog/compare/` URLs:

- **`BlogPostCard.tsx`** -- remove the ternary, always use `/blog/${post.slug}`
- **`RelatedComparisons.tsx`** -- change route to `/blog/${post.slug}`
- **`BlogPostPage.tsx`** -- remove the `isComparison` prop logic, always use `/blog/${post.slug}` for `postUrl` and `canonicalUrl`
- **`BlogBreadcrumbs.tsx`** -- no changes needed (it receives `postUrl` as a prop)

### 3. Update `BlogPostPage` component

- Remove the `isComparison` prop entirely
- Detect comparison posts by checking `post.comparisonData` (already done with `hasComparisonData`)
- This means the same component handles both post types at the same route pattern

### 4. Update SEO assets

- **`public/sitemap.xml`** -- change all `/blog/compare/` URLs to `/blog/`
- **`BlogBreadcrumbs.tsx`** -- update the JSON-LD domain references from `parcelis-draft.lovable.app` to `myparcelis.com` for consistency

### 5. Remove `isComparison` from data model (optional cleanup)

The `isComparison` boolean on `BlogPost` becomes redundant since we can derive it from `!!post.comparisonData`. Can keep it for convenience or remove it -- minimal impact either way.

### Files changed
- `src/App.tsx` (remove one route)
- `src/components/blog/BlogPostCard.tsx` (simplify link)
- `src/components/blog/RelatedComparisons.tsx` (simplify link)
- `src/pages/BlogPostPage.tsx` (remove `isComparison` prop, flatten URL logic)
- `public/sitemap.xml` (update comparison post URLs)

