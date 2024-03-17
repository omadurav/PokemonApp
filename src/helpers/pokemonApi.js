export const getPokemon = async (pokemonName) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
    const resp = await fetch(url);
    const data = await resp.json();

    const pokemon = ({
        name: data.forms[0].name,
        img: data.sprites.other["official-artwork"].front_default,
    });

    return pokemon;
}