//задание 1
for (i = 1; i <= 2; i++) {
    console.log('Привет!');
}

//задание 2
for (i = 1; i <=5; i++) {
    console.log(i);
}

//задание 3
for (i = 7; i <=22; i++) {
    console.log(i);
}

//задание 4
const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
};
for (let salary in obj) {
    console.log(`${salary} - зарплата ${obj[salary]} долларов.`);
}

//задание 5
let num = 0;
let n = 1000
for (; n >= 50; n /= 2) {
    num++;
}
console.log('Результат деления ' + n);
console.log('Количество итераций ' + num);

//задание 6
let firstFriday = Number(prompt('На какое число выпадает первая пятница месяца?'));
for (; firstFriday <= 31; firstFriday += 7) {
    console.log(`Сегодня пятница, ${firstFriday}-е число. Необходимо подготовить отчет.`);
}




