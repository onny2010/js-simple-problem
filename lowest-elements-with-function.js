function lowestElement(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}

const ages = [45, 55, 17, 20, 30, 35, 15];
const smallest = lowestElement(ages);
console.log('the smallest ages is:', smallest);

const ages2 = [-15, -9, -18, -25, -8, -20];
const smallest2 = lowestElement(ages2);
console.log('the smallest ages is:', smallest2);