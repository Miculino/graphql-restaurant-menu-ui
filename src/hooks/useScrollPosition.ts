import { useState, useEffect } from "react";

/**
 * Hook to track window scroll position
 * @returns number Current vertical scroll position in pixels
 *
 * @example
 * function MyComponent() {
 *   const scrollPosition = useScrollPosition();
 *   return <div>Scrolled: {scrollPosition}px</div>;
 * }
 */
export function useScrollPosition(): number {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
}
