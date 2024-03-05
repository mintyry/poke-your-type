let shinyHandlers = {};

// manually setting photos/names
// can remove whenever pokeapi adds original artwork for pokemon
function manualHandle(name, type, isShiny, currentShinyHandler) {

    removeShinyListeners(type);

    switch (name) {
        // there is no west in api, made it here
        case 'shellos-west': {
            return 'shellos'
        }
        case 'gastrodon-west': {
            return 'gastrodon'
        }
        // it's morpeko-full-belly in api; unnecessary
        case 'morpeko': {
            return 'morpeko-full-belly'
        }
        case 'mimikyu': {
            return 'mimikyu-disguised'
        }
        case 'ogerpon-wellspring': {
            return 'ogerpon-wellspring-mask'
        }
        case 'ogerpon-hearthflame': {
            return 'ogerpon-hearthflame-mask'
        }
        case 'ogerpon-cornerstone': {
            return 'ogerpon-cornerstone-mask'
        }
        // no photos in api for following pokemon

        case 'shellos-east': {

            let pokemonImg = './images/ogartwork/shellos-east.png';
            let shinyImg = './images/ogartwork/shellos-east-shiny.png';

            let shinyToggles = document.querySelectorAll(`#${type} .shiny`);
            currentShinyHandler = shiny(isShiny, pokemonImg, shinyImg, type);

             // add functionality to each button
             shinyToggles.forEach((shinyToggle) => {
                shinyToggle.addEventListener('click', currentShinyHandler);
            });

            updateInfo(type, 'Shellos', pokemonImg);
            break
        }
        case 'gastrodon-east': {
  
            let pokemonImg = './images/ogartwork/gastrodon-east.png';
            let shinyImg= './images/ogartwork/gastrodon-east-shiny.png';

            let shinyToggles = document.querySelectorAll(`#${type} .shiny`);
            currentShinyHandler = shiny(isShiny, pokemonImg, shinyImg, type);

             // add functionality to each button
             shinyToggles.forEach((shinyToggle) => {
                shinyToggle.addEventListener('click', currentShinyHandler);
            });

            updateInfo(type, 'Gastrodon', pokemonImg);
            break
        }
        default:
            return name;
    }
    shinyHandlers[type] = currentShinyHandler;
    console.log(currentShinyHandler)
};

function removeShinyListeners(type) {
    let currentShinyHandler = shinyHandlers[type];
    console.log(currentShinyHandler);
    if (currentShinyHandler) {
        let shinyToggles = document.querySelectorAll(`#${type} .shiny`);
        shinyToggles.forEach((shinyToggle) => {
            shinyToggle.removeEventListener('click', currentShinyHandler);
        });
    }
}

function updateInfo(type, newName, pokemonImg) {
    // query select all elements with these classes
    let pokeElements = document.querySelectorAll(`.${type}-img, .${type}-name`);

    // loop through them
    pokeElements.forEach((element) => {
        // looping through, if the class we target is the img class, we set the new img.
        // if the class we target is the name class, we set the new name
        if (element.classList.contains(`${type}-img`)) {
            element.src = pokemonImg;

        } else if (element.classList.contains(`${type}-name`)) {
            element.textContent = newName;
        }
    })
};

