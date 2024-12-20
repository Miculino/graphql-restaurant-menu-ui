// React
import { useState } from "react";

// Components
import ProductDetails from "./ProductDetails";
import Button from "./Button";

export default function MenuItem({
  label,
  description,
  price,
  image,
}: {
  label: string;
  description: string;
  price: number;
  image: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="flex flex-col gap-4 h-full cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative w-full pt-[100%] rounded-lg overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={label}
            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-all duration-300"
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
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
            >
              Add
            </Button>
          </div>
        </div>
      </div>

      <ProductDetails
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={{ label, description, price, image }}
      />
    </>
  );
}
