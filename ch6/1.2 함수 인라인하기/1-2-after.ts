// 함수 인라인

interface ReportLines {
  names: String;
  location: string;
}

interface Driver {
  numberOfLateDeliveries: number;
}

// 예제 1
function rating(driver: Driver): number {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
function reportLines(customer: ReportLines): ReportLines {
  const result: reportLines = [];
  result.push[('name', customer.name)];
  result.push[('location', customer.location)];
  return result;
}
