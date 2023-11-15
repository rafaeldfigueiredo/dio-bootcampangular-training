const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToHTML(pokemon) {
    return `
    <li class="pokemon ">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">Grass</li>
                    <li class="type">Poison</li>
                </ol>

                <img src="//raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                alt="${pokemon.name}">
            </div>
        </li>
    `    
}

const pokemonList = document.querySelector('#pokemonList')

fetch(url)
.then((res)=>(res.json()))
.then((jB)=>(jB.results))
.then((pokemons)=>{
    for (let index = 0; index < pokemons.length; index++) {
        const pokemon = pokemons[index];
        pokemon.innerHTML += convertPokemonToHTML(pokemon)
    }
})
.catch((err)=>console.error(err))