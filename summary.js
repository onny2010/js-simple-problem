/* const myNumber = -28;
const output = Math.abs(myNumber);
console.log(output);
 */

/* const mySecNum = 28.4999;
const output2 = Math.ceil(mySecNum);
const output3 = Math.floor(mySecNum);
const output4 = Math.round(mySecNum);
const output5 = Math.random() * 28;
const rounded = Math.round(output5);

console.log(output2);
console.log(output3);
console.log(output4);
console.log(output5);
console.log(rounded);
 */
const selected = [];
for (let i = 0; i < 5; i++) {
    const random = Math.random() * 50;
    const selectedRounded = Math.round(random);
    if (selected.indexOf(selectedRounded) == -1) {
        selected.push(selectedRounded);
    }
    else {
        console.log(selected, selectedRounded);
    }
}
console.log(selected);