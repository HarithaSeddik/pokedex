import React, { createContext, useState } from 'react';

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  const [pokemons, setPokemons] = useState([]);

  const [capturedPokemons, setCapturedPokemons] = useState([]);

  const providerValue = {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  )
};