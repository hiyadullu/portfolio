import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { moreAbout } from "../content.js";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function MoreAbout() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="more"
      className="section-padding"
      ref={ref}
      aria-label="More about me"
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
          More <span className="pink-script text-[1.15em]">About</span> Me
        </motion.h2>

        {/* Research */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="mb-10"
        >
          <h3 className="heading-serif text-xl mb-3">
            {moreAbout.research.title}
          </h3>
          <p className="text-[13px] opacity-80 leading-relaxed mb-3">
            {moreAbout.research.text}
          </p>
          <a
            href={moreAbout.research.link}
            className="btn-pill !text-xs !py-1.5 !px-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            {moreAbout.research.linkLabel}
          </a>
        </motion.div>

        {/* Positions of Responsibility */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={2}
          className="mb-10"
        >
          <h3 className="heading-serif text-xl mb-5">
            Positions of{" "}
            <span className="pink-script text-[1.1em]">Responsibility</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {moreAbout.positions.map((pos, i) => (
              <div
                key={i}
                className="rounded-2xl p-5"
                style={{ border: "1px solid var(--color-grey-border)" }}
              >
                <p className="font-serif font-semibold text-[15px] leading-tight">
                  {pos.role}
                </p>
                <p
                  className="text-[12px] mb-2 font-medium"
                  style={{ color: "var(--color-pink-dark)" }}
                >
                  {pos.org}
                </p>
                <p className="text-[12px] opacity-70 leading-relaxed">
                  {pos.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
