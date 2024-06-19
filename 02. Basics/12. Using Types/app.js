var combine = function (input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
};
var combinedAges = combine(30, 26);
console.log(combinedAges);
var combinedNames = combine("Renan", "Fayad");
console.log(combinedNames);
