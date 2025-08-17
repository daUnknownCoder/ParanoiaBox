import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-20 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-6xl font-extrabold text-neonPink drop-shadow-[0_0_15px_#ff00d4]">
        404
      </h1>
      <p className="mt-4 text-lg text-gray-400">Oops! Page not found.</p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 rounded-xl bg-neonBlue text-black font-semibold hover:scale-110 transition"
      >
        Go Home
      </Link>
    </motion.div>
  );
}
