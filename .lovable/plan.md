

## Cookie Consent Banner — Full Compliance

### Tracking Scripts Identified
Currently loaded unconditionally in `index.html`:
- **Google Analytics** (G-C2GCQ0JLGN)
- **Ahrefs Analytics**
- **Microsoft Clarity**

For GDPR/UK GDPR compliance, these must **not fire until the user consents**. For US (CCPA/state laws), an opt-out model is acceptable but we'll use opt-in as the strictest standard.

### Approach

**1. Create `CookieConsentBanner.tsx` component**
- Fixed bottom banner with two columns: left = text explaining cookies with link to `/privacy`, right = buttons
- Three buttons: "Reject All", "Customize", "Accept All"
- On "Customize": expand an inline panel with toggle switches for:
  - **Necessary** (always on, disabled toggle)
  - **Analytics** (Google Analytics, Ahrefs)
  - **Functional** (Microsoft Clarity session recording)
- Stores consent in `localStorage` key `parcelis_cookie_consent` as JSON `{ analytics: bool, functional: bool, timestamp: string }`
- If no consent stored, banner shows. If consent exists, banner hidden.
- Design system compliant: `bg-[#0F172A]` dark surface, white text, primary blue accept button, ghost reject button, `rounded-2xl` on desktop

**2. Create `src/lib/cookies.ts` utility**
- `getConsent()`: reads localStorage, returns consent object or null
- `setConsent(prefs)`: saves to localStorage
- `loadAnalytics()`: dynamically injects GA + Ahrefs scripts
- `loadFunctional()`: dynamically injects Clarity script
- `revokeConsent()`: clears scripts (sets flag, scripts only fully stop on next page load)

**3. Modify `index.html`**
- **Remove** all three tracking scripts (GA, Ahrefs, Clarity) from the `<head>` — they'll be loaded dynamically after consent

**4. Modify `App.tsx`**
- Import and render `<CookieConsentBanner />` at the root level (outside routes, always visible)
- On mount, check consent and load approved scripts via the utility

### Banner Design
```text
┌──────────────────────────────────────────────────────────────────┐
│  🍪 We use cookies to analyze site traffic and optimize your    │
│  experience. Learn more in our Privacy Policy.                  │
│                                                                 │
│  [Reject All]  [Customize]  [Accept All]                        │
└──────────────────────────────────────────────────────────────────┘
```

Expanded customize view:
```text
│  ┌─ Necessary cookies          [always on] ──┐                  │
│  ├─ Analytics (GA, Ahrefs)     [toggle]     ──┤                  │
│  ├─ Functional (Clarity)       [toggle]     ──┤                  │
│  └─ [Save Preferences]                      ──┘                  │
```

### Files
| File | Action |
|---|---|
| `src/lib/cookies.ts` | Create — consent storage + dynamic script loader |
| `src/components/CookieConsentBanner.tsx` | Create — banner UI |
| `index.html` | Edit — remove 3 tracking scripts from head |
| `src/App.tsx` | Edit — add banner + consent-based script loading on mount |

