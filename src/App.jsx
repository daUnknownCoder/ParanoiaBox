import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Features from "./pages/Features";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3s loading bar
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen key="loading" />
      ) : (
        <motion.div
          key="main-site"
          className="relative min-h-screen flex flex-col bg-[#0a0a0f] text-gray-100 overflow-hidden"
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-dots pointer-events-none" />

          <Navbar />
          <main className="flex-grow relative z-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><Landing /></PageWrapper>} />
                <Route path="/features" element={<PageWrapper><Features /></PageWrapper>} />
                <Route path="/dashboard" element={<PageWrapper><Dashboard /></PageWrapper>} />
                <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
