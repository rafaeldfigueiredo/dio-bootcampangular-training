const pokeapi = {};

pokeapi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  return fetch(url)
    .then((res)=>(res.json()))
    .then((jB)=>(jB.results))
    .catch((err)=>console.error(err))
}