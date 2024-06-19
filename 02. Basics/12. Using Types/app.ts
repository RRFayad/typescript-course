// const person: {    // Comented as there the Inference already
//   name: string;
//   age: number;
// } = {
//   name: "Renan",
//   age: 34,
// };

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple
// } = {
//   name: "Renan",
//   age: 34,
//   hobbies: ["Code", "Workout"],
//   role: [2, "author"],
// };

// // let favoriteActivities: any[]; // avoid the any type
// let favoriteActivities: string[];

// favoriteActivities = ["Sports"];

// console.log(person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase()); // TS gives us type autocompletion methods - Here it knows each hobby is a string
//   // console.log(hobby.map()); // In the same logic, here it gives us an error
// }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN, // If I asign ADMIN = 5, the next values will have started from 5 (6, 7 and so on)
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Renan",
  age: 34,
  hobbies: ["Code", "Workout"],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("Role.ADMIN:", Role.ADMIN);
}
