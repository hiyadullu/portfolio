import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { brand, navLinks } from "../content.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  /* track which section is in view */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <nav
        className="flex items-center justify-between max-w-[1400px] mx-auto px-5 md:px-8 h-14"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo / wordmark */}
        <a
          href="#home"
          onClick={() => handleClick("#home")}
          className="flex items-center gap-1.5 font-serif text-lg tracking-wide select-none"
          aria-label="Home"
        >
          <span className="font-semibold" style={{ color: "var(--color-ink)" }}>
            {brand.name}
          </span>
          <span className="pink-script text-xl">{brand.accent}</span>
          <span className="font-semibold" style={{ color: "var(--color-ink)" }}>
            {brand.surname}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleClick(link.href)}
                className="relative text-xs tracking-wide uppercase transition-colors duration-200 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--color-ink)",
                }}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px]"
                    style={{ backgroundColor: "var(--color-ink)" }}
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col gap-1 p-2 focus-visible:outline-2 focus-visible:outline-offset-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-5 h-[1.5px] bg-ink transition-transform duration-200 ${
              open ? "rotate-45 translate-y-[5px]" : ""
            }`}
            style={{ backgroundColor: "var(--color-ink)" }}
          />
          <span
            className={`block w-5 h-[1.5px] transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
            style={{ backgroundColor: "var(--color-ink)" }}
          />
          <span
            className={`block w-5 h-[1.5px] transition-transform duration-200 ${
              open ? "-rotate-45 -translate-y-[5px]" : ""
            }`}
            style={{ backgroundColor: "var(--color-ink)" }}
          />
        </button>
      </nav>

      {/* Hairline border */}
      <div
        className="h-px w-full"
        style={{ backgroundColor: "var(--color-grey-border)" }}
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: "var(--color-cream)" }}
          >
            <ul className="flex flex-col gap-1 py-4 px-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => handleClick(link.href)}
                    className={`block py-2 text-sm tracking-wide uppercase ${
                      active === link.href ? "font-semibold" : ""
                    }`}
                    style={{ color: "var(--color-ink)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div
              className="h-px w-full"
              style={{ backgroundColor: "var(--color-grey-border)" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
