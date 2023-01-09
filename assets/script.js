var questiontext = document.getElementById('question')
var answertext = document.getElementById('answers')
var paragraph = document.getElementById('paragraph')
var start = document.getElementById('startBTN')
var score = document.getElementById('scoreBTN')
var h3 = document.getElementById('h3')
var buttons = document.getElementById('buttons')

var TotalQuestions = [
    {question: 'this is question no.1',
        answers: {
            a: "Yes",
            b: "No",
            c: "Nay",
            d: "Nah"
        },
        correctAnswer: "a"
        },
    {question: 'this is question no.2',
        answers: {
            a: "Nay",
            b: "No",
            c: "Yes",
            d: "Nah"
        },
        correctAnswer: "c"
        },
    {question: 'this is question no.3',
        answers: {
            a: "No",
            b: "Yes",
            c: "Nay",
            d: "Nah"
        },
        correctAnswer: "b"
        },
    {question: 'this is question no.4',
        answers: {
            a: "Nah",
            b: "No",
            c: "Nay",
            d: "Yes"
        },
        correctAnswer: "d"
        },
    {question: 'this is question no.5',
        answers: {
            a: "Yes",
            b: "No",
            c: "Nay",
            d: "Nah"
        },
        correctAnswer: "a"
        },
    ]

let currentQuestion = 0;
let currentAnswer = 0;

function selectQuestion(index) {
    questiontext.innerHTML = TotalQuestions[index].question
}

function nextQuestion() {
    currentQuestion = currentQuestion + 1
    selectQuestion(currentQuestion)
}

function startquiz() {
    paragraph.innerHTML = '';
    h3.innerHTML = '';
    questiontext.innerHTML = '';
    buttons.innerHTML = '';

    currentQuestion = 0;

    selectQuestion(currentQuestion)

    var nextbutton = document.createElement("button")
    var nextbuttonname = document.createTextNode("Next Question");
    nextbutton.appendChild(nextbuttonname);
    document.body.appendChild(nextbutton);

    nextbutton.addEventListener('click', nextQuestion);
}

start.addEventListener('click', startquiz);


