let container = document.querySelector(".cardsContainer");
let charactersCount = document.querySelector(".charactersCount");
let nav = document.querySelector(".nav");

async function displayCharacters(url) {
  container.innerHTML = "";
  nav.innerHTML = "";

  if (!url) {
    url = "https://rickandmortyapi.com/api/character";
  }

  const reponse = await fetch(url);
  const characters = await reponse.json();
  charactersCount.innerText = `Il y a ${characters.info.count} personnages.`;

  characters.results.map((character) => {
    container.innerHTML += `<div class="card"> <img src=${character.image} class="cardImg"/><p class="text">${character.name}</p> </div>`;
  });

  if (characters.info.prev) {
    createButton(characters.info.prev, "left");
  }
  if (characters.info.next) {
    createButton(characters.info.next, "right");
  }
}

displayCharacters();

function createButton(url, text) {
  nav.innerHTML += `<button class="right-0 absolute button" onclick="displayCharacters('${url}')"><i class="fa-solid fa-chevron-${text} white"></button>`;
}
