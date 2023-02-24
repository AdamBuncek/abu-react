export async function getAllPokemon(url){
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

export async function getPokemon(url){
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}