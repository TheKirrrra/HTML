const wishForm = document.getElementById("form")
const wishList = document.getElementById("wishList")
const btnClear = document.getElementById("btnClearList")
const btnClearLast = document.getElementById("btnClearLast")

// const wishes = []

function clearInputs() {
    event.target.wish.value = ""
    event.target.amount.value = ""
}

function changeStatus(event) {
    if (event.target.style.textDecoration === "line-through") {
        event.target.style.textDecoration = "none"
    } else {
        event.target.style.textDecoration = "line-through"
    }
}

function clearList() {
    while (wishList.hasChildNodes()) {
        wishList.firstChild.remove()
    }
}

function clearListLast() {
    if (wishList.hasChildNodes) {
        wishList.firstChild.remove()
    }
}

btnClear.addEventListener("click", clearList);
btnClearLast.addEventListener("click", clearListLast);

wishForm.addEventListener("submit", event => {
    event.preventDefault()
    const wish = {
        wish: event.target.wish.value,
        amount: event.target.amount.value
    }
    console.log(wish);
    wishes.push(wish)

    const textItem = document.createElement("p")
    textItem.innerText = `Я хочу ${wish.wish} и их ${wish.amount}`
    textItem.style.cursor = "pointer"

    textItem.onclick = changeStatus
    
    wishList.append(textItem)

    clearInputs(event)
})