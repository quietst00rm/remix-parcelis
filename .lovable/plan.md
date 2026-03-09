

## Add YouTube Video Section Below Hero

Add a new `HomeVideo` component rendered between `HomeHero` and `HomeValueProps` on the home page.

### Design
- Section with `bg-neutral-50` (alternating pattern), `py-24` desktop / `py-14` mobile
- Centered `max-w-4xl` container
- Optional eyebrow label + heading ("See Parcelis in Action" or similar)
- 16:9 aspect ratio wrapper with `rounded-2xl`, `shadow-lg`, `overflow-hidden`
- YouTube embed URL with these params to keep it clean:
  - `modestbranding=1` — minimal YouTube branding
  - `rel=0` — no related videos at end
  - `controls=0` — hide player controls
  - `showinfo=0` — hide title bar
  - `si=2EMEJXldSbsiFQBq` (existing tracking param)
- `iframe` set to `width="100%" height="100%"` inside the aspect-ratio container, `loading="lazy"`

### Files
| File | Action |
|---|---|
| `src/components/HomeVideo.tsx` | Create — video section component |
| `src/pages/HomePage.tsx` | Edit — import and render `<HomeVideo />` between `<HomeHero />` and `<HomeValueProps />` |

