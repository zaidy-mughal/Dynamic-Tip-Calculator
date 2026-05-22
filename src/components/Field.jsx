export default function Field({ label, error, children }) {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-center md:justify-around gap-2 w-full">
      <span className="text-sm text-zinc-300 p-2 md:w-1/3">{label}</span>

      {children}

      <div className="flex items-center gap-2 md:w-1/3">
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    </div>
  );
}
