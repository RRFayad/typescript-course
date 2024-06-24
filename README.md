# Typescript Course - Max

## Module 01 - Intro

#### 2. What Is TypeScript & Why Should You Use It?

- TS is a JS superset, which means that it's built up on JS;

- It add typing features to JS, but in the end, it will be all complied to JS;

- Why TS?
  - Its a tool that help developer to write better code, identifing error during the development process;

#### 4. Installing and Using TS

- Our problem (with JS):

  - We add 2 inputs to make a sum, and if I add 10 to 5, the result is 105 (as the values are strings);

- Using TS:

  - npm install -g typescript
  - tsc filename (in the terminal)
  - It will compile to a regular JS file

  * npm install lite-server helps us to update TS in the runtime and add "start": "lite-server" in the package.JSON

#### 5. TS Advantages

- Types!
  - Better auto completion and built in error
- next-gen JS Features (will be compiled for older Browsers)
- Non-JS features, such as Interfaces and Generics
- Meta-Programming Features like Decorators
- Rich Config Options
- Tooling fot IDEs (even in non-TS projects)

#### 6. Course Outline

- TS Basics;
- TS Compiler and Config;
- Next-gen JS;
- Classes & Interfaces;
- Advanced Types & Features;
- Generics;
- Decorators;
- Full TS Project;
- Namespaces & Modules;
- Webpack & TS;
- 3rd-Party libs and TS;
- React + TS & Node + TS

## Section 02 - TS Basics and Types

#### Basic Types

- Core Types (also suppoted for JS)

  - number, string, boolean (always lowercase)

- TS is Statically types, which means we can not change the type of a variable during the development

#### 16. Type Assignment & Type Inference

- Type Inferance: The concept that TS 'recognizes' the typw we give to a variable / constant

- We can also explicitly define the type (in this case not a good practice as TS can define by the inference):

  ```
  let number1: number = 5;
  ```

  #### 17. Object Types

  - We have the object generic type, and the specific Object Type (which have key: type pairs)

        ```
        const person: {
        name: string;
        age: number;
        } = {
        name: "Renan",
        age: 34,
        };
        ```

#### 18. Array Types

- string[]

#### 20. Tuples

- Tuples keeps the lenght (bt it lets some modifying the opriginal array with methods such as push)

```
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple
} = {
  name: "Renan",
  age: 34,
  hobbies: ["Code", "Workout"],
  role: [2, "author"],
};
```

#### 21. Working with Enums

- We can construct a enumerating map type (in the below case)

```
  enum Role {
    ADMIN, // If I asign ADMIN = 5, the next values will have started from 5 (6, 7 and so on)
    READ_ONLY,
    AUTHOR,
  }
```

#### 22. Any Type

- Its like moving back to JS, we can store anything is there, and we should avoid it

#### 23. Union Types

- If I combine types, I may have to create a logic for each type

```
  const combine = (input1: number | string, input2: number | string) => {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }
};
```

#### 24. Literal Types

- Define the literal types(values) accepted (in our case literal types + union types)

```
  const combine = (input1: number | string, input2: number | string, resultType: "as-number" | "as-text") => {}
```

#### 25. Type Aliases / Custom Types

- Type aliases or Custom type is like creating my own variables for types

  ```
    type Combinable = number | string;
    type ConversionDescriptor = "as-number" | "as-text";
  ```

#### 27. Function Return Types & "void"

```
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function add2(n1: number, n2: number): void {
  console.log(n1 + n2);
}
```

#### 28. Functions as Types

`let combineValues: (a: number, b: number) => number;`

#### 29. Function Types and Callbacks

- If I declare the callback returns void, but in the end it returns something, it will compile anyway, but, the return should not be used

```
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {    // the 'void' declares that we will not use any possible return
  const result = n1 + n2;
  cb(result);
}
```

#### 30. The "unknown" Type

- unknown type is more restrictive than any type, as it enforces checking, e.g.:

  ```
  let userName: string;
  let anyUserInput: any;
  let unknownUserInput: unknown;

  anyUserInput = "aaaa";
  anyUserInput = 2;
  userName = anyUserInput;      // The type is any, but there's no error

  unknownUserInput = "Ihaa";
  unknownUserInput = 3;

  userName = unknownUserInput; // RETURNS ERROR, as we expect a string and the type is unknown

  if (typeof unknownUserInput === "string") {
  userName = unknownUserInput;
  }
  ```

#### 31. The "never" Type

- It's a bit more precise than void, commonly used for error fuctions - This NEVER returns anyhing

  ```
  function generateError(message: string, code: number): never {
    throw { message, errorCode: code };
  }
  ```

