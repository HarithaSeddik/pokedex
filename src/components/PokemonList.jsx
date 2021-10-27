import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = ({pokemon}) => {
    return (
        <div className='all-container'>
             {pokemon.map( (pokemonStats, index) => 
            <PokemonCard
              key={index}
              pokemonStats = {pokemonStats}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
              weight = {pokemonStats.weight}
              height = {pokemonStats.height}
              ability = {pokemonStats.abilities[0].ability.name}
            />
            )}
            
        </div>
    )
}

export default PokemonList
