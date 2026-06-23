"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      e.currentTarget.reset();
    }, 1000);
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
              Tell us what your business needs. We can help design, develop and
              launch modern software, IoT and automation solutions.
            </p>
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
              <input required type="text" placeholder="Name" className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400" />
              <input type="text" placeholder="Company" className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400" />
              <input required type="email" placeholder="Email" className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400" />
              <input type="tel" placeholder="Phone" className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400" />

              <textarea
                required
                placeholder="Tell us about your project"
                rows={5}
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
              />

              <button
                disabled={loading}
                className="w-full rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-center text-sm text-cyan-300">
                  Message submitted successfully. EVOTECH will contact you soon.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}