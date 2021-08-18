/*
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377
3rd = 2nd+1st
4th = 3rd+2nd
5th = 4th+3rd
6th = 5th+4th
7th = 6th+5th
nth = (n-1)th + (n-2)th
ith = (i-1)th + (i-2)th
*/

/* const fibo = [0, 1];
for (let i = 2; i <= 50; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo); */

function fibonacci(numbers) {
    const fibo = [0, 1];
    if (typeof numbers != 'number') {
        return "please give a number";
    }
    if (numbers < 2) {
        return 'please give a positive number';
    }
    for (let i = 2; i <= numbers; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

const fiboSeries = fibonacci(28);
console.log(fiboSeries);