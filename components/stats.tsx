import React from "react";
import statsData from "@/data/stats.json";

export default function Stats() {
  return (
    <div className="bg-maroon-theme relative z-20 mt-auto w-full">
      <div className="mx-auto max-w-7xl px-4 py-4 md:py-4 lg:px-8">
        <div className="grid grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl font-extrabold tracking-tight text-white md:text-4xl">
                {stat.number}
              </p>
              <p className="mt-1 text-xs tracking-wider text-white/80 uppercase md:mt-2 md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
