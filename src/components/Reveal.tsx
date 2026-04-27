import { useEffect, useRef, useState, type ReactNode } from "react";

type Variant = "up" | "fade";

/**
 * Lightweight scroll-reveal using IntersectionObserver — no extra deps,
 * GSAP-grade easing via CSS variables in styles.css.
 */
export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  as: As = "div",
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const base = variant === "up" ? "reveal-up" : "reveal-fade";

  return (
    <As
      ref={ref as React.Ref<HTMLElement>}
      className={`${base} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </As>
  );
}
