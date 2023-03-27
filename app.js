const API_CHARACTERS = "https://rickandmortyapi.com/api/character";
const llamadaAApi = fetch(API_CHARACTERS);

llamadaAApi
    .then((data) => {
        return data.json();
    })
    .then((data) => {
        const $container = document.getElementById("container");
        const characters = data.results;
        for (let i = 0; i < characters.length; i++) {
            $container.innerHTML += `
                <div class="card">
                    <img src=${characters[i].image} alt="Character image."/>
                    <strong>${characters[i].name}</strong>
                    <p>Gender: ${(characters[i].gender)}</p>
                    <p>Species: ${(characters[i].species)}</p>
                    <p>Status: ${(characters[i].status)}</p>
                    <p>Origin: </p>
                    <p>${(characters[i].origin.name)}</p>
                </div>
            `;
        }
    })
    .catch((err) => {
        console.log(err);
    });