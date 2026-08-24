export default function BlinkingDot() {
  return (
    <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full font-mono text-silver">
      {/* Small Blinking Green Dot Container */}
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
      </span>

      {/* <span>Based in India • Building Next-Gen Web Apps</span> */}
    </div>
  );
}
