// CHANGE BACKGROUND THEME
let radioSelectors = document.body.querySelectorAll('input[type="radio"]');

radioSelectors.forEach((radioSelector) => {
  radioSelector.addEventListener('change', function () {

    // access both user-card and dl-card divs
    let cardBgs = document.querySelectorAll('.change-card');
    let cardHeaderTexts = document.querySelectorAll('.card-header');
    let adTexts = document.querySelectorAll('.ad');

    // if any one of the specific radio buttons is checked...
    if (this.checked) {
      // store value in variable "theme"
      const theme = this.value;
      // pass theme into switch statement
      switch (theme) {
        // if theme is dawn
        case 'dawn': {
          // choose theme
          // if class contains galaxy, minty, or order, remove those and add dawn-card class
          cardBgs.forEach((cardBg) => {
            // remove other theme classes and add dawn
            cardBg.classList.remove('galaxy-card', 'minty-card', 'order-card');
            cardBg.classList.add('dawn-card');
          });
          // edit header text per theme
          cardHeaderTexts.forEach((headerText) => {
            headerText.classList.remove('galaxy-header', 'order-header');
            headerText.classList.add('dawn-minty-header');
          });
          adTexts.forEach((adText)=>{
            adText.classList.remove('galaxy-ad-bg-color');
            adText.classList.add('ad-bg-color');
          });
         
          break;
        }
        case 'galaxy': {
          // choose theme
          cardBgs.forEach((cardBg) => {
            cardBg.classList.remove('dawn-card', 'minty-card', 'order-card');
            cardBg.classList.add('galaxy-card');
          });
          cardHeaderTexts.forEach((headerText) => {
            headerText.classList.remove('dawn-minty-header', 'order-header');
            headerText.classList.add('galaxy-header');
          });
          // change ad text at bottom to a brighter color
          adTexts.forEach((adText)=>{
            adText.classList.remove('ad-bg-color');
            adText.classList.add('galaxy-ad-bg-color');
          });
          break;
        }
        case 'minty': {
          cardBgs.forEach((cardBg) => {
            cardBg.classList.remove('dawn-card', 'galaxy-card', 'order-card');
            cardBg.classList.add('minty-card');
          });
          cardHeaderTexts.forEach((headerText) => {
            headerText.classList.remove('galaxy-header', 'order-header');
            headerText.classList.add('dawn-minty-header');
          });
          adTexts.forEach((adText)=>{
            adText.classList.remove('galaxy-ad-bg-color');
            adText.classList.add('ad-bg-color');
          });
          break;
        }
        case 'order': {
          cardBgs.forEach((cardBg) => {
            cardBg.classList.remove('dawn-card', 'minty-card', 'galaxy-card');
            cardBg.classList.add('order-card');
          });
          cardHeaderTexts.forEach((headerText) => {
            headerText.classList.remove('dawn-minty-header', 'galaxy-header');
            headerText.classList.add('order-header');
          });
          adTexts.forEach((adText)=>{
            adText.classList.remove('galaxy-ad-bg-color');
            adText.classList.add('ad-bg-color');
          });
          break;
        }
      }

    }

  })
})