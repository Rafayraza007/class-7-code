const questions = [
  {
    question: "What is your nationality?",
    answers: ["Afghanistan", "Pakistan", "China", "America"],
    correct: 1
  },
  {
    question: "Capital of Pakistan?",
    answers: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
    correct: 2
  },
  {
    question: "2 + 2 = ?",
    answers: ["3", "4", "5", "22"],
    correct: 1
  },
  {
    question: "Founder of Pakistan?",
    answers: ["Imran Khan", "Liaquat Ali", "Allama Iqbal", "Quaid-e-Azam"],
    correct: 3
  },
  {
    question: "Red planet?",
    answers: ["Earth", "Venus", "Mars", "Jupiter"],
    correct: 2
  },
  {
    question: "Language for web development?",
    answers: ["Python", "JavaScript", "C++", "Swift"],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const scoreContainer = document.getElementById("score-container");

function showQuestion() {
  nextBtn.style.display = "none";
  let q = questions[currentQuestion];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.onclick = () => checkAnswer(index);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selectedIndex) {
  const correctIndex = questions[currentQuestion].correct;
  const buttons = optionsEl.querySelectorAll("button");

  buttons.forEach((btn, index) => {
    if (index === correctIndex) {
      btn.style.backgroundColor = "#00c853";
    } else if (index === selectedIndex) {
      btn.style.backgroundColor = "#d50000";
    }
    btn.disabled = true;
  });

  if (selectedIndex === correctIndex) {
    score += 10;
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  restartBtn.style.display = "none";
  scoreContainer.innerText = "";
  nextBtn.style.display = "none";
  showQuestion();
});

function showScore() {
  questionEl.innerText = "Quiz Completed!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreContainer.innerText =` Your Score: ${score} / ${questions.length * 10}`;
  restartBtn.style.display = "inline-block";
}

showQuestion();
