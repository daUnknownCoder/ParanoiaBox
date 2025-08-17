// src/pages/Landing.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <section className="flex flex-col items-center justify-center h-[80vh] text-center">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]"
      >
        Welcome to ParanoiaBox
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-4 text-lg text-gray-400 max-w-xl"
      >
        ParanoiaBox protects your devices & identity with
        <span className="text-purple-300 font-semibold"> CyberBee hardware </span>
        + powerful software.
        Designed for everyone, no tech skills needed.
      </motion.p>

      <Link
        to="/howitworks"
        whileHover={{ scale: 1.1, textShadow: "0px 0px 8px #ec4899" }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-lg shadow-pink-500/40"
      >
        Enter the Box
      </Link>
    </section>
  );
}
