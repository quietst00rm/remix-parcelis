
GOAL: Ensure all internal navigation links scroll the page to the top when clicked.

CURRENT STATE:
- Individual pages manually call `window.scrollTo(0, 0)` in useEffect hooks
- This works but is scattered and inconsistent
- Blog pagination has its own scroll-to-top logic
- No global mechanism for all navigation

SOLUTION: Create a global scroll-to-top hook that listens to route changes.

APPROACH:
1. Create a new file: `src/hooks/use-scroll-to-top.ts`
   - Custom hook that uses `useLocation()` from react-router-dom
   - Watches for pathname changes and calls `window.scrollTo(0, 0)` on every route change
   - Use an empty dependency array on the outer useEffect, with location.pathname in a nested useEffect to detect changes

2. In `src/App.tsx`:
   - Add the hook call at the top level of the App component
   - This ensures it fires on every route change globally
   - Works for internal links in nav, footer, breadcrumbs, and anywhere else

3. OPTIONAL: Remove individual `window.scrollTo(0, 0)` from page components for cleaner code (each page file has a useEffect doing this)
   - This is optional since the global hook will handle it anyway
   - Leaving them in place is harmless and doesn't break anything

OUTCOME:
- All clicks on internal navigation links automatically scroll to top
- Works for all links everywhere (nav, footer, breadcrumbs, inline links, pagination)
- Future links automatically get this behavior
- No per-page configuration needed
