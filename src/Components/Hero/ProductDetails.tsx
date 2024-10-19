// ProductDetails.tsx

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { cardItems } from "../../constant";
import ReviewSection from "./Review";

type SizeType = "500gm" | "1kg" | "2kg" | "3kg";

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = cardItems.find((item) => item.id.toString() === productId);
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState<SizeType | null>(null);

  if (!product) return <div>Product not found!</div>;

  const handleOrderNowClick = () => {
    if (!selectedSize) {
      alert("Please select a size before ordering.");
      return;
    }
    const selectedPrice = product.prices[selectedSize];
    navigate("/order-form", {
      state: { product, size: selectedSize, price: selectedPrice },
    });
  };

  const getPriceForSelectedSize = () => {
    if (!selectedSize) return product.prices["1kg"]; // Default price
    return product.prices[selectedSize];
  };

  return (
    <div>
      <div className="container mx-auto p-4  h-full flex justify-center align-middle">
        <div className="max-w-full mx-auto lg:flex bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            className="w-full rounded-lg"
            src={product.imageUrl}
            alt={product.title}
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-gray-700 text-2xl">
              Price: {getPriceForSelectedSize()} Rs
            </p>
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Select Size:</h3>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-4 rounded border ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-white text-gray-700 border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={handleOrderNowClick}
              className="bg-black font-bold text-white py-2 px-4 rounded hover:bg-gray-700"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
      <ReviewSection />
    </div>
  );
};

export default ProductDetails;
