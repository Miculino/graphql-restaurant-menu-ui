// React
import { useRef } from "react";

// Framer Motion
import { motion } from "framer-motion";

// Hooks
import { useFixedOnScroll } from "../hooks/useFixedOnScroll";

export default function SidebarScroller({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isFixed = useFixedOnScroll({ elementRef: scrollerRef });

  return (
    <div ref={scrollerRef}>
      {/* Mobile horizontal scroll */}
      <div className="md:hidden relative">
        <div className={`h-[52px] ${!isFixed ? "hidden" : ""}`} />

        <motion.div
          className={`w-full flex overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide
            ${
              isFixed
                ? "fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-40 pt-4 px-4"
                : "px-4"
            }`}
          animate={{
            position: isFixed ? "fixed" : "static",
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <div className="flex">{children}</div>
        </motion.div>
      </div>

      {/* Desktop vertical layout */}
      <div className="hidden md:block relative">
        <div className={`${isFixed ? "h-[200px]" : "h-0"}`} />

        <motion.div
          className={`flex flex-col ${isFixed ? "fixed top-4" : ""}`}
          animate={{
            position: isFixed ? "fixed" : "static",
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
