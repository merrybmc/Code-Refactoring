export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }

  addReservation(customer: { id: number }, isPriority = false) {
    this.#reservations.push(customer);
  }

  hasReservation(customer: { id: number }) {
    return this.#reservations.some((reservedCustomer) => reservedCustomer.id === customer.id);
  }
}
