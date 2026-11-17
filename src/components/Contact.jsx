import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { about } from "../content.js";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) =>
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio message from ${formData.firstName} ${formData.lastName}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\n${formData.message}`,
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(about.contact.email)}&su=${subject}&body=${body}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="contact"
      className="section-padding"
      ref={ref}
      aria-label="Get in touch"
    >
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading-serif text-2xl mb-6 text-center">
            Get In <span className="pink-script text-[1.15em]">Touch</span>
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div>
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                className="input-pill"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="input-pill"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="contactEmail" className="sr-only">
                Email
              </label>
              <input
                id="contactEmail"
                name="email"
                type="email"
                placeholder="Email"
                className="input-pill"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={4}
                className="input-pill !rounded-2xl resize-none"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="sm:col-span-2 flex justify-center">
              <button type="submit" className="btn-pill">
                Send Message <span className="btn-arrow">→</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
