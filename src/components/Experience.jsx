import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "../content.js";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="experience"
      className="section-padding"
      ref={ref}
      aria-label="Work experience"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="heading-serif text-[2.4rem] sm:text-[3rem] md:text-[3.8rem] mb-10 md:mb-14"
        >
          <span className="pink-script text-[1.15em]">Experience</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative pl-6 md:pl-10">
          {/* Vertical line */}
          <div
            className="absolute top-0 left-2 md:left-4 w-px h-full"
            style={{ backgroundColor: "var(--color-grey-border)" }}
            aria-hidden="true"
          />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={idx + 1}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div
                className="absolute -left-6 md:-left-10 top-2 w-4 h-4 rounded-full border-2"
                style={{
                  backgroundColor: "var(--color-pink)",
                  borderColor: "var(--color-ink)",
                  transform: "translateX(calc(-50% + 8px))",
                  left: "-1.5rem",
                }}
                aria-hidden="true"
              />

              <div
                className="rounded-2xl p-6 md:p-8"
                style={{ border: "1px solid var(--color-grey-border)" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="heading-serif text-xl leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-[13px] opacity-70 mt-1">
                      <a
                        href={exp.companyLink}
                        className="hover:opacity-60 transition-opacity font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {exp.company}
                      </a>
                      {" · "}
                      {exp.department}
                    </p>
                    <p className="text-[12px] opacity-50">{exp.location}</p>
                  </div>
                  <span
                    className="text-[12px] px-3 py-1 rounded-full whitespace-nowrap self-start font-medium"
                    style={{
                      backgroundColor: "var(--color-pink)",
                      color: "var(--color-ink)",
                      border: "1px solid rgba(0,0,0,0.08)",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, bi) => (
                    <li
                      key={bi}
                      className="flex gap-2.5 text-[13px] leading-relaxed opacity-80"
                    >
                      <span
                        className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "var(--color-pink)" }}
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
