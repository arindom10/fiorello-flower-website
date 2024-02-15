import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductsViewer from "../Reusable/ProductsViewer";

const CategoryProducts = () => {
  const categoryDetails = useLoaderData();
  console.log(categoryDetails);
  return (
    <div className="container mx-auto px-4 py-8 overflow-hidden shadow-lg transition-transform transform">
      <ProductsViewer isLoading={true} products={categoryDetails} />
    </div>
  );
};

export default CategoryProducts;
