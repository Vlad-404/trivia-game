# TRIVIA GAME

Are you ready to become rich...in knowledge? Then look no further, as this trivia game will test your knowledge in 4 different categories. 

Welcome to the first game I made. I hope you will enjoy it.


Contents:
* UX (user experience)
  * Idea
  * Research and preparations
    * Wireframes
  * User stories
  * Design choices
    * Colours
    * Fonts
    * Icons

.
.
.

# UX 

## Idea:
Idea behind this project was to create a simple game of trivia based on "Who wants to be a millionaire" game show. It can provide an entertainment for one person or a group of people. Multiple people can compete in this game as the counter for correct answers is located at the bottom right corner of the screen. This way, a game like this can add additional entertainment for a group of people and add a competitive spirit to any party.

Targeted audience is everyone over the age of 16, as some questions won't be familiar with the younger audience, especially questions that have older date. 

This project will provide a good fun and be interesting to users because of the following:

* 4 different categories so users can chose what suits them best.
* replayability - after one category is finished, they have an option to chose another one.
* open database can keep questions comming and surprise even returning visitors.
* game can be played with unlimited number of people and correct question counter can be used as a point system.
* attractive design makes the game simple to use.
* it can be played on a large screen(desktop), with a tablet or a mobile phone

After visiting this page, users will be more knowledgable in selected categories.

## Research and preparations:

Before starting this project, some research and these steps were taken:

* as I had 2 topics to chose from, mentor input helped out a lot to chose this type of project.
* looking for videos on YouTube to find the best approach to the subject
* mockups were generated to have an idea how the game will look like on different platforms. You can find them in folder [Wireframes](https://github.com/Vlad-404/trivia-game/tree/master/wireframes)
* after find the right API for the questions database, these categories were chosen:...(add categories after choosing) because(reason)...

### Wireframes

After the initial idea, I decided to make a couple of sketches and make wireframes for different platforms to have an idea how will the page look like on different platforms. Software used for generating mockups was [Balsamiq](https://balsamiq.com/?gclid=EAIaIQobChMIzK-ozrWk6QIVF-vtCh1l-woMEAAYASAAEgJ_vvD_BwE). 

I decided to opt out of Bootstrap as the page is simple enough to have my own code and don't have a clash with Bootstrap on any of my own classes. That's why I have only one media querry which proved to be simple and effective enough.

You can find all the wireframes in the [wireframes](https://github.com/Vlad-404/trivia-game/tree/master/wireframes) folder.

## User stories

1. As a new visitor to the page, I want to be able to play a simple trivia game without too much hassle.
2. As a new visitor to the page, I wanted to find a simple game of trivia so I can add some additional entertainment for us and our guests.
3. As a returning visitor, I don't want to have same questions over and over again, but instead, I want new ones
4. As the game gets it's questions from an open database that gets new questions added daily, returning visitors can still be surprised by new questions
5. As a new user, I want to find a way to compete in knowledge with certain topics, so my freind and I can finally find out who knows games better.

## Design choices

As the idea behind this project is simplicity, a simple background with a theme of jeopardy was chosen as to associate with quiz shows.

### Fonts

The following fonts were chosen for the game:

- [Lobster](https://fonts.google.com/specimen/Lobster) - this font was is used for titles, and all text that is meant to be large and quirky to motivate playfullnes.
- [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro) - this font was used in questions, answers and everywhere where readability was a priority
- Calibri - a backup font if other two fail to load.

### Colours

Choice of colours were brought down to a minimum as game of this kind needs just a handfull of colours .

* neutral colour - blue #33BBFF - answer buttons, welcome and victory screen buttons
* right answer - green #33FF88 - right answer
* wrong answer - red #FF3333 - wrong answer

HSL color selection was used because it was easier to manipulate the colour changes using JavaScript/jQuerry. Also,I opted for bright colours for buttons, as the background is fairly dark and it would provide a good contrast with the background.

### Icons

Icons were used from a FontAwesome page for correct and incorrect answers and for a timer. Thumbs up as a assotiation with correct and thumbs down for wrong answer. In addition, icon for a clock was used for a timer.

# Features

Trivia games have a simple nature so this project was focused on basic things working as best as possible:

* one screen leads you seemlesly into another one so there is no need for navigation.
* Each button leads you to only logicall place you can go, so there is no need for navigation: i.e. victory screen leads you to category selection, right answer leads you to next question,...Welcome page is inaccessible once you start the game as it is irrelevant once you start the game.
* there is a victory checkup to prevent user accessing victory screen without having the winner condition in current category.
* there is a correct answer counter and total number of questions so this game can be played even with multiple people. Correct answers can be used as a point system in possible multiplayer environment.
* check mechanic was added to prevent people from going back or forward on a page to get a correct answer/skip a question once they start the game. Once user goes back, warning is displayed and if user chooses to ignore it, progress is reset.
* correct answer wasn't offered once user selects the wrong one, because I wanted to discourage the user from getting the answer from the game by cheating, and using it later.
* refreshing page leaves user with the same question and saves the progress - another anti-cheat measure.
* there are 3 levels of difficulty: once game starts, every 5 questions, game pulls questions from a poll of increasingly difficult questions. There are 15 questions in each category per session. As there are many questions from the database, each question is randomly chosen from a category depending on difficulty.
