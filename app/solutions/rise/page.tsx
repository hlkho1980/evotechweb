export default function RisePage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <p className="text-cyan-400 font-semibold">
          EVOTECH Solutions
        </p>

        <h1 className="mt-4 text-5xl font-black">
          RISE
        </h1>

        <p className="mt-4 text-xl text-gray-300">
          Bakery Operations System
        </p>

        <p className="mt-8 max-w-4xl text-lg text-gray-400 leading-8">
          End-to-end bakery management platform designed for small and
          medium-sized bakeries across Malaysia and Southeast Asia.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          <div className="rounded-3xl border border-white/10 p-6">
            <h3 className="text-2xl font-bold">
              Key Features
            </h3>

            <ul className="mt-4 space-y-2 text-gray-300">
              <li>Sales Order Management</li>
              <li>Delivery Tracking</li>
              <li>Tax Invoice Generation</li>
              <li>Payment Collection</li>
              <li>Customer Management</li>
              <li>Stock Control</li>
              <li>Barcode Support</li>
              <li>Customer Statements</li>
              <li>Cloud Access</li>
              <li>Real-time Reporting</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 p-6">
            <h3 className="text-2xl font-bold">
              Business Benefits
            </h3>

            <ul className="mt-4 space-y-2 text-gray-300">
              <li>Reduce paperwork by up to 80%</li>
              <li>Faster invoicing</li>
              <li>Better collection tracking</li>
              <li>Real-time visibility</li>
              <li>Multi-user collaboration</li>
              <li>Malaysia-ready compliance</li>
            </ul>
          </div>

        </div>

        <a
          href="https://wa.me/60167788775"
          target="_blank"
          className="mt-12 inline-flex rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black"
        >
          Request Demo
        </a>

      </div>
    </main>
  );
}