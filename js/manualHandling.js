// manually setting photos/names
// can remove whenever pokeapi adds original artwork for pokemon
function manualHandle(name, type, isShiny, currentShinyHandler) {

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
        // no photos in api for following pokemon
    
       
        case 'terapagos-terestal': {
            let pokemonImg = './images/ogartwork/terapagos-terestal.png';
            updateInfo(type, 'Terapagos', pokemonImg);
            break
        }
        case 'terapagos-stellar': {
            let pokemonImg = './images/ogartwork/terapagos-stellar.png';
            updateInfo(type, 'Terapagos', pokemonImg);
            break
        }
      
        case 'ogerpon-hearthflame': {
            let pokemonImg = './images/ogartwork/hearthflame.png';
            updateInfo(type, 'Ogerpon', pokemonImg);
            break
        }
        case 'ogerpon-cornerstone': {
            let pokemonImg = './images/ogartwork/cornerstone.png';
            updateInfo(type, 'Ogerpon', pokemonImg);
            break
        }
        case 'shellos-east': {
            let pokemonImg = './images/ogartwork/shellos-east.png';
            updateInfo(type, 'Shellos', pokemonImg);
            break
        }
        case 'gastrodon-east': {
            let pokemonImg = './images/ogartwork/gastrodon-east.png';
            updateInfo(type, 'Gastrodon', pokemonImg);
            break
        }
        default:
            return name;
    }
};

// function removeShinyListeners(type, currentShinyHandler) {
//     if (currentShinyHandler) {
//         let shinyToggles = document.querySelectorAll(`#${type} .shiny`);
//         shinyToggles.forEach((shinyToggle) => {
//             shinyToggle.removeEventListener('click', currentShinyHandler);
//         });
//     }
// }

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
    return currentShinyHandler;
};

