import React from "react";

export default function Newsletter() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-20">
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Stay in the Loop
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and get the latest insights, updates, and strategies 
          from <span className="font-semibold text-indigo-600">Heed Consults</span>.
        </p>

        {/* Form */}
        <form className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-96 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Background accents */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
    </section>
  );
}
