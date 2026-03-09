

## Redesign Contact Page — Professional Layout

### Problems
1. "Contact Information" with just an email floats alone in a half-width column — massive empty space
2. Form is shoved to the right instead of being the focal point
3. Empty button in "Other Ways to Get Help" (line 192 is an empty `<Button>`)
4. No visual accent or polish on the form card
5. Sections below feel disconnected and unstyled

### New Layout

```text
┌──────────────────────────────────────────────────────┐
│                    HERO (unchanged)                  │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│              max-w-2xl centered form card             │
│  ┌────────────────────────────────────────────────┐  │
│  │  Blue top accent bar (4px h-1 bg-primary)      │  │
│  │                                                │  │
│  │  "Send Us a Message"                           │  │
│  │  subtitle text                                 │  │
│  │                                                │  │
│  │  [Name]              [Email]     (2-col grid)  │  │
│  │  [Company]           [Subject]   (2-col grid)  │  │
│  │  [Message — full width]                        │  │
│  │  [Send Message button]                         │  │
│  │                                                │  │
│  │  📧 support@myparcelis.com (inline at bottom)  │  │
│  └────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│  "Other Ways to Get Help" — 3 uniform styled cards   │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  │
│  │ 📧 Email Us │  │ 🛒 Get App  │  │ 💰 Pricing  │  │
│  │ direct link │  │ Shopify link│  │ /pricing     │  │
│  └─────────────┘  └─────────────┘  └─────────────┘  │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│          Supported Carriers (unchanged)              │
└──────────────────────────────────────────────────────┘
```

### Changes — `src/pages/ContactPage.tsx`

1. **Remove the 2-column grid** — kill the "Contact Information" left column entirely
2. **Center the form** in a `max-w-2xl mx-auto` card with:
   - Blue accent bar at top (`h-1 bg-primary rounded-t-2xl`)
   - Card: `rounded-2xl border border-gray-200 shadow-lg p-8 md:p-10`
   - Name + Email in a 2-col grid on md+
   - Company + Subject in a 2-col grid on md+
   - Email contact info as a small inline note below the submit button
3. **Fix "Other Ways to Get Help"** — remove the empty button, restyle as 3 proper cards with icons (Mail, ShoppingBag, DollarSign from lucide), consistent `rounded-2xl border shadow-sm hover:shadow-md` styling
4. **Remove redundant `useEffect` scroll-to-top** (already handled globally)
5. **Import cleanup** — add needed Lucide icons, remove unused imports

### Files
- `src/pages/ContactPage.tsx` — full restructure

