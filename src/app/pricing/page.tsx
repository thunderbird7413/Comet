"use client";
import PricingCard from "@/components/Pricing/PricingCard";
import { PricingDetails } from "@/components/Pricing/PricingTypes";
import styles from "../../components/Pricing/Pricing.module.css";
import Navbar from "@/components/Navbar";

const page = () => {
  const pricingDetails: PricingDetails = [
    {
      name: "Comet Essential Pass",
      mostPopular: false,
      link: "https://forms.easebuzz.in/sign-up/COMETewXAZ/comet_essential_paymentlink/?inst_name=COMETewXAZ&form_name=comet_essential_paymentlink&jsonData=1",
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
      name: "Comet Gold Pass",
      mostPopular: true,
      link: "https://forms.easebuzz.in/register/COMETewXAZ/comet_2026_paymentlink",
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
    {
      name: "Comet Standard Pass",
      mostPopular: true,
      link: "https://forms.easebuzz.in/register/COMETewXAZ/comet_standard_paymentlink",
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
    }
  ];

  return (
    <main className={styles.pricing__main}>
      <Navbar />
      <div className={styles.pricing_container}>
        <div className={styles.pricing__card__container}>
          {pricingDetails.map((elm, indx) => {
            return (
              <PricingCard
                key={indx}
                name={elm.name}
                isPopular={elm.mostPopular}
                features={elm.features}
                link={elm.link}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default page;
