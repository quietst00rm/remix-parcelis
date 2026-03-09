

## Problem

The "Fourth Option" conversion card on comparison blog posts has dark text on a dark blue background because the `.blog-prose` CSS rules in `index.css` apply `color: #374151` to `p`, `color: #1a1a2e` to `h3`/`strong`, and `color: #1e22aa` to `a` elements. The `not-prose` class has no effect here because the project uses custom CSS selectors (`.blog-prose p`, `.blog-prose h3`, etc.), not the Tailwind Typography plugin where `not-prose` is defined.

This affects:
1. The h3 heading ("Parcelis: Real Insurance...") — dark instead of white
2. The paragraph/list text — dark instead of white  
3. The "Calculate Your Revenue" button border text — link color override
4. The "View on Shopify App Store" link — blue instead of cyan

## Fix

Add CSS exclusion rules in `src/index.css` so that `.blog-prose` color styles do not apply inside any element with `data-theme="dark"` (or a dedicated class). Then add that attribute to the Fourth Option card in `ComparisonPostContent.tsx`.

### File 1: `src/index.css`

Add scoped exclusions after the existing blog-prose rules. Every rule that sets a color gets a `:not()` exclusion for elements inside a `[data-theme="dark"]` container:

```css
/* Exclude dark-themed containers from blog prose color overrides */
[data-theme="dark"] h2,
[data-theme="dark"] h3,
[data-theme="dark"] p,
[data-theme="dark"] a,
[data-theme="dark"] strong,
[data-theme="dark"] li,
[data-theme="dark"] span {
  color: inherit !important;
}

[data-theme="dark"] a:hover {
  color: inherit !important;
}
```

### File 2: `src/components/blog/ComparisonPostContent.tsx`

Add `data-theme="dark"` to the Fourth Option card div (line 254), so the CSS exclusion applies:

```tsx
<div data-theme="dark" className="not-prose bg-gradient-to-br from-[#1e22aa] to-[#1a1a6e] rounded-xl p-6 md:p-8 text-white mt-6 mb-6">
```

This ensures all child text inside that card inherits white/cyan colors as specified by the inline Tailwind classes, rather than being overridden by the `.blog-prose` global styles.

### Files changed
- `src/index.css` — add dark theme exclusion rules
- `src/components/blog/ComparisonPostContent.tsx` — add `data-theme="dark"` attribute to card

