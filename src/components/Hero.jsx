import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { hero } from "../content.js";
import RotatingBadge from "./RotatingBadge.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const isPlaceholder = hero.photoUrl.startsWith("[");

  return (
    <section
      id="home"
      className="section-padding pt-24 md:pt-28 overflow-hidden"
      ref={ref}
      aria-label="Home"
    >
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-10 md:gap-14 items-center">
        {/* Left — Portrait */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="relative flex justify-center md:justify-start"
        >
          <div className="img-frame w-[280px] h-[360px] sm:w-[320px] sm:h-[410px] md:w-[370px] md:h-[470px] relative">
            {isPlaceholder ? (
              <div
                className="w-full h-full flex items-center justify-center text-sm"
                style={{ color: "var(--color-grey-border)" }}
              >
                Your Photo
              </div>
            ) : (
              <img
                src={hero.photoUrl}
                alt={hero.photoAlt}
                className="w-full h-full object-cover"
                loading="eager"
              />
            )}
          </div>

          {/* Decorative rotating badge — bottom-right of image */}
          <div className="absolute -bottom-5 -right-3 md:-right-8">
            <RotatingBadge />
          </div>
        </motion.div>

        {/* Right — Copy */}
        <div className="flex flex-col gap-5">
          {/* Pink tilted sticker */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.5}
            className="self-start"
          >
            <span
              className="inline-block px-5 py-2 rounded-[2rem] font-serif italic text-sm select-none shadow-sm"
              style={{
                backgroundColor: "var(--color-pink)",
                color: "var(--color-ink)",
                border: "1px solid var(--color-ink)",
                transform: "rotate(-6deg)",
              }}
            >
              {hero.stickerText}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
            className="heading-serif text-[2.5rem] sm:text-[3.2rem] md:text-[3.6rem] lg:text-[4.2rem] leading-[1.05]"
          >
            {hero.headlineParts.map((part, i) =>
              part.pink ? (
                <span key={i} className="pink-script text-[1.2em]">
                  {part.text}
                </span>
              ) : (
                <span key={i} style={{ whiteSpace: "pre-line" }}>
                  {part.text}
                </span>
              ),
            )}
          </motion.h1>

          {/* Intro paragraph */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
            className="max-w-md text-[13px] leading-[1.75] opacity-75"
          >
            {hero.intro}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3}
            className="flex flex-wrap gap-3 mt-2"
          >
            <a href={hero.ctaPrimary.href} className="btn-pill">
              {hero.ctaPrimary.label}
              <span className="btn-arrow">→</span>
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="btn-pill"
              style={{
                backgroundColor: "transparent",
                borderColor: "var(--color-ink)",
              }}
              target="_blank"
              rel="noopener noreferrer"
              download={hero.ctaSecondary.label === "Download Resume" ? "Hiya-Dullu-Resume.pdf" : undefined}
            >
              {hero.ctaSecondary.label}
              <span className="btn-arrow">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
