//GET NAMES & IMAGES
function fetchPokemon(name, type) {
  if (name === 'shellos-west') {
    name = 'shellos'
  } else if (name === 'gastrodon-west') {
    name = 'gastrodon'
  } else if (name === 'shellos-east') {
    let pokemonImg = './images/shellos-east.png';
    let imgDiv = document.querySelector(`#${type}-img`)
    imgDiv.src = pokemonImg;
    document.querySelector(`#${type}-name`).textContent = 'Shellos';
    return
  } else if (name === 'gastrodon-east') {
    let pokemonImg = './images/gastrodon-east.png';
    let imgDiv = document.querySelector(`#${type}-img`)
    imgDiv.src = pokemonImg;
    document.querySelector(`#${type}-name`).textContent = 'Gastrodon';
    return
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
      document.querySelector(`#${type}-name`).textContent = name;
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
      console.log(option.textContent);
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
      console.log(dropdownInput.value)
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
  console.log(allArrays)

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
button.addEventListener('click', (event)=>{
  event.preventDefault();
  html2canvas(document.querySelector("#user-card"), {backgroundColor: "transparent"}).then(canvas => {
    document.body.appendChild(canvas)
  });
})




// video capture code

  // const video = document.createElement('video');

  // const capture = async () => {
  //   const canvas = document.createElement("canvas");
  //   const context = canvas.getContext("2d");
  //   const video = document.createElement("video");

  //   try {
  //     const captureStream = await navigator.mediaDevices.getDisplayMedia();
  //     video.srcObject = captureStream;
  //     context.drawImage(video, 0, 0, window.width, window.height);
  //     const frame = canvas.toDataURL("image/png");
  //     captureStream.getTracks().forEach(track => track.stop());
  //     window.location.href = frame;
  //   } catch (err) {
  //     console.error("Error: " + err);
  //   }
  // };

  // capture();

  // first major attempt at screenshot

  // Get the canvas element
  // const canvas = document.getElementById('screenshotCanvas');
  // const context = canvas.getContext('2d');

  // // Get the element you want to capture (e.g., the whole body)
  // const elementToCapture = document.body;

 
  // // Set the canvas size to match the element's size
  // canvas.width = elementToCapture.clientWidth;
  // canvas.height = elementToCapture.clientHeight;

  // // Draw the content of the element onto the canvas
  // context.drawWindow(window, 0, 0, elementToCapture.clientWidth, elementToCapture.clientHeight, 'rgb(255,255,255)');

  // // Open a new window with the canvas image
  // const newWindow = window.open();
  // newWindow.document.body.appendChild(canvas);

  // // Alternatively, you can convert the canvas to an image and set it as the window's location
  // const image = canvas.toDataURL("image/png")
  // // .replace("image/png", "image/octet-stream");
  // console.log(image);
  // const imgElement = document.createElement("img");
  // imgElement.src = image;
  // document.body.appendChild(imgElement);