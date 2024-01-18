// console.log("button");

const btn = document.getElementById("btn1");

console.log(btn);

let isDay = false;

btn.addEventListener("click", ()=> {
    const newColor = isDay ? "white" : "black";
    const newText = isDay ? "Нажми и будет ночь" : "День будет, если нажмешь"; 
    document.body.style.backgroundColor = newColor;
    btn.innerText = newText;
    isDay = !isDay; 
    


})



