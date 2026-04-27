import { useEffect, useRef } from "react";

/**
 * Circular magnetic cursor that expands over clickable elements.
 * Disabled on touch devices.
 */
export function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const expand = () => ringRef.current?.classList.add("is-hover");
    const contract = () => ringRef.current?.classList.remove("is-hover");

    const bindHover = () => {
      const targets = document.querySelectorAll<HTMLElement>(
        "a, button, [role='button'], [data-cursor='hover']",
      );
      targets.forEach((el) => {
        el.addEventListener("mouseenter", expand);
        el.addEventListener("mouseleave", contract);
      });
      return targets;
    };

    let targets = bindHover();
    const observer = new MutationObserver(() => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", expand);
        el.removeEventListener("mouseleave", contract);
      });
      targets = bindHover();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", onMove);
    document.documentElement.classList.add("has-magnetic-cursor");

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", expand);
        el.removeEventListener("mouseleave", contract);
      });
      document.documentElement.classList.remove("has-magnetic-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="magnetic-ring"
      />
      <div ref={dotRef} aria-hidden className="magnetic-dot" />
      <style>{`
        .magnetic-dot,
        .magnetic-ring {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9999;
          will-change: transform;
        }
        .magnetic-dot {
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: var(--color-titanium);
          mix-blend-mode: difference;
        }
        .magnetic-ring {
          width: 36px;
          height: 36px;
          border-radius: 999px;
          border: 1px solid oklch(1 0 0 / 0.55);
          transition:
            width 0.35s var(--ease-out-expo),
            height 0.35s var(--ease-out-expo),
            border-color 0.35s var(--ease-out-expo),
            background 0.35s var(--ease-out-expo);
          backdrop-filter: invert(0.05);
        }
        .magnetic-ring.is-hover {
          width: 80px;
          height: 80px;
          border-color: var(--color-electric);
          background: oklch(0.68 0.19 254 / 0.08);
        }
        @media (hover: none), (pointer: coarse) {
          .magnetic-dot, .magnetic-ring { display: none; }
        }
      `}</style>
    </>
  );
}
