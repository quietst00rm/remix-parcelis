const CONSENT_KEY = "parcelis_cookie_consent";

export interface CookieConsent {
  analytics: boolean;
  functional: boolean;
  timestamp: string;
}

export function getConsent(): CookieConsent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookieConsent;
  } catch {
    return null;
  }
}

export function setConsent(prefs: Omit<CookieConsent, "timestamp">): void {
  const consent: CookieConsent = {
    ...prefs,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
}

export function revokeConsent(): void {
  localStorage.removeItem(CONSENT_KEY);
}

function injectScript(id: string, src: string, attrs?: Record<string, string>): void {
  if (document.getElementById(id)) return;
  const s = document.createElement("script");
  s.id = id;
  s.src = src;
  s.async = true;
  if (attrs) Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
  document.head.appendChild(s);
}

function injectInlineScript(id: string, code: string): void {
  if (document.getElementById(id)) return;
  const s = document.createElement("script");
  s.id = id;
  s.textContent = code;
  document.head.appendChild(s);
}

export function loadAnalytics(): void {
  // Google Analytics
  injectScript("ga-script", "https://www.googletagmanager.com/gtag/js?id=G-C2GCQ0JLGN");
  injectInlineScript(
    "ga-init",
    `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-C2GCQ0JLGN');`
  );

  // Ahrefs
  injectScript("ahrefs-script", "https://analytics.ahrefs.com/analytics.js", {
    "data-key": "FOnsOEaanc3HqQATSPbccA",
  });
}

export function loadFunctional(): void {
  // Microsoft Clarity
  injectInlineScript(
    "clarity-script",
    `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","uykguqi8m9");`
  );
}

export function applyConsent(consent: CookieConsent): void {
  if (consent.analytics) loadAnalytics();
  if (consent.functional) loadFunctional();
}
