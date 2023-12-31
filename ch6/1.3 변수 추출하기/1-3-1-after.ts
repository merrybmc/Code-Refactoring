interface Order {
  quantity: number;
  itemPrice: number;
}

export function price(order: Order) {
  const basePrice = order.quantity * itemPrice;
  const disCount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);

  return basePrice - disCount + shipping;
}
