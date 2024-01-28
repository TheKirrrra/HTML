document.addEventListener("DOMContentLoaded", () => {
    const goodsInfo = document.getElementById("orderList");
    const errorContainer = document.getElementById("errorContainer");

    fetch("https://thekirrrra.github.io/homework_15/clients.json?limit=8")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Server error: ${res.status}`);
            }
            return res.json();
        })
        .then((res) => {
            res.forEach((el) => {
                let listItem = document.createElement("li");
                listItem.innerText = `Name: ${el.firstName} ${el.lastName}, Age: ${el.age}, Gender: ${el.gender}`;
                goodsInfo.append(listItem);
            });
        })
        .catch((err) => {
            console.error("Error: ", err.message);
            const p = document.createElement("p");
            p.innerText = err.message;
            p.style.color = "red";
            errorContainer.append(p);
        });
});