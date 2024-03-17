import React, { useState } from 'react'
import { GridPokemon, InputSearch } from './index'

export const PokemonApp = () => {

    const [pokemons, setPokemons] = useState([]);

    const onAddPokemon = (newPokemon) => {
        if(pokemons.includes(newPokemon)) return;
        setPokemons([newPokemon, ...pokemons]);
    }

    return (
        <>
            <h1>Pokemon App</h1>

            <InputSearch onAddPokemon={onAddPokemon} />
            
            {
                pokemons.map(pokemon => (
                    <GridPokemon key={pokemon} pokemonName={pokemon} />
                ))
            }
        </>
    )
}
