// create empty object that will keep track of shiny event handlers
let shinyHandlers = {};

// manually setting photos/names
// can remove whenever pokeapi adds original artwork for pokemon
function manualHandle(name, type, isShiny, currentShinyHandler) {

    // if currentShinyHandler is truthy/exists, remove it
    removeShinyListeners(type);

    // return lines bring back to fetchPokemon(), break stops code, and once we get back to fetchPokemon(), if name doesnt exist in api, code stops with a return statement in there.
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
            // declare images
            let pokemonImg = './images/ogartwork/shellos-east.png';
            let shinyImg = './images/ogartwork/shellos-east-shiny.png';
            // access shiny buttons
            let shinyToggles = document.querySelectorAll(`#${type} .shiny`);
            // declare variable that will be added as event listener (ie: event listener is put into variable)
            // shiny fn (in script.js) returns anonymous fn so it doesn't immediately execute (done via closure)
            // also put into variable because event listener syntax doesn't take a fn call, or shouldnt at least.
            currentShinyHandler = shiny(isShiny, pokemonImg, shinyImg, type);

            // add functionality to each button
            shinyToggles.forEach((shinyToggle) => {
                shinyToggle.addEventListener('click', currentShinyHandler);
            });

            // put in name and image in proper type's section
            updateInfo(type, 'Shellos', pokemonImg);
            break
        }
        case 'gastrodon-east': {

            let pokemonImg = './images/ogartwork/gastrodon-east.png';
            let shinyImg = './images/ogartwork/gastrodon-east-shiny.png';

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
    // update shinyHandlers object: added type as key, value is currentShinyHandler
    // shinyHandlers object is:
    // { water: shinyHandler for pokemon 1}
    // when new pokemon is selected, this event handler is removed and new one takes place
    shinyHandlers[type] = currentShinyHandler;
    console.log(shinyHandlers)
};

function removeShinyListeners(type) {
    // when new manual handled pokemon is selected, currentShinyHandler is not the shiny fn anymore; it is the prior event handler/currentShinyHandler, which we then remove.
    // the current object (water: shinyHandler for pokemon 1) is stored in variable
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

