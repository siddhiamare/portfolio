import { useEffect, useRef } from "react";
import gsap from "gsap";
import Hls from "hls.js";
import { profile } from "../data/content";

const HLS_SRC =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

const SOCIALS = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
];

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let hls: Hls | null = null;
    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(HLS_SRC);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_SRC;
    }
    return () => hls?.destroy();
  }, []);

  useEffect(() => {
    const tween = gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <footer id="resume" className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 [transform:translate(-50%,-50%)_scaleY(-1)]"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10">
        <div className="overflow-hidden py-8 md:py-12 border-y border-stroke/60 mb-16 md:mb-20">
          <div ref={marqueeRef} className="flex whitespace-nowrap w-max">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="text-4xl md:text-6xl font-display italic text-text-primary/90 pr-6"
              >
                LOOKING FOR A CUSTOM SOFTWARE ENGINEER ROLE •{" "}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 text-center mb-14">
          <p className="text-xs text-muted uppercase tracking-[0.3em] mb-4">
            Get in touch
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="relative group inline-flex items-center gap-3 text-2xl md:text-4xl font-display italic"
          >
            <span className="absolute inset-[-8px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            <span className="relative">{profile.email}</span>
          </a>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-stroke/60">
          <div className="flex items-center gap-6">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted hover:text-text-primary transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Open to new roles
          </div>
        </div>
      </div>
    </footer>
  );
}
