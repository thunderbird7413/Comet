import React from "react";
import { PricingDetails } from "./PricingTypes";
import styles from "./Pricing.module.css";
import Link from "next/link";

const PricingCard = ({
  name,
  isPopular,
  link,
  features,
}: {
  name: string;
  isPopular: boolean;
  link: string;
  features: {
    feature: string;
    isTrue: boolean;
  }[];
}) => {
  return (
    <div className={styles.pricing__wrapper} key={name}>
      <h3 className={styles.pricing_heading}>{name}</h3>
      <Link href={link} target="_blank">
        <button className={styles.pricing_button}>Book Now</button>
      </Link>
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
      {isPopular && <span className={styles.popular__bagde}>Early Bird Offer</span>}
    </div>
  );
};

export default PricingCard;