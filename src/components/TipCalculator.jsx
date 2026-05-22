import { useState } from "react";
import Field from "./Field";
import NumInput from "./NumInput";
import ResultLine from "./ResultLine";

const QUICK_TIPS = [10, 15, 20];

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tipPercent, setTipPercent] = useState("");
  const [people, setPeople] = useState("1");

  const numericBill = Number(bill) || 0;
  const numericTipPercent = Number(tipPercent) || 0;
  const numericPeople = Number(people);

  const tipAmountCalc = (numericBill * numericTipPercent) / 100;
  const grandTotalCalc = numericBill + tipAmountCalc;
  const perPersonCalc = grandTotalCalc / numericPeople;

  const billError =
    bill === "" ? "" : numericBill > 0 ? "" : "Must be a positive number.";
  const tipError =
    tipPercent === ""
      ? ""
      : numericTipPercent >= 0 && numericTipPercent <= 30
        ? ""
        : "Must be between 0 and 100.";
  const peopleError =
    people === ""
      ? ""
      : !Number.isInteger(numericPeople) || numericPeople < 1
        ? "Number of people must be at least 1."
        : "";

  const hasError = !!billError || !!tipError || !!peopleError;
  const hasValues = numericBill > 0 && !hasError;

  const fmt = (n) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <div className="min-h-screen flex justify-center bg-zinc-950 p-6">
      <div className="flex flex-col items-center gap-5 w-full max-w-xl">
        <div className="text-center">
          <h1 className="text-3xl font-light tracking-tight text-white">
            Tip Calculator
          </h1>
          <p className="text-xs text-zinc-500 mt-1.5">
            Instantly split your bill
          </p>

          <button
            onClick={() => {
              setBill("");
              setTipPercent("");
              setPeople("1");
            }}
            className="cursor-pointer rounded-lg border border-zinc-300
                bg-black px-4 py-2 text-sm font-medium text-zinc-700
                shadow-sm transition-all duration-200 mt-3
                hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-900
                active:scale-[0.98]
              "
          >
            Clear
          </button>
        </div>

        <div className="flex flex-col gap-5 w-full border rounded-lg border-zinc-800 bg-zinc-900 p-2">
          <Field label="Bill Amount ($ >= 0): " error={billError}>
            <NumInput
              value={bill}
              onChange={setBill}
              placeholder="0.00"
              prefix="$"
              hasError={!!billError}
            />
          </Field>

          <Field label="Tip Percentage(0-30%): " error={tipError}>
            <div className="flex gap-2 mb-1">
              {QUICK_TIPS.map((t) => (
                <button
                  key={t}
                  onClick={() =>
                    setTipPercent(tipPercent === String(t) ? "" : String(t))
                  }
                  className={`text-xs px-2.5 py-1 rounded-full border transition-colors cursor-pointer ${
                    tipPercent === String(t)
                      ? "border-zinc-300 text-white"
                      : "border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {t}%
                </button>
              ))}
            </div>

            <NumInput
              value={tipPercent}
              onChange={setTipPercent}
              placeholder="custom"
              suffix="%"
              hasError={!!tipError}
            />
          </Field>

          <Field label="Number of People (>=1): " error={peopleError}>
            <NumInput
              value={people}
              onChange={setPeople}
              placeholder="1"
              hasError={!!peopleError}
            />
          </Field>
        </div>

        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex flex-wrap flex-1 justify-center gap-2">
            <ResultLine
              label="Tip"
              sub="amount added"
              value={hasValues ? fmt(tipAmountCalc) : "$0.00"}
            />
            <ResultLine
              label="Grand Total"
              sub="bill + tip"
              value={hasValues ? fmt(grandTotalCalc) : "$0.00"}
            />
            <ResultLine
              label={"Per Person"}
              value={
                hasValues
                  ? fmt(numericPeople > 1 ? perPersonCalc : grandTotalCalc)
                  : "$0.00"
              }
              large
            />
          </div>
        </div>
      </div>
    </div>
  );
}
