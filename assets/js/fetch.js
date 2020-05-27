function fetchQuestionsGeneral() {
    return fetch("https://opentdb.com/api.php?amount=1&category=9&type=multiple")
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
}

function fetchQuestionsGames() {
    return fetch("https://opentdb.com/api.php?amount=1&category=15&type=multiple")
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
}

function fetchQuestionsComputers() {
    return fetch("https://opentdb.com/api.php?amount=1&category=18&type=multiple")
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
}

function fetchQuestionsGadgets() {
    return fetch("https://opentdb.com/api.php?amount=1&category=30&type=multiple")
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
}

function checkResults(results) {
        if (results.ok) {
            console.log("Questions retrieved!")
        } else {
            console.log("Problem with getting the questions")
        }
        //return results.json()
}

function exportJsonData(data) {
            console.log("Data: ", data)
            formattedQuestions = data.results[0].question
            questionsArray.push(formattedQuestions)
            //console.log("Questions:", formattedQuestions)

            formattedCorrectAnswer = data.results[0].correct_answer
            correctAnswer.push(formattedCorrectAnswer)
            console.log("Correct answer:", formattedCorrectAnswer)

            formattedIncorrectAnswers = data.results[0].incorrect_answers
            arrayOfIncorrectAnswers.push(formattedIncorrectAnswers)
            //console.log("Array of incorrect answers:", formattedIncorrectAnswers)
}