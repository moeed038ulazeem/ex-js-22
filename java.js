var questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "What is 2 + (-3)?",
        choices: ["-1", "2", "5", "0"],
        answer: 0
    },
    {
        question: "who is the current prime minister of pakistan",
        choices: ["Imran Khan", "Asif Ali Zardari", "Mian Muhammad Shahbaz Sharif"],
        answer: 2
    },
    {
        question: "Lemon Contain WHich Type of Acid",
        choices: ["Acitic Acid", "Citric Acid", "Non Of These"],
        answer: 1
    },
    // Add more questions as needed
];

var currentQuestionIndex = 0;
var score = 0;

var questionElement = document.getElementById('question');
var answerButtons = document.querySelectorAll('.answer-button');
var scoreElement = document.getElementById('score');
var nextQuestionButton = document.getElementById('next-question');
var playAgainButton = document.getElementById('play-again');

function loadQuestion() {
    var question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    answerButtons.forEach((button, index) => {
        button.textContent = question.choices[index];
        button.dataset.index = index;
    });
}

function handleAnswerClick(event) {
    var selectedIndex = parseInt(event.target.dataset.index);
    var correctIndex = questions[currentQuestionIndex].answer;
    
    if (selectedIndex === correctIndex) {
        alert("Correct!");
        score++;
        scoreElement.textContent = score;
    } else {
        alert("Try Again!");
    }
}

function handleNextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showEndGame();
    }
}

function showEndGame() {
    questionElement.textContent = "Quiz Over!";
    answerButtons.forEach(button => button.style.display = 'none');
    nextQuestionButton.style.display = 'none';
    playAgainButton.style.display = 'inline-block';
}

function handlePlayAgain() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = score;
    answerButtons.forEach(button => button.style.display = 'inline-block');
    nextQuestionButton.style.display = 'inline-block';
    playAgainButton.style.display = 'none';
    loadQuestion();
}

function handleKeyDown(event) {
    var keyToIndex = {
        '1': 0,
        '2': 1,
        '3': 2,
        '4': 3
    };
    
    var index = keyToIndex[event.key];
    
    if (index !== undefined) {
        answerButtons[index].click();
    }
}

answerButtons.forEach(button => button.addEventListener('click', handleAnswerClick));
nextQuestionButton.addEventListener('click', handleNextQuestion);
playAgainButton.addEventListener('click', handlePlayAgain);
document.addEventListener('keydown', handleKeyDown);

loadQuestion();
