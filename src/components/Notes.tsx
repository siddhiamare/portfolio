import { motion } from "framer-motion";
import { notes } from "../data/content";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const },
};

export default function Notes() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div {...fadeUp} className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Notes</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display italic leading-tight mb-3">
              Recent write-ups
            </h2>
            <p className="text-sm md:text-base text-muted max-w-md">
              Short notes on problems I ran into while building, and how I worked
              through them.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-3">
          {notes.map((note) => (
            <motion.div
              key={note.title}
              {...fadeUp}
              className="flex items-center justify-between gap-6 p-5 md:p-6 bg-surface/30 hover:bg-surface border border-stroke rounded-[28px] sm:rounded-full transition-colors"
            >
              <span className="text-base md:text-lg font-display italic truncate">
                {note.title}
              </span>
              <div className="hidden sm:flex items-center gap-4 text-xs text-muted whitespace-nowrap">
                <span>{note.readTime}</span>
                <span className="w-px h-3 bg-stroke" />
                <span>{note.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
