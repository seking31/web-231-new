// biome-ignore lint/suspicious/noRedundantUseStrict: <explanation>
'use strict';
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Sara King
      Date: 02-22-25

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ['10', '4', '-6', '5', '-7'];
let timeID;
const questionList = document.querySelectorAll('div#quiz input');
// Elements in the quiz page
const startQuiz = document.getElementById('startquiz');
const quizClock = document.getElementById('quizclock');
const overlay = document.getElementById('overlay');
// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

startQuiz.onclick = () => {
  overlay.className = 'showquiz';
  timeID = setInterval(countdown, 1000);
};

function countdown() {
  if (timeLeft === 0) {
    clearInterval(timeID);
    const totalCorrect = checkAnswers();

    if (totalCorrect === correctAnswers.length) {
      alert('Congratulations! You got 100%!');
    } else {
      alert(
        `You got ${correctAnswers.length - totalCorrect} incorrect out of ${
          correctAnswers.length
        }.`
      );
      timeLeft = quizTime;
      quizClock.value = timeLeft;
      overlay.className = 'hidequiz';
    }
  } else {
    timeLeft--;
    quizClock.value = timeLeft;
  }
}

// Declare the ID for timed commands
// and the node list for questions

/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
  let correctCount = 0;

  for (let i = 0; i < questionList.length; i++) {
    if (questionList[i].value === correctAnswers[i]) {
      correctCount++;
      questionList[i].className = '';
    } else {
      questionList[i].className = 'wronganswer';
    }
  }
  return correctCount;
}
