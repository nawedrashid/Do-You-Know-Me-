var readlineSync = require("readline-sync");
var score = 0;
var highscores = [{
    name: "Nawed",
    score: 5,
}
]
var question = [
    {
      question: "Where do I live ? ",
      answer: "Kolkata"
    },
    {
      question: "Which sport do I like ? ",
      answer: "Football"
    },
    {
      question: "Which club do I support ? ",
      answer: "Manchester United"
    },
    {
      question: "What kind of bike do I like to ride ? ",
      answer: "Naked"
    },
    {
      question: "What is my favourite food ? ",
      answer: "Pizza"
    }
];
function welcome(){
  var username = readlineSync.question("What is your name ? ")
  console.log("Welcome "+ username +" to DO YOU KNOW NAWED ? ");
}
function play(question, answer){
  var useranswer = readlineSync.question(question);
  if(useranswer.toLowerCase() === answer.toLowerCase()){
    console.log("Right!");
    score = score + 1;
  }
  else{
      console.log("Wrong!");
  }
  console.log("Current Score: ",score);
  console.log("-------------")
}
function game(){
  for(var i=0; i<question.length; i++){
    var currentquestion = question[i];
    play(currentquestion.question,currentquestion.answer)
  }
}
function showscores(){
  console.log("YAY! You Scored: ",score);
  console.log("Check out the High Scores, if you should be there ping me and I'll update it");
  highscores.map(score=>console.log(score.name," : ",score.score))
}
welcome();
game();
showscores();