import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-2 relative z-10">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Whether you have a project in mind, a question, or just want to say
            hello — we’d love to hear from you.
          </p>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700">heedzone@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700">+234 901 220 7033</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700">
                FCT Abuja, Nigeria 
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white/80 backdrop-blur-lg shadow-xl rounded-3xl p-8 space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-medium shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Decorative background blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
    </section>
  );
}
