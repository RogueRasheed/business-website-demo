import React from "react";
import { values } from "../utils/values"; // we'll separate the values into utils

export default function CoreValues() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Our Core Values
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          At Heed Consults, our values guide every decision, partnership, and
          solution we deliver.
        </p>

        {/* Value Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {values.map((val, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg p-8 transition transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icon inside gradient circle */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 text-white shadow-md group-hover:scale-110 transition">
                <val.icon className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {val.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative blur blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
    </section>
  );
}
