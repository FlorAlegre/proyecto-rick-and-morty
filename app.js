
const llamadaAApi = fetch("https://rickandmortyapi.com/api/character");

llamadaAApi
    .then( (data)=> {
     return data.json();
    })
    .then((data)=>{
        const $container = document.getElementById("container");
        const character = data.results;
        console.log(character[0]);
        for(let i = 0; i < character.length; i++) {
            $container.innerHTML += `
            <div class="item-grid">
                <img 
                    src= ${character[i].image} 
                    alt="character imagen"
                />
                <h3>${character[i].name}</h3>
                <p>Gender: ${character[i].gender}</p> 
                <p>Species: ${character[i].species}</p>
                <p>Origin: ${character[i].origin.name}
                <p>Status: ${character[i].status}</p>
                
            </div>
            `;
        }
    })
    .catch((err) => {
        console.log(err);
    });