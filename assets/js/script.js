const answerButtons = Array.from(document.getElementsByClassName("answer"));
const questionWrapper = document.getElementById("question-wrapper");
const questionCounter = document.getElementById("question-counter");
const restartButton = document.getElementById("restart-btn");
let currentQuestion = {};
let allQuestions = [];
let questions = [];
let chooseAnswers = true;
const MAX_QUESTIONS = 10;
let currentQuestionIndex;
let categoryNumber;

$("#start-button").click(function() {
  $("#welcome").addClass("hide");
  $("#categories").removeClass("hide");
});

/**
 * When category is selected, changes the UI, resets the currentQuestionIndex and runs the fetchQuestions function
 */
$(".category-btn").click(function() {
  let categoryNumber = this.getAttribute("data-category");
  $("#categories").addClass("hide");
  $("#loading-screen").removeClass("hide");
  questionCounter.setAttribute("class", "");
  fetchQuestions(categoryNumber);
});

/**
 * Gets the questions from API and makes them usable by the script
 * @param {number} categoryNumber - category number from a selected button
 */
const fetchQuestions = (categoryNumber) => {
    fetch(`https://opentdb.com/api.php?amount=10&category=${categoryNumber}&difficulty=easy&type=multiple`)
    .then(res => {
        return res.json();
    })
    .then(loadedQuestions => {
        console.log(loadedQuestions.results);
        /**
         * Takes all the results from API, and translates them into question array usable by the game
         */
        questions = loadedQuestions.results.map( loadedQuestions => {
            /**
             * Formats the questions
             * @param {object} formattedQuestion Gets the question from API results
             */
            const formattedQuestion = {
                question: loadedQuestions.question
            };
            /**
             * Takes all the answers from API results, puts them together, shuffles them and translates them into question array usable by the game
             * @param {Array} eachAnswer Array of incorrect answers
             */
            const eachAnswer = [...loadedQuestions.incorrect_answers];
            formattedQuestion.rightAnswer = Math.floor(Math.random()*3) + 1;
            eachAnswer.splice(formattedQuestion.rightAnswer -1, 0, loadedQuestions.correct_answer);

            /**
             * Gets the correct answer
             * @param {string} rightAnswer correct answer
             */
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

/**
 * Sets the user interface
 */
const setQuestionUI = () => {
    $("#loading-screen").addClass("hide");
    $("body").removeClass("background-clear").addClass("background-blurry");
    $("#question-wrapper").removeClass("hide");
};

/**
 * Sets the current question index and defines the questions, then hands it over to setNextQuestion function. Available only on category selection
 */
const setFirstQuestion = () => {
    currentQuestionIndex = 0;
    allQuestions = [...questions];
    setNextQuestion();
};

/**
 * Sets the questions and answers
 */
let setNextQuestion = () => {
    /**
     * Checks if we reached maximum nuber of questions or ran out of questions, then returns victory screen
     * @param {number} MAX_QUESTIONS Maximum nuber of questions
     */
    if(allQuestions.length === 0 || currentQuestionIndex >= MAX_QUESTIONS) {
        return victoryScreen();
    }
    currentQuestionIndex++;
    /**
     * Shows the number for current question in bottom right corner. Relevant for point system
     */
    document.getElementById("counter").innerHTML = currentQuestionIndex;

    /**
     * Shuffles the questions and inserts the string for question in DOM
     * @param {number} questionNumber Selects a random number between 0 and allQuestions length
     * @param {string} currentQuestion Takes a question from allQuestions based on questionNumber
     * @param {array} allQuestions array of all questions
     */
    const questionNumber= Math.floor(Math.random() * allQuestions.length);
    currentQuestion = allQuestions[questionNumber];
    question.innerHTML = currentQuestion.question;

    /**
     * Assigns each answer to a button from currentQuestion array
     */
    answerButtons.forEach(answer => {
        const answerNumber = answer.dataset["number"];
        answer.innerHTML = currentQuestion["answer" + answerNumber];
      });
    
    /**
     * Removes the current question from allQuestions so it does not appear again
     */
    allQuestions.splice(questionNumber, 1);

    chooseAnswers = true;
};

/**
 * Checks if the answer is correct or not and changes the UI accordingly
 */
answerButtons.forEach(answer => {
    answer.addEventListener('click', e => {
        if(!chooseAnswers) return;

        /**
         * Checks which button is clicked
         */
        chooseAnswers = false;
        const selectedButton = e.target;
        const selectedAnswer = selectedButton.dataset["number"];

        /**
         * Checks if the selected button contains right answer
         * If right answer is selected, shows next question button, and removes the class of correct when next question button is clicked
         * Else, triggers wrongAnswer function
         */
        let classToApply = 'wrong';
            if (selectedAnswer == currentQuestion.rightAnswer) {
                classToApply = 'correct';
                $("#next-btn").removeClass("hide");
                $("#next-btn").click(function() {
                    $(".answer").removeClass("correct");
                    });
                } else {
                    $(selectedButton).addClass("wrong");
                    wrongAnswer();
                    disableOtherAnswers();
                };
            
        /**
         * Adds apropriate class to clicked answer
         */
        selectedButton.classList.add(classToApply);
    });
});

$("#next-btn").click(function() {
    $("#next-btn").addClass("hide");
    enableAnswers();
    setNextQuestion();
});

/**
 * Go back to category selection after failed answer or timed out
 */
const wrongAnswer = () => {
    restartButton.classList.remove("hide")
    restartButton.addEventListener("click", questionsToCategories)
};

/**
 * After clicking an answer, disable others
 */
const disableOtherAnswers = () => {
    $(".answer").not(this).prop("disabled", true);
};

/**
 * After restarting the game or clicking on next question button, makes answer buttons selectable again
 */
const enableAnswers = () => {
    $(".answer").prop("disabled", false);
};

/**
 * After winning the game, returns the player to category selection
 */
const questionsToCategories = () => {
    document.getElementById("categories").classList.remove("hide")
    questionWrapper.classList.add("hide")
    //categoriesCard.classList.remove("hide")
    restartButton.className = "question-btn btn wrong hide";
    document.body.classList.remove("background-blurry")
    document.body.classList.add("background-clear")
    $(".answer").removeClass("wrong").removeClass("correct");
    enableAnswers(answerButtons);
};

/**
 * Show the victory screen and hides all others
 */
const victoryScreen = () => {
    $("#link-victory").addClass("hide");
    $("#question-wrapper").addClass("hide");
    $("#victory").removeClass("hide");
    $("body").removeClass("background-blurry").addClass("background-clear");
};

/**
 * Returns user to the category selection when #again button is clicked
 */
$("#again").click(function() {
  
  $("#victory").addClass("hide");
  $("#categories").removeClass("hide");
  $("body").removeClass("background-blurry").addClass("background-clear");
  $("#question-counter").addClass("hide");
  questions.length = 0;
});