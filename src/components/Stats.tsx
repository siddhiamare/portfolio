import { motion } from "framer-motion";
import { stats } from "../data/content";

export default function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-stroke">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="pt-10 md:pt-0 first:pt-0 text-center md:px-6"
            >
              <div className="text-5xl md:text-6xl font-display italic mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted uppercase tracking-[0.15em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
