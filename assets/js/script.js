const startQuizBtn = document.getElementById("start-quiz");
// declare a global variable to hold current question index - starts off with 0
let currentQuestion = 0;
const questionContainer = document.getElementById("questionContainer");

startQuizBtn.addEventListener("click", e => startQuiz(e));

var questions = [{
    question: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    correctAnswer: 2
}, {
    question: 'The condition in an if/else statement is enclosed with _____',
    choices: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
    correctAnswer: 2
}, {
    question: 'Arrays in JavaScript can be used to store _____',
    choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    correctAnswer: 3
}, {
    question: 'String values must be enclosed within _____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
    correctAnswer: 2
}, {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['Javascript', 'terminal/bash', 'for loops', 'console.log'],
    correctAnswer: 3
}];

var startQuiz = function (e) {
    //prevents the browswer from refreshing
    e.preventDefault()
    document.getElementById("startContainer").setAttribute("class", "hidden");
    document.getElementById("questionContainer").setAttribute("class", "quizSection");
    displayNextQuestion()
}

var displayNextQuestion = function () {
    var activeQuestion = questions[currentQuestion];
    questionContainer.innerHTML = "";
    var questionEL = document.createElement("p");
    questionEL.innerText = activeQuestion.question;
    questionContainer.appendChild(questionEL);
    for (let i = 0; i < activeQuestion.choices.length; i++) {
        var answersEl = document.createElement("button");
        answersEl.innerText = activeQuestion.choices[i];
        questionContainer.appendChild(answersEl);
        answersEl.addEventListener("click", function (event) {
            event.preventDefault();
            // checkAnswer()
            currentQuestion++
            displayNextQuestion()
        })
    }
}


var checkAnswer

var endQuiz

var saveInitials

var timer

