// manually setting photos/names
// can remove whenever pokeapi adds original artwork for pokemon
function manualHandle(name, type) {


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
        case 'hydrapple': {
            let pokemonImg = './images/ogartwork/hydrapple.png';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Hydrapple';
            break
        }
        case 'archaludon': {
            let pokemonImg = './images/ogartwork/archaludon.png';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Archaludon';
            break
        }
        case 'terapagos': {
            let pokemonImg = './images/ogartwork/terapagos.png';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Terapagos';
            break
        }
        case 'terapagos-terestal': {
            let pokemonImg = './images/ogartwork/terestal.png';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Terapagos';
            break
        }
        case 'terapagos-stellar': {
            let pokemonImg = './images/ogartwork/terapagos-stellar.png';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Terapagos';
            break
        }
        case 'pecharunt': {
            let pokemonImg = './images/ogartwork/pecharunt.png';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Pecharunt';
            break
        }
        case 'iron-crown': {
            let pokemonImg = './images/ogartwork/ironcrown.png';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Iron Crown';
            break
        }
        case 'iron-boulder': {
            let pokemonImg = './images/ogartwork/ironboulder.png';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Iron Boulder';
            break
        }
        case 'raging-bolt': {
            let pokemonImg = './images/ogartwork/raging-bolt.png';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Raging Bolt';
            break
        }
        case 'gouging-fire': {
            let pokemonImg = './images/ogartwork/gougingfire.png';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Gouging Fire';
            break
        }
        case 'sinistcha': {
            let pokemonImg = './images/ogartwork/sinistcha.png';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Sinistcha';
            break
        }
        case 'ogerpon-wellspring': {
            let pokemonImg = './images/ogartwork/wellspring.webp';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Ogerpon';
            break
        }
        case 'ogerpon-hearthflame': {
            let pokemonImg = './images/ogartwork/hearthflame.webp';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Ogerpon';
            break
        }
        case 'ogerpon-cornerstone': {
            let pokemonImg = './images/ogartwork/cornerstone.webp';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Ogerpon';
            break
        }
        case 'shellos-east': {
            let pokemonImg = './images/ogartwork/shellos-east.png';
            updateInfo(type, 'Shellos', pokemonImg);
            break
        }
        case 'gastrodon-east': {
            let pokemonImg = './images/ogartwork/gastrodon-east.png';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Gastrodon';
            break
        }
        default:
            return name;
    }
};

function updateInfo(type, newName, newImg){
    // query select all elements with these classes
    let pokeElements = document.querySelectorAll(`.${type}-img, .${type}-name`);
    // loop through them
    pokeElements.forEach((element) => {
        // looping through, if the class we target is the img class, we set the new img.
        // if the class we target is the name class, we set the new name
        if (element.classList.contains(`${type}-img`)){
            element.src = newImg;
        } else if (element.classList.contains(`${type}-name`)){
            element.textContent = newName;
        }
    })
};