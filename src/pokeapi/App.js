import React, {useState, useEffect} from 'react';
import { getAllPokemon, getPokemon } from './Pokemon';
import Card from './Card';
import PokeApi from './PokeApi';
import "./pokeapi.css";

function App(){
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async function fetchData(){
      let response = await getAllPokemon(initialUrl);
      setLoading(false);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      console.log(response);
      await loadPokemon(response.results);
    }
    fetchData();
  }, [])

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const prev = async () => {
    if(!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async(pokemon) => {
        let pokemonRecord = await getAllPokemon(pokemon.url);
        return pokemonRecord;
      }),
    );
    setPokemonData(_pokemonData);
  };

  return (
    <div>
      {loading? (
        <h1 style={{paddingTop:"50px"}}>Stránka se načítá</h1>
      ):(
        <div style={{paddingTop:"50px"}}>
          <div className='btn'>
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div>
          <div className='grid-container'>
            {pokemonData.map((pokemon) => {
              return <Card key={pokemon.name} pokemon={pokemon}/>;
            })}
          </div>
          <div className='btn'>
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div>
        </div>
      )}
    </div>
  );

}

export default App;
