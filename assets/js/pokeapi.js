const pokeapi = {};

pokeapi.getPokemonsDetail = (pokemon)=> {
  fetch(pokemon.url)
  .then((res)=>res.json())
}

pokeapi.getPokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((res) => res.json())
    .then((jB) => jB.results)
    .then((pokemons) => pokemons.map((pokemon) => fetch(pokemon.url))
    .then((res) => res.json()))
    .then((pokemonDetails) => {
      debugger;
      console.log(pokemonDetails);
    });
};
