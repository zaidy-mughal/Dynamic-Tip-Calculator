export default function ResultLine({ label, sub, value, large }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="flex items-baseline gap-1.5">
        <span className={`text-zinc-400 ${large ? "text-sm" : "text-xs"}`}>
          {label}
        </span>
        {sub && <span className="text-zinc-600 text-xs">{sub}</span>}
      </div>
      <span
        className={`tabular-nums text-white ${large ? "text-2xl font-light" : "text-base font-light"}`}
      >
        {value}
      </span>
    </div>
  );
}
