import React from "react";
import { useLoaderData } from "react-router-dom";

const Product = () => {
  const productDetails = useLoaderData();
  console.log(productDetails);
  return (
    <div className="container mx-auto mt-10">
      <div className="  bg-white shadow-md rounded-lg p-4 flex hover:scale-105">
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={productDetails.image}
            alt={productDetails.name}
            className="w-60 h-auto hover:scale-105 "
          />
        </div>
        <div className="flex flex-col justify-between ml-4 w-1/2">
          <div>
            <h2 className="text-xl font-bold mb-2">{productDetails.title}</h2>
            <p className="text-gray-600">{productDetails.description}</p>
            <h2 className="text-2xl font-bold mt-10">
              Price: {productDetails.price}$
            </h2>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 w-40 ">
              Add to Cart
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 w-40 ">
              Add Wishlist
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 w-40 ">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
