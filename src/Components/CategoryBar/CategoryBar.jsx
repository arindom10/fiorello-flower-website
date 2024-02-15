import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="gap-72">
      {categories.map((category, index) => (
        <Link to={`/category/${category}`} key={index}>
          {category}
        </Link>
      ))}
    </div>
  );
};

export default CategoryBar;
