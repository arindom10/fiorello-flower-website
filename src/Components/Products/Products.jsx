import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 overflow-hidden shadow-lg transition-transform transform ">
      <h1 className="text-2xl font-bold mb-4">Product Cart</h1>
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
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-9">
                <Link to={`/product/${product.id}`}>See Details</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
