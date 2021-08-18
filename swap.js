var firstCup = 28;
var secondCup = 35;
console.log(firstCup, secondCup);

var tempoCup = firstCup;
firstCup = secondCup;
secondCup = tempoCup;
console.log(firstCup, secondCup);

// distructuring 
[firstCup, secondCup] = [secondCup, firstCup];
console.log(firstCup, secondCup);