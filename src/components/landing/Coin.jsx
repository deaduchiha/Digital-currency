import React from "react";

// Style
import styles from "./Coin.module.css";

const Coin = ({ name, image, symbol, price, marketCap, priceChange }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt={name} />
      <span className={styles.name}>{name}</span>
      <span className={styles.symbol}>{symbol.toUpperCase()}</span>
      <span className={styles.currentPrice}>{price.toLocaleString()} $</span>
      <span className={priceChange > 0 ? styles.greenPrice : styles.redPrice}>
        {priceChange.toFixed(2)}
      </span>
      <span className={styles.marketCap}>{priceChange.toLocaleString()} $</span>
    </div>
  );
};

export default Coin;
