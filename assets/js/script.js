const startQuizBtn = document.getElementById("start-quiz");
// declare a global variable to hold current question index - starts off with 0
let currentQuestion = 0;
const questionContainer = document.getElementById("questionContainer");
let time = 75;
let myTime;
let correctWrongMessage = document.getElementById("correctnessMessage");
const saveInitialsBtn = document.getElementById("save-initials");
const initialsInput = document.querySelector("#initials");

startQuizBtn.addEventListener("click", e => startQuiz(e));

var questions = [{
    question: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    correctAnswer: 'alerts'
}, {
    question: 'The condition in an if/else statement is enclosed with _____',
    choices: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
    correctAnswer: 'parenthesis'
}, {
    question: 'Arrays in JavaScript can be used to store _____',
    choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    correctAnswer: 'all of the above'
}, {
    question: 'String values must be enclosed within _____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
    correctAnswer: 'quotes'
}, {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['Javascript', 'terminal/bash', 'for loops', 'console.log'],
    correctAnswer: 'console.log'
}];

var startQuiz = function (e) {
    //prevents the browswer from refreshing
    e.preventDefault()
    document.getElementById("startContainer").setAttribute("class", "hidden");
    document.getElementById("questionContainer").setAttribute("class", "quizSection");
    displayNextQuestion()
    myTime = setInterval (() => {
        document.getElementById("quizTimer").innerText="Time: " + time
        time --
            if (time === 0){
                clearInterval(myTime)
                endQuiz()
            }
    }, 1000)
}

var displayNextQuestion = function () {
    var activeQuestion = questions[currentQuestion];
    questionContainer.innerHTML = "";
    var questionEl = document.createElement("p");
    questionEl.innerText = activeQuestion.question;
    questionContainer.appendChild(questionEl);
    for (let i = 0; i < activeQuestion.choices.length; i++) {
        var answersEl = document.createElement("button");
        answersEl.classList.add("btn-choices");
        answersEl.innerText = activeQuestion.choices[i];
        questionContainer.appendChild(answersEl);
        answersEl.addEventListener("click", function (event) {
            event.preventDefault();
            checkAnswer(event.target.innerText)
            currentQuestion++
            console.log(currentQuestion)
                if (currentQuestion === 5) {
                    clearInterval(myTime)
                    endQuiz()
                }
                else {displayNextQuestion()}
        })
    }
}

var checkAnswer = function (userChoice) {
    if (userChoice === questions[currentQuestion].correctAnswer) {
        correctWrongMessage.innerText = "Correct!";
    }
    else {
        time -= 5
        correctWrongMessage.innerText = "Wrong!";
    }
}

var endQuiz = function() {
    document.getElementById("questionContainer").setAttribute("class", "hidden");
    document.getElementById("quizTimer").setAttribute("class", "hidden");
    document.getElementById("initialsContainer").setAttribute("class", "initials");
    document.getElementById("finalScore").innerText="Your final score is "+time+"."
}

//add event listener to button on form that calls saveinitials
saveInitialsBtn.addEventListener("click", e => saveInitials(e));

var saveInitials = function() {
    localStorage.setItem("initials", initialsInput.value)
    localStorage.setItem("score", time)
    document.getElementById("startContainer").setAttribute("class", "startQuizSection");
    document.getElementById("initialsContainer").setAttribute("class", "hidden");
    correctWrongMessage.setAttribute("class", "hidden")
}