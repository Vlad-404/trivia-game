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

const loadingScreen = document.getElementById("loading-screen")

// NAVIGATION

$("#category-selection").click(function() {
  
  $("#welcome").addClass("hide");
  $("#categories").removeClass("hide");
});

$(".category-btn").click(function() {
  $("#categories").addClass("hide");
  showQuestion();
  setTimer();
});

$("next-btn").click(function() {
    $("next-btn").addClass("hide");
    $("timer-btn").removeClass("hide");
    clearStatusClass(document.body);
    clearStatusClass(timerButton);
    setTimer();
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

// FUNCTIONS

// Function that uses API to get questions and anwers and makes them usable by the game
function fetchQuestionsGeneral() {
    return fetch("https://opentdb.com/api.php?amount=1&type=multiple")
        .then(results => {
            if (results.ok) {
                console.log("Questions retrieved!")
            } else {
                console.log("Problem with getting the questions")
            }
            return results.json()
        })
        .then(results => {
            return results
        })
        .then(data => {
            console.log(data)
            formattedQuestion = data.results[0].question
            /*questionElement.innerText = formattedQuestion
            
            
            const formattedAnswers = []
            correctAnswer = data.results[0].correct_answer
            incorrectAnswers = data.results[0].incorrect_answers
               incorrectAnswers.forEach(answer => {
                   formattedAnswers.push(answer)
               });
            
            formattedAnswers.push(correctAnswer)
            console.log("Formatted", formattedAnswers)
            
            console.log(incorrectAnswers)
            //console.log(formattedAnswers)
            */
            console.log(formattedQuestion)
            return formattedQuestion
        })
        .catch(err => {
            console.error(err);
        });
        
}

// Picks the next question and presents the answers
async function showQuestion() {
    $("body").removeClass("index-image").addClass("background-blurry");
    $("#question-wrapper").removeClass("hide");
    $("#link-victory").removeClass("hide");
    $(".answers-counter").removeClass("hide");
    $("#timer-btn").removeClass("hide");
    const formattedQuestion = await fetchQuestionsGeneral();
    questionElement.innerHTML = formattedQuestion;
}

// Countdown timer
function setTimer() {
    let timeleft = 5;
    let countdownTimer = setInterval(function(){
  
    if(timeleft <= 0){
        clearInterval(countdownTimer);
        document.getElementById("timer-btn").innerHTML = "Time's up!";
        timerButton.classList.add("wrong")
        timerButton.addEventListener("click", function(){
        clearStatusClass(timerButton);
        questionsToCategories();
        })
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