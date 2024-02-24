import React from "react";
import { Link } from "react-router-dom";

const ProductsViewer = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-4 hover:scale-105"
        >
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="  w-full h-60 mb-4 hover:scale-105"
            />
            <p className="text-gray-600 h-24">{product.title}</p>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 text-white px-4 py-2  rounded-lg">
              Add to Cart
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 ml-10 rounded-lg">
              Add to Wishlist
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-9">
              <Link to={`/product/${product.id}`}>See Details</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsViewer;
