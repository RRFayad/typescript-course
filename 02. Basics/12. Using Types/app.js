var add = function (n1, n2, showResult, phrase) {
    if (showResult) {
        console.log(phrase + (n1 + n2));
    }
    else {
        return n1 + n2;
    }
};
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPrhase = "Result is: ";
add(number1, number2, printResult, resultPrhase);
