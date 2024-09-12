import axios from "axios";
import React, { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        console.log(response.data.products); // Log the result to the console
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
