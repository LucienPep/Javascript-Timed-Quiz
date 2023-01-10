// Varaibles Decalred to use in code (keep code cleaner)
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
var timeArea = document.getElementById('timer')
var list = document.getElementById('list')
var initalText = document.getElementById('inital')
var submit = document.getElementById('submit')
var check = ''
var correctSelection = ''
var tellTime = ''
var timeScore = ''
var timeText = ''
var finalScore = localStorage.getItem("score");
var storageLength = ''

//Questions for the quiz + there assigned answers + the correct answer for each question
var TotalQuestions = [
    {question: 'Which operator is used to assign a value to a variable?',
    answer:{
        a:"=",
        b:"*", 
        c:"-",
        d:"+"},
        correctAnswer: 'A'
        },
    {question: 'How do you create a function in JavaScript?',
    answer:{
        a:'function:myFunction()',
        b:'function + myFunction()', 
        c:'function myFunction()',
        d:'nfunction = myFunction()'},
        correctAnswer: 'C'
        },
    {question: 'How to write an IF statement in JavaScript?',
    answer:{
        a:'if i == 5 then',
        b:'if (i == 5)', 
        c:'if i = 5 then',
        d:'if i = 5'},
        correctAnswer: 'B'
        },
    {question: 'How can you add a comment in a JavaScript?',
    answer:{
        a:"'Comment",
        b:'!--Comment--', 
        c:'/*Comment*/',
        d:'//Comment'},
        correctAnswer: 'D'
        },
    {question: 'Which event occurs when the user clicks on an HTML element?',
    answer:{
        a:'onclick',
        b:'onmouseclick', 
        c:'onmouseover',
        d:'onchange'},
        correctAnswer: 'A'
        },
]

//seconds declared for 1 minute
var seconds = 60
//start timer and run until seconds var = 0
function timerstart(){
    if(seconds > 0){
        seconds --
        setTimeout(timerstart,1000)
        timeArea.innerHTML = seconds
        
    }else {
        questiontext.innerHTML = '';
        timeArea.innerHTML = '';
        an1.innerHTML = '';
        an2.innerHTML = '';
        an3.innerHTML = '';
        an4.innerHTML = '';
        h3.innerHTML = '';
        zero()
    }
}
//check if time is 0 and declare it as 0 so it doesn't remain unknown
function zero() {
    if (timeScore <= 0){
        timeScore = 0
        scoreEnter()
}else{
    scoreEnter()
}
}
//function to show score, let user input initials and save that data set into local storage
function scoreEnter(){
    console.log(timeScore)
    
    questiontext.innerHTML = "Your score was" + '<br>' + timeScore;
    var input = document.createElement('input')
    input.setAttribute("type", "text");
    input.setAttribute("value", '');
    submit.appendChild(input)

    initalText.innerHTML = "Enter your initials"
    var subButton = document.createElement('button')
    subButton.innerHTML = "Submit"
    buttons.appendChild(subButton)

    subButton.addEventListener('click', function(){
        //console.log(input.value)
        timeText = JSON.stringify(timeScore)
        timeText = '   ' + timeText
        //localStorage.setItem(input.value, input.value + timeText);
        storageLength = localStorage.length

        if (storageLength ==  0){
            localStorage.setItem(0, input.value + timeText);
        }else{
            localStorage.setItem(storageLength, input.value + timeText);
        }


        scoreBoard()
    
        })
    
}
// function to draw up scoreboard using elements from local storage + buttons to return to page and reset local stoage
function scoreBoard(){
    submit.innerHTML = '';
    initalText.innerHTML = '';
    paragraph.innerHTML = '';
    h3.innerHTML = 'Scoreboard';
    questiontext.innerHTML = '';
    an2.innerHTML = '';
    buttons.innerHTML = '';

    //for each new score and initial create a new key in local storage and assign the value to that key
    for (var i = 0, length = localStorage.length; i < length; i++){
        console.log(i)
        if (i >= 0){
            console.log(localStorage.getItem(i))
            var item = document.createElement('li')
            var text = document.createTextNode(localStorage.getItem(i)) 
            item.appendChild(text)
            list.appendChild(item)

        }else{
            timeArea.innerHTML = ''
        }
      }
      //return to home button
      var homeButton = document.createElement('button')
      homeButton.innerHTML = "Home"
      buttons.appendChild(homeButton)

      homeButton.addEventListener('click', function(){
        location.reload()
      })
      //clear local storage
      var clearButton = document.createElement('button')
      clearButton.innerHTML = "Clear"
      buttons.appendChild(clearButton)

      clearButton.addEventListener('click', function(){
        localStorage.clear()
        location.reload()
      })
}
//initial function to wipe clean page and set first question to 0
function startquiz() {
    paragraph.innerHTML = '';
    h3.innerHTML = '';
    questiontext.innerHTML = '';
    buttons.innerHTML = '';

    currentQuestion = 0;

    selectQuestion(currentQuestion) 
    timerstart()
}
//funtion for each question past add one more to show next question
function nextQuestion() {
    currentQuestion = currentQuestion + 1
    selectQuestion(currentQuestion)
}
//function to select each question until no more remain then log score and reset timer
function selectQuestion(index) {
    if(index <= 4){
    questiontext.innerHTML = TotalQuestions[index].question
    an1.innerHTML = TotalQuestions[index].answer.a
    an2.innerHTML = TotalQuestions[index].answer.b
    an3.innerHTML = TotalQuestions[index].answer.c
    an4.innerHTML = TotalQuestions[index].answer.d
    correctSelection = TotalQuestions[index].correctAnswer
    }else{
       // console.log(seconds)
        timeScore = seconds
        seconds = 0
    }
    console.log(timeScore)
}
// check to see if selected answer matches with correct answer - if not deduct 5 seconds from timer
function checker() {
    if(correctSelection === check){
        console.log("correct")
        h3.innerHTML = "Correct!"
        setTimeout(clock, 1000)
        function clock() {
        h3.innerHTML = ''
       }
    }else{
        if(seconds > 5){
            seconds = seconds - 5;
            console.log("wrong")
            h3.innerHTML = "Wrong"
            setTimeout(clock, 1000)
            function clock() {
            h3.innerHTML = ''
            }
        }else{
            seconds = 0
        }

    }
    nextQuestion()
}
// event listeners for each answer so answer can be logged individually
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


//start and scoreboard buttons on main page to either view scores in local storage or start quiz
start.addEventListener('click', startquiz);
score.addEventListener('click', scoreBoard);




