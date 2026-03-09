
## Redesign Pricing Calculator Layout

### Problem
The current calculator card spans `max-w-5xl` (1024px) but only contains a single input field, making it feel oversized and awkward.

### Solution
Redesign as a **compact, two-column horizontal layout** that integrates the input and result side-by-side:

```text
┌─────────────────────────────────────────────────────────────┐
│  [Package Value Input]  →  [Your Cost: $X.XX]               │
│     $100                     $2.50                          │
│                                                             │
│  • Per-package pricing  • Full coverage  • No fees         │
└─────────────────────────────────────────────────────────────┘
```

### Approach

1. **Reduce max-width** from `max-w-5xl` to `max-w-2xl` (~672px)

2. **Two-column grid layout** (on md+):
   - Left: Input field with label
   - Right: Result display with "Your Cost" heading

3. **Visual flow enhancement**:
   - Add arrow or visual connector between input and output
   - Keep the result prominent with large typography
   - Bullet points stay below as a compact horizontal row on desktop

4. **Styling updates** per design system:
   - Card: `rounded-2xl border border-gray-200 shadow-lg` 
   - Input: tighter padding, refined focus states
   - Result: centered vertically with input

### Files to Edit
- `src/components/PricingCalculator.tsx` – restructure the calculator card layout
