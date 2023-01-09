var questiontext = document.getElementById('question')
var an1 = document.getElementById('an1')
var an2 = document.getElementById('an2')
var an3 = document.getElementById('an3')
var an4 = document.getElementById('an4')
var paragraph = document.getElementById('paragraph')
var start = document.getElementById('startBTN')
var score = document.getElementById('scoreBTN')
var h3 = document.getElementById('h3')
var buttons = document.getElementById('buttons')
var check = ''

var TotalQuestions = [
    {question: 'this is question no.1',
    answer:{
        a:'yes',
        b:'no', 
        c:'nay',
        d:'nah'},
        correctAnswer: 'a'
        },
    {question: 'this is question no.2',
    answer:{
        a:'nay',
        b:'no', 
        c:'yes',
        d:'nah'},
        correctAnswer: 'c'
        },
    {question: 'this is question no.3',
    answer:{
        a:'no',
        b:'yes', 
        c:'nay',
        d:'nah'},
        correctAnswer: 'b'
        },
    {question: 'this is question no.4',
    answer:{
        a:'nah',
        b:'no', 
        c:'nay',
        d:'yes'},
        correctAnswer: 'a'
        },
    {question: 'this is question no.5',
    answer:{
        a:'yes',
        b:'no', 
        c:'nay',
        d:'nah'},
        correctAnswer: 'a'
        },
    ]


function startquiz() {
    paragraph.innerHTML = '';
    h3.innerHTML = '';
    questiontext.innerHTML = '';
    buttons.innerHTML = '';

    currentQuestion = 0;

    selectQuestion(currentQuestion) 
}

function nextQuestion() {
    currentQuestion = currentQuestion + 1
    selectQuestion(currentQuestion)
}

function selectQuestion(index) {
    questiontext.innerHTML = TotalQuestions[index].question
    an1.innerHTML = TotalQuestions[index].answer.a
    an2.innerHTML = TotalQuestions[index].answer.b
    an3.innerHTML = TotalQuestions[index].answer.c
    an4.innerHTML = TotalQuestions[index].answer.d
}

function checker(selector) {
    console.log(selector)
}

an1.addEventListener('click', function() {
    check = 'A'
    console.log(check)
    nextQuestion()
})
an2.addEventListener('click', function() {
    check = 'B'
    console.log(check)
    nextQuestion()
})
an3.addEventListener('click', function() {
    check = 'C'
    console.log(check)
    nextQuestion()
})
an4.addEventListener('click', function() {
    check = 'D'
    console.log(check)
    nextQuestion()
})



start.addEventListener('click', startquiz);




