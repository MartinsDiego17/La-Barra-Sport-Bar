const axios = require('axios');

const getAllPokemons = async () => {

    const response = await axios('https://pokeapi.co/api/v2/pokemon?offset=0&limit=60');
    const allPokemons = response.data.results;
    const pokemonPromises = allPokemons.map(async (pokemon) => {
        const response = await axios(pokemon.url);
        return response.data
    });
    const pokemones = await Promise.all(pokemonPromises);

        const pokemons = pokemones.map(pokemon => {
            const types = pokemon.types.map(type => type.type.name);
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.front_default,
                life: pokemon.stats[0]["base_stat"],
                attack: pokemon.stats[1]["base_stat"],
                defense: pokemon.stats[2]["base_stat"],
                speed: pokemon.stats[5]["base_stat"],
                height: pokemon.height,
                weight: pokemon.weight,
                tipo: types
            }
        });
    return pokemons;

};

module.exports = { getAllPokemons };