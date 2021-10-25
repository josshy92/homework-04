// make variables to use grab/connect to html
// make a variable that will hold question
// make a variable that will have a true statement 
// make variable for score
// make variable for timer
// 2b. make question with answer and answerkey
// start a fucnction that will display question once you hit start
// make start button render question
// have choices 
// make timer   
var timerElement = document.querySelector(".timer-count");
var timer;
var timerCount;
var score = 0;
var questionsArray = [
    {
        question: " What does HTML stand for?",
        choices: ["hypertext mark up language", "hypertext make up language", "hidden text mark up language", "none of the above"],
        answer: "hypertext mark up language"
    },
    {
        question: " What does CSS stand for?",
        choices: ["cascading style shop","cascading style sheets","closing style sheets","none of the above"],
        answer: "cascading style sheets",
    },
    {
        question: " What does JS stand for?",
        choices: ["Java","jQuery","just saying", "none of the above"],
        answer: "none of the above"
    },
    {
        question: " What is the Mobile First Design?",
        choices: ["the act of designing mobile experience first","the act of designing desktop experience first", "the act of using your phone", "none of the above"],
        answer: "the act of designing mobile experience first",
    },
    {
        question: " If you use a # to reference something, then you also need",
        choices: ["a number","a choice", "an id","none of the above"], 
        answer: "an id"
    }
]

var play = document.querySelector('.playBtn')
play.addEventListener('click', startQuiz)

function startQuiz() {
    isWin = false;
    timerCount = 60;
    var startBtn = document.getElementById('startQuizDiv')
    startBtn.style.display = 'none'
    renderQuestion1()
    startTimer()
}

function renderQuestion1() {
    var questionsDiv = document.getElementById('question1')
    var question = document.createElement("h3")
    question.textContent = questionsArray[0].question
    questionsDiv.prepend(question)

    var choices = document.getElementById('choices1')
    for (var i = 0; i < questionsArray[0].choices.length; i++) {
        var li = document.createElement('li')
        li.setAttribute('id', questionsArray[0].choices[i])
        li.textContent = questionsArray[0].choices[i]
        choices.append(li)

        li.addEventListener('click', checkAnswer)

    }
    function checkAnswer(e) {
        if (e.target.id === questionsArray[0].answer) {
            score += 10
            console.log(score)
            renderQuestion2()
        } else {
            renderQuestion2()
            subtracTimer()
        }
    }


}

function renderQuestion2() {
    var questionsDiv = document.getElementById('question1')
    questionsDiv.style.display = 'none'
    var questionsDiv = document.getElementById('question2')
    var question = document.createElement("h3")
    question.textContent = questionsArray[1].question
    questionsDiv.prepend(question)

    var choices = document.getElementById('choices2')
    for (var i = 0; i < questionsArray[1].choices.length; i++) {
        var li = document.createElement('li')
        li.setAttribute('id', questionsArray[1].choices[i])
        li.textContent = questionsArray[1].choices[i]
        choices.append(li)

        li.addEventListener('click', checkAnswer)

    }
    function checkAnswer(e) {
        if (e.target.id === questionsArray[1].answer) {
            score += 10
            console.log(score)
            renderQuestion3()
        } else {
            renderQuestion3()
            subtracTimer()
        }
    }
}

function renderQuestion3() {
    var questionsDiv = document.getElementById('question2')
    questionsDiv.style.display = 'none'
    var questionsDiv = document.getElementById('question3')
    var question = document.createElement("h3")
    question.textContent = questionsArray[2].question
    questionsDiv.prepend(question)

    var choices = document.getElementById('choices3')
    for (var i = 0; i < questionsArray[2].choices.length; i++) {
        var li = document.createElement('li')
        li.setAttribute('id', questionsArray[2].choices[i])
        li.textContent = questionsArray[2].choices[i]
        choices.append(li)

        li.addEventListener('click', checkAnswer)

    }
    function checkAnswer(e) {
        if (e.target.id === questionsArray[2].answer) {
            score += 10
            console.log(score)
            renderQuestion4()
        } else {
            renderQuestion4()
            subtracTimer()
        }
    }
}

function renderQuestion4() {
    var questionsDiv = document.getElementById('question3')
    questionsDiv.style.display = 'none'
    var questionsDiv = document.getElementById('question4')
    var question = document.createElement("h3")
    question.textContent = questionsArray[3].question
    questionsDiv.prepend(question)

    var choices = document.getElementById('choices4')
    for (var i = 0; i < questionsArray[3].choices.length; i++) {
        var li = document.createElement('li')
        li.setAttribute('id', questionsArray[3].choices[i])
        li.textContent = questionsArray[3].choices[i]
        choices.append(li)

        li.addEventListener('click', checkAnswer)

    }
    function checkAnswer(e) {
        if (e.target.id === questionsArray[3].answer) {
            score += 10
            console.log(score)
            renderQuestion5()
        } else {
            renderQuestion5()
            subtracTimer()
        }
    }
}

function renderQuestion5() {
    var questionsDiv = document.getElementById('question4')
    questionsDiv.style.display = 'none'
    var questionsDiv = document.getElementById('question5')
    var question = document.createElement("h3")
    question.textContent = questionsArray[4].question
    questionsDiv.prepend(question)

    var choices = document.getElementById('choices5')
    for (var i = 0; i < questionsArray[4].choices.length; i++) {
        var li = document.createElement('li')
        li.setAttribute('id', questionsArray[4].choices[i])
        li.textContent = questionsArray[4].choices[i]
        choices.append(li)

        li.addEventListener('click', checkAnswer)

    }
    function checkAnswer(e) {
        if (e.target.id === questionsArray[4].answer) {
            score += 10
            console.log(score)
            localStorage.setItem("mostRecentScore", score);
            return window.location.assign("/end.html")
        }
        else {
            localStorage.setItem("mostRecentScore", score);

            return window.location.assign("/end.html")
        }
    }
}

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }
//  To subtract from timer
  function subtracTimer() {
      timerCount-=5
  }

  function loseGame() {
    localStorage.setItem("mostRecentScore", score);

    return window.location.assign("/end.html")
  }


