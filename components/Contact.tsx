"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const company = form.get("company");
    const email = form.get("email");
    const phone = form.get("phone");
    const message = form.get("message");

    const whatsappMessage = `
New EVOTECH Enquiry

Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `;

    const whatsappUrl = `https://wa.me/60167788775?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
    setLoading(false);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-16">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative z-10 grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 font-medium text-cyan-400">CONTACT EVOTECH</p>

            <h2 className="text-4xl font-black md:text-6xl">
              Let’s build your
              <span className="text-cyan-400"> next system.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Send your project details directly to EVOTECH through WhatsApp for
              faster response.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-black/30 p-6">
              <p className="text-sm text-gray-400">Contact Email</p>
              <p className="mt-2 font-semibold text-white">
                ahleongdotcom@gmail.com
              </p>

              <p className="mt-5 text-sm text-gray-400">WhatsApp</p>
              <p className="mt-2 font-semibold text-cyan-300">
                +60 16-778 8775
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl border border-white/10 bg-black/30 p-6"
          >
            <div className="space-y-4">
              <input
                required
                name="name"
                type="text"
                placeholder="Name"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
              />

              <input
                name="company"
                type="text"
                placeholder="Company"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
              />

              <input
                required
                name="email"
                type="email"
                placeholder="Email"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
              />

              <textarea
                required
                name="message"
                placeholder="Tell us about your project"
                rows={5}
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
              />

              <button
                disabled={loading}
                className="w-full rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Opening WhatsApp..." : "Send via WhatsApp"}
              </button>

              <a
                href="mailto:ahleongdotcom@gmail.com"
                className="block w-full rounded-full border border-white/15 px-8 py-4 text-center font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Email EVOTECH Instead
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}