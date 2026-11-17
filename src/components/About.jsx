import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { about } from "../content.js";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const contactFields = [
  { label: "Email", key: "email", type: "email" },
  { label: "Location", key: "location", type: "text" },
  { label: "LinkedIn", key: "linkedin", type: "url" },
  { label: "GitHub", key: "github", type: "url" },
  { label: "Resume", key: "resume", type: "url", download: true },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      className="section-padding"
      ref={ref}
      aria-label="About me"
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
          {about.headingBefore}{" "}
          <span className="pink-script text-[1.15em]">{about.headingPink}</span>{" "}
          {about.headingAfter}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left — Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
          >
            {about.bio.map((p, i) => (
              <p key={i} className="text-[13px] leading-relaxed opacity-80 mb-4">
                {p}
              </p>
            ))}
          </motion.div>

          {/* Right — Contact card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
          >
            <div
              className="rounded-2xl p-5 space-y-3"
              style={{ border: "1px solid var(--color-grey-border)" }}
            >
              {contactFields.map((field) => {
                const val = about.contact[field.key];
                const isLink =
                  field.type === "url" || field.type === "email";
                return (
                  <div
                    key={field.key}
                    className="flex items-center justify-between py-2 px-4 rounded-full text-[13px]"
                    style={{ border: "1px solid var(--color-grey-border)" }}
                  >
                    <span className="font-medium opacity-70">
                      {field.label}
                    </span>
                    {isLink && !val.startsWith("[") ? (
                      <a
                        href={
                          field.type === "email" ? `mailto:${val}` : val
                        }
                        className="truncate max-w-[180px] hover:opacity-70 transition-opacity"
                        target={field.download ? undefined : "_blank"}
                        rel={field.download ? undefined : "noopener noreferrer"}
                        download={field.download ? "Hiya-Dullu-Resume.pdf" : undefined}
                      >
                        {val}
                      </a>
                    ) : (
                      <span className="truncate max-w-[180px] opacity-60">
                        {val}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
