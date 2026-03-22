import React from "react";
import { PricingDetails } from "./pricingTypes";
import styles from "./Pricing.module.css";

const PricingCard = ({
  name,
  isPopular,
  features,
}: {
  name: string;
  isPopular: boolean;
  features: {
    feature: string;
    isTrue: boolean;
  }[];
}) => {
  return (
    <div className={styles.pricing__wrapper} key={name}>
      <h3 className={styles.pricing_heading}>{name}</h3>
      <button className={styles.pricing_button}>Book Now</button>
      <div>
        {features.map((element, index) => {
          return (
            <div key={index} className={styles.feature__wrapper}>
              <span>{element.isTrue ? "✅" : "❌"}</span>
              <span className={styles.feature__text}>{element.feature}</span>
            </div>
          );
        })}
      </div>
      {isPopular && <span className={styles.popular__bagde}>Most Popular</span>}
    </div>
  );
};

export default PricingCard;
