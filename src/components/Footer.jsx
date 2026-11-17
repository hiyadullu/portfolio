import { marqueeItems } from "../content.js";
import { footer } from "../content.js";
import MarqueeBand from "./MarqueeBand.jsx";

export default function Footer() {
  return (
    <footer aria-label="Site footer">
      {/* Final marquee band */}
      <MarqueeBand items={marqueeItems} />

      <div
        className="section-padding !py-10"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social icons */}
          <div className="flex items-center gap-5">
            {/* LinkedIn */}
            <a
              href={footer.socials.linkedin}
              aria-label="LinkedIn"
              className="hover:opacity-60 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href={footer.socials.github}
              aria-label="GitHub"
              className="hover:opacity-60 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            {/* Email */}
            <a
              href={
                footer.socials.email.startsWith("[")
                  ? "#"
                  : `mailto:${footer.socials.email}`
              }
              aria-label="Email"
              className="hover:opacity-60 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-[12px] opacity-60">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
