import { useEffect, useRef, useState } from "react";
import { EvolvixMark } from "./EvolvixMark";

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
        className="text-titanium"
        style={{
          // animate stroke draw via CSS variable trick: we redraw at each render
          ["--p" as never]: `${progress}`,
        }}
      >
        <svg
          viewBox="0 0 100 100"
          width={140}
          height={140}
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          strokeLinecap="square"
          aria-hidden
          style={{
            // pathLength normalization
          }}
        >
          <circle
            cx="50" cy="50" r="46"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={1 - progress / 100}
          />
          <circle
            cx="50" cy="50" r="32"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={1 - progress / 100}
            opacity={0.5}
          />
          <line
            x1="4" y1="50" x2="96" y2="50"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={1 - progress / 100}
          />
          <line
            x1="50" y1="18" x2="50" y2="82"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={1 - progress / 100}
            opacity={0.4}
          />
          <path
            d="M34 30 L66 30 M34 30 L34 70 M34 50 L60 50 M34 70 L66 70"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={1 - progress / 100}
          />
        </svg>
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
      {/* Suppress fallback EvolvixMark visual reference (kept for tree-shake check) */}
      <span className="sr-only">
        <EvolvixMark size={1} />
        Loading Evolvix Global
      </span>
    </div>
  );
}
