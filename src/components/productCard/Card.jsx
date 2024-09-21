import React from "react";
import Loader from "../Loader";
import styles from "./card.module.css";
import AddToCart from "./AddToCart";

const Card = ({ product }) => {
  if (!product || product.length === 0) {
    // Check if product is empty array
    return <Loader />; // or return null;
  }
  {
    console.log("addtocart",AddToCart);
  }
  return (
    <div className={styles.cont}>
      <div className={styles.productCard}>
        <div className={styles.productCard__image}>
          <img
            className="bg-primary"
            src={product.images[0]}
            alt={product.title}
          />
        </div>
        <div className={styles.productCard__info}>
          <h2 className={styles.productCard__title}>{product.title}</h2>
          <p className={styles.productCard__description}>
            {product.description}
          </p>
          <div className={styles.productCard__priceRow}>
            <span
              className={`styles.productCard__price text-primary font-bold`}
            >
              ${product.price}
            </span>
            <AddToCart product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
