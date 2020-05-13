// show/hide elements

$("#chose-category").click(function() {
  
  $("#welcome").addClass("hide");
  $("#categories").removeClass("hide");
  
});

$(".category-btn").click(function() {
  
  $("#categories").addClass("hide");
  $("body").removeClass("index-image").addClass("background-blurry");
  $("#question-wrapper").removeClass("hide");
  $("#link-victory").removeClass("hide");
  $(".answers-counter").removeClass("hide");
  $("#counter-btn").removeClass("hide");
  
});

$("#restart-btn").click(function() {
  
  $("#questions").addClass("hide");
  $("#categories").removeClass("hide");
  
});

$("#again").click(function() {
  
  $("#victory").addClass("hide");
  $("#link-victory").addClass("hide");
  $(".answers-counter").addClass("hide");
  $("#categories").removeClass("hide");
  $("body").removeClass("background-blurry").addClass("index-image");
});

$("#link-victory").click(function() {
  
  $("#link-victory").addClass("hide");
  $("#counter-btn").addClass("hide");
  $("#question-wrapper").addClass("hide");
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
		category: "Politics",
		type: "multiple",
		difficulty: "medium",
		question: "Who was the British Prime Minister at the outbreak of the Second World War?",
		correct_answer: "Neville Chamberlain",
		incorrect_answers: ["Clement Attlee", "Winston Churchill", "Stanley Baldwin"],
    },
    {
        category: "Entertainment: Video Games",
        type: "multiple",
        difficulty: "easy",
        question: "Which of the following is not a character in the Street Fighter series?",
        correct_answer: "Mai Shiranui",
        incorrect_answers: ["Laura Matsuda", "Sakura Kasugano", "Ibuki"
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

/*
function apiTranslator(data) {
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


// TRANSLATOR for API

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
function apiTranslator(data) {
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

// Countdown timer
let timeleft = 10;
let downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("counter-btn").innerHTML = "Time's up!";
  } else {
    document.getElementById("counter-btn").innerHTML = timeleft + " s";
  }
  timeleft -= 1;
}, 1000);

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