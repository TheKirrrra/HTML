const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const counterElement = document.getElementById("counterElement")
const container = document.getElementById("container")

let counter = 0;

const plusHandler = () =>{
    counterElement.innerText++;
};

const minusHandler = () =>{
    counterElement.innerText--;
};