## Section 03 - TS Compiler

#### 34. Intro

- We want to introduce a way of not compiling manually each ts file at a time

#### 35. Using "Watch Mode" & 36. Compiling the Entire Project / Multiple Files

- Create TS project and Watch mode(automatically updates)

  - tsc --init // Initialize a ts project
  - tsc -w // Watch mode for the whole project

- Optional - Watch mode for a single file (automatically updates)
  - tsc app.ts --w

#### Gerenal compile configs

- Some obs during this module:

  - When a variable value can potentially be null (such as a button from HTML code), TS will declare an error, for that we can do one of:
    1. set an ! in the variable declaration, such as `const button = document.querySelector(#button-id)!`
    2. create an if else logic to check if it's a truthy value, then...

- In tsconfig.json there are some useful project set up options, such as:

  ```
  "exclude": ["node_modules"], // this is default, is to show the exclude files from compiling exust;
  "include": ["app.ts", "other-path-here"] // We don't use this, as we have to manually set it up
  "files":[" define-file-here.ts "]
  ```

- "target": "ES2022"
  - Define the right JS version (more modern, clearer the code)
- "lib":[],
  - Some default libraries (such as DOM API modern JS APIs etc)
- "sourceMap": true
  - Interesting, and it let us see in the browser our original TS code file
- "outDir":
  - Define where the compiled files should be created
- "rootDir":
  - Define the source folder
- "downlevelIteration"
  - If someday a loop funcionality runs different from expected maybe should look at
- "noEmitOnError":

  - Stop Emitting Files on Compilation Errors

