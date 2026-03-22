export type PricingDetails = {
  name: string;
  mostPopular: boolean;
  features: {
    feature: string;
    isTrue: boolean;
  }[];
}[];
