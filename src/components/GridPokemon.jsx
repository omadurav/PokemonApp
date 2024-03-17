import { useEffect, useState } from "react";
import { getPokemon } from "../helpers/pokemonApi"

export const GridPokemon = ({ pokemonName }) => {

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

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        handleGridPokemon();
    }, []);

    return (
        <>
            {pokemonExist && (
                <div>
                    <h2>{capitalize(gridPokemon.name)}</h2>
                    <img src={gridPokemon.img} alt="Imagen de pokemon" />
                </div>
            )}
        </>
    )
}
