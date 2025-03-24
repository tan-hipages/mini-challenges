/**
 * Challenge: Efficient Array Manipulation
 *
 * Problem:
 * You are given an array of products, each with an ID, name, and price.
 * Implement functions to:
 * 1. Filter products below a certain price threshold
 * 2. Find the most expensive product
 * 3. Calculate the average price
 * 4. Group products by price range (0-50, 51-100, 101+)
 *
 * Your implementation should be efficient and use modern TypeScript features.
 *
 * Time: 15 minutes
 */

// Example data
type Product = {
  id: number;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: 1, name: "Basic Widget", price: 29.99 },
  { id: 2, name: "Premium Widget", price: 59.99 },
  { id: 3, name: "Deluxe Widget", price: 99.99 },
  { id: 4, name: "Super Widget", price: 149.99 },
  { id: 5, name: "Ultra Widget", price: 199.99 },
  // More products can be added for testing
];

// TODO: Implement the following functions
// 1. Filter products below a price threshold
function filterProductsBelowPrice(
  products: Product[],
  threshold: number
): Product[] {
  // Your code here
}

// 2. Find the most expensive product
function findMostExpensiveProduct(products: Product[]): Product {
  // Your code here
}

// 3. Calculate the average price
function calculateAveragePrice(products: Product[]): number {
  // Your code here
}

// 4. Group products by price range
function groupProductsByPriceRange(products: Product[]): {
  "0-50": Product[];
  "51-100": Product[];
  "101+": Product[];
} {
  // Your code here
}

// Test your functions
console.log("Products below $100:", filterProductsBelowPrice(products, 100));
console.log("Most expensive product:", findMostExpensiveProduct(products));
console.log("Average price:", calculateAveragePrice(products));
console.log("Products by price range:", groupProductsByPriceRange(products));
