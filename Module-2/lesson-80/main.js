//----------------------------For---------------------------------

//Чётные с 2 по 12 с помощью for
console.log('Чётные числа с 2 по 12 с помощью for:');
for (let i = 2; i <= 12; i++) {
    if (i % 2 == 0) {
        console.log(i) 
    }
}

console.log('От 10 до 1 с помощью for:');
//От 10 до 1 с помощью for
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log('От 1 до 10 с помощью for:');
//От 1 до 10 с помощью for
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//----------------------------While---------------------------------
let i = 2;
//Чётные с 2 по 12 с помощью while
console.log('Чётные числа с 2 по 12 с помощью while:');
while (i <= 12) {
    if (i % 2 == 0) {
        console.log(i) 
    }
    i++;
}

i = 10;
console.log('От 10 до 1 с помощью while:');
//От 10 до 1 с помощью while
while (i >= 1) {
    console.log(i);
    i--
}

i = 1;
console.log('От 1 до 10 с помощью while:');
//От 1 до 10 с помощью while
while (i <= 10) {
    console.log(i);
    i++
}