
// const numbers = [16, 45, 65, 55, 84, 52, 94, 38];
// for (let i = 0; i < numbers.length; i++) {
//     const elements = numbers[i];
//     console.log(elements);
// }

const numbers = [16, 45, 65, 55, 84, 52, 94, 38];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const elements = numbers[i];
    sum = sum + elements;
}
console.log('the sum is:', sum)


// with function
function arraySum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const elements = numbers[i];
        sum = sum + elements;
    }
    return sum;
}
const total = arraySum(numbers);
console.log('the total is:', total);

// multiplication with function
function arrayMultiplication(numbers) {
    let mul = 1;
    for (let i = 0; i < numbers.length; i++) {
        const elements = numbers[i];
        mul = mul * elements;
    }
    return mul;
}
const multiplication = arrayMultiplication(numbers);
console.log('the total is:', multiplication);