# TRIVIA GAME

![Desktop Demo](https://github.com/Vlad-404/trivia-game/blob/master/assets/images/mockup.JPG "Desktop Demo")

Are you ready to become rich...in knowledge? Then look no further, as this trivia game will test your knowledge in 4 different categories. 

Welcome to the first game I made. I hope you will enjoy it.


Contents:
* UX (user experience)
  * Idea
  * Research and preparations
    * Wireframes
  * User stories
  * Design choices
    * Fonts
    * Colours
* Features
    * Features left to implement
* Technologies used
* Testing
    * User stories Testing
    * Left out implementations
* Deployment
* Credits
    * Content
    * Media
    * Acknowledgments and thank you's
* Disclaimer

# UX 

## Idea
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

## Research and preparations

Before starting this project, some research and these steps were taken:

* as I had 2 topics to chose from, mentor input helped out a lot to chose this type of project.
* looking for videos on YouTube to find the best approach to the subject
* mockups were generated to have an idea how the game will look like on different platforms. You can find them in folder [Wireframes](https://github.com/Vlad-404/trivia-game/tree/master/wireframes)
* after find the right API for the questions database, these categories were chosen: general knowledge, games, geography and television.

### Wireframes

After the initial idea, I decided to make a couple of sketches and make wireframes for different platforms to have an idea how the page will look like on different platforms. Software used for generating mockups was [Balsamiq](https://balsamiq.com/?gclid=EAIaIQobChMIzK-ozrWk6QIVF-vtCh1l-woMEAAYASAAEgJ_vvD_BwE). 

I decided to opt out of Bootstrap as the page is simple enough to have my own code and don't have a clash with Bootstrap on any of my own classes. That's why I have only one simple media querry which proved to be simple and effective enough.

You can find all the wireframes in the [wireframes](https://github.com/Vlad-404/trivia-game/tree/master/wireframes) folder.

## User stories

1. As a user, I want to be able to play a simple trivia so I can play a game without too much hassle.
2. As a new visitor to the page, I wanted to find a simple game of trivia so I can add some additional entertainment for us and our guests.
3. As a returning visitor, I don't want to have same questions over and over again, but instead, I want new ones
4. As a new user, I want to find a way to compete in knowledge with certain topics, so my freind and I can finally find out who knows games better.

## Design choices

As the idea behind this project is simplicity, a simple background with a theme of jeopardy was chosen as to associate with quiz shows.

A single page was chosen as there was no need for multiple ones, it speeds up loading times and contributes to some of the game mechanics. Different screens were achieved with JavaScript toggling the hide class on and off for each container depending whether it's needed or not.

### Fonts

The following fonts were chosen for the game:

- [Lobster](https://fonts.google.com/specimen/Lobster) - this font was is used for titles, and all text that is meant to be large and quirky to motivate playfullnes.
- [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro) - this font was used in questions, answers and everywhere where readability was a priority
- Calibri - a backup font if other two fail to load.

### Colours

Choice of colours were brought down to a minimum as game of this kind needs just a handfull of colours .

* *blue #33BBFF* - used for answer buttons, start and victory screen buttons
* *green #33FF88* - used for Next button and to color the right answer after clicking on it
* *red #FF3333* - used for reset (incorrect) button, to color the wrong answer after clicking on it and to colorTime's up button when timer runs out.

I opted for bright colours for buttons, as the background is fairly dark and it would provide a good contrast with the background.

# Features

Trivia games have a simple nature so this project was focused on basic things working as best as possible:

* one screen leads you seemlesly into another one so there is no need for navigation. Each button leads you to only logicall place you can go, i.e. victory screen leads you to category selection, right answer leads you to next question,...Welcome page is accessible only when page is (re)loaded, and it is irrelevant once you start the game.
* there is a correct answer counter and total number of questions so this game can be played even with multiple people. Correct answers can be used as a point system in possible multiplayer environment.
* correct answer wasn't offered once user selects the wrong one. I wanted to discourage the user from getting the correct answer from the game by cheating, and using it later.
* a timer is used to give user 12 seconds to read and answer the question. If answer isn't selected in that time, wrong answer screen pops up and points a user to category selection. No answer is selected in this case.

## Features left to implement

* Difficulty increase - one of the initial ideas was to increase the difficulty after 5 questions, but due to my skills and time restrictions, it was left out.

# Technologies used

## Languages

* HTML
* CSS
* JavaScript
* JSON

## Libraries and tools

* [Git](https://git-scm.com/)
* [JQuerry](https://jquery.com/)
* [Font Awesome](https://fontawesome.com/)
* [Google Fonts](https://fonts.google.com/)

# Testing

### Bugs during development

<strong>List of bugs found:</strong>

* <strong>Problem:</strong> Certain parts of code didn't work
    * <strong>How I found it:</strong> found out when code didn't execute
    * <strong>What went wrong:</strong> found out that multiple elements had the same ID
    * <strong>Resolution:</strong> changed the ID's of the elements affected
* <strong>Problem:</strong> Gitpod didn't load latest commits after I came back to it a day after
    * <strong>How I found it:</strong> when I opened Gitpod, nothing I was working last session didn't load
    * <strong>What went wrong:</strong> an issue with Gitpod or my browser local storage
    * <strong>Resolution:</strong> pulled the latest changes from Github
* <strong>Problem:</strong> After wining the game, select another category button (```#again```) didn't work
    * <strong>How I found it:</strong> only when checking the code with dev tools
    * <strong>What went wrong:</strong> when devtools were displayed at the bottom of the page, question counter div was covering the button
    * <strong>Resolution:</strong> increased the z-index of the button
* <strong>Problem:</strong> a button appeared next to the counter button. There was no trace of it in JS or HTML, just in dev tools in the browser. Tested on Chrome, Opera and Firefox
    * <strong>How I found it:</strong> found it by loading the page next day
    * <strong>What went wrong:</strong> missing ```/``` (slash) on closing button (```</button>```) element in HTML
    * <strong>Resolution:</strong> added ```/``` (slash) to a closing restart button
* <strong>Problem:</strong> Countdown timer didn't work
    * <strong>How I found it:</strong> after loading the questions page, there was no countdown 
    * <strong>What went wrong:</strong> Uncaught ReferenceError: timeleft is not defined - in script.js
    * <strong>Resolution:</strong> corrected ```time```<strong>L</strong>```eft``` variable to ```time```<strong>l</strong>```eft``` (capitalization)
* <strong>Problem:</strong> Countdown timer didn't reset after clicking anything but "Time's Up!" button
    * <strong>How I found it:</strong> after clicking on "Incorrect!" and "Correct!" buttons I could see 2 countdowns competing
    * <strong>What went wrong:</strong> reseting countdown wasn't implemented correctly (in the right place)
    * <strong>Resolution:</strong> added ```clearTimeout``` method to ```countdownTimer``` within the ```setTimer``` function. ```clearTimeout``` was triggered by clicking on any answer
* <strong>Problem:</strong> Issues with awaiting for the data from api to be ready
    * <strong>How I found it:</strong> when expecting the question, nothing was shown
    * <strong>What went wrong:</strong> sync issues: local code was executing faster than api could load the data
    * <strong>Resolution:</strong> put the fetch function inside ```fetchQuestions``` function to be triggered on click event.
* <strong>Problem:</strong> After answering incorrectly, when restarting the game, checking for the correct answer and selecting the answer didn't work
    * <strong>How I found it:</strong> after choosing an incorrect answer and restarting the game
    * <strong>What went wrong:</strong> answer buttons weren't selectable
    * <strong>Resolution:</strong> added function ```enableAnswers``` which contrasted ```disableOtherAnswers``` function
* <strong>Problem:</strong> After achieving the victory and restarting the game, correct answer counter did not show
    * <strong>How I found it:</strong> after winning and restarting the game
    * <strong>What went wrong:</strong> one of the methods in ```#again``` button click event, hid the inner class of ```#question-counter``` container
    * <strong>Resolution:</strong> removed the method that hid the inner container (learned the importance of consistency)
* <strong>Problem:</strong> When <strong>selecting the wrong answer</strong>, correct answer counter (```#question-counter```) disappeared
    * <strong>How I found it:</strong> found it when clicking on a wrong answer
    * <strong>What went wrong:</strong> in script.js, ```wrongAnswer``` function hid the ```#question-counter```. This function was triggered on clicking any answer button
    * <strong>Resolution:</strong> removed the method in ```wrongAnswer``` function 
* <strong>Problem:</strong> Timer button is selectable in certain cases
    * <strong>How I found it:</strong> when time runs out on a question, and time's up button is pressed. Once user selects the category again and questions are presented, timer button is selectable. Clicking on it leads user to category selection
    * <strong>What went wrong:</strong> looking for cause...
    * <strong>Resolution:</strong> looking for a solution...

## User stories Testing

1. As a user, I want to be able to play a simple trivia game without too much hassle.
    * game was made so that the navigation is unnecessary, as each time user is presented with a choice, it leads user to only logical place. i.e. victory screen leads you to category selection, right answer leads you to next question, Welcome page is inaccessible once you start the game as it is irrelevant once you start.
2. As a new visitor to the page, I wanted to find a simple game of trivia so I can add some additional entertainment for us and our guests.
    * a competitive feature was added in a shape of correct answer counter. This can be used a point system in multiplayer environment.
3. As a returning visitor, I don't want to have same questions over and over again, but instead, I want new ones.
    * chosen database/API have lots of different questions with different difficulties. Each time game randomly pulls a question in regard to the difficulty so each game has different questions each time it's started
4. As a new user, I want to find a way to compete in knowledge with certain topics, so my freind and I can finally find out who knows games better.
    * as explained in 2nd point of user stories, correct answer counter was added to serve as a point system. Person who has more points, wins.

## Left out implementations

* alert mechanic to warn people from going back, forward or reloading the page once they start the game. Once user tries to reload the page(either by going back or reloading the page), warning is displayed and if user chooses to ignore it, page reloads and progress is reset. Due to time and my knowledge limitations, it was left out.

# Deployment

Trivia game was developed on GitPod and VS code, using git and GitHub to host the repository.

When deploying Trivia Game using GitHub Pages the following steps were made:

* Opened up <strong>[GitHub](github.com)</strong> in the browser.
* Signed in using username and password.
* Selected my <strong>repositories</strong>.
* Navigated to <strong>'/Vlad-404/trivia-game'</strong>.
* In the top navigation clicked <strong>'settings'</strong>.
* Scrolled down to the <strong>GitHub Pages</strong> area. 
* Selected <strong>'Master Branch'</strong> from the <strong>'Source'</strong> dropdown menu.
* Clicked to confirm my selection.
* Trivia game is now live on GitHub Pages.

### Running trivia game Locally:

Cloning trivia game from GitHub:

* Navigate to github.com/Vlad-404/trivia-game.
* Click the green '<strong>Clone or Download</strong>' button.
* <strong>Copy</strong> the url in the dropdown box.
* Using your favourite IDE, <strong>open up</strong> your preferred terminal.
* <strong>Navigate</strong> to your desired file location.
* <strong>Copy</strong> the following code and input it into your terminal to clone trivia game.

    ```git clone https://github.com/Geomint/holiday-destinations.git```

# Credits

## Content

Content for this game was based on "Who wants to be a millionaire" and the content was used from following sources:
* [Open Trivia DB](https://opentdb.com/) - pulled the questions through their API
* [Flevix.com](https://flevix.com/bounce-bar-preloader-gif/) for supplying free loading gif image 

## Media 

Only image used as a background was used from free wallpaper website: https://wallpapersafari.com/w/fW7pva. I used Gimp to add blurry effect for the questions background.

# Disclaimer

This page was built for educational purposes.

## Acknowledgments and thank you's

- Huge thank you to my mentor [Simen](https://github.com/Eventyret) for helping me chose the topic providing a starting resources and helping me along the way.
- big thank you to all the people maintaining the [Open trivia DB](https://opentdb.com/) who are providing their resources for free.
- [Stack Overflow](https://stackoverflow.com/) for hosting helpful discussions which helped me during my project.
- [WebDev simplified](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw) and [James Q Quick](https://www.youtube.com/channel/UC-T8W79DN6PBnzomelvqJYw) for being an inspiration to build this game.
- Code institute slack community that was patient enough with my questions.


>*Thank you for visiting my page and I hope you'll have fun playing the game.*