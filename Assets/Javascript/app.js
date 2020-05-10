
let startBtn = document.getElementById('btn');
let doneBtn;
let numberRight = 0;
let numberWrong = 0;
let numberUnanswered = 0;
let timer;

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

startBtn.onclick = function () {
    console.log("hello!");
    startBtn.style.display = "none";
    document.getElementById('text').style.top = "20%";
    document.getElementById('text').style.paddingBottom = "50px";
    

    for (let j = 0; j < triviaQuestions.length; j++) {


        let question = $("<p>" + triviaQuestions[j].question + "</p>");
        question.appendTo("#quiz");

        let answers = $("<span></span>");
        for (let i in triviaQuestions[j].answers) {
            console.log(triviaQuestions[j].answers[i]);
            let circles = $("<input></input>");
            circles.attr("type", "radio");
            circles.attr("name", "choices");
            circles.attr("value", triviaQuestions[j].answers[i]);
            circles.attr("id", i);
            circles.appendTo(answers);
            let circleName = $("<label>" + triviaQuestions[j].answers[i] + "</label>");
            circleName.appendTo(answers);

        }
        answers.appendTo("#quiz");


    }
};

