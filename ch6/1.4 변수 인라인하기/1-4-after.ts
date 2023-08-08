export function isDeliveryFree(anOrder: { basePrice: number }) {
  return anOrder.basePrice > 1000;
}
