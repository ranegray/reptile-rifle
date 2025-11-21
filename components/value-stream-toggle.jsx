"use client";

import { useState } from "react";

const valueStreamData = {
  before: {
    title: "BEFORE GOLEM",
    metrics: [
      { label: "TIME SPENT WAITING", value: "~46 mins/shift" },
      { label: "TIME SPENT TRANSPORTING", value: "~34 mins/shift" },
      { label: "THROUGHPUT", value: "100 units/hr" },
    ],
  },
  after: {
    title: "AFTER GOLEM",
    metrics: [
      { label: "TIME SPENT WAITING", value: "5 mins/shift" },
      { label: "TIME SPENT TRANSPORTING", value: "3 mins/shift" },
      { label: "THROUGHPUT", value: "130 units/hr" },
    ],
  },
};

export default function ValueStreamToggle() {
  const [view, setView] = useState("before");
  const active = valueStreamData[view];

  return (
    <div className="mt-8 flex flex-col">
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1 bg-zinc-100 rounded-xl border border-zinc-200">
          {Object.entries(valueStreamData).map(([key, { title }]) => {
            const isActive = key === view;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-white text-zinc-900 shadow-sm ring-1 ring-black/5"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
                onClick={() => setView(key)}
              >
                {title}
              </button>
            );
          })}
        </div>
      </div>
      <div className="grid gap-4 mb-8 w-full md:grid-cols-3">
        {active.metrics.map((metric) => (
          <div key={metric.label} className="p-6 bg-zinc-50 border border-zinc-200 rounded-lg flex flex-col justify-center text-center md:text-left transition-all hover:border-primary/50">
            <p className="text-xs font-mono font-medium text-zinc-500 mb-2">{metric.label}</p>
            <p className="text-2xl font-bold text-zinc-900">{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
