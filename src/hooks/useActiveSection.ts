// React
import { useState, useEffect, useCallback, useRef } from "react";

interface Section {
  id: string;
  label: string;
  description: string | null;
}

interface UseActiveSectionOptions {
  sections: Section[];
}

/**
 * Hook to track the active section using Intersection Observer
 */
export function useActiveSection({
  sections,
}: UseActiveSectionOptions): [string, (id: string) => void] {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id);
  const timeoutRef = useRef<number>();

  // Debounced section change to prevent flickering
  const debouncedSetActiveSection = useCallback((sectionId: string) => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setActiveSection(sectionId);
    }, 100); // Small delay to prevent flickering
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Get all entries that are currently intersecting with a significant ratio
        const intersectingEntries = entries.filter(
          (entry) => entry.isIntersecting && entry.intersectionRatio > 0.3
        );

        if (intersectingEntries.length > 0) {
          // Use the one with the largest intersection ratio
          const mostVisible = intersectingEntries.reduce((prev, current) => {
            return prev.intersectionRatio > current.intersectionRatio
              ? prev
              : current;
          });

          debouncedSetActiveSection(mostVisible.target.id);
        }
      },
      {
        // Adjusted margins to create more distinct transition points
        rootMargin: "-20% 0px -35% 0px",
        // Reduced number of thresholds but kept key points
        threshold: [0.3, 0.4, 0.5, 0.6, 0.7],
      }
    );

    // Track all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    // Handle scroll to bottom edge case with debounce
    let scrollTimeout: number;
    const handleScroll = () => {
      if (scrollTimeout) {
        window.clearTimeout(scrollTimeout);
      }

      scrollTimeout = window.setTimeout(() => {
        if (
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 100
        ) {
          const lastSection = sections[sections.length - 1];
          if (lastSection) {
            debouncedSetActiveSection(lastSection.id);
          }
        }
      }, 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      if (scrollTimeout) {
        window.clearTimeout(scrollTimeout);
      }
    };
  }, [sections, debouncedSetActiveSection]);

  // Manual section activation (for click events)
  const activateSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(sectionId);
    }
  }, []);

  return [activeSection, activateSection];
}
