import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-20 px-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-4xl font-bold text-neonBlue drop-shadow-[0_0_10px_#00f6ff]">
        Dashboard
      </h2>
      <div className="bg-[#111] border border-neonPink/30 mt-8 p-6 rounded-2xl shadow-lg w-full max-w-lg text-left">
        <p className="text-gray-300">🛡️ CyberBee: <span className="text-neonPink">Active & Securing</span></p>
        <p className="mt-2 text-gray-300">🌐 VPN: <span className="text-neonBlue">Connected</span></p>
        <p className="mt-2 text-gray-300">🔒 Identity Lock: <span className="text-neonPink">Enabled</span></p>
      </div>
    </motion.div>
  );
}
