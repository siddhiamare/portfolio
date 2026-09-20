import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stack, type StackItem } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

const COL_A = stack.filter((_, i) => i % 2 === 0);
const COL_B = stack.filter((_, i) => i % 2 === 1);

export default function Explorations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const colARef = useRef<HTMLDivElement>(null);
  const colBRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: contentRef.current,
          pinSpacing: false,
        });
      }
      gsap.to(colARef.current, {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(colBRef.current, {
        y: 120,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[300vh] bg-bg">
      <div ref={contentRef} className="relative h-screen z-10 flex flex-col items-center justify-center text-center px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">Explorations</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display italic leading-tight mb-3">
          The stack I keep reaching for
        </h2>
        <p className="text-sm md:text-base text-muted max-w-md mb-6">
          Tools and platforms from recent projects and internship work.
        </p>
        <a
          href={`https://github.com/siddhiamare`}
          className="relative group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm"
        >
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative bg-surface rounded-full px-4 py-2 inline-flex items-center gap-2 border border-stroke">
            See it in code <span aria-hidden>↗</span>
          </span>
        </a>
      </div>

      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="grid grid-cols-2 gap-12 md:gap-40 max-w-[1400px] w-full px-6">
          <div ref={colARef} className="flex flex-col gap-8 md:gap-12 items-end pt-24">
            {COL_A.map((item, i) => (
              <StackCard key={item.label} item={item} rotate={i % 2 === 0 ? -3 : 3} />
            ))}
          </div>
          <div ref={colBRef} className="flex flex-col gap-8 md:gap-12 pt-56">
            {COL_B.map((item, i) => (
              <StackCard key={item.label} item={item} rotate={i % 2 === 0 ? 3 : -3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StackCard({ item, rotate }: { item: StackItem; rotate: number }) {
  return (
    <div
      className="pointer-events-auto aspect-square max-w-[320px] w-full bg-surface border border-stroke rounded-3xl flex flex-col items-center justify-center gap-4 p-6 transition-transform hover:scale-105"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <img
        src={`https://skillicons.dev/icons?i=${item.icon}`}
        alt={item.label}
        className="w-16 h-16 md:w-20 md:h-20"
        loading="lazy"
      />
      <span className="text-lg md:text-xl font-display italic text-center">{item.label}</span>
    </div>
  );
}
