// Show/hide elements

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
  clearInterval(setTimer);
  startGame();
  //resetTimer();
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

const questionWrapper = document.getElementById("question-wrapper")

const questionElement = document.getElementById("question")

const restartButton = document.getElementById("restart-btn")

const nextButton = document.getElementById('next-btn')

const timerButton = document.getElementById("counter-btn")

const answerButtonsElement = document.getElementById("answers")

const controllButtons = document.getElementById("controlls")

const categoryButtons = document.getElementsByClassName("category-btn")

let shuffledQuestions, currentQuestionIndex

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
    setTimer()
}

// Picks the next question and presents the answers
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn","btn-scaled", "answer")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        } else if (answer.false) {
            wrongAnswer()
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

// For correct answer
function nextQuestion() {
    nextButton.classList.remove("hide")
    timerButton.classList.add("hide")
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
    timerButton.classList.remove("hide")
})

// Countdown timer
function setTimer() {
    let timeleft = 5;
    let countdownTimer = setInterval(function(){
  
    if(timeleft <= 0){
        clearInterval(countdownTimer);
        document.getElementById("counter-btn").innerHTML = "Time's up!";
        timerButton.classList.add("wrong")
        timerButton.addEventListener("click", questionsToCategories)
    } else {
        document.getElementById("counter-btn").innerHTML = timeleft + " s";
    }
    timeleft -= 1;
    }, 1000);
}

// Go back to category selection after failed answer or timed out
function wrongAnswer() {
    timerButton.classList.add("hide")
    restartButton.classList.remove("hide")
    restartButton.addEventListener("click", questionsToCategories)
    //resetTimer()
    //clearInterval(countdownTimer);
}

// Returns the player to category selection
function questionsToCategories() {
    const categoriesCard = document.getElementById("categories")
    let linkVictory = document.getElementById("link-victory")
    questionWrapper.classList.add("hide")
    categoriesCard.classList.remove("hide")
    restartButton.className = "question-btn btn wrong hide";
    document.body.classList.remove("background-blurry")
    document.body.classList.add("index-image")
    timerButton.innerHTML = "6 s"
    clearStatusClass(timerButton)
    linkVictory.className = "hide";
}

// Resets the question screen to prepare it for new question
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

// Checks if the answer is correct or not, adds apropriate class and displays apropriate button
/*
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide")
    } else {
        restartButton.classList.remove("hide")
        timerButton.classList.add("hide")
    }
} 
 */
function selectAnswer(e) {
    const selectedButton = e.target
    clearStatusClass(selectedButton)
    if (selectedButton.dataset.correct) {
        selectedButton.classList.add("correct")
        disableOtherAnswers()
        nextQuestion()
    } else {
        selectedButton.classList.add("wrong")
        wrongAnswer()
        disableOtherAnswers()
    }
    
    //const correct = selectedButton.dataset.correct 
    //const wrong = selectedButton.dataset.wrong
    //setStatusClass(selectedButton)
} 

// After clicking an answer, disable other ones
function disableOtherAnswers() {
    $(".answer").not(this).prop("disabled", true);
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

// Questions

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
        answers: [
            {text: "Clemet Attlee", correct: false },
            {text: "Winston Churchil", correct: false },
            {text: "Neville Chamberlain", correct: true },
            {text: "Stanley Baldwin", correct: false },
        ]
		/*correct_answer: "Neville Chamberlain",
		incorrect_answers: ["Clement Attlee", "Winston Churchill", "Stanley Baldwin"], */
    },
    {
        category: "Entertainment: Video Games",
        type: "multiple",
        difficulty: "easy",
        question: "Which of the following is not a character in the Street Fighter series?",
        answers: [
            {text: "Laura Matsuda", correct: false },
            {text: "Ibuki", correct: false },
            {text: "Mai Shiranui", correct: true },
            {text: "Sakura Kasugano", correct: false }
        ]  /*
        correct_answer: "Mai Shiranui",
        incorrect_answers: ["Laura Matsuda", "Sakura Kasugano", "Ibuki"
            ]  */
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