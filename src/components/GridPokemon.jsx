import { useFetchPokemon } from "../hooks/useFetchPokemon";

export const GridPokemon = ({ pokemonName }) => {

    const {gridPokemon, pokemonExist} = useFetchPokemon(pokemonName);

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <>
            {pokemonExist && (
                <div className="bg-white w-80 mx-auto rounded-lg m-5">
                    <img src={gridPokemon.img} alt="Imagen de pokemon" />
                    <h2>{capitalize(gridPokemon.name)}</h2>
                </div>
            )}
        </>
    )
}
