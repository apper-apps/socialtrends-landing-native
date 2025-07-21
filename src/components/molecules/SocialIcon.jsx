import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const SocialIcon = ({ 
  platform, 
  className,
  animated = true,
  size = 32,
  ...props 
}) => {
  const platformIcons = {
    tiktok: "Music",
    instagram: "Instagram", 
    youtube: "Youtube",
    twitter: "Twitter",
    x: "Twitter"
  };

  const platformColors = {
    tiktok: "text-pink-500",
    instagram: "text-purple-500",
    youtube: "text-red-500",
    twitter: "text-blue-400",
    x: "text-blue-400"
  };

  const iconName = platformIcons[platform.toLowerCase()] || "Share2";
  const iconColor = platformColors[platform.toLowerCase()] || "text-gray-400";

  const MotionDiv = animated ? motion.div : "div";

  const animationProps = animated ? {
    whileHover: { 
      scale: 1.2, 
      rotate: 360,
      transition: { duration: 0.3 }
    },
    whileTap: { scale: 0.9 }
  } : {};

  return (
    <MotionDiv
      className={cn(
        "flex items-center justify-center p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer",
        className
      )}
      {...animationProps}
      {...props}
    >
      <ApperIcon 
        name={iconName} 
        size={size}
        className={cn("transition-colors duration-300", iconColor)}
      />
    </MotionDiv>
  );
};

export default SocialIcon;