import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import GradientText from "@/components/atoms/GradientText";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  title = "Nothing to see here",
  description = "It looks like there's no content available right now.",
  actionText = "Get Started",
  onAction = null,
  icon = "Search",
  className = ""
}) => {
  return (
    <motion.div
      className={`text-center py-16 px-6 ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center"
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ApperIcon name={icon} size={40} className="text-primary" />
      </motion.div>
      
      <h3 className="text-2xl font-bold mb-4">
        <GradientText>{title}</GradientText>
      </h3>
      
      <p className="text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
        {description}
      </p>
      
      {onAction && (
        <Button 
          onClick={onAction}
          variant="accent"
          size="lg"
          className="inline-flex items-center space-x-2 shadow-lg shadow-accent/30"
        >
          <ApperIcon name="Plus" size={20} />
          <span>{actionText}</span>
        </Button>
      )}
      
      <motion.div
        className="mt-12 flex justify-center space-x-6 text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm">AI-Powered</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
          <span className="text-sm">Real-time</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-sm">Multi-platform</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Empty;