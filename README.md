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
