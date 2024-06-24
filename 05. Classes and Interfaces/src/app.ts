interface Greetable {
  name: string;

  greet(phrase: string): void;
}

// We could also implement more than 1 interface (with a comma)
class Person implements Greetable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string): void {
    console.log(`${phrase}, I'm ${this.name}`);
  }
}

let user1: Greetable;

user1 = new Person("Max");

user1.greet("Ihaa");
