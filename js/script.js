//GET NAMES AND SORT THEM BY TYPES
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

        for (i = 1; i <= 18; i++) {
          if (fetchCount === 18) {
            console.log(pokemonByType[i].join(','))
            //logs all names by type
          }
        }
      })//ends .thendata
  }//ends id for loop
}//ends fetchPokemon fn

// fetchPokemon();



// SEARCH BAR WITH DROPDOWN AND FILTER
//made it a function to dynamically work with any type's div and array, will be called in callDropdowns() instead of calling it 18 times.
function pokemonDropdown(typeId, array) {
  //access the input element, the dropdown menu (ul), and all options (li)
  const dropdownInput = typeId.querySelector('.dropdown-input');
  const dropdownMenu = typeId.querySelector('.dropdown-menu');


  for (let i = 0; i < array.length; i++) {
    let grassChoice = document.createElement('li');
    grassChoice.setAttribute('class', 'dropdown-option');
    grassChoice.textContent = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    dropdownMenu.appendChild(grassChoice);
  };

  const dropdownOptions = document.querySelectorAll('.dropdown-option');

  //when click into input element, dropdown menu shows, originally hidden
  dropdownInput.addEventListener('click', function () {
    dropdownMenu.style.display = 'block';
  });



  //when anything is input in the element, event triggers the following
  dropdownInput.addEventListener('input', function () {

    // literally whatever the user is typed, the value of that is put into this const
    const whatUserTyped = dropdownInput.value.toLowerCase();

    // for each option that is in the ul...
    dropdownOptions.forEach(function (option) {
      // option's text content is lowercased and called "choice"
      console.log(option.textContent);
      const choice = option.textContent.toLowerCase();
      // if the choice includes any letter of what the user typed, show all choices that have the value of what has been typed
      if (choice.includes(whatUserTyped)) {
        option.style.display = 'block';
      } else {
        // hide the other choices
        option.style.display = 'none';
      }
    });
  });


  // when user clicks an option, input element's value is that option and menu hides
  dropdownOptions.forEach(function (option) {
    option.addEventListener('click', function () {
      dropdownInput.value = option.textContent;
      dropdownMenu.style.display = 'none';
    });
  });
  // if user clicks outside of dropdown, dropdown hides too
  document.addEventListener('click', function (event) {
    if (!dropdownMenu.contains(event.target) && !dropdownInput.contains(event.target)) {
      dropdownMenu.style.display = 'none';
    }
  });
};

// To dynamically call functions to make each list for each dropdown rather than calling the pokemonDropdown funciton 18 times
function callDropdowns() {
  let allTypes = ['bug', 'grass', 'fire', 'water', 'normal', 'flying', 'electric', 'psychic', 'dark', 'ghost', 'poison', 'fighting', 'rock', 'ground', 'steel', 'ice', 'dragon', 'fairy'];
  let allArrays = [ bugPokemon, grassPokemon, firePokemon, waterPokemon, normalPokemon, flyingPokemon, electricPokemon, psychicPokemon, darkPokemon, ghostPokemon, poisonPokemon, fightingPokemon, rockPokemon, groundPokemon, steelPokemon, icePokemon, dragonPokemon, fairyPokemon ]
  console.log(allArrays)

  for (i = 0; i < allTypes.length; i++) {
    let type = allTypes[i];
    let typeSection = document.querySelector(`#${type}`);

    let typeArray = allArrays[i];

    pokemonDropdown(typeSection, typeArray);
  }
};

callDropdowns();