import { useEffect } from "react";

/**
 * Hook to prevent background scrolling when a modal is open
 * @param isLocked - Boolean to determine if scroll should be locked
 *
 * @example
 * function Modal({ isOpen }) {
 *   useScrollLock(isOpen);
 *   return isOpen ? <div>Modal Content</div> : null;
 * }
 */
export function useScrollLock(isLocked: boolean): void {
  useEffect(() => {
    if (isLocked) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isLocked]);
}
