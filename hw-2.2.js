// Задание 1
let c = 10;
alert(c);
c = 20;
alert(c);

// Задание 2
const yearIphone = 2007;
alert(yearIphone);

// Задание 3
const creatorJS = "Брендан Эйх";
alert(creatorJS);

// Задание 4
let d = 10;
let e = 2;
alert(d+e);
alert(d-e);
alert(d*e);
alert(d/e);

// Задание 5
let result = 2**5;
alert(result);

// Задание 6
let a = 9;
let b = 2;
alert(a % b);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num  *= 7;
num /= 3;
num ++;
num --;
alert(num);

// Задание 8
let age = prompt("Сколько вам лет?");
alert(age);

// Задание 9.0
const user = {
    name: "Виктор",
    age: 24,
    isAdmin: true
};
// Задание 9.1
user["city of residence"] = "Москва";
// Задание 9.2
user.age = 25;
// Задание 9.3
delete user["city of residence"];
// Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?")
alert(user[info]);

// // // Задание 10
const name = prompt("Как тебя зовут?");
alert(`Привет, ${name}!`);