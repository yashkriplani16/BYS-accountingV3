import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface CountUpProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const CountUp = ({ end, suffix = "", label, duration = 2000 }: CountUpProps) => {
  const { ref, isVisible } = useScrollReveal(0.3);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-primary-foreground/70 text-sm uppercase tracking-widest">{label}</div>
    </div>
  );
};

export default CountUp;
