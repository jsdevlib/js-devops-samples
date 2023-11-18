import { randomUUID } from 'crypto';

export class Order {
  id: string;
  customerName: string;
  total: number;
  status: string;
  createdDate: string;
  updatedDate: string;
  items: OrderItem[];

  constructor(customerName: string) {
    this.id = randomUUID();
    this.items = new Array<OrderItem>();
    this.customerName = customerName;
    this.total = 0;
  }

  addItems(items: OrderItem[]): void {
    items.forEach((item) => {
      this.items.push(item);
      this.total += item.total;
    });
  }
}

export class OrderItem {
  id: string;
  orderId: string;
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  total: number;

  constructor(
    orderId: string,
    productId: string,
    productName: string,
    quantity: number,
    unitPrice: number
  ) {
    this.id = randomUUID();
    this.orderId = orderId;
    this.productId = productId;
    this.productName = productName;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.total = quantity * unitPrice;
  }
}
