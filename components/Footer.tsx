import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-4">

          <div>
            <Logo />

            <p className="mt-5 max-w-md leading-7 text-gray-400">
              EVOTECH delivers custom software, mobile applications,
              IoT solutions and business automation systems that help
              organizations improve efficiency and accelerate growth.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Company</h4>

            <div className="space-y-3 text-gray-400">
              <a href="#services" className="block hover:text-cyan-400">
                Services
              </a>
              <a href="#projects" className="block hover:text-cyan-400">
                Projects
              </a>
              <a href="#contact" className="block hover:text-cyan-400">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Services</h4>

            <div className="space-y-3 text-gray-400">
              <p>Software Development</p>
              <p>Mobile Applications</p>
              <p>IoT Solutions</p>
              <p>Automation Systems</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Contact</h4>

            <div className="space-y-3 text-gray-400">
              <a
                href="mailto:ahleongdotcom@gmail.com"
                className="block hover:text-cyan-400"
              >
                ahleongdotcom@gmail.com
              </a>

              <a
                href="https://wa.me/60167788775"
                target="_blank"
                className="block hover:text-cyan-400"
              >
                +60 16-778 8775
              </a>

              <p>Malaysia</p>
            </div>
          </div>

        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 EVOTECH. All Rights Reserved.</p>

          <p>
            Software • Mobile Apps • IoT • Automation
          </p>
        </div>
      </div>
    </footer>
  );
}