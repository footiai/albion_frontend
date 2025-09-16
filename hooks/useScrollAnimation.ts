'use client';

import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const elementRef = useRef<HTMLElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, isClient]);

  return elementRef;
};

export const useCounterAnimation = (
  endValue: number,
  duration = 2000,
  startAnimation = false
) => {
  const countRef = useRef<HTMLSpanElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !startAnimation || !countRef.current) return;

    const element = countRef.current;
    const startValue = 0;
    const increment = endValue / (duration / 16);
    let currentValue = startValue;

    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= endValue) {
        currentValue = endValue;
        clearInterval(timer);
      }
      element.textContent = Math.floor(currentValue).toString();
    }, 16);

    return () => clearInterval(timer);
  }, [endValue, duration, startAnimation, isClient]);

  return countRef;
};
