// React
import { useState, useEffect } from "react";

// Framer Motion
import { motion, AnimatePresence } from "framer-motion";

// Hooks
import { useScrollLock } from "../hooks/useScrollLock";

// Components
import Button from "./Button";

interface ProductDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    label: string;
    description: string;
    price: number;
    image: string;
  };
}

export default function ProductDetails({
  isOpen,
  onClose,
  product,
}: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = product.price * quantity;

  useScrollLock(isOpen);

  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
    }
  }, [isOpen]);

  const handleQuantityChange = (value: number) => {
    setQuantity(Math.max(1, Math.min(99, value)));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative bg-white rounded-lg w-full max-w-lg mx-4 overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Close dialog"
            >
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div className="flex flex-col">
              <div className="w-full">
                <div className="relative pt-[75%]">
                  <img
                    src={product.image}
                    alt={product.label}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="w-full p-6 flex flex-col">
                <h2 className="text-2xl font-display mb-4">{product.label}</h2>
                <div
                  className="prose prose-sm mb-6"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
                <div className="mt-auto">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <label className="font-medium text-sm text-gray-600">
                        Qty:
                      </label>
                      <div className="flex items-center border border-gray-300 rounded-md bg-gray-50">
                        <button
                          onClick={() => handleQuantityChange(quantity - 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100 transition-colors border-r border-gray-300"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={quantity}
                          onChange={(e) =>
                            setQuantity(parseInt(e.target.value) || 1)
                          }
                          min="1"
                          className="w-12 text-center appearance-none border-none outline-none [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <button
                          onClick={() => handleQuantityChange(quantity + 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100 transition-colors border-l border-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <Button size="lg">
                      Add to Cart (${totalPrice.toFixed(2)})
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
