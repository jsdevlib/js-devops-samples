import { randomUUID } from 'crypto';

export class Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  image: string;

  constructor(
    name: string,
    price: number,
    quantity: number,
    description: string
  ) {
    this.id = randomUUID();
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
    this.image = '';
  }
}
