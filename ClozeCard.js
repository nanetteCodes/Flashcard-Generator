var inquirer = require("inquirer");

var clozeArray = [];
var loop = 1;

var ClozeCard = function(text, cloze) {
    this.text = text;//quest.
    this.cloze = cloze;//cloze of quest.
    // this.displayCloze = function() {
    //   var close = clozeDelete;
    // }
    // this.partial = function(){
    //   var partial = text.replace(clozeDelete, "...");
    // }
    // this.printText = function() {
    //   var fullText = text;
    // }
    this.userInput = function(){
      if (loop <=10){
        inquirer.prompt([
          {
          name: "show",
          message: "Enter the part of the question to show"
        },{
          name: "hide",
          message:"Enter the part of the question to hide"
        },{
          name: "correctAnswer",
          message: "Enter the answer"

        },{
          type: "confirm",
          message:"Would you like to create another question?",
          name:"nextOne",
          default: true
        }]).then(function(answers){
          if (answers.nextOne){
          show = answers.show;
          hide = answers.hide;
          correctAnswer = answers.correctAnswer;
          //push cards into the clozeArray
          var newClozeCard = new ClozeCard(show, hide, correctAnswer);
          clozeArray.push(newClozeCard);
          loop++;
          newClozeCard.userInput();
        } else{
          console.log("thanks! come again soon ;)");
        }//else
      });//then
    }//if
  }//userInput
}//ClozeCard

module.exports = ClozeCard;
