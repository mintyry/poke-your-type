

// function fetchPokemon() {
//     //https://pokeapi.co/api/v2/type/: array[0-17] are the types; photo in images folder
//     for (let id = 1; id <= 18; id++) {
//         let url = `https://pokeapi.co/api/v2/type/${id}`;
//         fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 //we fetch each type's url id, each url id contains type name and all the pokemon in that type.
//                 //type/id produces data. data.name shows type. data.pokemon show all pokemon
//                 console.log(data.pokemon[0])
//                 for (let i = 0; i <= data.length; i++) {

//                     console.log(data.pokemon[i])
//                     // const type = data.name;
//                     // const pokemonForThatType = data.pokemon

//                 }//ends for loop
//             })//ends .thendata
//     }//ends id for loop
// }//ends function


function fetchPokemon() {
    //https://pokeapi.co/api/v2/type/: array[0-17] are the types; photo in images folder

    let url = `https://pokeapi.co/api/v2/type/1`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            //we fetch each type's url id, each url id contains type name and all the pokemon in that type.
            //type/id produces data. data.name shows type. data.pokemon show all pokemon
            // console.log(data.pokemon[1])
            let normalPkmn = []
            for (let i = 0; i < data.pokemon.length; i++) {
                normalPkmn.push(data.pokemon[i].pokemon.name)

            }//ends for loop
            console.log(normalPkmn);
        })//ends .thendata
}


fetchPokemon();

