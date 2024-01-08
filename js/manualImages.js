// manually setting photos
function manualImg(name, type) {
    if (name === 'shellos-west') {
        return 'shellos';
    } else if (name === 'gastrodon-west') {
        return 'gastrodon';
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
    }
};