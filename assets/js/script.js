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
  $(".answers-counter").removeClass("hide");
  
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
  $(".answers-counter").removeClass("hide");
});

$("#link-victory").click(function() {
  
  $("#link-victory").addClass("hide");
  $("#question-wrapper").addClass("hide");
  $(".answers-counter").addClass("hide");
  $("#victory").removeClass("hide");
  $("body").removeClass("background-blurry").addClass("index-image");
});

// VARIABLES

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
            {text: "This again?", correct: false },
            {text: "7", correct: false }
        ]
    }
] 

// TRANSLATOR for API
/*

const question = [
  {
    question: "What is 1 + 1?",
    answers: [
      { text: "2", correct: true },
      { text: "22", correct: false },
      { text: "11", correct: false },
      { text: "7", correct: false },
      // added values
	  { text: "Neville Chamberlain", correct: true },
      { text: "Clement Attlee", correct: false },
    ],
},
];
const results = [
	{
		category: "Politics",
		type: "multiple",
		difficulty: "medium",
		question: "Who was the British Prime Minister at the outbreak of the Second World War?",
		correct_answer: "Neville Chamberlain",
		incorrect_answers: ["Clement Attlee", "Winston Churchill", "Stanley Baldwin"],
	},
];
function createAnswers(data) {
  let answer = {
    text: "",
    correct: true,
  };
  answers.text = data.correct_answer;
  question.push(answer);
  data.incorrect_answers.forEach((val) => {
    answer.text = val;
    answer.correct = false;
  });
  question.push(answer);
}
createAnswers(results);

*/

const questionElement = document.getElementById("question")

const nextButton = document.getElementById('next-btn')

const answerButtonsElement = document.getElementById("answers")

let shuffledQuestions, currentQuestionIndex  // shuffles the questions and sets the index on the current question

// FUNCTIONS

// Starts the game with random question and initiates setNextQuestion function
function startGame() {
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
}

// Sets the next question randomly
function setNextQuestion() {
    resetState()
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
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

// Resets the question screen to prepare it for new question
function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

// Checks if the answer is correct or not and adds apropriate class
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}