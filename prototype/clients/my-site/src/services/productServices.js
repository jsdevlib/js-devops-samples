import { Product } from "../models";

const url = "http://localhost:3001/api";

export const getProducts = async () => {
  const response = await fetch(`${url}/products`);
  const data = await response.json();

  return data.map((product) => {
    return new Product(
      product.id,
      product.name,
      product.price,
      product.quantity,
      product.description,
      product.image
    );
  });
};
