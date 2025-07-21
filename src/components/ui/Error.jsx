import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Error = ({ 
  message = "Something went wrong", 
  onRetry = null,
  className = ""
}) => {
  return (
    <motion.div
      className={`text-center py-12 px-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-error/20 to-orange-500/20 rounded-full flex items-center justify-center"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, -10, 10, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ApperIcon name="AlertTriangle" size={32} className="text-error" />
      </motion.div>
      
      <h3 className="text-xl font-semibold text-white mb-3">
        Oops! Something went wrong
      </h3>
      
      <p className="text-gray-400 mb-6 max-w-md mx-auto leading-relaxed">
        {message}
      </p>
      
      {onRetry && (
        <Button 
          onClick={onRetry}
          variant="secondary"
          size="sm"
          className="inline-flex items-center space-x-2"
        >
          <ApperIcon name="RefreshCw" size={16} />
          <span>Try Again</span>
        </Button>
      )}
      
      <div className="mt-8 text-sm text-gray-500">
        If the problem persists, please contact support
      </div>
    </motion.div>
  );
};

export default Error;