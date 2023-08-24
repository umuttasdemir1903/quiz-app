const quizData = [
  {
    question: "Who is the best software trainer user?",
    a: "MEHMET CAN SEYHAN 👑",
    b: "Joe Goldberg",
    c: "William Baker",
    d: "Bear Steve",
    e: "Mark Zone",
    correct: "a",
  },
  {
    question: "Who is the funniest Twitter user?",
    a: "Matthew Perry",
    b: "Ricky Gervais",
    c: "Bill Murray",
    d: "Steve Harvey",
    e: " Kevin Hart",
    correct: "d",
  },
  {
    question: "Who is the most active Twitter user?",
    a: "Matthew Perry",
    b: "Ricky Gervais",
    c: "Bill Murray",
    d: "Steve Harvey",
    e: " Kevin Hart",
    correct: "b",
  },

  {
    question: "Who is the best actor?",
    a: "Matthew Perry",
    b: "Ricky Gervais",
    c: "Bill Murray",
    d: "Steve Harvey",
    e: " Kevin Hart",
    correct: "e",
  },
  {
    question: "Who is the most angry Twitter user?",
    a: "Matthew Perry",
    b: "Ricky Gervais",
    c: "Bill Murray",
    d: "Steve Harvey",
    e: " Kevin Hart",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitbtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  e_text.innerText = currentQuizData.e;
}

function deselectedAnswers() {
  answerEl.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach(function (answerEl) {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitbtn.addEventListener("click", () => {
  const answer = getSelected();

  // console.log(answer)

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
            <h2>Test Completed you got ${score * 20} points 🤩</h2>

            <button class = "submit" onClick = "location.reload()"> Try Again 🌀</button>

            `;
    }
  }
});
