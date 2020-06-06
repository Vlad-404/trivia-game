const answerButtons = Array.from(document.getElementsByClassName("answer"));
const questionWrapper = document.getElementById("question-wrapper");
const questionCounter = document.getElementById("question-counter");
const restartButton = document.getElementById("restart-btn");
const timerButton = document.getElementById("timer-btn");
let currentQuestion = {};
let allQuestions = [];
let questions = [];
let chooseAnswers = true;
const MAX_QUESTIONS = 3;
let currentQuestionIndex;
let categoryNumber;

$("#start-button").click(function() {
  $("#welcome").addClass("hide");
  $("#categories").removeClass("hide");
});

$(".category-btn").click(function() {
  let categoryNumber = this.getAttribute("data-category");
  $("#categories").addClass("hide");
  $("#loading-screen").removeClass("hide");
  questionCounter.setAttribute("class", "");
  fetchQuestions(categoryNumber);
});

function fetchQuestions(categoryNumber) {
    fetch(`https://opentdb.com/api.php?amount=3&category=${categoryNumber}&difficulty=easy&type=multiple`)
    .then(res => {
        return res.json();
    })
    .then(loadedQuestions => {
        console.log(loadedQuestions.results);
        questions = loadedQuestions.results.map( loadedQuestions => {
            const formattedQuestion = {
                question: loadedQuestions.question
            };
            const eachAnswer = [...loadedQuestions.incorrect_answers];
            formattedQuestion.rightAnswer = Math.floor(Math.random()*3) + 1;
            eachAnswer.splice(formattedQuestion.rightAnswer -1, 0, loadedQuestions.correct_answer);

            eachAnswer.forEach((rightAnswer, index) => {
                formattedQuestion["answer" + (index+1)] = rightAnswer;
            })
            return formattedQuestion;
        });
        setQuestionUI();
        setFirstQuestion();
    })
    .catch(err => {
        console.error(err);
    });
};

function setQuestionUI() {
    $("#loading-screen").addClass("hide");
    $("body").removeClass("background-clear").addClass("background-blurry");
    $("#question-wrapper").removeClass("hide");
    $("#timer-btn").removeClass("hide");
};

function setFirstQuestion() {
    currentQuestionIndex = 0;
    allQuestions = [...questions];
    setNextQuestion();
};

function setNextQuestion() {
    if(allQuestions.length === 0 || currentQuestionIndex >= MAX_QUESTIONS) {
        return victoryScreen();
    }
    currentQuestionIndex++;
    document.getElementById("counter").innerHTML = currentQuestionIndex;
    const questionNumber= Math.floor(Math.random() * allQuestions.length);
    currentQuestion = allQuestions[questionNumber];
    question.innerHTML = currentQuestion.question;

    answerButtons.forEach(answer => {
        const answerNumber = answer.dataset["number"];
        answer.innerHTML = currentQuestion["answer" + answerNumber];
      });

    allQuestions.splice(questionNumber, 1);

    chooseAnswers = true;
    setTimer()
};

// Countdown timer
let countdownTimer;

function setTimer() {
    timerButton.innerHTML = "15 s"
    let timeleft = 14;
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
};

answerButtons.forEach(answer => {
    answer.addEventListener('click', e => {
        if(!chooseAnswers) return;

        chooseAnswers = false;
        const selectedButton = e.target;
        const selectedAnswer = selectedButton.dataset["number"];

        let classToApply = 'wrong';
            if (selectedAnswer == currentQuestion.rightAnswer) {
                classToApply = 'correct';
                $("#next-btn").removeClass("hide");
                $("#timer-btn").addClass("hide");
                $("#next-btn").click(function() {
                    $(".answer").removeClass("correct");
                    });
                } else {
                    $(selectedButton).addClass("wrong");
                    wrongAnswer();
                    disableOtherAnswers();
                };
            
        
        selectedButton.classList.add(classToApply);
    });
});

// click on next button
$("#next-btn").click(function() {
    $("#next-btn").addClass("hide");
    $("#timer-btn").removeClass("hide");
    enableAnswers();
    setNextQuestion();
});

// Go back to category selection after failed answer or timed out
function wrongAnswer() {
    timerButton.classList.add("hide")
    restartButton.classList.remove("hide")
    restartButton.addEventListener("click", questionsToCategories)
};

// After clicking an answer, disable other ones
function disableOtherAnswers() {
    $(".answer").not(this).prop("disabled", true);
};

function enableAnswers() {
    $(".answer").prop("disabled", false);
};

// Returns the player to category selection
function questionsToCategories() {
    const categoriesCard = document.getElementById("categories")
    questionWrapper.classList.add("hide")
    categoriesCard.classList.remove("hide")
    restartButton.className = "question-btn btn wrong hide";
    document.body.classList.remove("background-blurry")
    document.body.classList.add("background-clear", "background-positioning")
    $(".answer").removeClass("wrong").removeClass("correct");
    enableAnswers(answerButtons);
};

function victoryScreen() {
    $("#link-victory").addClass("hide");
    $("#question-wrapper").addClass("hide");
    $("#victory").removeClass("hide");
    $("body").removeClass("background-blurry").addClass("background-clear");
};

$("#again").click(function() {
  
  $("#victory").addClass("hide");
  $("#categories").removeClass("hide");
  $("body").removeClass("background-blurry").addClass("background-clear");
  $("#question-counter").addClass("hide");
  questions.length = 0;
});