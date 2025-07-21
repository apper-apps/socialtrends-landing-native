import React from "react";
import { motion } from "framer-motion";

const Loading = ({ className = "", variant = "default" }) => {
  const variants = {
    default: "space-y-8",
    hero: "space-y-12",
    card: "space-y-4",
    list: "space-y-6"
  };

  return (
    <div className={`animate-pulse ${variants[variant]} ${className}`}>
      {variant === "hero" && (
        <>
          {/* Hero Loading */}
          <div className="text-center space-y-6">
            <div className="flex justify-center space-x-4 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 bg-primary/20 rounded-full" />
              ))}
            </div>
            <div className="space-y-4">
              <div className="h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg mx-auto max-w-4xl" />
              <div className="h-12 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-lg mx-auto max-w-3xl" />
            </div>
            <div className="h-8 bg-surface/50 rounded-lg mx-auto max-w-2xl" />
            <div className="w-48 h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full mx-auto" />
            <div className="flex justify-center space-x-4">
              <div className="w-40 h-12 bg-accent/20 rounded-xl" />
              <div className="w-40 h-12 bg-primary/20 rounded-xl" />
            </div>
          </div>
        </>
      )}

      {variant === "card" && (
        <>
          {/* Card Loading */}
          <div className="space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl" />
            <div className="space-y-2">
              <div className="h-8 bg-primary/20 rounded-lg" />
              <div className="h-6 bg-surface/50 rounded-lg" />
              <div className="h-6 bg-surface/50 rounded-lg w-3/4" />
            </div>
          </div>
        </>
      )}

      {variant === "list" && (
        <>
          {/* List Loading */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex space-x-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-6 bg-surface/50 rounded-lg" />
                <div className="h-4 bg-surface/30 rounded-lg w-3/4" />
              </div>
            </div>
          ))}
        </>
      )}

      {variant === "default" && (
        <>
          {/* Default Loading */}
          <div className="space-y-4">
            <div className="h-8 bg-primary/20 rounded-lg" />
            <div className="h-6 bg-surface/50 rounded-lg" />
            <div className="h-6 bg-surface/50 rounded-lg w-2/3" />
          </div>
        </>
      )}

      {/* Animated shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{ x: [-100, 300] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        style={{ transform: "skewX(-20deg)" }}
      />
    </div>
  );
};

export default Loading;