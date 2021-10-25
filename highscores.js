var highScoresList = document.querySelector("#highScoresList")
var highScores = JSON.parse(localStorage.getItem("highScores")) || []

// function init () {
//     var storedScores = 
// }
// localStorage.setItem("highScores", highScores);

highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li`
}).join("")