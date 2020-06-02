// VARIABLES

let currentQuestionIndex = 0;

//interactive elements
const questionElement = document.getElementById("question");
const restartButton = document.getElementById("restart-btn");
const nextButton = document.getElementById("next-btn");
const timerButton = document.getElementById("timer-btn");
const categoryButtons = document.getElementsByClassName("category-btn");
const answerButtons = Array.from(document.getElementsByClassName("answer"));
let linkVictory = document.getElementById("link-victory") // temporary navigation

//containers
const questionWrapper = document.getElementById("question-wrapper");
const loadingScreen = document.getElementById("loading-screen");
const questionCounter = document.getElementById("question-counter");
//const answerButtonsElement = document.getElementById("answers-div");

//arrays
let currentQuestion = {};
let allQuestions = [];
const correctAnswer = [];
const arrayOfIncorrectAnswers = [];

let questions = [];
    /*{
      question: "Inside which HTML element do we put the JavaScript??",
      answer1: "<script>",
      answer2: "<javascript>",
      answer3: "<js>",
      answer4: "<scripting>",
      rightAnswer: 1
    },
    {
      question:
        "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answer1: "<script href='xxx.js'>",
        answer2: "<script name='xxx.js'>",
        answer3: "<script src='xxx.js'>",
        answer4: "<script file='xxx.js'>",
      rightAnswer: 3
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      answer1: "msgBox('Hello World');",
      answer2: "alertBox('Hello World');",
      answer3: "msg('Hello World');",
      answer4: "alert('Hello World');",
      rightAnswer: 4
    }
  ];*/

fetch("https://opentdb.com/api.php?amount=15&category=9&type=multiple")
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
      setFirstQuestion();
  })
  .catch(err => {
      console.error(err);
  });

let chooseAnswers = true;

const MAX_QUESTIONS = 15;

$("#start-button").click(function() {
  
  $("#welcome").addClass("hide");
  $("#categories").removeClass("hide");
});

$(".category-btn").click(function() {

  $("#categories").addClass("hide");
  $("#loading-screen").removeClass("hide");
  questionCounter.setAttribute("class", "");
  setQuestionUI();
  setFirstQuestion()
});

function setQuestionUI() {
    $("#loading-screen").addClass("hide");
    $("body").removeClass("index-image").addClass("background-blurry");
    $("#question-wrapper").removeClass("hide");
    $("#link-victory").removeClass("hide");  // temporary navigation
    $("#timer-btn").removeClass("hide");
    //setTimer();
}

function setFirstQuestion() {
    currentQuestionIndex = 0;
    allQuestions = [...questions];
    setNextQuestion();
}

function setNextQuestion() {
    if(allQuestions.length === 0 || currentQuestionIndex >= MAX_QUESTIONS) {
        return victoryScreen();
    }
    currentQuestionIndex++;
    document.getElementById("counter").innerHTML = currentQuestionIndex;
    const questionNumber= Math.floor(Math.random() * allQuestions.length);
    currentQuestion = allQuestions[questionNumber];
    question.innerText = currentQuestion.question;

    answerButtons.forEach(answer => {
        const answerNumber = answer.dataset["number"];
        answer.innerText = currentQuestion["answer" + answerNumber];
      });

    allQuestions.splice(questionNumber, 1);

    chooseAnswers = true;
    //setTimer()
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
                //questionCounter.setAttribute("class", "");
            })
        } else {
            document.getElementById("timer-btn").innerHTML = timeleft + " s";
    }
    timeleft--;
    }, 1000);
    $(".answer").click(function() {
        clearTimeout(countdownTimer);
    });
    /*$(".category-btn").click(function() {
        clearTimeout(countdownTimer);
    }); */
}

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
    //questionCounter.setAttribute("class", "hide");
}

// After clicking an answer, disable other ones
function disableOtherAnswers() {
    $(".answer").not(this).prop("disabled", true);
}

function enableAnswers() {
    $(".answer").prop("disabled", false);
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
    $(".answer").removeClass("wrong").removeClass("correct");
    enableAnswers(answerButtons);
}
/*
function fetchQuestionsFromApi(categoryNumber) {
    return fetch("https://opentdb.com/api.php?amount=15&category=${categoryNumber}&type=multiple")
        .then(results => {
            checkResults(results);
            return results.json()
        })
        .then(data => {
            exportJsonData(data);
        })
        .catch(err => {
            console.error(err);
        })
}  */

function victoryScreen() {
    $("#link-victory").addClass("hide");
    //$("#timer-btn").addClass("hide");
    $("#question-wrapper").addClass("hide");
    $("#victory").removeClass("hide");
    $("body").removeClass("background-blurry").addClass("index-image");
}

$("#again").click(function() {
  
  $("#victory").addClass("hide");
  $("#link-victory").addClass("hide"); // temporary navigation
  $("#categories").removeClass("hide");
  $("body").removeClass("background-blurry").addClass("index-image");
  $("#question-counter").addClass("hide");
});

// temporary navigation
$("#link-victory").click(function() {  
  
  $("#link-victory").addClass("hide");
  $("#timer-btn").addClass("hide");
  $("#question-wrapper").addClass("hide");
  $("#victory").removeClass("hide");
  $("body").removeClass("background-blurry").addClass("index-image");
});