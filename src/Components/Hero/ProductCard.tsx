import React from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../constant"; // Adjust the import path as needed

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleBuyNowClick = () => {
    navigate(`/product-details/${product.id}`);
  };

  return (
    <div className="max-w-72 mx-auto bg-white rounded-lg shadow-md overflow-hidden ">
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full rounded h-40"
        />
      </div>
      <div className="p-3">
        <h2 className="text-xl font-bold text-gray-900">{product.title}</h2>

        {/* Conditionally render description and button based on product ID */}
        {product.id >= 5 && product.id <= 8 ? (
          <button className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
            Coming Soon
          </button>
        ) : (
          <>
            <p className="mt-2 text-red-600">{product.description}</p>
            <p className="text-lg font-bold text-gray-900 mt-2">
              Price: Rs. {product.prices["1kg"]}
            </p>
            <button
              onClick={handleBuyNowClick}
              className="w-full bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Buy Now
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
