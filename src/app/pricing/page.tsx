import PricingCard from "@/components/Pricing/PricingCard";
import { PricingDetails } from "@/components/Pricing/pricingTypes";
import styles from "../../components/Pricing/Pricing.module.css";

const page = () => {
  const pricingDetails: PricingDetails = [
    {
      name: "Comet Essential Pass",
      mostPopular: false,
      features: [
        {
          feature: "Atendee Kit",
          isTrue: true,
        },
        {
          feature: "All guest lectures",
          isTrue: true,
        },
        {
          feature: "All flagship events",
          isTrue: true,
        },
        {
          feature: "Movie Night",
          isTrue: true,
        },
        {
          feature: "DJ night",
          isTrue: true,
        },
        {
          feature: "Carnival Entry",
          isTrue: true,
        },
        {
          feature: "Fun Games",
          isTrue: true,
        },
        {
          feature: "Refreshment at Arrival",
          isTrue: true,
        },
        {
          feature: "Standup",
          isTrue: true,
        },
        {
          feature: "Accomodation",
          isTrue: false,
        },
        {
          feature: "6 Food Coupons",
          isTrue: false,
        },
      ],
    },
    {
      name: "Comet Standard Pass",
      mostPopular: true,
      features: [
        {
          feature: "Atendee Kit",
          isTrue: true,
        },
        {
          feature: "All guest lectures",
          isTrue: true,
        },
        {
          feature: "All flagship events",
          isTrue: true,
        },
        {
          feature: "Movie Night",
          isTrue: true,
        },
        {
          feature: "DJ night",
          isTrue: true,
        },
        {
          feature: "Carnival Entry",
          isTrue: true,
        },
        {
          feature: "Fun Games",
          isTrue: true,
        },
        {
          feature: "Refreshment at Arrival",
          isTrue: true,
        },
        {
          feature: "Standup",
          isTrue: true,
        },
        {
          feature: "Accomodation",
          isTrue: true,
        },
        {
          feature: "6 Food Coupons",
          isTrue: false,
        },
      ],
    },
    {
      name: "Comet Gold Pass",
      mostPopular: false,
      features: [
        {
          feature: "Atendee Kit",
          isTrue: true,
        },
        {
          feature: "All guest lectures",
          isTrue: true,
        },
        {
          feature: "All flagship events",
          isTrue: true,
        },
        {
          feature: "Movie Night",
          isTrue: true,
        },
        {
          feature: "DJ night",
          isTrue: true,
        },
        {
          feature: "Carnival Entry",
          isTrue: true,
        },
        {
          feature: "Fun Games",
          isTrue: true,
        },
        {
          feature: "Refreshment at Arrival",
          isTrue: true,
        },
        {
          feature: "Standup",
          isTrue: true,
        },
        {
          feature: "Accomodation",
          isTrue: true,
        },
        {
          feature: "6 Food Coupons",
          isTrue: true,
        },
      ],
    },
  ];

  return (
    <main className={styles.pricing__main}>
      <div className={styles.pricing_container}>
        <div className={styles.pricing__card__container}>
          {pricingDetails.map((elm, inx) => {
            return (
              <PricingCard
                name={elm.name}
                isPopular={elm.mostPopular}
                features={elm.features}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default page;
