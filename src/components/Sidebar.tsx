// Components
import SidebarScroller from "./SidebarScroller";

// Framer Motion
import { motion, useTransform, useScroll } from "framer-motion";

// Hooks
import { useActiveSection } from "../hooks/useActiveSection";
import { useCallback } from "react";

// Types
import { Section } from "../types/menu";

export default function Sidebar({ sections }: { sections: Section[] }) {
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const headerTranslateY = useTransform(scrollY, [0, 100], [0, -20]);
  const [activeSection, setActiveSection] = useActiveSection({ sections });

  const handleSectionClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
        setActiveSection(sectionId);
      }
    },
    [setActiveSection]
  );

  return (
    <div className="w-full md:w-1/4 bg-background text-black">
      <motion.h3
        className="text-3xl font-bold font-display mb-5 px-4 md:px-0"
        style={{
          opacity: headerOpacity,
          y: headerTranslateY,
        }}
      >
        Our Menu
      </motion.h3>

      <SidebarScroller>
        {sections.map((section) => (
          <div
            className={`px-4 py-2 border-l-2 whitespace-nowrap transition-colors ${
              activeSection === section.id
                ? "border-primary"
                : "border-gray-200 hover:border-gray-400"
            }`}
            key={section.id}
          >
            <a
              href={`#${section.id}`}
              className="text-lg"
              onClick={(e) => handleSectionClick(e, section.id)}
            >
              {section.label}
            </a>
          </div>
        ))}
      </SidebarScroller>
    </div>
  );
}
