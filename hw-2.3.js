//Задание 1
const password = 'qwerty';
const userPassword = prompt('Введите пароль');
alert(password == userPassword ? 'Пароль введен верно' : 'Пароль введен неверно');

// //Задание 2
const c = Number(prompt('Введите число'));
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 3
const d = Number(prompt('Введите первое число'));
const e = Number(prompt('Введите второе число'));
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 4
const a = '2';
const b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

//Задание 5
const monthNumber = Number(prompt('Введите номер месяца'));
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('Введено неверное значение');
        break;
}

// Задание 7
const number = Number(prompt('Введите любое число'));
console.log(number);
console.log(Number.isNaN(number));
if (Number.isNaN(number)) {
    alert('Введено не число');
} else if (number % 2 !== 0) {
    alert('Число нечетное');
} else {
    alert('Число четное');
}

// задание 8
const clientOC = Number(prompt('Введите "0" если ОС - iOS, "1" - Android'));
switch (clientOC) {
    case 0:
        alert('Установите версию приложения для iOS по ссылке')
        break;
    case 1:
        alert('Установите версию приложения для Android по ссылке')
        break;
    default:
        alert('Введено неверное значение');
        break;
}

// задание 9
const clientOS = Number(prompt('Введите "0" если ОС - iOS, "1" - Android'));
console.log(clientOS);
const DEVICE_YEAR = 2015;
const clientDeviceYear = Number(prompt('Введите год выпуска вашей модели устройства в формате "ГГГГ"'));
console.log(clientDeviceYear);
switch (clientOS) {
    case 0:
        alert(clientDeviceYear >= DEVICE_YEAR ? 'Установите версию приложения для iOS по ссылке' : 'Установите облегченную версию приложения для iOS по ссылке');
        break;
    case 1:
        alert(clientDeviceYear >= DEVICE_YEAR ? 'Установите версию приложения для Android по ссылке' : 'Установите облегченную версию приложения для Android по ссылке');
        break;
    default:
        alert('Введено неверное значение');
        break;
}


