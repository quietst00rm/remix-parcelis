import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, Shield, BarChart3, MousePointerClick } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { getConsent, setConsent, applyConsent } from "@/lib/cookies";

const CookieConsentBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [functional, setFunctional] = useState(true);

  useEffect(() => {
    const consent = getConsent();
    if (consent) {
      applyConsent(consent);
    } else {
      // Small delay so page renders first
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = (prefs: { analytics: boolean; functional: boolean }) => {
    setConsent(prefs);
    applyConsent({ ...prefs, timestamp: "" });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] p-4 md:p-6 pointer-events-none">
      <div className="max-w-3xl mx-auto pointer-events-auto rounded-2xl border border-slate-700 bg-[hsl(var(--surface-dark,222_47%_11%))] text-white shadow-2xl overflow-hidden">
        {/* Main banner */}
        <div className="p-5 md:p-6">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <Cookie className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-heading text-base font-semibold mb-1">We value your privacy</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We use cookies to analyze site traffic and optimize your experience. You can choose which cookies to allow.{" "}
                <Link to="/privacy" className="underline underline-offset-2 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>

          {/* Customize panel */}
          {customizing && (
            <div className="mt-5 space-y-3 border-t border-slate-700 pt-5">
              {/* Necessary */}
              <div className="flex items-center justify-between gap-4 rounded-xl bg-white/5 px-4 py-3">
                <div className="flex items-center gap-3">
                  <Shield className="h-4 w-4 text-teal-400 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Necessary</p>
                    <p className="text-xs text-slate-400">Essential for the website to function</p>
                  </div>
                </div>
                <Switch checked disabled className="opacity-60" />
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between gap-4 rounded-xl bg-white/5 px-4 py-3">
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-4 w-4 text-blue-400 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Analytics</p>
                    <p className="text-xs text-slate-400">Google Analytics &amp; Ahrefs — traffic insights</p>
                  </div>
                </div>
                <Switch checked={analytics} onCheckedChange={setAnalytics} />
              </div>

              {/* Functional */}
              <div className="flex items-center justify-between gap-4 rounded-xl bg-white/5 px-4 py-3">
                <div className="flex items-center gap-3">
                  <MousePointerClick className="h-4 w-4 text-amber-400 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Functional</p>
                    <p className="text-xs text-slate-400">Microsoft Clarity — session recording</p>
                  </div>
                </div>
                <Switch checked={functional} onCheckedChange={setFunctional} />
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:justify-end">
            <Button
              variant="ghost"
              className="text-slate-300 border border-slate-600 hover:bg-white/10 hover:text-white rounded-xl px-5"
              onClick={() => accept({ analytics: false, functional: false })}
            >
              Reject All
            </Button>

            {customizing ? (
              <Button
                className="bg-primary hover:bg-primary-hover text-white rounded-xl px-5"
                onClick={() => accept({ analytics, functional })}
              >
                Save Preferences
              </Button>
            ) : (
              <>
                <Button
                  variant="ghost"
                  className="text-slate-300 border border-slate-600 hover:bg-white/10 hover:text-white rounded-xl px-5"
                  onClick={() => setCustomizing(true)}
                >
                  Customize
                </Button>
                <Button
                  className="bg-primary hover:bg-primary-hover text-white rounded-xl px-5"
                  onClick={() => accept({ analytics: true, functional: true })}
                >
                  Accept All
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
