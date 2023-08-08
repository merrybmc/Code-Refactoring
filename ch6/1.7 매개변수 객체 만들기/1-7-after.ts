export function readingsOutsideRange(station: Stations, range: NumberRange) {
  const { min, max }: { min: number; max: number } = range;
  return station.readings.filter((r) => r.temp < min || r.temp > max);

  return station.readings.filter((r) => !range.contains(r.temp));
}

export class NumberRange {
  #min;
  #max;

  constructor(min, max) {
    this.#min = min;
    this.#max = max;
  }

  get min() {
    return this.#min;
  }

  get max() {
    return this.#max;
  }

  contains(number) {
    return number >= this.#min && number <= this.#max;
  }
}

interface Stations {
  name: string;
  readings: { temp: number; time: string }[];
}

const station: Stations = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};

// 순수 데이터 객체
const operationPlan = {
  temperatureFloor: 51,
  temperatureCeiling: 53,
};

const operationPlan2 = new NumberRange(51, 53);

readingsOutsideRange(station, operationPlan);

readingsOutsideRange(station, operationPlan2);
