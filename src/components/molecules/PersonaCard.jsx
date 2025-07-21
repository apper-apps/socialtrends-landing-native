import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const PersonaCard = ({ 
  persona, 
  index,
  isVisible,
  className,
  ...props 
}) => {
  return (
    <motion.div
      className={cn(
        "group relative p-8 rounded-3xl bg-gradient-to-br from-surface/50 to-surface/30 border border-white/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10",
        className
      )}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -8, scale: 1.02 }}
      {...props}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon */}
      <motion.div
        className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6 shadow-lg shadow-primary/30"
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <ApperIcon 
          name={persona.icon} 
          size={32} 
          className="text-white"
        />
      </motion.div>

      {/* Content */}
      <div className="relative space-y-4">
        <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-500">
          {persona.headline}
        </h3>
        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
          {persona.body}
        </p>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-primary group-hover:to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
    </motion.div>
  );
};

export default PersonaCard;