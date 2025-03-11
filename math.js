const questions = [
  // 1
  {
    question: "Сколько будет 12 + 15?",
    correctAnswer: "A"
  },
  // 2
  {
    question: "Найдите значение выражения: 7 * (3 + 4).",
    correctAnswer: "B"
  },
  // 3
  {
    question: "Упростите выражение: 3x + 4x.",
    correctAnswer: "C"
  },
  // 4
  {
    question: "Сколько будет 5 * (2 + 3)?",
    correctAnswer: "A"
  },
  // 5
  {
    question: "Решите уравнение: x - 5 = 10.",
    correctAnswer: "B"
  },
  // 6
  {
    question: "Найдите значение выражения: 8².",
    correctAnswer: "A"
  },
  // 7
  {
    question: "Найдите значение выражения: 7² - 22.",
    correctAnswer: "C"
  },
  // 8
  {
    question: "Чему равен периметр квадрата со стороной 4 см?",
    correctAnswer: "A"
  },
  // 9
  {
    question: "Сколько будет 36 ÷ 6?",
    correctAnswer: "A"
  },
  // 10
  {
    question: "Найдите площадь прямоугольника, если его длина 8 см, а ширина 3 см.",
    correctAnswer: "B"
  },
  // 11
  {
    question: "Чему равен площадь квадрата со стороной 11 см?",
    correctAnswer: "C"
  },
  // 12
  {
    question: "Найдите значение выражения: 2/5 * 98.",
    correctAnswer: "A"
  },
];

let score = 0; 

document.querySelector("button").addEventListener("click", showFinalScore, showFinalResult);

function checkAnswer(selectedAnswer, questionNumber) {
  const resultElement = document.getElementById(`result${questionNumber}`);
  const currentQuestion = questions[questionNumber - 1];

  if (selectedAnswer === currentQuestion.correctAnswer) {
    resultElement.textContent = "Правильный ответ!";
    score++; 
  } else {
    resultElement.textContent = "Неправильный ответ!";
  }
}

function showFinalScore() {
  countScore(); 
  const finalScoreElement = document.getElementById("finalScore");
  finalScoreElement.textContent = `Вы набрали ${score} из ${questions.length} баллов.`;
}




function showFinalResult() {
  countScore(); // Вычисляем итоговый балл
  const finalScoreElement = document.getElementById("finalScore");
  finalScoreElement.textContent = `Вы набрали ${score} из ${questions.length} баллов.`;
  
  const finalResultElement = document.getElementById("finalResult");

  if (score <= 6) {
    finalResultElement.textContent = `Ваш результат 2.`;
  } else if (score <= 9) {
    finalResultElement.textContent = `Ваш результат 3.`;
  } else if (score <= 10) {
    finalResultElement.textContent = `Ваш результат 4.`;
  } else if (score == 12) {
    finalResultElement.textContent = `Ваш результат 5.`;
  } else {
    finalResultElement.textContent = `Ваш результат 5.`;
  }
  localStorage.setItem('score', score);  
  localStorage.setItem('totalQuestions', questions.length);
  
}

function countScore() {
  score = 0; 
  const resultIds = [
    'result1', 'result2', 'result3', 'result4', 'result5',
    'result6', 'result7', 'result8', 'result9', 'result10',
    'result11', 'result12'
  ];

  resultIds.forEach(resultId => {
    if (document.getElementById(resultId).innerText === 'Правильный ответ!') {
      score += 1; 
    }
  });
}
