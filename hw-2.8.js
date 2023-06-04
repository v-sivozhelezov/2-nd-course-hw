//задание 1
const people1 = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

// Допишите колбэк для sort, изучите, как работает колбэк, в документации
console.log(people1.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    // a должно быть равным b
    return 0;
}));
// код выше должен вывеcти =>
// [
//  { name: 'Олег', age: 7 },
//  { name: 'Анна', age: 17 },
//  { name: 'Глеб', age: 29 },
//  { name: 'Оксана', age: 47 }
// ]

//задание 2
function isPositive(number) {
    return number > 0;

}
function isMale(person) {
    return person.gender === 'male';
}

function filter(arr, callback) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
       if (callback(arr[i])) {
        output.push(arr[i]);
       }
     }
return output;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

//задание 3
let timerId = setInterval(() => console.log(new Date()), 1000*3);

// остановить вывод через 5 секунд
setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 1000*30);

//задание 4
function delayForSecond(callback) {
   setTimeout(callback, 1000) // Код писать можно только внутри этой функции
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

// задание 5
// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(setTimeout(() => sayHi('Глеб'), 1001))