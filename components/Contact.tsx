"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = new FormData(e.currentTarget);

    const data = {
      name: String(form.get("name") || ""),
      company: String(form.get("company") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      message: String(form.get("message") || ""),
    };

    const whatsappMessage = `
New EVOTECH Enquiry

Name: ${data.name}
Company: ${data.company}
Email: ${data.email}
Phone: ${data.phone}

Message:
${data.message}
    `;

    const whatsappUrl = `https://wa.me/60167788775?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Email failed");
      }

      setStatus("WhatsApp opened and email sent successfully.");
      e.currentTarget.reset();
    } catch {
      setStatus("WhatsApp opened, but email could not be sent.");
    } finally {
      setLoading(false);
    }
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
              Send your project details to EVOTECH through WhatsApp for fast
              response. A copy will also be sent to our email.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-black/30 p-6">
              <p className="text-sm text-gray-400">Contact Email</p>
              <a
                href="mailto:ahleongdotcom@gmail.com"
                className="mt-2 block font-semibold text-white hover:text-cyan-300"
              >
                ahleongdotcom@gmail.com
              </a>

              <p className="mt-5 text-sm text-gray-400">WhatsApp</p>
              <a
                href="https://wa.me/60167788775"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block font-semibold text-cyan-300 hover:text-cyan-200"
              >
                +60 16-778 8775
              </a>
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
              <input required name="name" type="text" placeholder="Name" className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400" />
              <input name="company" type="text" placeholder="Company" className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400" />
              <input required name="email" type="email" placeholder="Email" className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400" />
              <input name="phone" type="tel" placeholder="Phone" className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400" />

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
                {loading ? "Sending..." : "Send via WhatsApp"}
              </button>

              {status && (
                <p className="text-center text-sm text-cyan-300">{status}</p>
              )}

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