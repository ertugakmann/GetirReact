import React, { useEffect } from "react";
import { useState } from "react";
import CategoryData from "../api/categories.json";
import Category from "../ui/Category";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(CategoryData);
  }, []);

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <h3 className="text-sm font-semibold mb-3">Categories</h3>
        <div className="grid grid-cols-10">
          {categories &&
            categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
