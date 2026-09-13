"use client";

import { useEffect } from "react";

const scripts = [
  "jquery-3.7.1.min.js",
  "bootstrap.min.js",
  "validator.min.js",
  "jquery.slicknav.js",
  "swiper-bundle.min.js",
  "aos.js",
  "jquery.waypoints.min.js",
  "jquery.counterup.min.js",
  "jquery.magnific-popup.min.js",
  "gsap.min.js",
  "magiccursor.js",
  "cursor/cursor.js",
  "ScrollTrigger.min.js",
  "SplitText.js",
  "script.js",
  "country-tools.js",
];

export default function LegacyScripts() {
  useEffect(() => {
    let cancelled = false;
    async function load() {
      for (const file of scripts) {
        if (cancelled) return;
        await new Promise<void>((resolve, reject) => {
          const script = window.document.createElement("script");
          script.src = "/legacy/js/" + file;
          script.onload = () => resolve();
          script.onerror = () => reject(new Error("Unable to load " + file));
          window.document.body.appendChild(script);
        });
      }
    }
    void load().catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);
  return null;
}
