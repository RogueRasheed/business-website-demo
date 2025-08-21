import React from "react";
import CoreValues from "../components/CoreValues";

export default function About() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-indigo-50">
      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-6 py-30 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          About <span className="text-indigo-600">Heed Consults</span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At Heed Consults, we bridge the gap between businesses, the public,
          and decision-makers. Our mission is to deliver innovative solutions
          that drive growth, impact, and lasting connections.
        </p>
      </div>

      {/* Story Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Founded with a vision to empower organizations, Heed Consults
            focuses on delivering cutting-edge strategies in government
            relations, advocacy, and public affairs. We believe in creating
            long-term value by putting people and purpose at the heart of every
            project.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our team is driven by curiosity, passion, and an unwavering
            commitment to excellence. With years of expertise, we continue to
            help clients navigate complexity and achieve meaningful results.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Our team working"
            className="rounded-3xl shadow-lg"
          />
        </div>
      </div>

    {/* Mission & Vision */}
<div className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
    {[
      {
        title: "Our Mission",
        text: "To empower organizations by fostering strong relationships, innovative advocacy, and impactful strategies that drive sustainable growth.",
        gradient: "from-blue-600 to-indigo-600",
      },
      {
        title: "Our Vision",
        text: "To be a trusted partner and industry leader in shaping the future of business, public affairs, and government relations.",
        gradient: "from-indigo-600 to-purple-600",
      },
    ].map((item, i) => (
      <div
        key={i}
        className={`group relative bg-gradient-to-r ${item.gradient} text-white rounded-3xl shadow-lg p-10 transition transform hover:-translate-y-2 hover:shadow-2xl`}
      >
        {/* subtle overlay effect */}
        <div className="absolute inset-0 rounded-3xl bg-white/10 opacity-0 group-hover:opacity-100 transition" />
        
        <h3 className="text-2xl font-bold mb-4 relative z-10">{item.title}</h3>
        <p className="relative z-10">{item.text}</p>
      </div>
    ))}
  </div>
</div>

      {/* Core Values Section */}
      <CoreValues />
      
      {/* Call to Action */}
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to work with us?
        </h2>
        <a
          href="/contact"
          className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold shadow-md hover:bg-indigo-700 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
