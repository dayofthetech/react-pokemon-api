import React from 'react'
import { useRequest } from '../hooks/useRequest'

// passing 'pokemon' parameters
// {pokemon} starting obj
export default function Pokemon({pokemon}) {
  // destructuing name from the pokemon.pokemon obj
  // below - name has to be between {} because is being destruct
  // and passed to useRequest
    const { name } = pokemon;
    const { data, error } = useRequest('/pokemon', name);

    console.log(pokemon);
    // if statements
        if(!data){
            return <h1>Loading...</h1>;
        }

        if(error){
            return <div>{error}: There was an error with getting data - Pokemon.jsx</div>;
        }

    // runs one time right then TypeError at readnig 'id' with the modified code

    // notion code runs well after refresh but it shows the error message
    // I have to keep the inital {} and after them keep data && ...
  return (
    <>
    {data ? (
        <div className='card'>
          <span className='card-id'>#{data.id}</span>
          <img
            className='card-sprite'
            src={data.sprites.front_default}
            alt={name}
          />
          <h2 className='card-name'>{name}</h2>
          <span className='card-details'>
            <h3>
              <i>Type</i>
            </h3>
            <ul className='types-list'>
              {data.types.map((poke) => (
                <li key={poke.type.name}>{poke.type.name.toUpperCase()}</li>
              ))}
            </ul>
          </span>
        </div>
      ) : <span>No Data</span>
      }
    </>
  )
}
