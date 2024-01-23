const cars = [
  { model: "BMW", year: 2022, isDiesel: false, color: "white", price: 23_000 },
  {
    model: "Mercedes",
    year: 2020,
    isDiesel: true,
    color: "black",
    price: 35_000,
  },
  { model: "Opel", year: 2018, isDiesel: true, color: "grey", price: 16_000 },
  {
    model: "Volkswagen",
    year: 2020,
    isDiesel: false,
    color: "yellow",
    price: 19_000,
  },
  {
    model: "Toyota",
    year: 2000,
    isDiesel: false,
    color: "green",
    price: 23_000,
  },
  {
    model: "Bugatti",
    year: 2023,
    isDiesel: false,
    color: "white",
    price: 223_000,
  },
  {
    model: "Porsche",
    year: 2023,
    isDiesel: true,
    color: "black",
    price: 100_000,
  },
];

const carsUnchanged = structuredClone(cars);

let sumPrice = cars
  .map((car) => car.price)
  .reduce((sum, price) => sum + price, 0);

// console.log(sumPrice);

cars.forEach((car) => (car.year < 2023 ? (car.year += 1000) : car.year));
// console.table(cars);

cars.forEach((car) => car.year < 2023 && (car.year += 2000));
// console.table(cars);

cars.forEach((car) => (car.model = car.model.toUpperCase()));
// console.table(cars);

cars.forEach(car => (car.model === "OPEL") && (car.model = car.model.split("").reverse().join("").toLowerCase()))
// cars.forEach((car) => car.model === "OPEL" && (car.model = "Tesla"));
//console.table(cars);

const beforeThreeThousand = cars.filter(cars => cars.year < 3000)
//console.table(beforeThreeThousand)

const beforeThreeThousandSearch = cars.find(cars => cars.year < 3000)
//console.table(beforeThreeThousandSearch)

// console.table(cars)
// console.table(carsUnchanged)

const carsModels = [];
cars.map((car) => carsModels.push(car.model));


const carsModelsCopy = [...carsModels];
carsModelsCopy.splice(0,2)
// console.table(carsModels)
// console.table(carsModelsCopy)

const sliceCarsModelsCopy = carsModelsCopy.slice(0, (carsModelsCopy.length-2))
// console.table(sliceCarsModelsCopy)

const makeFavorite = (name) => console.log(`Our favorite car is ${name}`);

const str1 = `Our favorite car is ${sliceCarsModelsCopy[0]}`;
console.log(str1);

makeFavorite(sliceCarsModelsCopy[1])





















