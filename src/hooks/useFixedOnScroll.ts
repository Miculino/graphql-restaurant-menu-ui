import { useState, useEffect, RefObject } from "react";

interface UseFixedOnScrollOptions {
  threshold?: number;
  elementRef: RefObject<HTMLElement>;
}

/**
 * Hook to determine if an element should be fixed based on scroll position
 * @param options - Configuration options
 * @param options.threshold - Scroll position threshold in pixels (default: 50)
 * @param options.elementRef - Reference to the element being tracked
 * @returns boolean indicating if the element should be fixed
 */
export function useFixedOnScroll({
  threshold = 50,
  elementRef,
}: UseFixedOnScrollOptions) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const scrolled = window.scrollY > threshold;

        if (scrolled !== isFixed) {
          setIsFixed(scrolled);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFixed, threshold, elementRef]);

  return isFixed;
}
