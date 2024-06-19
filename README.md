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
