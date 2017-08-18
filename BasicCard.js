var inquirer = require("inquirer");

var basicArray = [];
var loop = 1;

var BasicCard = function(front, back) {
  this.front = front; //question txt on front of card
  this.back = back; //answer txt on back of card
  this.userInput = function() {
    if (loop <= 10) {
      inquirer.prompt([{
        name: "question",
        message: "Enter a question"
      }, {
        name: "correctAnswer",
        message: "Enter the answer"
      },{
        type: "confirm",
        message:"Would you like to create another question?",
        name:"nextOne",
        default: true

      }]).then(function(answers) {
        if (answers.nextOne) {
          question = answers.question;
          answer = answers.correctAnswer;
          var newBasicCard = new BasicCard(question, answer);
          basicArray.push(newBasicCard);
          loop++;
          newBasicCard.userInput();
        } else {
          console.log("thanks! come again soon ;)");
        } //else
      }) //then
    } //if
  } //userInput
} //BasicCard
//file should define a Node module that exports a constructor for creating basic flashcards
module.exports = BasicCard;
