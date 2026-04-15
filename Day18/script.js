// Day 18: Quiz App

let questions = [
    {
        question: "What is JavaScript?",
        options: ["Language", "Library", "Framework", "Tool"],
        answer: "Language"
    },
    {
        question: "Which keyword declares variable?",
        options: ["int", "let", "varr", "define"],
        answer: "let"
    },
    {
        question: "Which is used for output?",
        options: ["print()", "echo()", "console.log()", "write()"],
        answer: "console.log()"
    }
];

let currentIndex = 0;
let score = 0;

// Load question
function loadQuestion() {
    let q = questions[currentIndex];

    document.getElementById("question").innerText = q.question;

    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(option => {
        let btn = document.createElement("button");
        btn.innerText = option;

        btn.onclick = function () {
            checkAnswer(option);
        };

        optionsDiv.appendChild(btn);
    });
}

// Check answer
function checkAnswer(selected) {
    if (selected === questions[currentIndex].answer) {
        score++;
    }
}

// Next question
function nextQuestion() {
    currentIndex++;

    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText = "Quiz Finished!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("score").innerText = "Score: " + score;
    }
}

// Initial load
loadQuestion();
