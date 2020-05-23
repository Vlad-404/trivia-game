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

let linkVictory = document.getElementById("link-victory") // temporary navigation

// NAVIGATION

$("#category-selection").click(function() {
  
  $("#welcome").addClass("hide");
  $("#categories").removeClass("hide");
});

$(".category-btn").click(function() {
  $("#categories").addClass("hide");
  showQuestionContainer();
  setUpQuestion();
});

$("next-btn").click(function() {
    $("next-btn").addClass("hide");
    $("timer-btn").removeClass("hide");
    clearStatusClass(document.body);
    clearStatusClass(timerButton);
    setUpQuestion();
});

$("#again").click(function() {
  
  $("#victory").addClass("hide");
  $("#link-victory").addClass("hide"); // temporary navigation
  $(".answers-counter").addClass("hide");
  $("#categories").removeClass("hide");
  $("body").removeClass("background-blurry").addClass("index-image");
});

// temporary navigation
$("#link-victory").click(function() {  
  
  $("#link-victory").addClass("hide");
  $("#timer-btn").addClass("hide");
  $("#question-wrapper").addClass("hide");
  $("#victory").removeClass("hide");
  $("body").removeClass("background-blurry").addClass("index-image");
});

// FUNCTIONS

// Function that fetches and makes data from API usable
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
        .then(data => {
            console.log("Data: ", data)
            formattedQuestion = data.results[0].question

            correctAnswer = data.results[0].correct_answer
            console.log("Correct answer:", correctAnswer)
            incorrectAnswers = data.results[0].incorrect_answers
            
            let questionsWithAnswers = [formattedQuestion, correctAnswer, incorrectAnswers];

            return questionsWithAnswers
        })
        .catch(err => {
            console.error(err);
        })
        
}

// Picks the next question and presents the answers
function showQuestionContainer() {
    $("body").removeClass("index-image").addClass("background-blurry");
    $("#question-wrapper").removeClass("hide");
    $("#link-victory").removeClass("hide");  // temporary navigation
    $(".answers-counter").removeClass("hide");
    $("#timer-btn").removeClass("hide");
}

async function setUpQuestion() {
    questionElement.innerHTML = "Preparing question...";
    const questionsWithAnswers = await fetchQuestionsGeneral();
    questionElement.innerHTML = questionsWithAnswers[0];
    setTimer();
    //console.log("Show question with answers:", questionsWithAnswers);
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

// Clears correct and wrong classes from answers
function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}