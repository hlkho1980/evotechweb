import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo />

            <p className="mt-5 max-w-md leading-7 text-gray-400">
              EVOTECH builds modern software, IoT solutions and digital systems
              for businesses ready to grow smarter.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Company</h4>

            <div className="space-y-3 text-gray-400">
              <a href="#home" className="block transition hover:text-cyan-400">
                Home
              </a>
              <a
                href="#services"
                className="block transition hover:text-cyan-400"
              >
                Services
              </a>
              <a
                href="#projects"
                className="block transition hover:text-cyan-400"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block transition hover:text-cyan-400"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Services</h4>

            <div className="space-y-3 text-gray-400">
              <p>Custom Software</p>
              <p>Mobile Applications</p>
              <p>IoT & ESP Solutions</p>
              <p>Cloud Integration</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 EVOTECH. All rights reserved.</p>

          <p className="rounded-full border border-white/10 px-4 py-2">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}