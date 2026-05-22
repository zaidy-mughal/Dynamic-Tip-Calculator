export default function Field({ label, hint, error, children }) {
  return (
    <div className="flex flex-col items-center gap-1 w-full">
      <div className="flex items-baseline gap-2">
        <span className="text-sm text-zinc-300">{label}</span>
        {hint && <span className="text-xs text-zinc-500">{hint}</span>}
      </div>
      {children}
      <div className="h-4 flex items-center justify-center">
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    </div>
  );
}
