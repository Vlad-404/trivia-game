// VARIABLES

const questionWrapper = document.getElementById("question-wrapper")

const questionElement = document.getElementById("question")

const restartButton = document.getElementById("restart-btn")

const nextButton = document.getElementById('next-btn')

const timerButton = document.getElementById("timer-btn")

const answerButtonsElement = document.getElementById("answers")

const controllButtons = document.getElementById("controlls")

const categoryButtons = document.getElementsByClassName("category-btn")

const answerButtons = document.getElementsByClassName("answer")

// NAVIGATION

$("#category-selection").click(function() {
  
  $("#welcome").addClass("hide");
  $("#categories").removeClass("hide");
});

$(".category-btn").click(function() {
  
  $("#categories").addClass("hide");
  $("body").removeClass("index-image").addClass("background-blurry");
  $("#question-wrapper").removeClass("hide");
  $("#link-victory").removeClass("hide");
  $(".answers-counter").removeClass("hide");
  $("#timer-btn").removeClass("hide");
  //clearInterval(setTimer); ?
  showQuestion();
});

$("next-btn").click(function() {
    $("next-btn").toggleClass("hide");
    $("timer-btn").toggleClass("hide");
    //clearStatusClass(document.body);
    setTimer();
    //fetchQuestionsGeneral();
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
  $("#timer-btn").addClass("hide");
  $("#question-wrapper").addClass("hide");
  $("#victory").removeClass("hide");
  $("body").removeClass("background-blurry").addClass("index-image");
});



// API 
 
// Gets the questions
function fetchQuestionsGeneral() {
    fetch("https://opentdb.com/api.php?amount=1&type=multiple")
        .then(results => {
            if (results.ok) {
                console.log("Questions retrieved!")
            } else {
                console.log("Problem with getting the questions")
            }
            return results.json()
        })
        .then(data => {
            console.log(data)
            formattedQuestion = data.results[0].question
            //questionElement.innerText = formattedQuestion
            
            
            const formattedAnswers = []
            correctAnswer = data.results[0].correct_answer
            incorrectAnswers = data.results[0].incorrect_answers
               incorrectAnswers.forEach(answer => {
                   formattedAnswers.push(answer)
               });
            
            formattedAnswers.push(correctAnswer)
            console.log("Formatted", formattedAnswers)
            /*
            answerButtons.innerText.forEach(answer => {
                const button = document.createElement("button")
                button.innerText = shuffledAnswers
                button.classList.add("btn","btn-scaled", "answer")
                if (answer.correctAnswer) {
                    button.dataset.correct = answer.correct
                } else {
                    wrongAnswer()
                }
                button.addEventListener("click", selectAnswer)
            }) }
            
            function shuffledAnswers(formattedAnswers) {
                let currentIndex = formattedAnswers.length, temporaryValue, randomIndex;

                while (0 !== currentIndex) {
                    randomIndex = Math.Floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    temporaryValue = formattedAnswers[currentIndex];
                    formattedAnswers[currentIndex] = formattedAnswers[randomIndex];
                    formattedAnswers[randomIndex] = temporaryValue;
                }
                return formattedAnswers;
            }*/
            
            
            console.log(incorrectAnswers)
            //console.log(formattedAnswers)

            console.log(formattedQuestion)
            return formattedQuestion
        })
        
        /*.then(loadedQuestions => {
            console.log(loadedQuestions.results);
            questions = loadedQuestions.results.map(loadedQuestion => {
            const formattedQuestion = {
                question: loadedQuestion.question
            };

            const answerChoices = [...loadedQuestion.incorrect_answers];

            answerChoices.forEach((choice, index) => {
                formattedQuestion["choice" + (index + 1)] = choice;
            });

            console.log(formattedQuestion);
            return formattedQuestion;
            });
        })*/
        .catch(err => {
            console.error(err);
        });
}

//questionElement.innerText = formattedQuestion

// FUNCTIONS

// Picks the next question and presents the answers
function showQuestion() {
    questionElement.innerHTML = formattedQuestion
    /*question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.choice
        button.classList.add("btn","btn-scaled", "answer")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        } else if (answer.false) {
            wrongAnswer()
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })*/
}

// Countdown timer
function setTimer() {
    let timeleft = 5;
    let countdownTimer = setInterval(function(){
  
    if(timeleft <= 0){
        clearInterval(countdownTimer);
        document.getElementById("timer-btn").innerHTML = "Time's up!";
        timerButton.classList.add("wrong")
        timerButton.addEventListener("click", questionsToCategories)
    } else {
        document.getElementById("timer-btn").innerHTML = timeleft + " s";
    }
    timeleft -= 1;
    }, 1000);
}

// Go back to category selection after failed answer or timed out
function wrongAnswer() {
    timerButton.classList.add("hide")
    restartButton.classList.remove("hide")
    restartButton.addEventListener("click", questionsToCategories)
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
    linkVictory.className = "hide";
}

// Checks if the answer is correct or not, adds apropriate class and displays apropriate button
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
} 

// After clicking an answer, disable other ones
function disableOtherAnswers() {
    $(".answer").not(this).prop("disabled", true);
}

// Clears correct and wrong classes
function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}


/*function apiTranslator(data) {
  let answer = {
    text: "",
    correct: true,
  };
  answers.text = data.results.correct_answer;
  question.push(answer);
  data.incorrect_answers.forEach((val) => {
    answer.text = val;
    answer.correct = false;
  });
  question.push(answer);
}*/

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
} */


// Questions

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