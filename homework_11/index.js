const animeForm = document.getElementById("form")
const animeList = document.getElementById("animeList")
const btnClearList = document.getElementById("btnClearList")
const btnClearFirst = document.getElementById("btnClearFirst")

function clearInputs() {
    event.target.anime.value = ""
    event.target.rating.value = ""
}

function changeStatus(event) {
    if (event.target.style.textDecoration === "underline") {
        event.target.style.textDecoration = "none"
    } else {
        event.target.style.textDecoration = "underline"
    }
}

function clearList() {
    while (animeList.hasChildNodes()) {
        animeList.firstChild.remove()
    }
}

function clearListFirst() {
    if (animeList.hasChildNodes) {
        animeList.firstChild.remove()
    }
}


btnClearList.addEventListener("click", clearList);
btnClearLast.addEventListener("click", clearListFirst)




animeForm.addEventListener("submit", event => {
    event.preventDefault()
    const anime = {
        anime: event.target.anime.value,
        rating: event.target.rating.value
    }

console.log(anime);

const textItem = document.createElement("p")
textItem.innerText = `I watched the anime: "${anime.anime}" and can give it a ${anime.rating}/10 rate.`
textItem.style.cursor = "pointer";

textItem.onclick = changeStatus

animeList.append(textItem)

clearInputs(event)
})