interface ARecord {
  quantity: number;
  itemPrice: number;
}

export class Order {
  #data: ARecord;
  constructor(aRecord: ARecord) {
    this.#data = aRecord;
  }

  get quantity() {
    return this.#data.quantity;
  }

  get itemPrice() {
    return this.#data.itemPrice;
  }

  get basePrice() {
    return this.quantity * this.itemPrice;
  }

  get discount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }

  get shipping() {
    return (shipping = Math.min(this.quantity * this.itemPrice * 0.1, 100));
  }

  get price() {
    return this.basePrice - this.disCount + this.shipping;
  }
}
