const questions = [
  {
    question: "Hur ofta tränar du i veckan?",
    options: ["0-3 gånger", "3-5 gånger", "+5 gånger"],
    answer: ""
  },
  {
    question: "Vad är ditt främsta mål för din kondition?",
    options: ["Gå ner i vikt", "Bygga muskler", "Förbättra uthålligheten"],
    answer: ""
  },
  {
    question: "Vilken typ av träning tycker du bäst om?",
    options: ["Cardio", "Tyngdlyftning", "Yoga/Pilates"],
    answer: ""
  },
  {
    question: "Hur lång tid vill du att träningen ska vara?",
    options: ["Mindre än 30 minuter", "30-60 minuter", "Mer än 60 minuter"],
    answer: ""
  },
  {
    question: "Vilken tid på dagen föredrar du att träna?",
    options: ["Morgon", "Eftermiddag", "Kväll"],
    answer: ""
  },
  {
    question: "Har du några skador eller hälsoproblem?",
    options: ["Ja", "Nej", "Ibland"],
    answer: ""
  },
  {
    question: "Vilken är din åldersgrupp?",
    options: ["18-30", "31-50", "51+"],
    answer: ""
  },
  {
    question: "Vilken är din nuvarande konditionsnivå?",
    options: ["Nybörjare", "Medel", "Avancerad"],
    answer: ""
  },
  {
    question: "Vilken utrustning har du tillgång till?",
    options: ["Inga", "Hantlar", "Fullt gym"],
    answer: ""
  },
  {
    question: "Vilken träningsmiljö föredrar du?",
    options: ["Hem", "Gym", "Utomhus"],
    answer: ""
  },
  {
    question: "Vilket är ditt hälsosamma favorit mellanmål?",
    options: ["Frukt", "Nötter", "Grekisk yoghurt"],
    answer: ""
  }
];

let currentQuestion = 0;
let answers = [];

const questionElement = document.getElementById("question");
const optionElements = document.getElementsByClassName("option");
const summaryElement = document.createElement("div");
summaryElement.classList.add("summary");

function displayQuestion() {
  const questionElement = document.getElementById('question');
  questionElement.classList.remove('fade-out');
  questionElement.innerText = questions[currentQuestion].question;
  if (currentQuestion < questions.length) {
    questionElement.innerText = questions[currentQuestion].question;
    for (let i = 0; i < optionElements.length; i++) {
      optionElements[i].innerText = questions[currentQuestion].options[i];
    }
  } else {
    displaySummary();
  }
}

function nextQuestion() {
  const questionElement = document.getElementById('question');
  questionElement.classList.add('fade-out');
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      getWorkoutPlan();
    }
  }, 1000);
}

function displaySummary() {
  const answersList = document.createElement("ul");
  for (let i = 0; i < questions.length; i++) {
    const answerItem = document.createElement("li");
    answerItem.innerText = questions[i].question + " " + questions[i].options[answers[i]];
    answersList.appendChild(answerItem);
  }
  summaryElement.innerText = "Based on your answers, your workout plan is: " + getWorkoutPlan();
  summaryElement.appendChild(answersList);
  document.body.appendChild(summaryElement);
}

function getWorkoutPlan() {
  let workoutPlan = "";
  if (answers[0] === 0 && answers[1] === 0) {
    workoutPlan = "Beginner cardio plan";
  } else if (answers[0] === 0 && answers[1] === 1) {
    workoutPlan = "Beginner strength training plan";
  } else if (answers[0] === 0 && answers[1] === 2) {
    workoutPlan = "Beginner yoga/pilates plan";
  } else if (answers[0] === 1 && answers[1] === 0) {
    workoutPlan = "Intermediate cardio plan";
  } else if (answers[0] === 1 && answers[1] === 1) {
    workoutPlan = "Intermediate strength training plan";
  } else if (answers[0] === 1 && answers[1] === 2) {
    workoutPlan = "Intermediate yoga/pilates plan";
  } else if (answers[0] === 2 && answers[1] === 0) {
    workoutPlan = "Advanced cardio plan";
  } else if (answers[0] === 2 && answers[1] === 1) {
    workoutPlan = "Advanced strength training plan";
  } else if (answers[0] === 2 && answers[1] === 2) {
    workoutPlan = "Advanced yoga/pilates plan";
  } else {
    workoutPlan = "Customized plan based on your answers";
  }
  return workoutPlan;
}

function selectOption(optionIndex) {
  answers.push(optionIndex);
  currentQuestion++;
  displayQuestion();
}

displayQuestion();
for (let i = 0; i < optionElements.length; i++) {
  optionElements[i].addEventListener("click", function() {
    selectOption(i);
  });
}