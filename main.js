
    function generateLetter() {
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var character = Math.floor(Math.random() * alphabet.length+1)
     var randomLetter = alphabet[character]
    document.getElementById('letter').textContent = randomLetter
  }

  var count = 10
var time = document.getElementById("countdown")
var intervalId

function Countdown() {
  count = count - 1
  time.innerText = count
  if (count === 0) {
    clearInterval(intervalId)
    time.innerText = "Time's up!"
    check()
  }
}

function startCountdown() {
  count = 10
  time.innerText = count
  clearInterval(intervalId)
  intervalId = setInterval(Countdown, 1000)
}

$(document).ready(function() {
  $("#go, #agn").click(function() {
    startCountdown()
  })
})
function check() {
    var letter = document.getElementById("letter").textContent.toUpperCase()
    var boy = document.getElementById("boy").value.toUpperCase()
    var girl = document.getElementById("girl").value.toUpperCase()
    var animal = document.getElementById("animal").value.toUpperCase()
    var country = document.getElementById("country").value.toUpperCase()
    var thing = document.getElementById("thing").value.toUpperCase()

    if (boy[0] === letter && girl[0] === letter && animal[0] === letter && country[0] === letter && thing[0] === letter) {
        alert("You won!")
    } else {
        alert("You lost.")
    }
}

function resetGame() {
    document.getElementById('boy').value = ""
    document.getElementById('girl').value = ""
    document.getElementById('animal').value = ""
    document.getElementById('country').value = ""
    document.getElementById('thing').value = ""
    document.getElementById('letter').textContent = ""
}
