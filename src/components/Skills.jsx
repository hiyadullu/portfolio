import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillGroups, certifications } from "../content.js";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="skills"
      className="section-padding"
      ref={ref}
      aria-label="Skills and certifications"
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
          Skills &{" "}
          <span className="pink-script text-[1.15em]">Expertise</span>
        </motion.h2>

        {/* Skill groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={gi + 1}
            >
              <h3 className="heading-serif text-lg mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-[12px] px-3 py-1 rounded-full font-medium transition-transform duration-200 hover:scale-105"
                    style={{
                      backgroundColor: "var(--color-pink)",
                      color: "var(--color-ink)",
                      border: "1px solid rgba(0,0,0,0.08)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={4}
        >
          <h3 className="heading-serif text-2xl mb-6">
            <span className="pink-script text-[1.15em]">Certifications</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 flex flex-col justify-between gap-3 transition-transform duration-200 hover:-translate-y-1"
                style={{ border: "1px solid var(--color-grey-border)" }}
              >
                <div>
                  <p className="font-serif font-semibold text-[15px] leading-tight mb-1">
                    {cert.title}
                  </p>
                  <p className="text-[12px] opacity-60">{cert.issuer}</p>
                </div>
                <a
                  href={cert.link}
                  className="btn-pill !text-xs !py-1.5 !px-4 self-start"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View credential <span className="btn-arrow">→</span>
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
