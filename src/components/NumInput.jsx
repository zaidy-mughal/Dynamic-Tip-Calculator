export default function NumInput({
  value,
  onChange,
  placeholder,
  prefix,
  suffix,
  hasError,
}) {
  return (
    <div
      className={`flex items-center gap-1 border-b pb-1 transition-colors ${hasError ? "border-red-500" : "border-zinc-600 focus-within:border-zinc-300"}`}
    >
      {prefix && <span className="text-zinc-500 text-sm">{prefix}</span>}
      <input
        type="number"
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent text-center text-white text-sm outline-none w-20 placeholder:text-zinc-600 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      {suffix && <span className="text-zinc-500 text-sm">{suffix}</span>}
    </div>
  );
}
