
import React, { useRef, useEffect, useState } from 'react';

interface ScaleOnScrollProps {
  children: React.ReactNode;
  threshold?: number;
  className?: string;
}

const ScaleOnScroll: React.FC<ScaleOnScrollProps> = ({
  children,
  threshold = 0.2,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible
          ? 'opacity-100 transform translate-y-0 scale-100'
          : 'opacity-0 transform translate-y-10 scale-95'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScaleOnScroll;
