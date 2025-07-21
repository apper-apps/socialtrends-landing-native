import React from "react";
import { cn } from "@/utils/cn";

const Container = ({ 
  className, 
  maxWidth = "7xl",
  padding = true,
  children,
  ...props 
}) => {
  const maxWidths = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    full: "max-w-full"
  };

  return (
    <div
      className={cn(
        "mx-auto",
        maxWidths[maxWidth],
        padding && "section-padding",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;