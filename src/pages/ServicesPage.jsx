// pages/ServicesPage.jsx
import React from "react";
import { services } from "../utils/services";

export default function ServicesPage() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At <span className="font-semibold text-blue-600">Heed Consults</span>,
            we provide tailored solutions to help businesses, organizations, and
            individuals thrive in today’s evolving landscape.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon Bubble */}
              <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
                <service.icon className="w-12 h-12" />
              </div>

              {/* Service Content */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  {service.name}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.descriptionLong}
                </p>
                <a
                  href="#"
                  className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
