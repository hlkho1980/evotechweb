"use client";

import { motion } from "motion/react";

const stats = [
  {
    number: "3+",
    label: "Business Systems",
  },
  {
    number: "6+",
    label: "Service Categories",
  },
  {
    number: "100%",
    label: "Custom Solutions",
  },
  {
    number: "24/7",
    label: "Digital Availability",
  },
];

export default function Stats() {
  return (
    <section className="relative px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-12"
      >
        <div className="grid gap-8 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="relative">
              <h3 className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-4xl font-black text-transparent md:text-6xl">
                {stat.number}
              </h3>

              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}