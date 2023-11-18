export class Product {
  id;
  name;
  price;
  quantity;
  description;
  image;

  constructor(id, name, price, quantity, description, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
    this.image = image;
  }
}
