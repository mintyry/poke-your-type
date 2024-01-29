//GET NAMES & IMAGES
function fetchPokemon(name, type) {

  // maybe new function ina  new file to handle manual images
  name = manualHandle(name, type);

  //if manual photo from my files, doesnt fetch
  if (!name) {
    return;
  };

  let url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let pokemonImg = data.sprites.other['official-artwork'].front_default;
      console.log(pokemonImg);
      console.log(type)
      //select specific div by dynamic id
      let imgDiv = document.querySelector(`#${type}-img`)
      console.log(imgDiv)
      imgDiv.src = pokemonImg;

      //set name of pokemon in card
      //if name is textcontent's name is set in manual(), then this will not occur
      //this is done because otherwise, whatever name i set in manual gets overwritten here.
      //so i check if textContent has been changed yet by checking if it still says "Pokemon"
      // if (document.querySelector(`#${type}-name`).textContent === 'Pokémon') {
      let keepHyphen= [
        'wo-chien',
        'chien-pao',
        'ting-lu',
        'chi-yu',
        'jangmo-o',
        'hakamo-o',
        'kommo-o',
        'mr-mime',
        'mr-rime',
        'ho-oh',
        'Porygon-Z',
      ];

      let spaceOverHyphen = [
        'great-tusk',
        'scream-tail',
        'brute-bonnet',
        'flutter-mane',
        'slither-wing',
        'sandy-shocks',
        'roaring-moon',
        'walking-wake',
        'gouging-fire',
        'raging-bolt',
        'iron-treads',
        'iron-bundle',
        'iron-hands',
        'iron-jugulis',
        'iron-moth',
        'iron-thorns',
        'iron-valiant',
        'iron-leaves',
        'iron-crown',
        'iron-boulder',
        'tapu-koko',
        'tapu-lele',
        'tapu-bulu',
        'tapu-fini',
        'mime-jr',
        'Type-Null'
      ];

      if (name.includes('-') && !keepHyphen.includes(name) && !spaceOverHyphen.includes(name)) {
        document.querySelector(`#${type}-name`).textContent = name.split('-')[0];
      } else if (spaceOverHyphen.includes(name)){
        document.querySelector(`#${type}-name`).textContent = name.replace('-', ' ');
      } else {
        document.querySelector(`#${type}-name`).textContent = name;
      }

    })//ends .thendata
};//ends fetchPokemon fn




// SEARCH BAR WITH DROPDOWN AND FILTER
//made it a function to dynamically work with any type's div and array, will be called in callDropdowns() instead of calling it 18 times.
function pokemonDropdown(typeSection, array, type) {
  //access the input element, the dropdown menu (ul), and all options (li)
  const dropdownInput = typeSection.querySelector('.dropdown-input');
  const dropdownMenu = typeSection.querySelector('.dropdown-menu');


  for (let i = 0; i < array.length; i++) {
    let listChoice = document.createElement('li');
    listChoice.setAttribute('class', 'dropdown-option');
    listChoice.textContent = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    dropdownMenu.appendChild(listChoice);
  };

  const dropdownOptions = dropdownMenu.querySelectorAll('.dropdown-option');

  //when click into input element, dropdown menu shows, originally hidden
  //event listener is added to each dropdownInput, and this reacts to the one that is clicked on.
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
      const choice = option.textContent.toLowerCase();
      // if the choice includes any letter of what the user typed, show all choices that have the value of what has been typed
      if (choice.includes(whatUserTyped)) {
        option.style.display = 'block';
      } else {
        // hide the other choices
        option.style.display = 'none';
      }//ends if
    });//ends foreach
  });


  // when user clicks an option, input element's value is that option and menu hides
  dropdownOptions.forEach(function (option) {
    option.addEventListener('click', function () {
      dropdownInput.value = option.textContent.toLowerCase();
      dropdownMenu.style.display = 'none';
      // console.log('this will be the id you are looking for:' + typeId)

      //call fetchPokemon using user's selection and including type as template literal to target that img element with corresponding id
      fetchPokemon(dropdownInput.value, type);
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
  let allTypes = ['grass', 'fire', 'water', 'normal', 'flying', 'electric', 'psychic', 'dark', 'ghost', 'poison', 'bug', 'fighting', 'rock', 'ground', 'steel', 'ice', 'dragon', 'fairy'];
  let allArrays = [grassPokemon, firePokemon, waterPokemon, normalPokemon, flyingPokemon, electricPokemon, psychicPokemon, darkPokemon, ghostPokemon, poisonPokemon, bugPokemon, fightingPokemon, rockPokemon, groundPokemon, steelPokemon, icePokemon, dragonPokemon, fairyPokemon]


  for (let i = 0; i < allTypes.length; i++) {
    let type = allTypes[i];
    let typeSection = document.querySelector(`#${type}`);

    let typeArray = allArrays[i];

    pokemonDropdown(typeSection, typeArray, type);
  }
};

callDropdowns();

//button to take screenshot via canvas

const button = document.querySelector('button');
button.addEventListener('click', (event) => {
  event.preventDefault();
  html2canvas(document.querySelector("#user-card"), {
    backgroundColor: "transparent", allowTaint: true,
    useCors: true
  }).then(canvas => {
    document.body.appendChild(canvas)
  });
});