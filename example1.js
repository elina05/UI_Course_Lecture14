let firstArray = [1, 2, 3, 4, 5];
let secondArray = [6, 7, 8, 9, 0];

let sumFirst = firstArray.reduce((sum, current) => sum + current, 0);
let sumSecond = secondArray.reduce((sum, current) => sum + current, 0);

alert (sumFirst + sumSecond);
