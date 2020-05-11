// show/hide elements

$("#chose-category").click(function() {
  
  $("#welcome").addClass("hide");
  $("#categories").removeClass("hide");
  
});

$(".category-btn").click(function() {
  
  $("#categories").addClass("hide");
  $("#question-wrapper").removeClass("hide");
  $("#link-victory").removeClass("hide");
  $("body").removeClass("index-image").addClass("background-blurry");
  
});

$("#restart-btn").click(function() {
  
  $("#questions").addClass("hide");
  $("#categories").removeClass("hide");
  
});

$("#again").click(function() {
  
  $("#victory").addClass("hide");
  $("#link-victory").addClass("hide");
  $("#categories").removeClass("hide");
  $("body").removeClass("background-blurry").addClass("index-image");
});

$("#link-victory").click(function() {
  
  $("#link-victory").addClass("hide");
  $("#question-wrapper").addClass("hide");
  $("#victory").removeClass("hide");
  $("body").removeClass("background-blurry").addClass("index-image");
});

// VARIABLES

var questions = [
    {
        question: "What is 1 + 1?",
        answers: [
            {text: "2", correct: true },
            {text: "22", correct: false },
            {text: "11", correct: false },
            {text: "7", correct: false }
        ]
    },
    {
        question: "Why did the chicken cross the road?",
        answers: [
            {text: "To run away!", correct: false },
            {text: "To get to the other side", correct: true },
            {text: "This again?", correct: false },
            {text: "7", correct: false }
        ]
    }
] 

const questionElement = document.getElementById("question")

var shuffledQuestions, currentQuestionIndex

const answerButtonsElement = document.getElementById("answers")

// FUNCTIONS

// Starts the game with random question and initiates setNextQuestion function
function startGame() {
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
}

// Sets the next question randomly
function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

// Picks the next question and presents the answers
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn","btn-scaled")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        //button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
 