import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const AnimatedPlaceholder = ({ 
  type = "wave",
  className,
  size = "lg",
  ...props 
}) => {
  const sizes = {
    sm: "w-24 h-24",
    md: "w-32 h-32", 
    lg: "w-48 h-48",
    xl: "w-64 h-64"
  };

  const animations = {
    wave: {
      animate: {
        scale: [1, 1.1, 1],
        rotate: [0, 5, -5, 0]
      },
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    radar: {
      animate: {
        rotate: 360
      },
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }
    },
    compass: {
      animate: {
        rotate: [0, 10, -10, 0],
        scale: [1, 1.05, 1]
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    pulse: {
      animate: {
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7]
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className={cn(
        "flex items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30",
        sizes[size],
        className
      )}
      {...animations[type]}
      {...props}
    >
      <div className="w-1/2 h-1/2 rounded-full bg-gradient-to-br from-accent to-pink-500 shadow-lg shadow-accent/30" />
    </motion.div>
  );
};

export default AnimatedPlaceholder;