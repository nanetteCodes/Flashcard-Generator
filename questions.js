var inquirer = require('inquirer');
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
//empty array for storing cards
var basiccardArray = [];
var clozeCardsArray = [];
var loop = 1;

// creates new unique questions using constructors
var cardBasic = new BasicCard();
var cardCloze = new ClozeCard();

console.log(cardCloze);

  inquirer.prompt([/* Pass your questions in here */
  {//display
    type: "list",
    message:"What type of Flashcard do you want to make?",
    choices: ["Basic Flashcards", "Cloze Flashcards"],
    name:"cardType"
  }
]).then(function (choices) {

    if(choices.cardType === "Basic Flashcards"){
      console.log("you choose, Basic Flashcards");
      cardBasic.userInput();
      //BasicCard();

    }
    else{
      console.log("You choose Cloze Flashcards");
      cardCloze.userInput();
      //ClozeCard();
    }
  });//.then

// function (nxtQuestion){
//   inquirer.prompt([/* Pass your questions in here */
//     {//display
//       type: "confirm",
//       message:"Would you like to create another question?",
//       name:"nextOne",
//       default: true
//     }
//   }]).then(function(next) {
//
//   // If the user guesses the password...
//   if (next.nextOne) {
//     newClozeCard.userInput();
//
//   }
