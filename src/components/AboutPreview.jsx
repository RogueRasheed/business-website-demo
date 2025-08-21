// components/AboutPreview.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            About <span className="text-indigo-600">Heed Consults</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            At Heed Consults, we specialize in delivering innovative strategies 
            that connect businesses, organizations, and communities with the 
            right opportunities. Our approach blends expertise, modern solutions, 
            and a people-first focus to create lasting impact.
          </p>
          <Link
            to="/about"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition"
          >
            Learn More
          </Link>
        </div>

        {/* Image / Illustration */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200 to-blue-100 rounded-3xl transform rotate-3"></div>
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
            alt="Teamwork at Heed Consults"
            className="relative rounded-3xl shadow-2xl"
          />
        </div>
    </div>
    </section>
  );
}
