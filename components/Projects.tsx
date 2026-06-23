"use client";

import { motion } from "motion/react";

const projects = [
  {
    title: "F&B Ordering System",
    category: "Restaurant Technology",
    description:
      "A modern ordering platform for restaurants, cafes and food businesses to manage menus, orders and daily operations efficiently.",
    gradient: "from-cyan-500/20 to-blue-500/10",
  },
  {
    title: "Bakery Invoice System",
    category: "Business Automation",
    description:
      "An invoicing and sales management system built for bakeries to track customers, orders, payments and business records.",
    gradient: "from-purple-500/20 to-pink-500/10",
  },
  {
    title: "Salesman Activity System",
    category: "Field Sales Tracking",
    description:
      "A digital workflow for moving sales teams to manage customer visits, sales activity, reports and performance tracking.",
    gradient: "from-emerald-500/20 to-cyan-500/10",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 max-w-3xl">
          <p className="mb-3 font-medium text-cyan-400">SELECTED WORK</p>

          <h2 className="text-4xl font-black md:text-6xl">
            Systems built for
            <span className="text-cyan-400"> real businesses.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            EVOTECH develops practical, scalable and premium digital products
            for companies that want better operations and faster growth.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${project.gradient} p-8 backdrop-blur-xl md:p-12`}
            >
              <div className="absolute inset-0 bg-white/[0.03]" />

              <div className="relative z-10 grid items-center gap-10 md:grid-cols-2">
                <div>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    {project.category}
                  </p>

                  <h3 className="text-3xl font-black text-white md:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
                    {project.description}
                  </p>

                  <div className="mt-8 inline-flex rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition group-hover:border-cyan-400 group-hover:text-cyan-300">
                    View Case Study →
                  </div>
                </div>

                <div className="relative min-h-[260px] overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-6">
                  <div className="mb-5 flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  <div className="space-y-4">
                    <div className="h-8 w-2/3 rounded-xl bg-white/20" />
                    <div className="h-4 w-full rounded-xl bg-white/10" />
                    <div className="h-4 w-5/6 rounded-xl bg-white/10" />
                    <div className="mt-8 grid grid-cols-2 gap-4">
                      <div className="h-24 rounded-2xl bg-cyan-400/20" />
                      <div className="h-24 rounded-2xl bg-purple-400/20" />
                    </div>
                    <div className="h-12 rounded-2xl bg-white/10" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}