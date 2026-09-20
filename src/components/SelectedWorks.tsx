import { motion } from "framer-motion";
import { projects } from "../data/content";
import ProjectGraphic from "./ProjectGraphic";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const },
};

export default function SelectedWorks() {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div {...fadeUp} className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                Selected work
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display italic leading-tight mb-3">
              Projects I&apos;ve shipped
            </h2>
            <p className="text-sm md:text-base text-muted max-w-md">
              From ML prediction pipelines to serverless cloud platforms — built,
              debugged, and deployed end to end.
            </p>
          </div>
          <a
            href={`https://github.com/siddhiamare`}
            className="hidden md:inline-flex relative group items-center gap-2 rounded-full px-5 py-2.5 text-sm"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative bg-surface rounded-full px-4 py-2 inline-flex items-center gap-2 border border-stroke">
              View on GitHub <span aria-hidden>↗</span>
            </span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              {...fadeUp}
              className={`group relative ${project.span} ${project.aspect} bg-surface border border-stroke rounded-3xl overflow-hidden`}
            >
              <div
                className="absolute inset-0 opacity-20 mix-blend-multiply"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                }}
              />
              <div className="absolute -right-6 -bottom-6 w-40 h-40 md:w-56 md:h-56 opacity-20 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none">
                <ProjectGraphic icon={project.icon} />
              </div>
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                <span className="text-xs text-muted uppercase tracking-[0.2em]">
                  {project.tag}
                </span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-display italic mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted">{project.stack}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-bg/85 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-opacity duration-300 flex items-end p-6 md:p-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display italic mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted mb-2">{project.stack}</p>
                  <p className="text-sm text-muted max-w-sm">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
