import { Link } from "react-router-dom";
import { quickLinks, services, socials } from "../utils/footerLinks";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-black text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo / Intro */}
        <div>
          <h2 className="text-2xl font-bold text-white">Heed Consults</h2>
          <p className="mt-3 text-sm text-gray-400">
            Guiding businesses toward smarter decisions with innovation and
            strategy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
          <ul className="space-y-2">
            {services.map((service, idx) => (
              <li key={idx}>
                <Link
                  to={service.path}
                  className="hover:text-white transition-colors"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            {socials.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Icon className="w-5 h-5 text-gray-300" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Divider & bottom note */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Heed Consults. All rights reserved.
      </div>
    </footer>
  );
}
