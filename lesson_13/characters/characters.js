const namePerson = document.getElementById("name");
const image = document.getElementById("image");
const listEpisode = document.getElementById("listEpisode");
const addAll = document.getElementById("all");
addAll.addEventListener("click", () => {
  async function getInfo() {
    const per = await fetch("https://rickandmortyapi.com/api/character?page=1");
    const perInfo = await per.json();
    console.log(perInfo);
    const perArray = perInfo.results;
    perArray.map((el) => {
      let img = document.createElement("img");
      img.src = el.image;
      document.body.append(img);
      let name = document.createElement("p");
      name = el.name;
      document.body.append(name);
    });
  }
  getInfo();
});