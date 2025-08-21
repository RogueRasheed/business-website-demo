// pages/Services.jsx (JSX)
import React, { useState } from "react";
import { services } from "../utils/services";

function ServiceImage({ src, alt, FallbackIcon }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className="w-full h-64 rounded-2xl shadow-inner bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
          <FallbackIcon className="w-8 h-8" />
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setError(true)}
      className="w-full h-64 object-cover rounded-2xl shadow-inner"
    />
  );
}

export default function Services() {
  return (
    <section className="bg-white">
      {/* Hero / Header */}
      <div className="text-center py-40 bg-gradient-to-r from-blue-50 via-white to-indigo-50">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Our Services</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At Heed Consults, we provide tailored solutions designed to help organizations
          navigate complex challenges, foster relationships, and create impact.
        </p>
      </div>

      {/* Detailed Services */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {services.map((service, index) => (
          <div
            key={service.name}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text */}
            <div className="flex-1">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md mb-6">
                <service.icon className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.name}</h2>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>

            {/* Image with fallback */}
            <div className="flex-1">
              <ServiceImage
                src={service.image}
                alt={service.name}
                FallbackIcon={service.icon}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Process */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-12">How We Work</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { step: "1", title: "Discovery", desc: "We analyze your goals and challenges to craft tailored strategies." },
              { step: "2", title: "Strategy", desc: "Our team develops clear, actionable plans to drive results." },
              { step: "3", title: "Execution", desc: "We implement solutions while keeping you engaged at every step." },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-md hover:scale-105 transform transition"
              >
                <div className="text-3xl font-extrabold mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm opacity-90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Work With Us?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Let’s collaborate and build solutions that deliver real impact.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
