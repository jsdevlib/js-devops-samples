import { Order, OrderItem } from '../models';

export const getOrders = (): Array<Order> => {
  const orders = new Array<Order>();

  let order = new Order('John Doe');
  order.addItems(
    new Array<OrderItem>(
      new OrderItem(order.id, '1', 'Product 1', 1, 100),
      new OrderItem(order.id, '2', 'Product 2', 2, 200),
      new OrderItem(order.id, '3', 'Product 3', 3, 300)
    )
  );

  orders.push(order);

  order = new Order('Jane Doe 2');
  order.addItems(
    new Array<OrderItem>(
      new OrderItem(order.id, '1', 'Product 1', 1, 100),
      new OrderItem(order.id, '2', 'Product 2', 2, 200),
      new OrderItem(order.id, '3', 'Product 3', 3, 300)
    )
  );

  orders.push(order);

  return orders;
};
