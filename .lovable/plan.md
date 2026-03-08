

## Root Cause

**`src/App.css`** contains the default Vite starter styles:

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
```

This constrains the entire `#root` element to 1280px wide with 2rem padding and centers it. Since the navbar is `position: fixed` but rendered inside `#root`, and the entire page content is capped at 1280px with padding, everything gets squeezed — clipping the logo on the left and CTA buttons on the right.

This is leftover boilerplate from Vite's default React template and should never have been there.

## Fix

**Delete the entire contents of `src/App.css`** (or remove just the `#root` rule and any other default Vite styles). None of those styles are used by the actual app — all styling comes from Tailwind classes and `index.css`.

One file change. Immediate fix.

