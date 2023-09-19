let oldScores
const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const buttonGrid = document.getElementById('button-grid')
const answerButtonsElement = document.getElementById('answer-button')
const quizHeader = document.getElementById('header')
const quizText = document.getElementById('intro')
const quizTimer = document.getElementById('container')


let suffledQuestions, currentQuestionIndex
// listening for the click on next question
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion
})
// Start game function to execute the quiz
function startGame() {
    console.log('started')
    document.getElementById("start-button");
    startTimer();
    startButton.classList.add('hide')
    quizHeader.classList.add('hide')
    quizText.classList.add('hide')
    // buttonGrid.list.toggle('hidden')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    // questionContainerElement.classList.toggle('hidden')
    setNextQuestion()
}
// next question button for shuffled questions
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
// function to display the questions and answers. Answers to append the answer button from HTML
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
// reset quiz
function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
// selected answer and display next button if more questions
function selectAnswer() {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')   
    } else {
        startButton.innerText = 'Resart'
        startButton.classList.remove('hide')
    }
}
// selecting the answer to display wrong or right
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
// question logs
const questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            { text: '<script>', correct: true },
            { text: '<Javascipt>', correct: false },
            { text: '<style>', correct: false },
            { text: '<js>', correct: false },


        ]
    }
]
// timer function. Start on start button click. Run for 60 sec
function startTimer(){
    
    const timeH = document.querySelector('h2');
    let timeSecond = 60;

timeH.innerHTML = timeSecond;

const countDown = setInterval (()=>{
    timeSecond--;
    timeH.innerHTML = timeSecond;
    if(timeSecond <= 0 || timeSecond < 1){
        clearInterval(countDown)
        alert("Time is up! Better luck next time.")
    }
    },1000);
}
