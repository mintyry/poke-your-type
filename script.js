function fetchPokemon() {

    let pokemonByType = {}
    let fetchCount = 0
    //https://pokeapi.co/api/v2/type/: array[0-17] are the types; photo in images folder
    for (let id = 1; id <= 18; id++) {
        let url = `https://pokeapi.co/api/v2/type/${id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                //we fetch each type's url id, each url id contains type name and all the pokemon in that type.
                //type/id produces data. data.name shows type. data.pokemon show all pokemon
                // console.log(data.pokemon[1])
                let typeArray = []
                for (let i = 0; i < data.pokemon.length; i++) {
                    typeArray.push(data.pokemon[i].pokemon.name)

                }//ends for loop

                //by each url id, i log an array of all pokemon in that url id/type.
                //So this inner loop makes one array, but the outer for loop repeats the process fot each url, so when we log it, we will see each array from each url (stored in typeArray).
                // Then we store all of these arrays in one object

                pokemonByType[id] = typeArray;
                fetchCount++;

                if (fetchCount === 18) {
                    console.log(pokemonByType[1].join(','))
                }

            })//ends .thendata

    }//ends id for loop
}//ends fetchPokemon fn


fetchPokemon();