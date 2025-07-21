import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Section = forwardRef(({
  className,
  id,
  padding = "default",
  background = "transparent",
  children,
  ...props
}, ref) => {
  const paddings = {
    none: "",
    sm: "py-12",
    default: "py-16 lg:py-20",
    lg: "py-20 lg:py-28",
    xl: "py-28 lg:py-36"
  };

  const backgrounds = {
    transparent: "",
    surface: "bg-surface",
    gradient: "bg-gradient-to-b from-background to-surface",
    wave: "wave-bg"
  };

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "relative",
        paddings[padding],
        backgrounds[background],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
});

Section.displayName = "Section";

export default Section;