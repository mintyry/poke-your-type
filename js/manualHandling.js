// manually setting photos
function manualImg(name, type) {
    switch (name) {
        case 'shellos-west': {
            return 'shellos'
        }
        case 'gastrodon-west': {
            return 'gastrodon'
        }
        case 'pumpkaboo': {
            document.querySelector(`#${type}-name`).textContent = 'Pumpkaboo';
            return 'pumpkaboo-average';
        }
        case 'gourgeist': {
            document.querySelector(`#${type}-name`).textContent = 'Gourgeist';
            return 'gourgeist-average';
        }
        case 'sinistcha': {
            let pokemonImg = './images/sinistcha.png';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Sinistcha';
            break
        }
        case 'ogerpon-wellspring': {
            let pokemonImg = './images/wellspring.webp';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Ogerpon';
            break
        }
        case 'ogerpon-hearthflame': {
            let pokemonImg = './images/hearthflame.webp';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Ogerpon';
            break
        }
        case 'ogerpon-cornerstone': {
            let pokemonImg = './images/cornerstone.webp';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Ogerpon';
            break
        }
        case 'shellos-east': {
            let pokemonImg = './images/shellos-east.png';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Shellos';
            break
        }
        case 'gastrodon-east': {
            let pokemonImg = './images/gastrodon-east.png';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Gastrodon';
            break
        }
        default:
            return name;
    }
};

