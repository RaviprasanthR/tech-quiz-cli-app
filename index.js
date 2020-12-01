var chalk=require('chalk');
var readlinesync=require('readline-sync');
var score=0;

var username=readlinesync.question('what is your name?\n');
console.log(chalk.magenta.bold('Welcome '+username+' lets get started'));

var qlist_one=[
  {
    question:'Javascript is a scripting language \n a True \n b false',
    answer:'true'
  },
  {
    question:'what is react js? \n a library \n b framework',
    answer:'library'
  },
  {
    question:'HTML is a programming language \n a True \n b False',
    answer:'false'
  },
  {
    question:'which of the following is not an oops concept \n a polymorphism \n b metamorphism \n c abstraction \n d inheritance ',
    answer:'metamorphism'
  }
]

var qlist_two=[
  {
    question:'inside which HTML element do we put the js code? \n a <script> \n b <p> \n c <header>',
    answer:'<script>'
  },
  {
    question:'which is the correct place to insert the js code? \n a head section \n b body section',
    answer:'head section'
  },
  {
    question:'external js file must contain script tag \n a True \n b False',
    answer:'False'
  }
]

function quizapp(question,answer){
  var useranswer=readlinesync.question(question +'\n');
  if(useranswer.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.green.bold('correct!!'));
    score=score+2
  }
  else{
    console.log(chalk.red.bold('wrong!'));
  }
  console.log(chalk.blue('current score: '+score));
  console.log('----------------');
}

for(var i=0;i<qlist_one.length;i++){
  var currentquestion=qlist_one[i];
  quizapp(currentquestion.question,currentquestion.answer);

}
console.log('your score is: '+score);

if(score>4){
  console.log(chalk.magenta.bold('congratulations you have passed the level one \n its time for level two'));
  for(var j=0;j<qlist_two.length;j++){
  var thisquestion=qlist_two[j];
  quizapp(thisquestion.question,thisquestion.answer);
}
console.log('your total score is: '+score);
}