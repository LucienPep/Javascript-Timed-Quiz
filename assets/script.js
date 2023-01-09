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
var correctSelection = ''

var TotalQuestions = [
    {question: 'this is question no.1',
    answer:{
        a:'yes',
        b:'no', 
        c:'nay',
        d:'nah'},
        correctAnswer: 'A'
        },
    {question: 'this is question no.2',
    answer:{
        a:'nay',
        b:'no', 
        c:'yes',
        d:'nah'},
        correctAnswer: 'C'
        },
    {question: 'this is question no.3',
    answer:{
        a:'no',
        b:'yes', 
        c:'nay',
        d:'nah'},
        correctAnswer: 'B'
        },
    {question: 'this is question no.4',
    answer:{
        a:'nah',
        b:'no', 
        c:'nay',
        d:'yes'},
        correctAnswer: 'D'
        },
    {question: 'this is question no.5',
    answer:{
        a:'yes',
        b:'no', 
        c:'nay',
        d:'nah'},
        correctAnswer: 'A'
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
    correctSelection = TotalQuestions[index].correctAnswer
    
}

function checker() {
    if(correctSelection === check){
        console.log("correct")
        h3.innerHTML = "Correct!"
        setTimeout(clock, 1000)
        function clock() {
        h3.innerHTML = ''
       }
    }else{
        console.log("wrong")
        h3.innerHTML = "Wrong"
        setTimeout(clock, 1000)
        function clock() {
        h3.innerHTML = ''
       }
    }
    nextQuestion()
}

an1.addEventListener('click', function() {
    check = 'A'
    console.log(check)
    checker()
})
an2.addEventListener('click', function() {
    check = 'B'
    console.log(check)
    checker()
})
an3.addEventListener('click', function() {
    check = 'C'
    console.log(check)
    checker()
})
an4.addEventListener('click', function() {
    check = 'D'
    console.log(check)
    checker()
})



start.addEventListener('click', startquiz);




