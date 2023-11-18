import { Product } from '../models';

export const getProducts: Product[] = new Array(10).fill(0).map((_, index) => {
  return new Product(
    `Product ${index}`,
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    `Description ${index}`
  );
});
