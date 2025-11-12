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
    <div className="mt-8 flex flex-col items-center">
      <div className="flex gap-2 mb-6" role="tablist" aria-label="Value stream toggle">
        {Object.entries(valueStreamData).map(([key, { title }]) => {
          const isActive = key === view;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`px-4 py-2 text-sm font-semibold border rounded-full transition-colors ${
                isActive
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-zinc-200"
              }`}
              onClick={() => setView(key)}
            >
              {title}
            </button>
          );
        })}
      </div>
      <h3 className="text-xl font-bold mb-2">{active.title}</h3>
      <div className="flex flex-col gap-4 mb-8 w-full">
        {active.metrics.map((metric) => (
          <div key={metric.label} className="p-4 bg-zinc-100 border rounded-md">
            <p className="text-sm font-bold">{metric.label}</p>
            <p>{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
