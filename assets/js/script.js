// VARIABLES

const questionsArray = []

const correctAnswer = [] 

const arrayOfIncorrectAnswers = []

let currentQuestionIndex

const questionWrapper = document.getElementById("question-wrapper")

const questionElement = document.getElementById("question")

const restartButton = document.getElementById("restart-btn")

const nextButton = document.getElementById('next-btn')

const timerButton = document.getElementById("timer-btn")

const answerButtonsElement = document.getElementById("answers-div")

const controllButtons = document.getElementById("controlls")

const categoryButtons = document.getElementsByClassName("category-btn")

const answerButtons = document.getElementsByClassName("answer")

const loadingScreen = document.getElementById("loading-screen")

let linkVictory = document.getElementById("link-victory") // temporary navigation

// NAVIGATION

$("#start-button").click(function() {
  
  $("#welcome").addClass("hide");
  $("#categories").removeClass("hide");
});

$(".category-btn").click(function() {

  $("#categories").addClass("hide");
  $("#loading-screen").removeClass("hide");
  $("#question-counter").removeClass("hide");
  setFirstQuestion()
});

function setQuestionUI() {
    $("#loading-screen").addClass("hide");
    $("body").removeClass("index-image").addClass("background-blurry");
    $("#question-wrapper").removeClass("hide");
    $("#link-victory").removeClass("hide");  // temporary navigation
    $("#question-counter").removeClass("hide");
    $("#timer-btn").removeClass("hide");
    setTimer();
}

$("#next-btn").click(function() {
    $("#next-btn").addClass("hide");
    $("#timer-btn").removeClass("hide");
    currentQuestionIndex++;
    setFirstQuestion();                 // temporary
    console.log("Current question index is ", currentQuestionIndex);
    document.getElementById("counter").innerHTML = currentQuestionIndex;
    return currentQuestionIndex;
    //setNextQuestion();
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

// Picks only the first question and presents the UI
async function setFirstQuestion() {
    let setFirstQuestion = await fetchQuestionsGeneral();
    currentQuestionIndex = 0
    questionElement.innerHTML = questionsArray[0];
    
    let allAnswers = [correctAnswer[0], ...arrayOfIncorrectAnswers[0]];
    let shuffledAnswers = allAnswers.sort(() => Math.random() - .5)
    console.log("Array of shuffled answers:", shuffledAnswers);

    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }

    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer       
        button.classList.add("btn", "answer", "btn-scaled")
        answerButtonsElement.appendChild(button)
    })

    setQuestionUI();
    selectAnswer();
    //return currentQuestionIndex;
}

function setNextQuestion() {

    questionElement.innerHTML = questionsArray[currentQuestionIndex];
    
    let allAnswers = [correctAnswer[currentQuestionIndex], ...arrayOfIncorrectAnswers[currentQuestionIndex]];
    let shuffledAnswers = allAnswers.sort(() => Math.random() - .5)
    //console.log("Array of shuffled answers:", shuffledAnswers);

    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }

    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer       
        button.classList.add('btn')
        answerButtonsElement.appendChild(button)
    })
    setTimer();
}

// Countdown timer
let countdownTimer;

function setTimer() {
    timerButton.innerHTML = "6 s"
    let timeleft = 5;
    let countdownTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(countdownTimer);
            document.getElementById("timer-btn").innerHTML = "Time's up!";
            timerButton.classList.add("wrong")
            $(".answer").prop("disabled", true);
            timerButton.addEventListener("click", function(){
                timerButton.classList.remove("wrong");
                questionsToCategories();
            })
        } else {
            document.getElementById("timer-btn").innerHTML = timeleft + " s";
    }
    timeleft--;
    }, 1000);
    $(".answer").click(function() {
        clearTimeout(countdownTimer);
    });
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
    linkVictory.className = "hide";
}

// Checks if the answer is correct or not, adds apropriate class and displays apropriate button
function selectAnswer() {
    $(".answer").click(function(){
        if (correctAnswer.includes(this.innerText)) {
            $(this).addClass("correct");
            disableOtherAnswers()
            nextButton.classList.remove("hide")
            timerButton.classList.add("hide")
        } else {
            $(this).addClass("wrong");
            wrongAnswer()
            disableOtherAnswers()
            }
    });
} 

// After clicking an answer, disable other ones
function disableOtherAnswers() {
    $(".answer").not(this).prop("disabled", true);
}