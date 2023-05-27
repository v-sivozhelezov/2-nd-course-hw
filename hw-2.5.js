//задание 1

function findMin(a, b) {
    return (a < b) ? a : b;
}

console.log(findMin(prompt('Введите первое число'), prompt('Введите второе число')));


//задание 2

function checkParity(number) {
    return number % 2 === 0 ? 'Четное' : 'Нечетное';
}

console.log(checkParity(prompt()));


//задание 3.1

function toSquare(a) {
    console.log(a * a);
}

toSquare(Number(prompt('Введите число')));


//задание 3.2

function toSquare(a) {
    return a * a;
}

console.log(toSquare(prompt('Введите число')));


//задание 4

function checkAge(age) {
    if (age < 0) {
        alert('Вы ввели неверное значение');
    } else if (age > 18) {
        alert('Добро пожаловать!');
    } else {
        alert('Привет!');
    }
}

checkAge(prompt('Введите число'));

//задание 5

function multiplyNumbers(a, b) {
    return (isNaN(a) || isNaN(b)) ? 'Одно или оба значения не являются числом' : a * b;
}

alert(multiplyNumbers(prompt('Введите первое число'), prompt('Введите второе число')));


// задание 6 

function toCube(a) {
    return isNaN(a) ? 'Переданный параметр не является числом' : `${a} в кубе равняется ${a ** 3}`;
}

alert(toCube(prompt('Введите число')));


// задание 7 

const circle1 = {
    radius: Number(prompt(`Введите радиус первого круга`)),
    area: getArea,
    perimetr: getPerimeter
}
const circle2 = {
    radius: Number(prompt(`Введите радиус второго круга`)),
    area: getArea,
    perimetr: getPerimeter
}

function getArea() {
    return 3.14 * this.radius ** 2;
}
function getPerimeter() {
    return 2 * 3.14 * this.radius;
}

console.log(`Площадь первого круга ${circle1.area()}`);
console.log(`Длина окружности первого круга ${circle1.perimetr()}`);
console.log(`Площадь второго круга ${circle2.area()}`);
console.log(`Длина окружности второго круга ${circle2.perimetr()}`);

//задание 8
function getTimeOfYear() {
    const month = Number(prompt(`Введите номер месяца`));
    if (month >= 3 && month <= 5) {
        console.log(`Весна`);
    } else if (month >= 6 && month <= 8) {
        console.log(`Лето`);
    } else if (month >= 9 && month <= 11) {
        console.log(`Осень`);
    } else if (month === 12 || month === 1 || month === 2) {
        console.log(`Зима`);
    } else {
        console.log(`Вы ввели неверное значение`);
    }
}



