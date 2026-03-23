export type PricingDetails = {
  name: string;
  mostPopular: boolean;
  link: string;
  features: {
    feature: string;
    isTrue: boolean;
  }[];
}[];
