const quizData = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
    answer: "Tokyo",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "Who developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Nikola Tesla",
      "Galileo Galilei",
    ],
    answer: "Albert Einstein",
  },
  {
    question: "Which country is famous for inventing pizza?",
    options: ["France", "Italy", "USA", "Mexico"],
    answer: "Italy",
  },
  {
    question: "What is the boiling point of water in Celsius?",
    options: ["90°C", "100°C", "120°C", "80°C"],
    answer: "100°C",
  },
  {
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Processing Unit",
      "Central Program Unit",
      "Control Processing Unit",
    ],
    answer: "Central Processing Unit",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Osmium", "Iron"],
    answer: "Oxygen",
  },
  {
    question: "Which continent is the Sahara Desert located in?",
    options: ["Asia", "Africa", "Australia", "South America"],
    answer: "Africa",
  },
  {
    question: "Which company created the iPhone?",
    options: ["Samsung", "Google", "Apple", "Microsoft"],
    answer: "Apple",
  },
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswers = {};

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");
const progressElement = document.getElementById("progress");
const progressBar = document.getElementById("progress-bar");
const resultContainer = document.getElementById("result");
const scoreElement = document.getElementById("score");
const textConfirm = document.getElementById("textConfirm");

function updateProgressBar() {
  let progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
  progressBar.style.width = progress + "%";
}

function loadQuestion() {
  resetState();
  let currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${
    quizData.length
  }`;

  textConfirm.textContent = "";
  nextButton.disabled = true;

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    button.addEventListener("click", () => selectAnswer(button, option));

    // Highlight previously selected answer if user navigates back
    if (selectedAnswers[currentQuestionIndex] === option) {
      button.classList.add("selected");
      nextButton.disabled = false;
    }
  });

  // Disable Previous button if at the first question
  prevButton.style.display = currentQuestionIndex === 0 ? "none" : "block";

  // Disable Next button if at the last question
  nextButton.innerText =
    currentQuestionIndex === quizData.length - 1 ? "Show Result" : "Next";

  updateProgressBar();
}

function selectAnswer(button, option) {
  // Store selected answer
  selectedAnswers[currentQuestionIndex] = option;

  // Remove previous selection highlight
  Array.from(answerButtons.children).forEach((btn) =>
    btn.classList.remove("selected")
  );

  // Highlight the selected answer
  button.classList.add("selected");

  // Enable Next button when an option is selected
  nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
  const selected = selectedAnswers[currentQuestionIndex];
  const correct = quizData[currentQuestionIndex].answer;

  if (selectedAnswers[currentQuestionIndex] == null) {
    textConfirm.innerText = "Please select an answer before proceeding.";
    return;
  }

  if (
    selected === correct &&
    !selectedAnswers.hasOwnProperty(currentQuestionIndex + 1)
  ) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
});

prevButton.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
    updateProgressBar();
  }
});

function showResults() {
  document.getElementById("quiz").classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreElement.textContent = `${score} / ${quizData.length}`;
}

function resetState() {
  answerButtons.innerHTML = "";
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswers = {};
  document.getElementById("quiz").classList.remove("hidden");
  resultContainer.classList.add("hidden");
  loadQuestion();
}

loadQuestion();
