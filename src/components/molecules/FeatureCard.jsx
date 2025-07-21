import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const FeatureCard = ({ 
  feature,
  index,
  isVisible,
  className,
  ...props 
}) => {
  const isReverse = index % 2 === 1;

  return (
    <motion.div
      className={cn(
        "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-16",
        className
      )}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      {...props}
    >
      {/* Image Section */}
      <motion.div
        className={cn(
          "relative",
          isReverse ? "lg:order-2" : "lg:order-1"
        )}
        initial={{ opacity: 0, x: isReverse ? 50 : -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: isReverse ? 50 : -50 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="aspect-square max-w-md mx-auto lg:max-w-none">
          <div className="w-full h-full rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 flex items-center justify-center">
            <div className="w-3/4 h-3/4 rounded-2xl bg-gradient-to-br from-accent/20 to-pink-500/20 flex items-center justify-center">
              <div className="text-6xl font-bold gradient-text">
                {index + 1}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className={cn(
          "space-y-6",
          isReverse ? "lg:order-1" : "lg:order-2"
        )}
        initial={{ opacity: 0, x: isReverse ? -50 : 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: isReverse ? -50 : 50 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
          {feature.headline}
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed">
          {feature.body}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;