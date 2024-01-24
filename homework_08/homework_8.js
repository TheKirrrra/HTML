
let names = ["Семен", "Иван", "Петр", "Татьяна"];

let ages = [18, 27, 74, 34];

let resultArray = [];

for (let i = 0; i < names.length; i++) {
    let message = names[i] + " " + ages[i] + " лет/годов";
    resultArray.push(message);
}

console.log(resultArray);

let reversedArray = [];
for (let j = resultArray.length - 1; j >= 0; j--) {
    reversedArray.push(resultArray[j]);
}

// Вывод результата
console.log(reversedArray);