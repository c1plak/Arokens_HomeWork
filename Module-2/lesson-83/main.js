//1) Создайте объект с вашим описанием(имя, возраст и т.д.).
const person = {
    firstName: 'Kirill',
    lastName: 'Fyodorov',
    patronymic: 'Alexandrovich',
    age: 23,
    isAdmin: false
};

//2) Создайте метод объекта, который в качестве аргумента будет принимать имя и возвращать строку ‘Hello “переданный аргумент”’.
person.sayHello = function(name) {
    console.log('Hello', name);
}

person.sayHello('Alex');

//3) Создайте массив объектов с описанием пользователей(такой мы делали в уроке). Объявите отдельную переменную, в которой будет храниться количество простых пользователей, начальное значение будет - 0. Обойдите массив пользователей и если пользователь не является админом - прибавьте к ранее созданной переменной единицу. После окончания работы цикла выведите в консоль переменную с количеством простых пользователей.
let userCounter;
let users = [
    {
        firstName: 'Ann',
        lastName: 'LastAnn',
        patronymic: 'PatroAnn',
        isAdmin: true
    },
    {
        firstName: 'Ben',
        lastName: 'LastBen',
        patronymic: 'PatroBen',
        isAdmin: false
    },
    {
        firstName: 'Emmy',
        lastName: 'LastEmm',
        patronymic: 'PatroEmm',
        isAdmin: true
    },
    {
        firstName: 'Test',
        lastName: 'LastEmm',
        patronymic: 'PatroEmm',
        isAdmin: false
    },
    {
        firstName: 'Test2',
        lastName: 'LastEmm',
        patronymic: 'PatroEmm',
        isAdmin: false
    }
]

function countUsers(array) {
    userCounter = 0
    for (i = 0; i < array.length; i++) {
        if (array[i].isAdmin === false) {
            userCounter++;
        }
    }
    return userCounter
}

countResult = countUsers(users);
console.log("Пользователей без прав администратора:", countResult);