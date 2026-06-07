import React, { useEffect, useRef, useState } from 'react';

export default function StatCard({ target, suffix = '', label, isFloat = false }) {
  const [value, setValue] = useState(0);
  const elementRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          animateCount();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [target]);

  const animateCount = () => {
    const duration = 1200; // ms
    const startTime = performance.now();
    const targetVal = parseFloat(target);

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = easeProgress * targetVal;

      setValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setValue(targetVal);
        // Flash color feedback
        if (elementRef.current) {
          elementRef.current.style.color = 'var(--color-brand-primary)';
          setTimeout(() => {
            if (elementRef.current) {
              elementRef.current.style.color = '';
            }
          }, 300);
        }
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="metric-col" ref={elementRef}>
      <div className="metric-number-wrap">
        <span>{isFloat ? value.toFixed(1) : Math.floor(value).toLocaleString()}</span>
        <span className="metric-suffix">{suffix}</span>
      </div>
      <span className="metric-label">{label}</span>
    </div>
  );
}
