"use client";

import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#030712]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" onClick={closeMenu}>
          <Logo />
        </a>

        <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <a href="#services" className="transition hover:text-cyan-400">
            Services
          </a>
          <a href="#projects" className="transition hover:text-cyan-400">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-cyan-300 md:block"
        >
          Get Started
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#030712]/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5 text-gray-300">
            <a
              href="#services"
              onClick={closeMenu}
              className="transition hover:text-cyan-400"
            >
              Services
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="transition hover:text-cyan-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="transition hover:text-cyan-400"
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-full bg-cyan-400 px-5 py-3 text-center font-semibold text-black transition hover:bg-cyan-300"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}