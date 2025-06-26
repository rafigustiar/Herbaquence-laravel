export interface SizePrice {
  size: string;
  price: number;
  originalPrice: number;
}

export interface Product {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  sizes: SizePrice[];
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Mint Fresh",
    rating: 4.9,
    reviews: 254,
    sizes: [
      { size: "Can", price: 9000, originalPrice: 12000 },
      { size: "250ml", price: 9000, originalPrice: 12000 },
      { size: "500ml", price: 15000, originalPrice: 18000 },
    ],
    image:
      "https://cdn.builder.io/api/v1/assets/420a2dccf542446cabbce903b3e093cd/mint-496255?format=webp&width=800",
    description:
      "Refreshing mint-infused water that energizes your day with natural mint essence and pure spring water.",
  },
  {
    id: 2,
    name: "Infused Water Mint Flavour",
    rating: 4.9,
    reviews: 181,
    sizes: [
      { size: "Can", price: 9000, originalPrice: 12000 },
      { size: "250ml", price: 9000, originalPrice: 12000 },
      { size: "500ml", price: 15000, originalPrice: 18000 },
    ],
    image:
      "https://cdn.builder.io/api/v1/assets/420a2dccf542446cabbce903b3e093cd/infused-water-lime-690af8?format=webp&width=800",
    description:
      "Premium mint-flavored infused water crafted with organic mint leaves for a crisp, clean taste.",
  },
  {
    id: 3,
    name: "Infused Water Strawberry Lemon Flavour",
    rating: 4.7,
    reviews: 374,
    sizes: [
      { size: "Can", price: 9000, originalPrice: 12000 },
      { size: "250ml", price: 9000, originalPrice: 12000 },
      { size: "500ml", price: 15000, originalPrice: 18000 },
    ],
    image:
      "https://cdn.builder.io/api/v1/assets/420a2dccf542446cabbce903b3e093cd/strawberry-622aca?format=webp&width=800",
    description:
      "Delightful combination of sweet strawberries and zesty lemon in pure infused water for the perfect balance.",
  },
];

export const packages = [
  { id: 1, name: "1 Pack", bottles: 1, price: 9000, originalPrice: 12000 },
  { id: 2, name: "2 Pack", bottles: 2, price: 16000, originalPrice: 24000 },
  { id: 4, name: "4 Pack", bottles: 4, price: 28000, originalPrice: 48000 },
];
