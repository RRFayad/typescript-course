// const person: {    // Comented as there the Inference already
//   name: string;
//   age: number;
// } = {
//   name: "Renan",
//   age: 34,
// };
var person = {
    name: "Renan",
    age: 34,
    hobbies: ["Code", "Workout"],
};
// let favoriteActivities: any[]; // avoid the any type
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
