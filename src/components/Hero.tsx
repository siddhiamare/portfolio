import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Hls from "hls.js";
import { profile } from "../data/content";

const HLS_SRC =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

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
    const id = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(".name-reveal", { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }).to(
      ".blur-in",
      { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
      0.3
    );
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="blur-in opacity-0 [filter:blur(10px)] translate-y-5 text-xs text-muted uppercase tracking-[0.3em] mb-8">
          Class of &apos;26
        </p>

        <h1
          className="name-reveal opacity-0 translate-y-12 text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6"
        >
          {profile.name}
        </h1>

        <p className="blur-in opacity-0 [filter:blur(10px)] translate-y-5 text-lg md:text-xl text-muted mb-6">
          A{" "}
          <span
            key={roleIndex}
            className="font-display italic text-text-primary animate-role-fade-in inline-block"
          >
            {profile.roles[roleIndex]}
          </span>{" "}
          based in {profile.location}.
        </p>

        <p className="blur-in opacity-0 [filter:blur(10px)] translate-y-5 text-sm md:text-base text-muted max-w-md mb-12">
          {profile.description}
        </p>

        <div className="blur-in opacity-0 [filter:blur(10px)] translate-y-5 inline-flex gap-4">
          <a
            href="#work"
            className="rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg hover:bg-bg hover:text-text-primary hover:ring-2 hover:ring-offset-0 transition-all hover:scale-105"
            style={{ transition: "all 0.2s" }}
          >
            See projects
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary hover:border-transparent hover:scale-105 transition-all"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 inset-x-0 flex flex-col items-center gap-3 z-10">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">Scroll</span>
        <div className="relative w-px h-10 bg-stroke overflow-hidden">
          <div className="absolute top-0 left-0 w-px h-4 bg-text-primary/70 animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
