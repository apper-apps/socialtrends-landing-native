import React from "react";
import { cn } from "@/utils/cn";

const GradientText = ({ 
  className,
  variant = "primary",
  children,
  ...props 
}) => {
  const variants = {
    primary: "bg-gradient-to-r from-primary via-secondary to-accent",
    secondary: "bg-gradient-to-r from-secondary to-accent",
    accent: "bg-gradient-to-r from-accent to-pink-500",
    cool: "bg-gradient-to-r from-cyan-400 to-blue-500",
    warm: "bg-gradient-to-r from-orange-400 to-red-500"
  };

  return (
    <span
      className={cn(
        "bg-clip-text text-transparent font-bold",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default GradientText;