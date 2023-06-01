//задание 1
const word = 'js';

console.log(word.toUpperCase());


// задание 2
function searchStart(words, startWord) {
    words.forEach((word) => {
        if (word.toLowerCase().startsWith(startWord.toLowerCase())) {
            console.log(word);
        }
    });
}

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []


//задание 3
console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));


//задание 4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));


// задание 5
console.log(Math.round(Math.random() * 10));


//задание 6
const getNumbers = max => {
    let numbers = [];
    for (i = 0; i < Math.ceil(max / 2); i++) {
        numbers.push(Math.round(Math.random() * max));
    }
    return numbers;
}

console.log(getNumbers(100));


//задание 7
function getNumbers(min, max) {
    let numbers = [];
    numbers.push(Math.round(Math.random() * (max - min)) + min);
    return numbers;
}

console.log(getNumbers(5, 10));

//задание 8
console.log(new Date());

// задание 9
const curentDate = new Date();
const futureDate = new Date(curentDate.setDate(curentDate.getDate() + 73));

console.log(futureDate);

// //задание 10
function getDate(userDate) {
    const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    let hour = userDate.getHours();
    let minute = userDate.getMinutes();
    let second = userDate.getSeconds();

    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;


    const FullDate = {
        'Дата': [userDate.getDate(), userDate.getMonth(), userDate.getFullYear()],
        'Время': [second, minute, second]
    };


    let calendarDate = "Дата: " + userDate.getDate() + " " + months[userDate.getMonth()] + " " + userDate.getFullYear() + " г." + " - это " + days[userDate.getDay()];
    let time = "Время: " + hour + ":" + minute + ":" + second;

    return [calendarDate, time];
}

console.log(getDate(new Date(2025, 2, 25, 2, 10, 20)));

//задание 11
function memorizeWords() {
    const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    const randomWords = (words.sort(() => Math.random() - 0.5));

    console.log(randomWords);

    alert(randomWords.join(' '));

    const firstUserAnswer = prompt('Какое слово было первым?');
    const secondUserAnswer = prompt('Какой слово было последним?');

    console.log(firstUserAnswer.toLowerCase());
    console.log(secondUserAnswer.toLowerCase());


    if (firstUserAnswer.toLowerCase() === (randomWords[0]).toLowerCase() && secondUserAnswer.toLowerCase() === (randomWords[randomWords.length - 1]).toLowerCase()) {
        alert('Поздравляем! Вы угалали оба ответа');
    } else if (firstUserAnswer.toLowerCase() === (randomWords[0]).toLowerCase() || secondUserAnswer.toLowerCase() === (randomWords[randomWords.length - 1]).toLowerCase()) {
        alert('Вы были близки к победе!');
    } else alert('К сожалению, Вы проиграли(((');
}







