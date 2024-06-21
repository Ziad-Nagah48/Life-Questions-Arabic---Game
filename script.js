const questionText = document.getElementById("question-text");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const resultDiv = document.getElementById("result");
const gameContainer = document.querySelector(".game");

const questions = [
  { question: "هل لديك أهداف في حياتك؟", choices: ["نعم", "لا"] },
  {
    question: "هل تعتقد أن التعلم مستمر طوال الحياة هو أمر مهم؟",
    choices: ["نعم", "لا"],
  },
  { question: "هل تحب السفر واستكشاف أماكن جديدة؟", choices: ["نعم", "لا"] },
  {
    question: "هل ترغب في تحقيق أحلامك وتطوير مهاراتك؟",
    choices: ["نعم", "لا"],
  },
  {
    question: "هل تستمتع بالوقت الذي تقضيه مع أصدقائك وعائلتك؟",
    choices: ["نعم", "لا"],
  },
  {
    question: "هل تؤمن بأهمية الصحة الجيدة واللياقة البدنية؟",
    choices: ["نعم", "لا"],
  },
  {
    question: "ما هو أهم تحدي واجهته في حياتك وكيف تعاملت معه؟",
    choices: ["تحدي الأهداف", "تحدي الصحة", "تحدي العلاقات"],
  },
  {
    question: "هل لديك روتين يومي أو أسبوعي تتبعه بانتظام؟",
    choices: ["نعم", "لا"],
  },
  {
    question: "ما هي أكبر إنجازاتك الشخصية حتى الآن؟",
    choices: ["إتمام مشروع كبير", "التخرج من الجامعة", "تحقيق هدف شخصي"],
  },
  {
    question: "هل تفضل العمل الجماعي أم العمل بشكل فردي؟",
    choices: ["العمل الجماعي", "العمل الفردي"],
  },
];

let currentQuestionIndex = 0;
let positiveAnswersCount = 0;

function displayQuestion() {
  questionText.textContent = questions[currentQuestionIndex].question;
  const choices = questions[currentQuestionIndex].choices;
  const answersHtml = choices
    .map((choice) => `<button class="choice-btn">${choice}</button>`)
    .join("");
  gameContainer.innerHTML = `<div class="question">${questionText.textContent}</div><div class="answers">${answersHtml}</div>`;
  const choiceBtns = document.querySelectorAll(".choice-btn");
  choiceBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (btn.textContent === "نعم") {
        positiveAnswersCount++;
      }
      nextQuestion();
    });
  });
}

function evaluateFinalScore() {
  let finalScore = "";

  if (positiveAnswersCount <= 5) {
    finalScore =
      "مستوى تفكيرك منخفض، قد تحتاج إلى التفكير أكثر في أهدافك وتطلعاتك للمستقبل.";
  } else if (positiveAnswersCount <= 10) {
    finalScore =
      "مستوى تفكيرك متوسط، لديك بعض الاهتمام بتطوير نفسك وأهدافك، لكن يمكنك العمل على زيادة التفاصيل والتخطيط.";
  } else {
    finalScore =
      "مستوى تفكيرك متقدم، أنت شخص ذو تطلعات عالية وتعمل جادًا على تحقيق أهدافك، استمر في التقدم!";
  }

  resultDiv.textContent = finalScore;
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    evaluateFinalScore();
  }
}

displayQuestion();
