import { useEffect, useState } from "react";
import { getPokemon } from "../helpers/pokemonApi";

export const useFetchPokemon = (pokemonName) => {

    const [gridPokemon, setGridPokemon] = useState({});

    const [pokemonExist, setPokemonExist] = useState(false);

    const handleGridPokemon = async () => {
        try {
            const newPokemon = await getPokemon(pokemonName);
            setGridPokemon(newPokemon);
            setPokemonExist(true);
        } catch {
            console.error(`No se pudo cargar el pokemon: ${pokemonName}`);
            setGridPokemon({});
            setPokemonExist(false);
        }
    }

    useEffect(() => {
        handleGridPokemon();
    }, []);

    return {
        gridPokemon: gridPokemon,
        pokemonExist: pokemonExist
    };
}