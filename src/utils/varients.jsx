import { motion } from "framer-motion";

export const fadeVariants = {
    fadeIn: {
      opacity: 0,
      y: 30,
      transition: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }, // Smooth cubic-bezier
    },
    fadeUp: {
      opacity: 0,
      y: 40,
      transition: { duration: 1.8, ease: "easeInOut" }, // Slower, smooth transition
    },
    fadeDown: {
      opacity: 0,
      y: -40,
      transition: { duration: 1.8, ease: "easeInOut" },
    },
    floating: {
      y: [0, -10, 0], // Slight floating effect
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
  
  


