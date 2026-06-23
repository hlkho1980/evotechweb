export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="42"
        height="42"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]"
      >
        <defs>
          <linearGradient
            id="evotechGradient"
            x1="0"
            y1="0"
            x2="100"
            y2="100"
          >
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
        </defs>

        <path
          d="M20 20H80V35H35V45H70V60H35V80H20V20Z"
          fill="url(#evotechGradient)"
        />
      </svg>

      <div>
        <span className="text-xl font-black tracking-wide text-white">
          EVO
        </span>

        <span className="text-xl font-black tracking-wide text-cyan-400">
          TECH
        </span>
      </div>
    </div>
  );
}