- Strict Compilation:

  - "noImplicityAny":
    - Its about our declarations of types
  - "strictNullChecks"
    - About values that might bne null (such as a button from html - TS can't recognize that)

- Code Quality Options:
  - not used vars etc

## Section 04 - Next-gen JS & TS

- Rest Params

  `function(...numbers: number[]) {}`

- Default function param
  `function (a: number = 1, b: number){}`

## Section 05 - Classes & Interfaces

### Classes

#### 60. Creating a Class & 61. Compiling to JavaScript

- Remember that Instance is an Object derived form a Class
- May be useful to know that when confinguring the TSConfig for modern JS (es6), the compiled JS will be a class, and before, will be a constructor function

#### 62. Constructor Functions & The "this" Keyword

- remember that 'this' can be remember as the 'responsable' for calling the method
  - So we can add a type check to guarantee a specific method will only be called by

#### 63. "private" and "public" Access Modifiers

- With a Class, every property or method can be categorized as:

  - Public - the dafault: Properties and method can be accesed from outside (instance.property)
  - Private: Properties can not be accessed from outside (so only other methods of e instance will manipulate that data)

  ```
  class Department {
    name: string; // As default, here name is public
    private employees: string[] = []; // Now, with private, employees can't be acessed from outside (only with instance methods)

    constructor(name: string) {
      this.name = name;
    }

    addEmployee(employee: string) {
      this.employees.push(employee);
    }

  }
  ```

  - In this case we can do `accounting.employees[2] = "Anna" `, only use the addEmployee()

#### 64. Shorthand Initialization

- Instead of:

  ```
  class Department {
    private id: string;
    name: string;

    constructor(id:string, name: string) {
      this.id = id;
      this.name = name;
    }

    // ...methods here...
  }
  ```

- We can use:

  ```
  class Department {

    constructor(private id:string, public name: string) {}

    // ...methods here...
  }
  ```

#### 65. 'readonly' Properties

- Guarantees a property's value can not be changed

```
class Department {

  constructor(private readonly id:string, public name: string) {}

  // ...methods here...
}
```

#### 66. Inheritance

- A review about inheritance, nothing different in TS perspective

```
class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}
```

#### 67. Overriding Properties & The "protected" Modifier

- Basically, protected is the same as private, but private does not let our inheritances to access the properties, while protected allows that

#### 68. Getters & Setters

- When we select a property as private or protected, TS will return us error when we try to access it.
- So, we can definer getters and setters:

```
  get mostRecentReport() {
    return this.lastReport;
  }

  set mostRecentReport(value: string) {
    this.addReport(value);
  }

  console.log(accounting.mostRecentReport);   // Note we don't use () to run
  accounting.mostRecentReport = "Any string here"   // Note we don't use () to run again
```

#### 69. Static Methods & Properties

- A static property is a property that is shared across all instances of a class, and can be accessed without creating an instance of the class.

```
class Department {
    static createEmployee(name: string) {
    return { name };
  }
}

console.log(Department.createEmployee("Renan"));    // Output: {name: 'Renan'}
```

#### 70. Abstract Classes

- A Class that can not be instantiated, but has to be extended

- So we can define abstract methods or properties
  - When I want to 'force' the developer to create a specific method or property in all instances of my class:

```
abstract class Department {
  // ... all the class logic here
    abstract describe(this: Department): void;    // There's no implementation here
}

class AccountingDepartment extends Department {
    //... all the object logic before

    describe() {      // If there is no describe() it will return an error
    console.log(`Accounting Department ID:  ${this.id}`);
    }
}
```

#### 71. Private Constructors & Singletons

- Singleton is a pattern to ensure we will have exactly one instance of a class

- So, its about making the construtor private, and creating a method that checks if there's already an instance, to return it, if not, to create a new one

```
class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;

   private constructor(id: string) {
    super(id, "Accounting");
   }

  static getInstance() {
    if (AccountingDepartment.instance) {
        return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }
}
```

### Interfaces

#### 73. A First Interface

- An interface describes the structute of an object

```
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Max",
  age: 30,
  greet(phrase) {
    console.log(phrase);
  },
};
```

#### 74. Using Interfaces with Classes

- Why interface instead of a custom type?

  - Interfaces can only be used for the structure of an object
  - Interfaces can be used in classes

- So the main difference between Interfaces and Abstract Classes is that Interfaces only defines the minimum structure of an object, without implementation (while an abstract class will have the implementation of a method or a property for example)

##### Interfaces

- **Structure Definition**: Interfaces in TypeScript define the shape of an object. They are used to specify the structure that an object must adhere to but do not provide any implementation.
- **No Implementation**: Interfaces cannot contain any implementation details such as method bodies or property initializations.
- **Multiple Inheritance**: A class can implement multiple interfaces, allowing for a form of multiple inheritance.
- **Duck Typing**: TypeScript uses structural typing, meaning an object can implement an interface implicitly if it matches the required structure.

##### Abstract Classes

- **Partial Implementation**: Abstract classes can provide some implementation details. They can contain fully implemented methods, properties, and constructor logic.
- **Abstract Methods**: Abstract classes can also have abstract methods, which are declared without an implementation. Subclasses must provide the implementation for these abstract methods.
- **Single Inheritance**: A class can extend only one abstract class (or any other class), adhering to the single inheritance model.
- **Instantiation**: Abstract classes cannot be instantiated directly. They are meant to be extended by other classes.

##### Detailed Comparison

###### Interfaces

- Define a contract that other objects or classes can implement.
- Cannot contain implementation.
- Used to achieve loose coupling by defining a set of methods and properties an object should have.

**Example:**

```
interface Animal {
  name: string;
  speak(): void;
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak(): void {
    console.log(`${this.name} says woof`);
  }
}
```

###### Abstract Classes

- Provide a base class with common functionality and the ability to enforce certain methods to be implemented by subclasses.
- Can contain both fully implemented methods and abstract methods.
- Used when you need to share code among several closely related classes while still requiring certain methods to be implemented in the derived classes.

**Example:**

```
abstract class Animal {
  constructor(public name: string) {}

  abstract speak(): void; // Must be implemented by subclasses

  move(): void {
    console.log(`${this.name} is moving`);
  }
}

class Dog extends Animal {
  speak(): void {
    console.log(`${this.name} says woof`);
  }
}
```

##### Summary

- **Interfaces:** Define what properties and methods an object should have, without any implementation. They are ideal for defining contracts and achieving polymorphism.
- **Abstract Classes:** Define both the structure and some behavior. They can provide a common base with shared functionality while forcing subclasses to implement specific methods.

#### 75. Why Interfaces?

- To force some classes to have some structure

#### 76. Readonly Interface Properties

```
interface Greetable {
  readonly name: string; // Reinforce that the name will not be changed, only initiated

  greet(phrase: string): void;
}
```

#### 77. Extending Interfaces

```
interface Named {
  readonly name: string; // Reinforce that the name will not be changed, only initiated
}

interface Greetable extends Named {
  greet(phrase: string): void;
}
```

#### 78. Interfaces as Function Types

- Using the custom type is more common, but jsut to be aware of ()it's like creating an object interface with an annonymous function:

```
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
```

#### 79. Optional Parameters & Properties

- Add a ? to make optional properties / methods, also in constructor

```
interface Named {
  readonly name: string;
  outputName?: string;
}

class Person implements Greetable {
  name?: string;

  constructor(name?: string) {
    this.name = name;
  }

  greet(phrase: string): void {
    console.log(`${phrase}, I'm ${this.name}`);
  }
}
```

#### 80. Compiling Interfaces to JavaScript

- There's nothing in JS, it's all about TS
