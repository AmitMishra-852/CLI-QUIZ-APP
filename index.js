var readlinesync = require("readline-sync")
const chalk = require('chalk');
var score = 0;

var userName=readlinesync.question(chalk.blue("what's your Name: "))
console.log(chalk.blue("welcome "+userName))
var userResponse=readlinesync.question(userName+" are u one of the marval's fan: ")

if(userResponse==="yes"){
  console.log(chalk.blue("ooh! great lets see"))
console.log("--------------------------")
}else{
    console.log(chalk.blue("alright by"))
}

if(userResponse==="yes")
{
//--------- playfunction--------------
function play(question, answer) 
{
  var useranswer = readlinesync.question(chalk.blue(question))
  if (useranswer===answer) 
  {
    console.log(chalk.blue("right"))
    score = score + 1;
    console.log(chalk.green(score))
    

    console.log("-------------------------------")
  }
  else
  {
    console.log(chalk.blue("wrong"))
    score = score;
    console.log(chalk.blue(score))

    console.log("-------------------------------")
  }

}

var datacollectionarea1 = {
  question: "How many heroes make up the original Avengers Team?: \n (a)four \n (b)six \n (c)twelve \n (d)sixteen \n" ,
  answer:"b"
}
var datacollectionarea2 = {
  question: "What is the name of the country Black Panther rules over?:  \n (a)asgard \n (b)kamba \n (c)wacanda \n (d)wacamba \n",
  answer: "c"
}

var datacollectionarea3 = {
  question: "What is Killmonger’s relationship to Black Panther?:  \n (a)cousin \n (b)brother \n (c)father \n a(d)son \n",
  answer: "a"
}

var datacollectionarea4 = {
  question: "What is Hawkeye's real name?: \n (a)Tony Stark \n (b)Steve Rogers \n (c)bruce banner \n (d)clint barton \n",
  answer: "d"
}

var datacollectionarea5 = {
  question: "What rare metal is found in Wakanda?:  \n (a)Adamantium \n (b)Opal \n (c)vibranium \n (d)Emerald \n",
  answer: "c"
}

var questions = [datacollectionarea1,datacollectionarea2,datacollectionarea3,datacollectionarea4,datacollectionarea5]

for (i = 0; i <questions.length; i++) {
  var accessquestion = questions[i];
  play(accessquestion.question, accessquestion.answer)

}
console.log(userName+" you have scored: "+score+"points")

if(score>=4){
  console.log("well played "+ userName)
}else{
  console.log("better luck next time "+userName)
}
}