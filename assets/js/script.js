// show/hide elements

$("#chose-category").click(function() {
  
  $("#welcome").addClass("hide");
  $("#categories").removeClass("hide");
  
});

$(".btn-grid>.no-style").click(function() {
  
  $("#categories").addClass("hide");
  $("#question-wrapper").removeClass("hide");
  
});

$("#restart-btn").click(function() {
  
  $("#questions").addClass("hide");
  $("#categories").removeClass("hide");
  
});

$("#again").click(function() {
  
  $("#victory").addClass("hide");
  $("#categories").removeClass("hide");
  
});

$(".btn-grid>.no-style").click(function() {
    $("body").removeClass("index-image").addClass("background-blurry");
})

$("#again").click(function() {
    $("body").removeClass("background-blurry").addClass("index-image");
})

$("#link-victory").click(function() {
  
  $("#welcome").addClass("hide");
  $("categories").addClass("hide");
  $("#questions").addClass("hide");
  $("#victory").removeClass("hide");
});

// variables

const nextButton = document.getElementById("next-btn")
const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answers")

let shuffledQuestions, currentQuestionIndex

//console.log(questionElement.innerText)

function startGame() {
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classlist.add("hide")
}

function selectAnswer (e) {

}

// test questions

const questions = [
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
            {text: "Who cares?", correct: false },
            {text: "7", correct: false }
        ]
    }
]