// It does not need the typehas the inference already
function add(n1, n2) {
    return n1 + n2;
}
function add2(n1, n2) {
    console.log(n1 + n2);
}
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
combineValues = 5;
