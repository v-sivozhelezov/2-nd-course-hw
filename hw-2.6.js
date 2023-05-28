//задание 1
const numbers = [1, 5, 4, 10, 0, 3];

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
    if (numbers[index] === 10) break;
}

//задание 2
const numbers = [1, 5, 4, 10, 0, 3];

console.log(numbers.indexOf(4));

//задание 3
const numbers = [1, 3, 5, 10, 20];

console.log(numbers.join(' '));

// задание 4
let line = [];

for (i = 0; i < 3; i++) {
    line[i] = [];
    for (k = 0; k < 3; k++) {
        line[i][k] = 1;
    }
}

console.log(line);

// задание 5
let numbers = [1, 1, 1]

for (i = 0; i < 3; i++) {
    numbers.push(2);
}

console.log(numbers);

//задание 6
let numbers = [9, 8, 7, 'a', 6, 5];

numbers.sort().pop();
console.log(numbers);

// задание 7
const numbers = [9, 8, 7, 6, 5];
const userNumber = Number(prompt('Введите число'));

numbers.includes(userNumber) ? alert('Есть такое число') : alert('Такого числа нет');

//задание 8
const line = 'abcdef';

console.log(line.split('').reverse().join(''));

// задание 9
const arr = [[1, 2, 3,], [4, 5, 6]];
let newArr = [];
for (const line of arr) {
    for (const item of line) {
        newArr.push(item);
    }
}
console.log(newArr);

//задание 10
const arr = [1, 8, 4, 0, 7, 6, 2, 9, 5, 3];

for (i = 0; i < arr.length - 1; i++) {
    let sum = arr[i] + arr[i + 1];
    console.log(sum);
}


//задание 11
const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(item => item ** 2);
console.log(squareNumbers);

//задание 12
const getLengthWords = arrWords => arrWords.map(item => item.length);

console.log(getLengthWords(['ель', 'шишка', 'иголка', ' ', 'ель стоит в лесу', '']));

//задание 13
function filterPositive(arr) {
    const result = arr.filter(item => item < 0);
    console.log(result);
}

filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]

// задание 14
const random = [];


for (i = 0; i < 10; i++) {
    random.push(Math.floor(Math.random() * (11 - 0) + 0));
}
const parity = random.map(item => {
    if (item % 2 === 0) {
        return item;
    }
})

console.log(random);
console.log(parity);




