const quiz = [
    {
        question: 'What is the capital of France?',
        answers: ['Paris', 'London', 'Berlin'],
        points: [3, 0, 0]
    },
    {
        question: 'Who wrote "Romeo and Juliet"?',
        answers: ['William Shakespeare', 'Jane Austen', 'Charles Dickens'],
        points: [3, 0, 0]
    },
    {
        question: 'What is the largest mammal?',
        answers: ['Blue Whale', 'Elephant', 'Giraffe'],
        points: [3, 0, 0]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: ['Mars', 'Venus', 'Jupiter'],
        points: [3, 0, 0]
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: ['Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso'],
        points: [3, 0, 0]
    },
    {
        question: 'What is the chemical symbol for water?',
        answers: ['H2O', 'CO2', 'O2'],
        points: [3, 0, 0]
    },
    {
        question: 'Which country is famous for the Great Wall?',
        answers: ['China', 'India', 'Russia'],
        points: [3, 0, 0]
    },
    {
        question: 'Who was the first man on the moon?',
        answers: ['Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarin'],
        points: [3, 0, 0]
    },
    {
        question: 'What is the chemical symbol for gold?',
        answers: ['Au', 'Ag', 'Fe'],
        points: [3, 0, 0]
    },
    {
        question: 'Who painted the Sistine Chapel ceiling?',
        answers: ['Michelangelo', 'Leonardo da Vinci', 'Raphael'],
        points: [3, 0, 0]
    }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');

    questionElement.textContent = quiz[currentQuestion].question;
    answersElement.innerHTML = '';

    for (let i = 0; i < quiz[currentQuestion].answers.length; i++) {
        const button = document.createElement('button');
        button.textContent = quiz[currentQuestion].answers[i];
        button.classList.add('px-4', 'py-2', 'bg-gray-300', 'rounded');
        button.addEventListener('click', () => {
            score += quiz[currentQuestion].points[i];
            currentQuestion++;
            if (currentQuestion < quiz.length) {
                showQuestion();
            } else {
                showResult();
            }
        });
        answersElement.appendChild(button);
    }
}

function showResult() {
    const resultElement = document.getElementById('result');
    const recommendationElement = document.getElementById('recommendation');
    const quizElement = document.getElementById('quiz-container');

    quizElement.style.display = 'none';

    let recommendation;

    if (score >= 0 && score <= 3) {
        recommendation = `Adventure`;
    } else if (score >= 4 && score <= 7) {
        recommendation = 'Romantic';
    } else if (score >= 8) {
        recommendation = 'Detective';
    }
    resultElement.textContent = `Your score is ${score}`;
    let boldText = document.createElement('span');
    boldText.textContent = `${recommendation} books.`;
    boldText.style.fontWeight = 'bold';
    let fullText = document.createTextNode(`We recommend you to read `);
    recommendationElement.appendChild(fullText);
    recommendationElement.appendChild(boldText);
}

showQuestion();