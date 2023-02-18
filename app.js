const container=document.querySelector(".container");
const count = 200;

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

//Ne kadar pokemon çekeceğimize bağlı olarak pokemon çeker.
const initPokemon=async()=>{
    for(let i = 1; i<=count;i++){
        await getPokemon(i);
    }
};

//Verilen id deki pokemon json verisini çeker.
const getPokemon=async(id)=>{
    let url= `https://pokeapi.co/api/v2/pokemon/${id}`;
    let respon= await fetch(url);
    let data= await respon.json();
    createBox(data);
}

//Çekilen pokemonun oluşmasını sağlar.
const createBox= (pokemon)=>{
    const name = pokemon.name[0].toUpperCase()+pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3,"0");
    const type = pokemon.types[0].type.name;
    const color = colors[type];
    const newPokemon=document.createElement('div');
    newPokemon.style.backgroundColor=`${color}`;
    newPokemon.classList.add('box');
    newPokemon.innerHTML= `
    <a href="info.html" id="link" onclick="getPokemonForStore(${pokemon.id})">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="${name} image">
        <h4 class="poke-name">${name}</h4>
        <p class="poke-id">${id}</p>
        <p class="poke-type">${type}</p>
    </a>  
    `
    container.appendChild(newPokemon);
    
}

const getPokemonForStore=async(id)=>{
    let url= `https://pokeapi.co/api/v2/pokemon/${id}`;
    let respon= await fetch(url);
    let data= await respon.json();
    store(data);
}

const store= async (pokemon) => {
    const pokemonInfo = {
        id: "",
        name: "",
        abilities: [],
        height: "",
        types: []
    }
    pokemonInfo.name=pokemon.name[0].toUpperCase()+pokemon.name.slice(1);
    pokemonInfo.id=pokemon.id.toString().padStart(3,"0");
    pokemonInfo.height=pokemon.height;
    pokemon.types.forEach(element => {
        pokemonInfo.types.push(element.type.name);
    });
    pokemon.abilities.forEach(element => {
        pokemonInfo.abilities.push(element.ability.name);
    });
    const pokemonInfoJson=JSON.stringify(pokemonInfo);
    localStorage.setItem('info',pokemonInfoJson);
    const den=localStorage.getItem('info');
    };

initPokemon();