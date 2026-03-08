

## Root Cause Analysis

I examined the hero at both 1920x1080 and 375x812 and identified the fundamental layout problem.

### The Core Bug: Three Conflicting Layout Strategies

The hero inner container (line 47 of `HomeHero.tsx`) uses:
```text
-mt-[76px]     → pulls section behind fixed nav
pt-[160px]     → pushes content below nav
justify-center → re-centers content in remaining space
min-h-[640px]  → fixed minimum height
```

These fight each other:
- `pt-[160px]` reserves 160px at the top for nav clearance
- `justify-center` then centers content in the *remaining* space (640 - 160 - 112 = 368px), which pushes the headline right back up toward the nav
- At 1920px desktop, 640px min-height is only 59% of the viewport — the hero looks stubby and cramped
- At 375px mobile, content exceeds the min-height so the container grows unpredictably

The result: no matter how much top padding you add, `justify-center` undoes it by redistributing space. This is why every previous fix felt like a band-aid.

### Secondary Issue: Nav Padding

The nav uses `max-w-[1200px] mx-auto` with `px-5 sm:px-8 lg:px-12`. On viewports close to 1200px (like 1280px in the Lovable preview), the auto margins are tiny (~40px) and the inner padding isn't enough — the logo gets clipped at the left edge.

---

## The Fix

### 1. Hero Layout — Remove `justify-center`, use viewport-relative height

- Remove `justify-center` from the hero gradient container
- Change `min-h-[520px] md:min-h-[640px]` to `min-h-[100svh]` (full viewport height) so the hero always fills the screen
- Keep `pt-[160px]` as the sole vertical positioning mechanism — content flows naturally from that point
- Add `justify-start` so flex children stack from the top (after padding)
- Increase `pb` to `pb-[140px] md:pb-[160px]` to leave room for the wave curve + stats bar overlap
- The content block stays centered horizontally (`items-center` + `text-center`), but vertically it sits at a consistent distance below the nav
- Add a flex-grow spacer `div` between the social proof line and the bottom, so the content naturally sits in the upper-center of the hero rather than being crammed at the top

### 2. Nav Container — Full-bleed padding

- Change the nav's inner container from `max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12` to use the full viewport width with consistent edge padding: `w-full px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1440px] mx-auto`
- This ensures at least 24px padding on mobile, scaling up to 64px on large screens — logo will never clip regardless of viewport

### Files Changed

- `src/components/HomeHero.tsx` — Hero layout restructure
- `src/components/Navbar.tsx` — Nav container padding fix

