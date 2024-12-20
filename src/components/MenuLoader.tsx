// Framer Motion
import { motion } from "framer-motion";

export default function MenuLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h2
          className="text-3xl font-display mb-8 text-white"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Loading Menu
        </motion.h2>
        <div className="flex gap-3 justify-center h-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-white"
              animate={{
                y: [0, -16, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
              style={{
                transformOrigin: "center bottom",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
