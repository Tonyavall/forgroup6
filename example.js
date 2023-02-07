// var timerEl = document.querySelector("#timer")
// var number = document.querySelector("#number")
// var question = document.querySelector("#question")
// var next = document.querySelector("#next")
// var first = document.querySelector("#first")
// var second = document.querySelector("#second")
// var third = document.querySelector("#third")
// var fourth = document.querySelector("#fourth")

// var id;
// var time = 30;
// var currentQuestion = -1;

// function tick() {
//     if (time === 1) clearInterval(id)

//     time--;
//     timerEl.textContent = time;
// }

// function playGame () {
//     id = setInterval(tick, 1000)
// }

// playGame();

// var questions = [
//     {
//         question: "Do you like cats?",
//         choices: ["a", "b"],
//         correctChoice: "b"
//     },
//     {
//         question: "Do you like dogs?",
//         choices: ["a", "b"],
//         correctChoice: "c"
//     }
// ]

// function displayNext() {
//     currentQuestion++;
    
//     question.textContent = questions[currentQuestion].question;
// }

// next.addEventListener("click", displayNext);

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.kroger.com/v1/connect/oauth2/token",
  "method": "POST",
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic {{base64(“CLIENT_ID:CLIENT_SECRET”)}}"
  },
  "data": {
    "grant_type": "client_credentials",
    "scope": "{{scope}}"
  }
}

$.ajax(settings).done(function (response) {
  console.log('done')
  console.log(response);
});