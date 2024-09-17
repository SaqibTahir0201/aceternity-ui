import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../components/productCard/Card";
import Loader from "../components/Loader";

function Products() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products") // Add the .get() method
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
        console.log(response);
        console.log(response.data.products); // Log the result to the console
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, []);
  return (
    <>
      {loading ? (
        <Loader /> // Render the Loader component when loading is true
      ) : (
        products.map((product) => <Card key={product.id} product={product} />)
      )}
    </>
  );
}

export default Products;
