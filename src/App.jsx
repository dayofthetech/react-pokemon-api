import PokemonLogo from '/images/pokemon.png';
import React from 'react'
import {useRequest} from './hooks/useRequest';
import Pokemon from './components/Pokemon';

export default function App() {

  const { isLoading, data, error } = useRequest('/pokemon');

  // subcomponent
  const DisplayPokemon = () => {
      if(data){
        return (
          <div className='row'>
            {
              data.results.map((pokemon) => {
                return (
                  <Pokemon key={pokemon.name} pokemon={pokemon}/>
                );
              })
            }
          </div>
        );
      }
  }

  const LoadingHandling = () => {
    if(isLoading){
      return <div>Loading Pokemon data...</div>;
    }
  }

  const ErrorHandling = () => {
    if(error){
      return <div>{error}: There was an error with getting data - App.jsx</div>;
    }
  }

  return (
    <div>
    <img
      src={PokemonLogo}
      className='pokemon-logo'
    ></img>
    {<DisplayPokemon />} : {<ErrorHandling />}
    </div>

  )
}
