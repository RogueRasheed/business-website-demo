import React from "react";
import { partners } from "../utils/partners";

export default function Partners() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-10">
          Trusted by leading organizations
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 items-center">
          {partners.map((logo, idx) => (
            <img
              key={idx}
              src={logo.url}
              alt={logo.name}
              className="h-12 mx-auto grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
