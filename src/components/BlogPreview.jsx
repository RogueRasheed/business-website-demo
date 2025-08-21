// components/BlogPreview.jsx
import React from "react";
import { posts } from "../utils/posts";

export default function BlogPreview() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Latest Insights
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Stay updated with fresh perspectives, strategies, and trends from
          Heed Consults.
        </p>

        {/* Blog Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden group transition transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <a
                  href={post.link}
                  className="text-indigo-600 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute -top-20 right-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
    </section>
  );
}
