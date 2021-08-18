function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const ages = [26, 22, 25, 68, 45, 29, 88, 67];
const oldest = largestElement(ages);
console.log('largest ages is:', oldest);

const ages2 = [-88, -12, -55, -11, -10, -19, -9, -5, -7, -1];
const oldest2 = largestElement(ages2);
console.log('the largest ages is:', oldest2);