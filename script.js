// ===================== questions =============== 
var questions = [ // array of object for multiple questions
    {
        question: "What is the capital of France?", //questions
        choices: ["London", "Paris", "Rome", "Berlin"], // choices for answer
        answer: 1 //answers are shown in index
    },
    {
        question: "Which planet is closest to the Sun?",
        choices: ["Venus", "Mars", "Mercury", "Saturn"],
        answer: 2
    },
    {
        question: "What is the largest ocean in the world?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        answer: 0
    },
    {
        question: "What is the national animal of Australia?",
        choices: ["Kangaroo", "Koala", "Emu", "Platypus"],
        answer: 0
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        choices: ["China", "Japan", "Thailand", "India"],
        answer: 1
    },
    {
        question: "Who is the author of the Harry Potter book series?",
        choices: ["J.R.R. Tolkien", "J.K. Rowling", "C.S. Lewis", "George R.R. Martin"],
        answer: 1
    },
    {
        question: "What is the largest mammal in the world?",
        choices: ["Elephant", "Whale", "Giraffe", "Hippopotamus"],
        answer: 1
    },
    {
        question: "What is the chemical symbol for the element Gold?",
        choices: ["Au", "Ag", "Cu", "Fe"],
        answer: 0
    },
    {
        question: "Which city is known as the 'Big Apple'?",
        choices: ["New York City", "Los Angeles", "Chicago", "Houston"],
        answer: 0
    }
];

var score = 0; // score variable
var currentQuestion = 0; // currentquestion variable

function displayQuestion() { // to show the question and options
    var questionElement = document.getElementById("question"); // html element to show question
    var choicesElement = document.getElementById("choices"); // html element to show options

    // Display the current question
    questionElement.textContent = questions[currentQuestion].question;

    // Clear the choices container
    choicesElement.innerHTML = "";

    // Iterate over the choices and create buttons for each choice
    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
        var choice = document.createElement("button");
        choice.textContent = questions[currentQuestion].choices[i];
        choice.setAttribute("onclick", "selectAnswer(" + i + ")");
        choicesElement.appendChild(choice);
    }
}

function selectAnswer(choice) {
    // Check if the selected choice is correct and update the score
    if (choice === questions[currentQuestion].answer) {
        score++;
    }

    // Store the user's answer in local storage
    localStorage.setItem("answer" + currentQuestion, choice);

    
    // Move to the next question or display the result if it's the last question
    currentQuestion++;
    if (currentQuestion === questions.length) {
        displayResult();
    } else {
        displayQuestion();
    }
}

function displayResult() {
    var container = document.querySelector(".container");
    container.innerHTML = "<h1>Test App</h1><div id='score'>Your score: " + score + "/" + questions.length + "</div>";
}

function checkAnswer() {
    var selectedAnswer = document.querySelector("input[name='choice']:checked");
    if (selectedAnswer) {
        var choiceIndex = parseInt(selectedAnswer.value);
        selectAnswer(choiceIndex);
    }
}

// Initial display of the first question
displayQuestion();


// Store the questions in local storage
localStorage.setItem("questions", JSON.stringify(questions));

