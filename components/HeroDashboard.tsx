// components/HeroDashboard.tsx

"use client";

import { motion } from "motion/react";

export default function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.65 }}
      className="relative mx-auto mt-16 max-w-5xl"
    >
      <div className="absolute inset-0 rounded-[2rem] bg-cyan-500/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 p-4 shadow-2xl backdrop-blur-xl">
        <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <p className="text-sm text-gray-400">EVOTECH Command Center</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm text-gray-400">System Status</p>
            <h3 className="mt-3 text-3xl font-black text-cyan-400">98%</h3>
            <div className="mt-5 h-2 rounded-full bg-white/10">
              <div className="h-2 w-[98%] rounded-full bg-cyan-400" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm text-gray-400">Active Projects</p>
            <h3 className="mt-3 text-3xl font-black text-white">12</h3>
            <div className="mt-5 grid grid-cols-5 gap-2">
              {[60, 80, 45, 90, 70].map((height, index) => (
                <div
                  key={index}
                  className="flex h-20 items-end rounded-xl bg-white/5 p-1"
                >
                  <div
                    className="w-full rounded-lg bg-gradient-to-t from-cyan-400 to-blue-500"
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm text-gray-400">Automation</p>
            <h3 className="mt-3 text-3xl font-black text-purple-400">AI + IoT</h3>
            <div className="mt-5 space-y-3">
              <div className="h-3 w-full rounded-full bg-white/10" />
              <div className="h-3 w-4/5 rounded-full bg-white/10" />
              <div className="h-3 w-2/3 rounded-full bg-white/10" />
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm text-gray-400">Business Workflow</p>

            <div className="mt-5 space-y-3">
              {["Order Management", "Invoice Processing", "Sales Tracking"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl bg-white/[0.04] px-4 py-3"
                  >
                    <span className="text-sm text-gray-300">{item}</span>
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                      Active
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm text-gray-400">Solution Coverage</p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {["Software", "Mobile", "IoT", "Cloud"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-5 text-center text-sm text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}