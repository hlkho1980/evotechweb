// components/BackgroundEffects.tsx

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute right-[-150px] top-[35%] h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-3xl" />

      <div className="absolute bottom-[-150px] left-[-150px] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
    </div>
  );
}