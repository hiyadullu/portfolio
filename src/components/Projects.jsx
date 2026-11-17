import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "../content.js";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" },
  }),
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="projects"
      className="section-padding overflow-hidden"
      ref={ref}
      aria-label="Projects"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* ─── Editorial heading area with decorative elements ─── */}
        <div className="relative mb-16 md:mb-20">
          {/* Pink radial glow (behind the heading area) */}
          <div
            className="absolute top-8 left-1/2 md:left-[55%] -translate-x-1/2 w-64 h-64 rounded-full blur-[80px] opacity-25 pointer-events-none"
            style={{ backgroundColor: "var(--color-pink)" }}
            aria-hidden="true"
          />

          {/* Hand-drawn curved arrow */}
          <svg
            className="absolute top-4 right-[10%] md:right-[25%] w-32 h-24 opacity-30 pointer-events-none hidden md:block"
            viewBox="0 0 140 90"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 75 C25 15, 85 5, 125 40"
              stroke="var(--color-ink)"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeDasharray="3 4"
              fill="none"
            />
            <polygon points="122,36 130,42 122,46" fill="var(--color-ink)" />
          </svg>

          {/* Two-line heading: "Recent" large, "Work" in pink italic below/beside */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
            className="heading-serif text-[2.6rem] sm:text-[3.4rem] md:text-[4.2rem] lg:text-[5rem] relative z-10"
          >
            Recent
            <br className="md:hidden" />
            <span className="pink-script text-[1.15em] md:ml-4 block md:inline">
              Work
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <CompactCard
              key={project.title}
              project={project}
              index={idx}
              inView={inView}
            />
          ))}
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={3}
          className="heading-serif mt-10 text-center text-lg opacity-70"
        >
          More projects to be added… website under construction
        </motion.p>
      </div>
    </section>
  );
}

/* ── Large editorial card (first project, mirrors the reference's collage) ── */
function EditorialCard({ project, index, inView, reverse }) {
  const isPlaceholder = project.imageUrl.startsWith("[");

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index + 1}
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
        reverse ? "md:direction-rtl" : ""
      }`}
    >
      {/* Image */}
      <div className="relative">
        {/* Soft pink arc behind image */}
        <div
          className="absolute -bottom-4 -left-4 w-40 h-40 rounded-full opacity-20 pointer-events-none"
          style={{ backgroundColor: "var(--color-pink)" }}
          aria-hidden="true"
        />
        <div className="img-frame aspect-[4/3] relative z-10">
          {isPlaceholder ? (
            <div
              className="w-full h-full flex items-center justify-center text-sm"
              style={{ color: "var(--color-grey-border)" }}
            >
              Project Image
            </div>
          ) : (
            <img
              src={project.imageUrl}
              alt={project.imageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          )}
        </div>
      </div>

      {/* Copy */}
      <div className="flex flex-col gap-4">
        <h3 className="heading-serif text-2xl md:text-3xl leading-tight">
          {project.title}
        </h3>
        <p className="text-[13px] leading-relaxed opacity-75">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-2.5 py-0.5 rounded-full font-medium"
              style={{
                backgroundColor: "var(--color-pink)",
                color: "var(--color-ink)",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 flex-wrap mt-1">
          <a
            href={project.liveLink}
            className="btn-pill !text-xs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check it out <span className="btn-arrow">→</span>
          </a>
          <a
            href={project.repoLink}
            className="btn-pill !text-xs"
            style={{ backgroundColor: "transparent" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Compact card for remaining projects ── */
function CompactCard({ project, index, inView }) {
  const liveLink = project.liveLink ?? "";
  const repoLink = project.repoLink ?? "";

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index + 1}
      className="group h-full rounded-[1.75rem] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{
        border: "1px solid var(--color-grey-border)",
        backgroundColor: "var(--color-cream)",
      }}
    >
      <div className="p-6 md:p-7 h-full flex flex-col transition-colors duration-300 group-hover:bg-white/50">
        <h3 className="heading-serif text-lg mb-2 leading-tight">
          {project.title}
        </h3>
        <p className="text-[12px] leading-relaxed opacity-70 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-2.5 py-0.5 rounded-full font-medium"
              style={{
                backgroundColor: "var(--color-pink)",
                color: "var(--color-ink)",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        {(!liveLink.startsWith("[") && liveLink) ||
        (!repoLink.startsWith("[") && repoLink) ? (
          <div className="flex gap-2 flex-wrap mt-auto pt-2">
            {!liveLink.startsWith("[") && liveLink && (
              <a
                href={liveLink}
                className="btn-pill !text-xs !py-1.5 !px-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check it out <span className="btn-arrow">→</span>
              </a>
            )}
            {!repoLink.startsWith("[") && repoLink && (
              <a
                href={repoLink}
                className="btn-pill !text-xs !py-1.5 !px-4"
                style={{ backgroundColor: "transparent" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span className="btn-arrow">→</span>
              </a>
            )}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
