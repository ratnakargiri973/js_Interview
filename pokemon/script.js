const type = document.getElementById("type");
const search = document.getElementById("search");
const filter = document.getElementById("filter");
const refresh = document.getElementById("refresh");
const cardContainer = document.getElementById("pokemons");

refresh.addEventListener("click", ()=>{
    window.location.reload();
})
//filter by type

filter.addEventListener("click", ()=>{
    let allCards = document.querySelectorAll(".card");

    allCards.forEach((card)=>{
        let pokemonType = card.children[0].children[0].children[3].innerText;
        if(pokemonType=== type.value){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }
    })
})


//Search card by name


search.addEventListener("input", ()=>{
    let searchValue = search.value;
    let allCards = document.querySelectorAll(".card");
    allCards.forEach((card)=>{
         let pokemonName = card.children[0].children[0].children[2].innerText;
         if(pokemonName.startsWith(searchValue)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        } 
    })
})



function createPokemoncard(details){
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML=`
        <div class="inner-card" id="${details.types[0].type.name}"> 
        <div class="front-card">
        <div class="id">${details.id}</div>
        <img src="${details.sprites.front_default}">
        <div class="name">${details.name}</div>
        <div class="type">${details.types[0].type.name}</div>
        <div class="stats">${details.stats[0].base_stat}</div>
        </div>

        <div class="back-card">
        <img src='${details.sprites.back_default}'/>
        <div class="name">${details.name}</div>
        <div class="ability">${details.abilities[0].ability.name}</div>
        </div>
        </div>
    `;
     return card;
}


async function fetchData(i){
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let result = await data.json();
    return result;
}

async function mainData(){
    for(let i=1;i<=151;i++){
        let pokemon = await fetchData(i);
        let item = createPokemoncard(pokemon);
        cardContainer.appendChild(item);
    }
}

mainData();