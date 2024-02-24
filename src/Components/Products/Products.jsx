import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductsViewer from "../Reusable/ProductsViewer";
import CategoryBar from "../CategoryBar/CategoryBar";

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
    <div className=" mx-auto px-4 py-8 overflow-hidden shadow-lg transition-transform transform flex">
      <div className="mr-8">
        <CategoryBar />
      </div>

      <div className="container flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Product Cart</h1>
        <div>
          <ProductsViewer products={products} />
        </div>
      </div>
    </div>
  );
}

export default Products;
