// 함수 추출하기
interface Invoice {
  orders: { amount: number }[];
  customer: string;
  dueDate?: Date;
}

function printOwing(invoice: Invoice) {
  printBanner();

  let outstanding: number = calculateOutstanding(invoice);

  recordDueDate(invoice);

  printDetails(invoice, outstanding);
}

function printBanner() {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

function calculateOutstanding(invoice: Invoice) {
  return invoice.orders.reduce((sum, order) => (sum += order.amount), 0);
}

function recordDueDate(invoice: Invoice) {
  const today = new Date();

  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetails(invoice: Invoice, outstanding: number): void {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);

  if (invoice.dueDate) {
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
  }
}

const invoice: Invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '병민',
};

printOwing(invoice);
