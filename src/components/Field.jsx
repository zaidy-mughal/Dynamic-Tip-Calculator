export default function Field({ label, error, children }) {
  return (
    <div className="flex flex-col items-center gap-1 w-full">
      <div className="flex flex-row items-baseline gap-10">
        <span className="text-sm text-zinc-300">{label}</span>
        {children}
        <div className="h-4 flex items-center justify-center">
          {error && <p className="text-xs text-red-400">{error}</p>}
        </div>
      </div>
    </div>
  );
}
