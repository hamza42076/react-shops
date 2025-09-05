import React from "react";

const ProductCard = ({ product }) => {
  return (
   
    <div className="w-70 p-4 border rounded-2xl shadow-md hover:shadow-lg transition duration-300 bg-white">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover rounded-xl"
      />
      <h2 className="text-lg font-bold mt-3">{product.title}</h2>
      <p className="text-gray-600 text-sm mt-1 line-clamp-2">
        {product.description}
      </p>

      <div className="flex justify-between items-center mt-3">
        <span className="text-xl font-semibold text-green-600">
          ${product.price}
        </span>
        <span className="text-yellow-500 font-medium">
          ⭐ {product.rating}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
