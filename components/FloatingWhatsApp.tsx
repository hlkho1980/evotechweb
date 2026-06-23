export default function FloatingWhatsApp() {
  const message =
    "Hi EVOTECH, I would like to ask about software / IoT / automation solutions.";

  return (
    <a
      href={`https://wa.me/60167788775?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-cyan-400 px-5 py-4 font-semibold text-black shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-300"
    >
      <span className="text-xl">💬</span>
      <span className="hidden sm:inline">WhatsApp EVOTECH</span>
    </a>
  );
}