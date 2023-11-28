//1) Создайте функцию, которая в качестве аргумента будет принимать имя, а возвращать строчку ‘Hello “аргумент функции”’.
console.log('1) Создайте функцию, которая в качестве аргумента будет принимать имя, а возвращать строчку ‘Hello “аргумент функции”’.');
function greetings(name) {
    console.log(`Hello, ${name}`);
}

greetings('Daniel');

// ------------------
//2) Создайте массив чисел, далее создайте функцию, которая будет принимать в качестве аргумента массив чисел. Функция должна перебирать полученный массив и если число больше 10 - выводить это число в консоль.
console.log('2) Создайте массив чисел, далее создайте функцию, которая будет принимать в качестве аргумента массив чисел. Функция должна перебирать полученный массив и если число больше 10 - выводить это число в консоль.');
const numbers = [20, 1, 3, 5, 30, 225, 1000, 12];

function greaterThanTen(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i]);
        }
    }
}

greaterThanTen(numbers);

// ------------------
//3) Предлагаю вам реализовать простенький калькулятор. Создайте функцию, которая будет принимать три аргумента, два числа и строку для выбора оператора. При вызове функции пользователь передает, например, (2, 3, ‘minus’), внутри функции происходит проверка на знак и в данном случае функция должна вернуть -1. То есть мы получаем разницу между первым и вторым аргументом. Запишите результат выполнения функции в переменную и выведите в консоль. Подобным образом реализуйте 4 математические операции: сложение, вычитание, умножение и деление.
console.log('3) Предлагаю вам реализовать простенький калькулятор. Создайте функцию, которая будет принимать три аргумента, два числа и строку для выбора оператора. При вызове функции пользователь передает, например, (2, 3, ‘minus’), внутри функции происходит проверка на знак и в данном случае функция должна вернуть -1. То есть мы получаем разницу между первым и вторым аргументом. Запишите результат выполнения функции в переменную и выведите в консоль. Подобным образом реализуйте 4 математические операции: сложение, вычитание, умножение и деление.');

let additionalInfo;
let plusResult;
let minusResult;
let divisionResult;
let multiplicationResult;
let wrongOperation;

function calculate(a, b, operation) {
    if (operation === 'plus') {
        additionalInfo = `Результат сложения ${a} + ${b} =`; 
        return a + b
    } else if (operation === 'minus') {
        additionalInfo = `Результат вычитания ${a} - ${b} =`;
        return a - b
    } else if (operation === 'division') {
        additionalInfo = `Результат деления ${a} / ${b} =`;
        return a / b
    } else if (operation === 'multiplication') {
        additionalInfo = `Результат умножения ${a} * ${b} =`;
        return a * b
    } else {
        additionalInfo = 'Данная операция не поддерживается.\nДоступные операции: "plus", "minus", "division", "multiplication".';
    }
}

plusResult = calculate(5, 1, 'plus');
console.log(additionalInfo, plusResult);

minusResult = calculate(5, 1, 'minus');
console.log(additionalInfo, minusResult);

divisionResult = calculate(6, 3, 'division');
console.log(additionalInfo, divisionResult);

multiplicationResult = calculate(6, 3, 'multiplication');
console.log(additionalInfo, multiplicationResult);

wrongOperation = calculate(6, 3, 'afada');
console.log(additionalInfo);