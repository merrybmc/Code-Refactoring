// 변경될 수 있는 객체를 전달하는 것은 위험
let defaultOwner = { firstName: '마틴', lastName: '파울러' };

// 불변성

export function getDefaultOwner() {
  // 💩 bad case
  // return defaultOwner;

  // ✨ good case 1
  // return Object.assign(defaultOwner);

  // ✨ good case 2
  return { ...defaultOwner };
}

interface Data {
  lastName: string;
  firstName: string;
}

class Person {
  #lastName;
  #firstName;

  constructor(data: Data) {
    this.#lastName = data.lastName;
    this.#firstName = data.firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  get firstName() {
    return this.#firstName;
  }
}
