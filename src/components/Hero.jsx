import { motion as Motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="absolute inset-0 bg-black/30" /> {/* overlay for contrast */}

      <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center text-center">
        {/* Animated Heading */}
        <Motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight py-8"
        >
          Empowering Your Business with <span className="text-yellow-300">Heed Consults</span>
        </Motion.h1>

        {/* Subtext */}
        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl max-w-2xl"
        >
          We provide expert consulting services in government relations, advocacy, and public affairs to help your business thrive.
        </Motion.p>

        {/* CTA Buttons */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="/services"
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-lg hover:bg-yellow-300 transition"
          >
            Get Started
          </a>
          <a
            href="/about"
            className="px-6 py-3 border border-white text-white font-semibold rounded-xl shadow-lg hover:bg-white hover:text-black transition"
          >
            Learn More
          </a>
        </Motion.div>
      </div>
    </section>
  );
}
