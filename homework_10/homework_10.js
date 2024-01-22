                    //Task01

const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

const newCarsArray = cars.map(car => ({
    brand: car.brand,
    isDiesel: car.isDiesel,
}));

console.log(newCarsArray);

                    //Task02
const dieselCars = cars.filter(car => car.isDiesel);

console.log(dieselCars);

                    //Task03

const notDieselCars = cars.filter(car => !car.isDiesel);

console.log(notDieselCars);

                    //Task04

const totalNotDieselCarsPrice = notDieselCars.reduce((total, car) => total + car.price, 0);

console.log("Сумма стоимости всех не дизельных машин: " + totalNotDieselCarsPrice);

                    //Task05

const carsTeuer = cars.map(car => ({
    ...car,
    price: car.price * 1.2, 
}));

console.log(carsTeuer);

                    //Task06

const carsWithTesla = cars.map(car => (
    car.isDiesel ? { brand: "Tesla", price: 25000, isDiesel: false } : car
));

console.log(carsWithTesla);


const toDoList = [
    "Проснуться",
    "Встать",
    "Выйти из квартиры",
    "Выжить",
];

                    //Task07

const middleIndex = toDoList.length/2;
toDoList.splice(middleIndex, 0, "Позавтракать");

const todayTasks = toDoList.slice();

toDoList.splice(1,1);

console.log("Общие задачи: " + toDoList)
console.log("Задачи на сегодня: " + todayTasks)