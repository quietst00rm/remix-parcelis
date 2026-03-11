

## Add "Sign Up" CTA Buttons to Partner Page

Add "Sign Up" buttons linking to `/affiliate-program` in strategic locations on the Partner page.

### Changes to `src/pages/PartnerPage.tsx`

1. **Hero section** — Add a primary "Sign Up" button next to the existing "Revenue Calculator" button
2. **Final CTA section** — Add a "Sign Up" button below the existing text (currently has no button at all)
3. **How It Works section** — Add a "Sign Up" CTA button below the steps

All buttons will use `Link` from `react-router-dom` pointing to `/affiliate-program`, styled consistently with the page's design system (white fill for primary, outline for secondary).

| File | Action |
|---|---|
| `src/pages/PartnerPage.tsx` | Edit — add Sign Up buttons to hero, how-it-works, and final CTA sections |

