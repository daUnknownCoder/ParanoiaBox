// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur-md shadow-lg border-b border-purple-900/50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 hover:scale-105 transition-transform"
        >
          ParanoiaBox
        </Link>

        {/* Links */}
        <div className="flex gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative text-lg font-medium transition-colors duration-300 ${
                  isActive ? "text-purple-400" : "text-gray-300 hover:text-purple-300"
                }`
              }
            >
              {item.name}
              {/* Glow underline */}
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-pink-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </NavLink>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
