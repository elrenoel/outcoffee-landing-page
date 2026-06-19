import americano from "../assets/americano.jpg";
import coffeeLatte from "../assets/coffee-latte.jpg";
import matchaLatte from "../assets/iced-matcha-latte.jpg";

export const categories = [
  { id: "americano-series", name: "Americano Series" },
  { id: "coffee", name: "Coffee" },
  { id: "foreveryone-1l", name: "FOREveryone 1L" },
  { id: "fore-signature", name: "Fore Signature" },
  { id: "non-coffee", name: "Non Coffee" },
  { id: "refresher", name: "Refresher" },
];

export const menuItems = [
  // Americano Series
  {
    id: 1,
    categoryId: "americano-series",
    name: "Iced Americano",
    price: "23.000",
    description:
      "An espresso shot mixed with a glass of water, delivering an ideal balance of character, aroma, and flavor.",
    image: americano,
  },
  {
    id: 2,
    categoryId: "americano-series",
    name: "Hot Americano",
    price: "23.000",
    description:
      "An espresso shot mixed with a glass of water, delivering an ideal balance of character, aroma, and flavor.",
    image: americano,
  },
  {
    id: 3,
    categoryId: "americano-series",
    name: "Iced Manuka Americano",
    price: "29.000",
    description:
      "Americano with Manuka honey which is perfect for an energy booster.",
    image: americano,
  },

  // Coffee
  {
    id: 4,
    categoryId: "coffee",
    name: "Coffee Caramel Latte",
    price: "32.000",
    description: "Smooth espresso with creamy milk and rich caramel syrup.",
    image: coffeeLatte,
  },
  {
    id: 5,
    categoryId: "coffee",
    name: "Iced Latte",
    price: "28.000",
    description: "Simple and elegant combination of espresso and cold milk.",
    image: coffeeLatte,
  },
  {
    id: 6,
    categoryId: "coffee",
    name: "Cappuccino",
    price: "30.000",
    description:
      "Classic coffee with balanced espresso, steamed milk, and foam.",
    image: coffeeLatte,
  },

  // FOREveryone 1L
  {
    id: 7,
    categoryId: "foreveryone-1l",
    name: "Aren Latte 1L",
    price: "85.000",
    description: "Signature Aren Latte in a large 1 Liter size to share.",
    image: coffeeLatte,
  },
  {
    id: 8,
    categoryId: "foreveryone-1l",
    name: "Americano 1L",
    price: "70.000",
    description: "Refreshing Iced Americano in 1 Liter size.",
    image: americano,
  },

  // Fore Signature
  {
    id: 9,
    categoryId: "fore-signature",
    name: "Aren Latte",
    price: "32.000",
    description: "Our signature coffee with palm sugar (aren) and creamy milk.",
    image: coffeeLatte,
  },
  {
    id: 10,
    categoryId: "fore-signature",
    name: "Pandan Latte",
    price: "35.000",
    description: "Unique blend of espresso, milk, and fragrant pandan syrup.",
    image: coffeeLatte,
  },

  // Non Coffee
  {
    id: 11,
    categoryId: "non-coffee",
    name: "Iced Matcha Latte",
    price: "33.000",
    description: "Premium Japanese matcha whisked with cold milk.",
    image: matchaLatte,
  },
  {
    id: 12,
    categoryId: "non-coffee",
    name: "Chocolate",
    price: "30.000",
    description: "Smooth and rich chocolate experience.",
    image: matchaLatte, // Reusing image as placeholder
  },

  // Refresher
  {
    id: 13,
    categoryId: "refresher",
    name: "Berry Manuka",
    price: "31.000",
    description: "Refreshing berry drink with a hint of honey.",
    image: matchaLatte,
  },
  {
    id: 14,
    categoryId: "refresher",
    name: "Triple Peach Americano",
    price: "29.000",
    description: "Refreshing blend of peach and americano.",
    image: americano,
  },
];
