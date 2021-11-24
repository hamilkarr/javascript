class Person {
  constructor(age, name) {
    this.name = name;
    this.age = age;
    Person.count = Person.count || 0;
    ++Person.count; // 정적변수
  }
  print() {
    console.log(this.age, this.name);
  }
  static getCount() {
    return Person.count;
  }
}

class A {
  constructor() {
    this.a = 1;
    this.b = 2;
  }
}

class B extends A {}
