export class Order {
  id;
  customerName;
  total;
  status;
  createdDate;
  updatedDate;
  items;

  constructor(
    id,
    customerName,
    total,
    status,
    createdDate,
    updatedDate,
    items
  ) {
    this.id = id;
    this.customerName = customerName;
    this.total = total;
    this.status = status;
    this.createdDate = createdDate;
    this.updatedDate = updatedDate;
    this.items = items;
  }
}

export class OrderItem {
  id;
  orderId;
  productId;
  productName;
  quantity;
  unitPrice;
  total;

  constructor(id, orderId, productId, productName, quantity, unitPrice, total) {
    this.id = id;
    this.orderId = orderId;
    this.productId = productId;
    this.productName = productName;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.total = total;
  }
}
