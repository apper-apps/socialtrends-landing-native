import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Button = forwardRef(({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform-gpu";
  
  const variants = {
    default: "bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 hover:scale-[1.02] glow-button",
    secondary: "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-[1.02]",
    accent: "bg-gradient-to-r from-accent to-pink-500 text-white hover:from-accent/90 hover:to-pink-500/90 hover:scale-[1.02] glow-button",
    ghost: "text-white hover:bg-white/10 hover:scale-[1.02]",
    text: "text-accent hover:text-accent/80 underline hover:no-underline font-medium"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    default: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-xl",
    xl: "px-12 py-5 text-xl rounded-2xl"
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;