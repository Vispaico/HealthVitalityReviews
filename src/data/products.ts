export interface Product {
  id: string;
  name: string;
  image: string;
  snippet: string;
  benefit: string;
  rating: number;
  price: string;
}

export const products: Product[] = [
  {
    id: 'product1',
    name: "Emperor's Vigor Tonic",
    image: 'https://d64gsuwffb70l.cloudfront.net/68abed73aa0bb892dd2fc10b_1756097954330_c094591b.webp',
    snippet: "Struggling with low energy? I tried Emperor's Vigor Tonic for 30 days—here's how it boosted my stamina and vitality!",
    benefit: "Natural energy boost",
    rating: 4.8,
    price: "$69"
  },
  {
    id: 'product2',
    name: "Aizen Power",
    image: 'https://d64gsuwffb70l.cloudfront.net/68abed73aa0bb892dd2fc10b_1756097957242_06f9d1e8.webp',
    snippet: "Looking for enhanced performance? My honest 30-day review of Aizen Power reveals surprising results you need to know.",
    benefit: "Performance enhancement",
    rating: 4.7,
    price: "$79"
  },
  {
    id: 'product3',
    name: "SightCare",
    image: 'https://d64gsuwffb70l.cloudfront.net/68abed73aa0bb892dd2fc10b_1756097960812_e6260546.webp',
    snippet: "Concerned about eye health? I tested SightCare for vision support—here's what happened to my clarity and focus.",
    benefit: "Eye health support",
    rating: 4.6,
    price: "$59"
  },
  {
    id: 'product4',
    name: "Lean Bliss",
    image: 'https://d64gsuwffb70l.cloudfront.net/68abed73aa0bb892dd2fc10b_1756097964003_b5bb7ed1.webp',
    snippet: "Struggling with weight management? My comprehensive Lean Bliss review shows real results after 6 weeks of testing.",
    benefit: "Weight management",
    rating: 4.5,
    price: "$49"
  },
  {
    id: 'product5',
    name: "Cortexi",
    image: 'https://d64gsuwffb70l.cloudfront.net/68abed73aa0bb892dd2fc10b_1756097967300_b63fb5c9.webp',
    snippet: "Hearing issues affecting your life? I spent 30 days with Cortexi—discover how it supports auditory health naturally.",
    benefit: "Hearing support",
    rating: 4.4,
    price: "$69"
  }
];