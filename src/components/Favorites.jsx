import React, { useEffect, useState } from "react";
import Title from "./Title";
import Products from "../api/products.json";
import ProductItem from "../ui/ProductItem";

function Favorites() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div>
      <h3 className="font-semibold text-sm my-5">Favoriler</h3>
      <div className="overflow-hidden rounded-lg grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-0.1">
        {products &&
          products.map((product) => <ProductItem product={product} />)}
      </div>
    </div>
  );
}

export default Favorites;
