import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible] as const;
};

export const useStaggeredAnimation = (delay = 100) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const childElements = Array.from(containerRef.current.children) as HTMLElement[];

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            childElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate');
              }, index * delay);
            });
          }
        },
        {
          threshold: 0.1,
          rootMargin: '50px 0px -50px 0px'
        }
      );

      observer.observe(containerRef.current);

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }
  }, [delay]);

  return containerRef;
};