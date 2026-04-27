import { useEffect, useRef, useState } from "react";
import logo from "@/assets/resources/logo.png";

/**
 * Loader shown once per session: line-art logo draws to 100%, then fades.
 */
export function Loader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const startRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("evx_loaded");
    if (seen) {
      setVisible(false);
      return;
    }

    const duration = 1800;
    startRef.current = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const e = Math.min(1, (t - startRef.current) / duration);
      // expo-out
      const eased = 1 - Math.pow(1 - e, 4);
      setProgress(Math.round(eased * 100));
      if (e < 1) raf = requestAnimationFrame(tick);
      else {
        sessionStorage.setItem("evx_loaded", "1");
        setTimeout(() => setVisible(false), 450);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
      style={{
        opacity: progress >= 100 ? 0 : 1,
        transition: "opacity 0.45s var(--ease-out-expo)",
      }}
    >
      <div
        className="flex items-center justify-center h-40 w-40 rounded-full border border-hairline/60 bg-hairline/10"
        style={{
          opacity: 0.2 + (progress / 100) * 0.8,
          transform: `scale(${0.95 + (progress / 100) * 0.05})`,
          transition: "opacity 0.1s, transform 0.1s"
        }}
      >
        <img
          src={logo}
          alt="Evolvix Logo"
          className="h-20 w-auto"
        />
      </div>
      <div className="mt-12 flex w-[min(420px,72vw)] items-center justify-between text-mono-label text-smoke">
        <span>EVOLVIX&nbsp;GLOBAL</span>
        <span className="tabular-nums text-titanium">
          {String(progress).padStart(3, "0")}
        </span>
      </div>
      <div className="mt-3 h-px w-[min(420px,72vw)] bg-hairline">
        <div
          className="h-full bg-titanium"
          style={{
            width: `${progress}%`,
            transition: "width 0.08s linear",
          }}
        />
      </div>
      <span className="sr-only">
        Loading Evolvix Global
      </span>
    </div>
  );
}
