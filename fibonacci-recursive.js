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

function fiboRecursive(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fiboRecursive(n - 1) + fiboRecursive(n - 2);
}

const fiboElement = fiboRecursive(8);
console.log(fiboElement);


// fibonacchi recursive series
function fiboSeries(n) {
    if (n == 0) {
        return [0];
    }
    if (n == 1) {
        return [0, 1];
    }
    const fibo = fiboSeries(n - 1);
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;
}
const fibonacciSeries = fiboSeries(28);
console.log('the fibonachi series is:', fibonacciSeries);