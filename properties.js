const container=document.querySelector(".container-info");

const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#d6b3ff",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
    ice: "#e0f5ff ",
};

const createBox= ()=>{
    const pokeInfoJson=localStorage.getItem("info");
    const pokeInfo=JSON.parse(pokeInfoJson);
    console.log(pokeInfo.name);
    const color = colors[pokeInfo.types[0]];
    const newPokemon=document.createElement('div');
    newPokemon.style.backgroundColor=`${color}`;
    newPokemon.classList.add('box-info');
    newPokemon.innerHTML= `
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeInfo.id}.png" alt="${name} image">
        <h4 class="poke-name">Name: ${pokeInfo.name}</h4>
        <p class="poke-id">ID: ${pokeInfo.id}</p>
        <p class="poke-id">Height: ${pokeInfo.height}</p>
        <p class="poke-type">Types: ${pokeInfo.types}</p>
        <p class="poke-type">Abilities: ${pokeInfo.abilities}</p>
    `
    container.appendChild(newPokemon);
    
}
createBox();