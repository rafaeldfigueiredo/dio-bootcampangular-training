function convertPokemonToLi(pokemon) {
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

pokeapi.getPokemons().then((pokemons)=>{
    pokemonList.innerHTML += [pokemons.map(convertPokemonToLi)].join('')
})