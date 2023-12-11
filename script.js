

function fetchPokemon() {
    console.log('first')
    let url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const pokemonList = data.results;
            console.log('hello');
            // Loop through each Pokemon
            pokemonList.forEach(pokemon => {
                fetch(pokemon.url)
                    .then(response => response.json())
                    .then(pokemonData => {
                        const name = pokemonData.name;
                        const types = pokemonData.types.map(type => type.type.name);

                        console.log(`Name: ${name}`);
                        console.log(`Types: ${types.join(', ')}`);
                    });
            });
        });
};

fetchPokemon();

