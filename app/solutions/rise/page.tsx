export default function RisePage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white pt-28">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-cyan-400 font-semibold mb-4">
          Bakery Operations System
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          RISE
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mb-10">
        RISE is a comprehensive bakery operations platform designed to
        streamline sales, deliveries, inventory, invoicing, and customer
        management. Gain real-time visibility across your business while
        reducing paperwork and improving operational efficiency.
        </p>

        <a
          href="/#contact"
          className="inline-block bg-cyan-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-cyan-300 transition"
        >
          Request Demo
        </a>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10">Key Features</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Sales Order Management",
            "Delivery Tracking",
            "Tax Invoice Generation",
            "Payment Collection",
            "Customer Management",
            "Stock Control",
            "Credit Notes",
            "Customer Statements",
            "Barcode Support",
            "Real-Time Reports",
            "Cloud Access",
            "Multi-user Support",
          ].map((item) => (
            <div
              key={item}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <p className="text-gray-200">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-6">System Screenshots</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="h-64 rounded-2xl border border-dashed border-cyan-400/40 bg-white/5 flex items-center justify-center text-gray-400">
            RISE screenshot placeholder
          </div>
          <div className="h-64 rounded-2xl border border-dashed border-cyan-400/40 bg-white/5 flex items-center justify-center text-gray-400">
            Invoice screenshot placeholder
          </div>
          <div className="h-64 rounded-2xl border border-dashed border-cyan-400/40 bg-white/5 flex items-center justify-center text-gray-400">
            Report screenshot placeholder
          </div>
        </div>
      </section>
    </main>
  );
}