// React
import { useState } from "react";

// Components
import ProductDetails from "./ProductDetails";
import Button from "./Button";

interface MenuItemProps {
  label: string;
  description: string;
  price: number;
  thumbnail_url: string;
  isAvailable: boolean;
  sectionAvailable?: boolean;
}

export default function MenuItem({
  label,
  description,
  price,
  thumbnail_url,
  isAvailable,
  sectionAvailable = true,
}: MenuItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isItemAvailable = isAvailable && sectionAvailable;

  const getButtonText = () => {
    if (!sectionAvailable) return "Not Available";
    if (!isAvailable) return "Sold Out";
    return "Add";
  };

  return (
    <>
      <div
        className={`flex flex-col gap-4 h-full ${
          isItemAvailable ? "cursor-pointer" : "cursor-not-allowed"
        } ${!sectionAvailable ? "opacity-50" : ""}`}
        onClick={() => isItemAvailable && setIsModalOpen(true)}
      >
        <div className="relative w-full pt-[100%] rounded-lg overflow-hidden bg-gray-100">
          <img
            src={thumbnail_url}
            alt={label}
            className={`absolute inset-0 w-full h-full object-cover ${
              isItemAvailable ? "hover:scale-105" : ""
            } transition-all duration-300`}
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="font-display text-xl">{label}</h3>
          <p
            className="text-gray-600 text-sm flex-grow line-clamp-3"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="flex justify-between items-center mt-2">
            <p className="font-display text-lg">${price.toFixed(2)}</p>
            <Button
              variant={isItemAvailable ? "primary" : "secondary"}
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={
                !isAvailable || !sectionAvailable
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }
            >
              {getButtonText()}
            </Button>
          </div>
        </div>
      </div>

      {isItemAvailable && (
        <ProductDetails
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={{ label, description, price, image: thumbnail_url }}
        />
      )}
    </>
  );
}
