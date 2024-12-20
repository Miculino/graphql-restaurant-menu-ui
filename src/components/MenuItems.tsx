// Components
import MenuSection from "./MenuSection";

// Framer Motion
import { motion } from "framer-motion";

// Types
import { Menu, Section } from "../types/menu";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function MenuItems({ menu }: { menu: Menu }) {
  // Sort sections by display_order
  const sortedSections = [...menu.sections].sort(
    (a: Section, b: Section) => a.display_order - b.display_order
  );

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full md:w-3/4 flex flex-col gap-16 px-4 md:px-6"
    >
      {sortedSections.map((section) => (
        <MenuSection
          key={section.id}
          id={section.id}
          label={section.label}
          items={section.items}
          isAvailable={section.isAvailable}
        />
      ))}
    </motion.div>
  );
}
