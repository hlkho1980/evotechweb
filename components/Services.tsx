"use client";

import { motion } from "motion/react";

const services = [
  {
    title: "Custom Software",
    description:
      "Business systems, ERP, CRM, inventory, invoicing and workflow automation tailored to your operations.",
    icon: "💻",
  },
  {
    title: "Mobile Applications",
    description:
      "Modern Android and iOS applications built for performance, scalability and user experience.",
    icon: "📱",
  },
  {
    title: "IoT & ESP Solutions",
    description:
      "Smart monitoring, automation, sensors and connected devices powered by ESP platforms.",
    icon: "⚡",
  },
  {
    title: "Cloud Integration",
    description:
      "Secure cloud deployment, APIs, databases and infrastructure for reliable business operations.",
    icon: "☁️",
  },
  {
    title: "Data & Analytics",
    description:
      "Transform business data into actionable insights with dashboards and reporting systems.",
    icon: "📊",
  },
  {
    title: "Technical Consulting",
    description:
      "Digital transformation planning, architecture design and technology advisory services.",
    icon: "🚀",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative mx-auto max-w-7xl px-6 py-32"
    >
      <div className="text-center">
        <p className="mb-3 text-cyan-400 font-medium">
          WHAT WE BUILD
        </p>

        <h2 className="text-4xl md:text-6xl font-black">
          Technology that
          <span className="text-cyan-400"> drives growth.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-gray-400 text-lg">
          We help businesses modernize operations through software,
          automation, cloud platforms and IoT solutions.
        </p>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -8,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="mb-6 text-5xl">
                {service.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold text-white">
                {service.title}
              </h3>

              <p className="leading-7 text-gray-400">
                {service.description}
              </p>

              <div className="mt-8 text-cyan-400 font-medium">
                Learn More →
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}