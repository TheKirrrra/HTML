const auto = document.getElementById("autoInfo")


async function getAuto() {
    const result = await fetch("https://thekirrrra.github.io/homework_14/homework_14.json")
    const data = await result.json()
    console.log(data)
    auto.innerText = `${data.model} ${data.year} ${data.color} ${data.id}`;
}
getAuto()

