

var firstFraction = 3/4;
var secondFraction = 5/7;

var fractionResult = function findBiggestFraction(firstFraction,secondFraction) {
    var result;
    a>b ? result = ["firstFraction", a] : result = ["secondFraction", b];
    return result;
};

console.log("First fraction result: ", firstFraction);
console.log("Second fraction result: ", secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest!");
