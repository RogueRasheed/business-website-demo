// src/components/ServicesPreview.jsx
import React from "react";
import { services } from "../utils/services";
import { Link } from "react-router-dom";

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Discover how Heed Consults bridges the gap between organizations,
          the public, and key decision-makers.
        </p>

        {/* Service Cards - only show first 3 */}
        <div className="grid gap-10 md:grid-cols-3">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md p-8 transition transform hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon inside gradient circle */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 text-white shadow-md group-hover:scale-110 transition">
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Button to full Services page */}
        <div className="mt-12">
          <Link
            to="/services"
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition"
          >
            View All Services
          </Link>
        </div>
      </div>

      {/* Decorative blur backgrounds */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
    </section>
  );
}
