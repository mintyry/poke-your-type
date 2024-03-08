// SHINY FUNCTION toggles shiny status; displays shiny or regular image
function shiny(isShiny, pokemonImg, shinyImg, type) {
  // this creates closure so this function retains the values of the variables from outer function, even after outer (shiny) has finished executing.
  // needed to do this to pass in the values at all
  return function () {
    console.log(shinyImg)
    console.log(pokemonImg)
    isShiny = !isShiny; //this allows toggling between false and not false (true)
    // if isShiny is true, fetch shinyImg, if not, fetch pokemonImg
    let imgUrl = isShiny ? shinyImg : pokemonImg;

    fetch(imgUrl)
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result.split(',')[1];

          // updates both user-card and dl-card's img elements
          let imgDivs = document.querySelectorAll(`.${type}-img`);
          imgDivs.forEach((imgDiv) => {
            imgDiv.src = '';
            imgDiv.src = 'data:image/png;base64,' + base64data;
          });

        };
        reader.readAsDataURL(blob);
      })
  }
};

let currentShinyHandler = null;

//GET NAMES & IMAGES
function fetchPokemon(name, type) {

  // declaring a variable for the state of img -- will it be shiny or not? start as false before shiny function runs
  let isShiny = false;

  // Remove event listener for shiny function <<<<<<<< NOT HAPPENING CORRECTLY
  if (currentShinyHandler) {
    let shinyToggles = document.querySelectorAll(`#${type} .shiny`);
    shinyToggles.forEach((shinyToggle) => {
      shinyToggle.removeEventListener('click', currentShinyHandler);
      // technically wrong to pass in parameters
      //can use the data; .bind() to correctly pass without unintentionally triggering shiny function
    })
  };

  name = manualHandle(name, type, isShiny, currentShinyHandler);

  //if manual photo from my files, doesnt fetch
  if (!name) {
    return;
  };

  // fetch pokemon data
  let url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
  fetch(url)
    .then(response => response.json())
    .then(data => {

      // return data; <<<<<<<<<<<< and then refactor other functionaliy

      // store paths of pokemon images
      let pokemonImg = data.sprites.other['official-artwork'].front_default;
      let shinyImg = data.sprites.other['official-artwork'].front_shiny;

      if (shinyImg === null) {
        shinyImg = './images/nullpokeball.png';
      }

      let shinyToggles = document.querySelectorAll(`#${type} .shiny`);
      // the next line, written as-is, immediately calls the function, return statement in there so it is not immediately called, via an anonymous fn
      currentShinyHandler = shiny(isShiny, pokemonImg, shinyImg, type);

      // add functionality to each button
      shinyToggles.forEach((shinyToggle) => {
        shinyToggle.addEventListener('click', currentShinyHandler);
      });


      // we do initial image fetch upon selection
      fetch(pokemonImg)
        .then(response => response.blob())
        .then(blob => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64data = reader.result.split(',')[1];


            // updates both user-card and dl-card's img elements
            let imgDivs = document.querySelectorAll(`.${type}-img`);
            imgDivs.forEach((imgDiv) => {
              imgDiv.src = '';
              imgDiv.src = 'data:image/png;base64,' + base64data;
            });

          };
          reader.readAsDataURL(blob);
        });

      //set name of pokemon in card
      let keepHyphen = [
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

      let pokeNames = document.querySelectorAll(`.${type}-name`);
      console.log(pokeNames);
      pokeNames.forEach((pokeName) => {
        if (name.includes('-') && !keepHyphen.includes(name) && !spaceOverHyphen.includes(name)) {
          console.log(pokeName)
          pokeName.textContent = name.split('-')[0];
        } else if (spaceOverHyphen.includes(name)) {
          console.log(pokeName)
          pokeName.textContent = name.replace('-', ' ');
        } else {
          console.log(pokeName)
          pokeName.textContent = name;
        }
      });
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



const button = document.querySelector('.generate');
button.addEventListener('click', (event) => {
  event.preventDefault();
  const dlCard = document.querySelector("#dl-card");

  // Create a temporary container element
  const tempContainer = document.createElement('div');
  tempContainer.style.position = 'absolute';
  tempContainer.style.left = '-9999px';
  tempContainer.style.top = '-9999px';

  // Append the dlCard to the temporary container
  tempContainer.appendChild(dlCard);
  document.body.appendChild(tempContainer);

  // quickly unhides card
  dlCard.style.display = 'block';

  html2canvas(dlCard, {
    backgroundColor: "transparent"
  })
    .then(canvas => {
      // dlCard is originally hidden. In a brief moment when user clicks button, it will show, then be hidden again at end of process, so the card that is downloaded is full sized
      dlCard.style.display = 'none';
      // move dlCard to body again and its hidden and delete the offscreen tempContainer
      document.body.appendChild(dlCard);
      // Remove the temporary container from the DOM
      document.body.removeChild(tempContainer);

      console.log(canvas)
      // Convert the canvas to a data URL
      const imageDataURL = canvas.toDataURL('image/png');

      // Create a temporary link element
      const downloadLink = document.createElement('a');

      // Set the href attribute to the data URL
      downloadLink.href = imageDataURL;

      // Set the download attribute with the desired filename
      downloadLink.download = 'user_card.png';

      // Append the link to the document
      document.body.appendChild(downloadLink);

      // Trigger a click on the link to start the download
      downloadLink.click();

      // Remove the link from the document
      document.body.removeChild(downloadLink);

    });
});


