"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader after 2.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    exit: {
      y: "-100%",
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1] as const, // Custom cubic bezier for Apple-like slide-up
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, letterSpacing: "0.2em", y: 20 },
    visible: {
      opacity: 1,
      letterSpacing: "0.5em",
      y: 0,
      transition: {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const lineVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "150px",
      transition: {
        delay: 0.5,
        duration: 1.5,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          variants={containerVariants}
          exit="exit"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-luxury-obsidian text-luxury-cream"
          id="maison-global-loader"
        >
          <div className="flex flex-col items-center select-none">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="font-serif text-3xl md:text-5xl uppercase tracking-[0.5em] text-[#D4AF37] text-center"
            >
              Maison
            </motion.h1>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-2 font-sans text-xs uppercase tracking-[0.3em] text-luxury-creamDark"
            >
              d&apos;Élégance
            </motion.span>
            
            {/* Elegant luxury loading line divider */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={lineVariants}
              className="h-[1px] bg-[#D4AF37] mt-8"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-4 font-sans text-[9px] uppercase tracking-[0.2em] text-[#C5A880]"
            >
              Haute Couture
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
