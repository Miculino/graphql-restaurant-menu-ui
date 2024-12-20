// Components
import MenuItem from "./MenuItem";

// Framer Motion
import { motion } from "framer-motion";

// Types
import { MenuItemType } from "../types/menu";

interface MenuSectionProps {
  id: string;
  label: string;
  items: MenuItemType[];
  isAvailable: boolean;
}

const sectionAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const gridContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export default function MenuSection({
  id,
  label,
  items,
  isAvailable,
}: MenuSectionProps) {
  // Sort items by display_order
  const sortedItems = [...items].sort(
    (a: MenuItemType, b: MenuItemType) => a.display_order - b.display_order
  );

  return (
    <motion.div
      variants={gridContainer}
      className="flex flex-col gap-8"
      id={id}
    >
      <motion.h2 variants={sectionAnimation} className="text-3xl font-display">
        {label}
      </motion.h2>
      <motion.div
        variants={gridContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {sortedItems.map((menuItem) => (
          <motion.div
            key={menuItem.id}
            variants={itemAnimation}
            viewport={{ once: true }}
          >
            <MenuItem
              label={menuItem.label}
              description={menuItem.description ?? ""}
              price={menuItem.price}
              thumbnail_url={menuItem.thumbnail_url}
              isAvailable={menuItem.isAvailable}
              sectionAvailable={isAvailable}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
