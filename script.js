// ! 1. [mangoe, orange, apple] add the word S to end of each string.

const fruits = ["mangoe", "orange", "apple"];
console.log("add the word S to end of each string");

//Normal function:-
function plural(element) {
  return element + "s";
}
const result1 = fruits.map(plural);
console.log(result1);

//Normal function method 2:-
const result2 = fruits.map(function plural1(element) {
  return element + "s";
});
console.log(result2);

//Anonymous function method 3:-
const result3 = fruits.map(function (ele) {
  return ele + "s";
});
console.log(result3);

//Arrow function method 4:-
const result4 = fruits.map((item) => {
  return item + "s";
});
console.log(result4);

//Arrow function method 5:-
const result5 = fruits.map((ele) => ele + "s");
console.log(result5);

// ! 2. [10,11,12,89,35,156,199,25,32,87] Find the numbers which are greater than 80 from given array.
const numbers = [10, 11, 12, 89, 35, 156, 199, 25, 32, 87];
console.log("greater than 80 from given array");
// Without Filter
let resultArr = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 80) {
    resultArr.push(numbers[i]);
  }
}
console.log(resultArr);

//Normal function:-
function greater(element) {
  return element > 80;
}
const resultArr1 = numbers.filter(greater);
console.log(resultArr1);

//Normal function method 2:-
const resultArr2 = numbers.filter(function greater1(element) {
  return element > 80;
});
console.log(resultArr2);

//Anonymous function method 3:-
const resultArr3 = numbers.filter(function (ele) {
  return ele > 80;
});
console.log(resultArr3);

//Arrow function method 4:-
const resultArr4 = numbers.filter((item) => {
  return item > 80;
});
console.log(resultArr4);

//Arrow function method 5:-
const resultArr5 = numbers.filter((ele) => ele > 80);
console.log(resultArr5);

// ! 3. [10,12,15,16,8,11] Find the largest/ greates number in an array.
const numbers2 = [10, 12, 15, 16, 8, 11];
console.log("Find the largest/ greates number in an array");

// Without
let great = numbers2[0];
for (let i = 0; i < numbers.length; i++) {
  if (great < numbers2[i]) {
    great = numbers2[i];
  }
}
console.log(great);

//  with reduce
let great1 = numbers2.reduce(
  (great, cv) => (great < cv ? cv : great),
  numbers2[0]
);
console.log(great1);

// Normal Function
function findGreatest(acc, element) {
  return acc > element ? acc : element;
}
const great2 = numbers2.reduce((acc, element) => findGreatest(acc, element));
console.log(great2);
