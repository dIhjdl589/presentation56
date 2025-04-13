
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  fontSize?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = '',
  fontSize = 'text-4xl'
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      countRef.current = 0;
      
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentCount = Math.floor(progress * end);
        
        setCount(currentCount);
        countRef.current = currentCount;
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref} className={`${className} ${fontSize} font-bold text-blue-600`}>
      {prefix}{inView ? count : 0}{suffix}
    </div>
  );
};

export default AnimatedCounter;
