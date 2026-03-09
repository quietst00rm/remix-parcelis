

## Fix Mobile Footer Layout

The screenshot shows the footer on mobile is single-column centered text, which looks unstructured — each section stacks full-width with centered text, creating a long, sparse layout.

### Changes to `src/components/Footer.tsx`

**Mobile layout redesign:**
- Keep brand section full-width centered on mobile (logo, tagline, LinkedIn)
- Below brand, use a **2-column grid** (`grid-cols-2`) for the link sections on mobile, left-aligned within each column
- Column 1: Product + Legal stacked
- Column 2: Company + Contact stacked
- This keeps mobile compact and structured instead of a single centered column
- Text alignment: left-aligned on mobile grid columns (not centered)
- Separator line between brand section and link columns on mobile
- Bottom bar stays stacked/centered on mobile

### Layout summary
```text
Mobile:
┌──────────────────────────┐
│     [Logo]               │
│  Tagline centered        │
│     [LinkedIn]           │
│ ──────────────────────── │
│  PRODUCT    │  COMPANY   │
│  How It..   │  About     │
│  Pricing    │  Contact   │
│  Risk Cal   │  Get Par   │
│             │  Blog      │
│  LEGAL      │  CONTACT   │
│  Privacy    │  email     │
│  Terms      │            │
│  Affiliate  │            │
│ ──────────────────────── │
│  © 2026     Powered by   │
└──────────────────────────┘
```

### File
| File | Action |
|---|---|
| `src/components/Footer.tsx` | Edit — restructure mobile grid to 2-col for link sections, left-align text |

