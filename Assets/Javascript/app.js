let startBtn = document.getElementById('btn');
let doneBtn = document.getElementById('doneBtn');
let numberWrong = 0;
let numberRight = 0;
let numberUnanswered = 0;
let timerBtn = document.getElementById('showNumber');
var audio = document.getElementById('myAudio');
let quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
let resultsBox = document.getElementById('resultsBox');


const triviaQuestions = [
    {
        question: "What kind of animal is Mickey?",
        answers: {
            a: "Dog",
            b: "Fish",
            c: "Mouse",
            d: "Horse"
        },
        correctAnswer: "c"
    },
    {
        question: "How many fingers does Mickey have?",
        answers: {
            a: "two",
            b: "four",
            c: "four and a thumb",
            d: "three and a thumb"

        },
        correctAnswer: "d"
    },
    {
        question: "Does Mickey Mouse have a tail?",
        answers: {
            a: "Yes",
            b: "No",
            c: "Not Sure",
            d: "He has two!"
        },
        correctAnswer: "a"
    },
    {
        question: "What was Mickey Mouse's original name?",
        answers: {
            a: "It was always Mickey Mouse",
            b: "Mortimer",
            c: "Joshua",
            d: "Disney"

        },
        correctAnswer: "b"
    },
    {
        question: "When did Mickey Mouse get his star on the Hollywood Walk of Fame?",
        answers: {
            a: "2020",
            b: "1987",
            c: "1978",
            d: "1990"

        },
        correctAnswer: "c"
    },
    {
        question: "Who was the first to voice Mickey Mouse?",
        answers: {
            a: "Walt Disney",
            b: "Wayne Allwine",
            c: "Chris Diamantopoulos",
            d: "Bret Iwan"

        },
        correctAnswer: "a"
    }
]

function calcAnswers() {
    audio.pause();
    timerBtn.style.display = "none";
    doneBtn.style.display = "none";
    quizContainer.style.display = "none";
    resultsBox.style.display = "inline";

    var selectedAnswer = document.querySelectorAll('input:checked')

    for (t = 0; t < selectedAnswer.length; t++) {
        console.log("Their Answer: " + selectedAnswer[t].id);
        var questionNumber = selectedAnswer[t].name.charAt(selectedAnswer[t].name.length - 1);
        console.log("Question Number: " + questionNumber);
        var question = triviaQuestions[parseInt(questionNumber)];
        console.log("Correct Answer: " + question.correctAnswer);
        if (selectedAnswer[t].id === question.correctAnswer) {
            numberRight++;
            console.log("You're Correct!");
        } else {
            numberWrong++;
            console.log("You're Wrong!");
        }
    }
    numberUnanswered = triviaQuestions.length - (numberRight + numberWrong);
    console.log("Not Answered: " + numberUnanswered);
    var resultsHtml = "Results!<br><br><ul style ='list-style: none;'><li> Number Right: " + numberRight + "</li><li> Number Wrong: " + numberWrong + "</li><li> Number Unanswered: " + numberUnanswered + "</li></ul>";
    document.getElementById("resultsBox").innerHTML = resultsHtml;
}

startBtn.onclick = function () {
    //console.log("hello!");

    timerBtn.style.display = "inline";
    startBtn.style.display = "none";
    document.getElementById('text').style.top = "20%";
    document.getElementById('text').style.paddingBottom = "50px";
    doneBtn.style.display = "inline";

    for (let j = 0; j < triviaQuestions.length; j++) {
        let question = $("<p>" + triviaQuestions[j].question + "</p>");
        question.appendTo("#quiz");
        let answers = $("<span></span>");
        for (let i in triviaQuestions[j].answers) {
            console.log(triviaQuestions[j].answers[i]);
            let circles = $("<input></input>");
            circles.attr("type", "radio");
            circles.attr("name", "choices" + j);
            circles.attr("value", triviaQuestions[j].answers[i]);
            circles.attr("id", i);
            circles.appendTo(answers);
            let circleName = $("<label>" + triviaQuestions[j].answers[i] + "</label>");
            circleName.appendTo(answers);
        }
        answers.appendTo("#quiz");
    }

    var numTimer = 100;
    var intervalId;
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        $("#showNumber").html("<h2>" + numTimer + "</h2>");
    }
    function decrement() {
        numTimer--;
        $("#showNumber").html("<h2>" + numTimer + "</h2>");
        if (numTimer === 0) {
            stop();
            //console.log("Time Up!");
        }
    }
    function stop() {
        clearInterval(intervalId);
        calcAnswers();
    }
    run();
    audio.play();
};

doneBtn.onclick = function () {
    //console.log("hello!");
    calcAnswers();

};