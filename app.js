var quiz = [
    {
        question: "Which type of JavaScript language is ___",
        op1: "Object-Oriented",
        op2: "Object-Based",
        op3: "Assembly-language",
        op4: "High-level",
    },
    {
        question: "what us s",
        op1: "qs",
        op2: "df",
        op3: "fc",
        op4: "sa",
    },
    {
        question: "what us c",
        op1: "qs",
        op2: "df",
        op3: "fc",
        op4: "sa",
    },
    {
        question: "what us d",
        op1: "qs",
        op2: "df",
        op3: "fc",
        op4: "sa",
    },
];



var question = document.getElementById("qs")
var op1 = document.getElementById("a")
var op2 = document.getElementById("b")
var op3 = document.getElementById("c")
var op3 = document.getElementById("d")

var btn = document.getElementById("submit")
var butt = document.querySelector(".button-84")
var currentQns = 0;

index = 0;

var questions = quiz[index]
// for (var key in quiz[index]) {
console.log(quiz[currentQns])


function el() {

    question.innerHTML = `${quiz[currentQns].question}`
    a.innerHTML = `${quiz[currentQns].op1}`
    b.innerHTML = `${quiz[currentQns].op2}`
    c.innerHTML = `${quiz[currentQns].op3}`
    d.innerHTML = `${quiz[currentQns].op4}`


    var radioButtons = document.querySelectorAll('input[type="radio"]');
    for (i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false
    }
    console.log(radioButtons)
}
el()


btn.addEventListener("click", () => {
    currentQns++;

    if (currentQns < quiz.length) {
        el();

    }
    else { alert("congrates you finished the quiz") }









})
function



