import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      key="loading"
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
    >
      <h1 className="text-4xl font-extrabold text-neonPink drop-shadow-[0_0_20px_#ff00d4] mb-8">
        ParanoiaBox
      </h1>
      {/* Linear gradient progress bar */}
      <div className="relative w-72 h-3 bg-gray-900 rounded-full overflow-hidden border border-neonBlue/30">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 3, ease: "linear" }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
}
