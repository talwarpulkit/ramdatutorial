let numberArr = [1, 2, 3];
console.log(`initial array`, numberArr);
// we want to double the all the numbers in the array

const double = (elem) => elem * 2;

// approach 1 - output loop
let output = numberArr.map((elem) => double(elem));
console.log(`using array map`, output);
