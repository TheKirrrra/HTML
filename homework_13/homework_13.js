const joke = document.getElementById("joke-info")
const jokeByType = document.getElementById("joke-info-by-type")

async function getJoke() {
    const result = await fetch("https://official-joke-api.appspot.com/random_joke")
    const data = await result.json()
    console.log(data)
    joke.innerText = `${data.setup} ${data.punchline}`;
}
getJoke()

async function getJokeByType() {
    const result = await fetch ("https://official-joke-api.appspot.com/jokes/programming/random")
    const data = await result.json()
    console.log(data)
    jokeByType.innerText = `${data[0].type} ${data[0].setup} ${data[0].punchline}`;
}

getJokeByType()
