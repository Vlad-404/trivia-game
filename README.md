# TRIVIA GAME

![Desktop Demo](https://github.com/Vlad-404/trivia-game/blob/master/assets/images/mockup.JPG "Desktop Demo")

Are you ready to become rich...in knowledge? Then look no further, as this trivia game will test your knowledge in 4 different categories. 

Welcome to the first game I made. I hope you will enjoy it.


Contents:
* UX (user experience)
  * [Idea](https://github.com/Vlad-404/trivia-game#idea)
  * [Research and preparations](https://github.com/Vlad-404/trivia-game#research-and-preparations)
    * [Wireframes](https://github.com/Vlad-404/trivia-game#wireframes)
  * [User stories](https://github.com/Vlad-404/trivia-game#user-stories)
  * [Design choices](https://github.com/Vlad-404/trivia-game#design-choices)
    * [Fonts](https://github.com/Vlad-404/trivia-game#fonts)
    * [Colours](https://github.com/Vlad-404/trivia-game#colours)
* [Features](https://github.com/Vlad-404/trivia-game#features)
    * [Features left to implement](https://github.com/Vlad-404/trivia-game#features-left-to-implement)
* [Technologies used](https://github.com/Vlad-404/trivia-game#technologies-used)
* Testing
    * [Testing the page](https://github.com/Vlad-404/trivia-game#testing-the-page)
    * [Testing during development](https://github.com/Vlad-404/trivia-game#testing-during-development)
    * [User stories Testing](https://github.com/Vlad-404/trivia-game#user-stories-testing)
    * [Left out implementations](https://github.com/Vlad-404/trivia-game#left-out-implementations)
* [Deployment](https://github.com/Vlad-404/trivia-game#deployment)
    * [Running trivia game localy](https://github.com/Vlad-404/trivia-game#running-trivia-game-localy)
* Credits
    * [Content](https://github.com/Vlad-404/trivia-game#content)
    * [Media](https://github.com/Vlad-404/trivia-game#media)
    * [Acknowledgments and thank you's](https://github.com/Vlad-404/trivia-game#acknowledgments-and-thank-yous)
* [Disclaimer](https://github.com/Vlad-404/trivia-game#disclaimer)

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

I decided to opt out of Bootstrap as the page is simple enough to have my own code. That's why I have only one media querry which proved to be simple and effective enough.

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

* ```blue #33BBFF``` - used for answer buttons, start and victory screen buttons
* ```green #33FF88``` - used for Next button and to color the right answer after clicking on it
* ```red #FF3333``` - used for reset (incorrect) button, to color the wrong answer after clicking on it

I opted for bright colours for buttons, as the background is fairly dark and it would provide a good contrast with the background.

[_Back to top_](https://github.com/Vlad-404/trivia-game#trivia-game)

# Features

Trivia games have a simple nature so this project was focused on basic things working as best as possible:

* one screen leads you seemlesly into another one so there is no need for navigation. Each button leads you to only logicall place you can go, i.e. victory screen leads you to category selection, right answer leads you to next question,...Welcome page is accessible only when page is (re)loaded, and it is irrelevant once you start the game.
* there is a correct answer counter and total number of questions so this game can be played even with multiple people. Correct answers can be used as a point system in possible multiplayer environment.
* correct answer wasn't offered once user selects the wrong one. I wanted to discourage the user from getting the correct answer from the game by cheating, and using it later.

## Features left to implement

* **Difficulty increase** - one of the initial ideas was to increase the difficulty after 5 questions, but due to my skills and time restrictions, it was left out.
* **Timer** - one idea was to give players 15 seconds to answer the question. After 3 weeks of trying to make it work and not being successful, I decided to remove it.

[_Back to top_](https://github.com/Vlad-404/trivia-game#trivia-game)

# Technologies used

## Languages

* HTML
* CSS
* JavaScript
* JSON

## Libraries and tools

* [Git](https://git-scm.com/)
* [jQuery](https://jquery.com/)
* [Font Awesome](https://fontawesome.com/)
* [Google Fonts](https://fonts.google.com/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Gitpod](https://www.gitpod.io/)

[_Back to top_](https://github.com/Vlad-404/trivia-game#trivia-game)

# Testing

## Testing the page:

Testing was conducted using different web browsers and platforms:

* Website was tested with Google Chrome, Opera and Firefox and they had no issues displaying the page. All transitions and custom effects were working as they are intended
* tested the page with different Android phones, different versions of iPhone (version 6 and newer), iPad mini and the page was displaying without issues
* tested the page on 4k screen and the UI was too small. This was left out for future implementations
* both HTML, CSS and JS validator were used to verify the website code:
    * [CSS validator](https://jigsaw.w3.org/css-validator/validator) - displayed a series of parse errors. After examination, they weren't critical nor they posed any concern
    * [HTML validator](https://validator.w3.org/#validate_by_input) - returned no errors
    * [JSHint](https://jshint.com) - was showing JavaScript code errors related to incompatibility with versions older than ES6


## Testing during development

**List of bugs found:**

* **Problem:** Certain parts of code didn't work
    * **How I found it:** found out when code didn't execute
    * **What went wrong:** found out that multiple elements had the same ID
    * **Resolution:** changed the ID's of the elements affected
* **Problem:** Gitpod didn't load latest commits after I came back to it a day after
    * **How I found it:** when I opened Gitpod, nothing I was working last session didn't load
    * **What went wrong:** an issue with Gitpod or my browser local storage
    * **Resolution:** pulled the latest changes from Github
* **Problem:** After wining the game, select another category button (```#again```) didn't work
    * **How I found it:** only when checking the code with dev tools
    * **What went wrong:** when devtools were displayed at the bottom of the page, question counter div was covering the button
    * **Resolution:** increased the z-index of the button
* **Problem:** a button appeared next to the counter button. There was no trace of it in JS or HTML, just in dev tools in the browser. Tested on Chrome, Opera and Firefox
    * **How I found it:** found it by loading the page next day
    * **What went wrong:** missing ```/``` (slash) on closing button (```</button>```) element in HTML
    * **Resolution:** added ```/``` (slash) to a closing restart button
* **Problem:** Countdown timer didn't work
    * **How I found it:** after loading the questions page, there was no countdown 
    * **What went wrong:** Uncaught ReferenceError: timeleft is not defined - in script.js
    * **Resolution:** corrected ```time```**L**```eft``` variable to ```time```**l**```eft``` (capitalization)
* **Problem:** Countdown timer didn't reset after clicking anything but "Time's Up!" button
    * **How I found it:** after clicking on "Incorrect!" and "Correct!" buttons I could see 2 countdowns competing
    * **What went wrong:** reseting countdown wasn't implemented correctly (in the right place)
    * **Resolution:** added ```clearTimeout``` method to ```countdownTimer``` within the ```setTimer``` function. ```clearTimeout``` was triggered by clicking on any answer
* **Problem:** Issues with awaiting for the data from api to be ready
    * **How I found it:** when expecting the question, nothing was shown
    * **What went wrong:** sync issues: local code was executing faster than api could load the data
    * **Resolution:** put the fetch function inside ```fetchQuestions``` function to be triggered on click event.
* **Problem:** After answering incorrectly, when restarting the game, checking for the correct answer and selecting the answer didn't work
    * **How I found it:** after choosing an incorrect answer and restarting the game
    * **What went wrong:** answer buttons weren't selectable
    * **Resolution:** added function ```enableAnswers``` which contrasted ```disableOtherAnswers``` function
* **Problem:** After achieving the victory and restarting the game, correct answer counter did not show
    * **How I found it:** after winning and restarting the game
    * **What went wrong:** one of the methods in ```#again``` button click event, hid the inner class of ```#question-counter``` container
    * **Resolution:** removed the method that hid the inner container (learned the importance of consistency)
* **Problem:** When **selecting the wrong answer**, correct answer counter (```#question-counter```) disappeared
    * **How I found it:** found it when clicking on a wrong answer
    * **What went wrong:** in script.js, ```wrongAnswer``` function hid the ```#question-counter```. This function was triggered on clicking any answer button
    * **Resolution:** removed the method in ```wrongAnswer``` function 
* **Problem:** Timer button is selectable in certain cases
    * **How I found it:** when time runs out on a question, and time's up button is pressed. Once user selects the category again and questions are presented, timer button is selectable. Clicking on it leads user to category selection and resets the progress
    * **What went wrong:** looking for cause...
    * **Resolution:** removed the timer completely

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
* optimisations for screens larger than HD (1920 x 1080 px)

[_Back to top_](https://github.com/Vlad-404/trivia-game#trivia-game)

# Deployment

Trivia game was developed on [GitPod](https://www.gitpod.io/) and [VS code](https://code.visualstudio.com/), using git and GitHub to host the repository.

When deploying Trivia Game using GitHub Pages the following steps were made:

* Opened up **[GitHub](github.com)** in the browser.
* Signed in using username and password.
* Selected my **repositories**.
* Navigated to **'/Vlad-404/trivia-game'**.
* In the top navigation clicked **'settings'**.
* Scrolled down to the **GitHub Pages** area. 
* Selected **'Master Branch'** from the **'Source'** dropdown menu.
* Clicked to confirm my selection.
* Trivia game is now live on GitHub Pages.

### Running trivia game locally:

Cloning trivia game from GitHub:

* Navigate to github.com/Vlad-404/trivia-game.
* Click the green '**Clone or Download**' button.
* **Copy** the url in the dropdown box.
* Using your favourite IDE, **open up** your preferred terminal.
* **Navigate** to your desired file location.
* **Copy** the following code and input it into your terminal to clone trivia game.

    ```git clone https://github.com/Geomint/holiday-destinations.git```

[_Back to top_](https://github.com/Vlad-404/trivia-game#trivia-game)

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

[_Back to top_](https://github.com/Vlad-404/trivia-game#trivia-game)