const btn = document.getElementById("magic-btn");

const clonedBtn = btn.cloneNode(true);

clonedBtn.id = "magic-btn-2";
clonedBtn.innerText = "Я изменю тебя";
clonedBtn.style.backgroundColor = "#a78b71";
clonedBtn.style.color = "white";

let isDay = false;

btn.addEventListener("click", ()=> {
    document.body.appendChild(clonedBtn);
    
})

clonedBtn.addEventListener("click", ()=> {
    btn.style.backgroundColor = "#9c4a1a";
    btn.style.color = "black";
    clonedBtn.innerText = "Я изменился";
})