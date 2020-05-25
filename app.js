/* 
GAME FUNCTION:

*/

// Game Values
let min = 0,
 max = 5;



// UI Elements
const dealButton = document.querySelector('#deal-btn');


// Card is dealt
dealButton.addEventListener('click', function () {
 let currentCard = getRandomNum(min, max)

 function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
 }
 console.log(currentCard);
 console.log(max);

 max -= 1;

 if (max === 0) {
  location.reload();
  browsingData.removeLocalStorage();
 }
})






// Get winning number