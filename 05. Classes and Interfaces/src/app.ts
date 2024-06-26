// Interfaces with Objects and Classes

interface Named {
  readonly name?: string; // Reinforce that the name will not be changed, only initiated
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

// We could also implement more than 1 interface (with a comma)
class Person implements Greetable {
  name?: string;

  constructor(name?: string) {
    this.name = name;
  }

  greet(phrase: string): void {
    console.log(`${phrase}, I'm ${this.name}`);
  }
}

let user1: Greetable;

user1 = new Person("Max");

user1.greet("Ihaa");

/* We can create Function Types as Interfaces*/

// Our Regular Function Type
type AddFnType = (a: number, b: number) => number;
let add1: AddFnType;

add1 = (n1: number, n2: number) => n1 + n2;

// Implementing Interfaces
interface AddFn {
  (a: number, b: number): number;
}

let add2: AddFn;
add2 = (n1: number, n2: number) => n1 + n2;
