import { motion } from "framer-motion";

const features = [
  { title: "CyberBee Hardware", desc: "A pocket-sized guardian that encrypts, monitors, and shields your connection." },
  { title: "Identity Lock", desc: "Protects your personal data across apps, websites, and networks." },
  { title: "Simple Interface", desc: "An intuitive dashboard anyone can use — no cybersecurity degree needed." },
];

export default function Features() {
  return (
    <motion.div
      className="py-20 px-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-4xl font-bold text-neonBlue drop-shadow-[0_0_10px_#00f6ff]">
        Features
      </h2>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="bg-[#111] border border-neonBlue/30 rounded-2xl p-6 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-neonPink">{f.title}</h3>
            <p className="mt-2 text-gray-400">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
