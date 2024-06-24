interface Named {
  readonly name: string; // Reinforce that the name will not be changed, only initiated
}

interface Greetable extends Named {
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
