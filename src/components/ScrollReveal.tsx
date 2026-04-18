import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
}

const ScrollReveal = ({ children, className = "", direction = "up", delay = 0 }: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  const animationClass = {
    up: "animate-fade-in",
    left: "animate-fade-in-left",
    right: "animate-fade-in-right",
  }[direction];

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
