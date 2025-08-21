// components/HomepageServices.jsx
import React from "react";
import { services } from "../../utils/services";

export default function HomepageServices() {
  return (
    <section className=" py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
            >
              {/* Icon bubble */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white mb-4">
                <service.icon className="w-10 h-10" />
              </div>

              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.descriptionShort}</p>
              <a
                href={service.path}
                className="text-blue-600 font-medium hover:underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
