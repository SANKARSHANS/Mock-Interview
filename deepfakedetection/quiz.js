const questions = [
    {
        question: "What is the next number in the series: 2, 6, 12, 20, 30, ?",
        options: ["40", "42", "44", "46"],
        answer: 1
    },
    {
        question: "If 5 men can complete a work in 20 days, how many days will 10 men take?",
        options: ["10 days", "5 days", "15 days", "8 days"],
        answer: 0
    },
    {
        question: "A train 300 meters long is running at a speed of 90 km/hr. How much time will it take to cross a platform 200 meters long?",
        options: ["20 seconds", "25 seconds", "30 seconds", "15 seconds"],
        answer: 1
    },
    {
        question: "If the ratio of A to B is 3:5 and B to C is 2:3, what is the ratio of A to C?",
        options: ["2:5", "3:5", "6:15", "6:10"],
        answer: 3
    },
    {
        question: "What is the probability of getting a sum of 7 when two dice are rolled?",
        options: ["1/6", "1/3", "1/2", "1/9"],
        answer: 0
    },
    {
        question: "A car travels 60 km/hr for 2 hours and 90 km/hr for 3 hours. What is the average speed of the car?",
        options: ["72 km/hr", "75 km/hr", "78 km/hr", "80 km/hr"],
        answer: 1
    },
    {
        question: "A person bought a shirt for $300 and sold it for $360. What is the profit percentage?",
        options: ["20%", "15%", "18%", "12%"],
        answer: 0
    },
    {
        question: "If 12 workers can complete a task in 10 days, how many days will 8 workers take to complete the same task?",
        options: ["15 days", "12 days", "20 days", "18 days"],
        answer: 2
    },
    {
        question: "The average of five numbers is 50. If one number is excluded, the average becomes 55. What is the excluded number?",
        options: ["25", "30", "35", "40"],
        answer: 0
    },
    {
        question: "A shopkeeper offers a discount of 10% on the marked price. If the marked price is $500, what is the selling price?",
        options: ["$450", "$400", "$475", "$460"],
        answer: 0
    },
    {
        question: "A rectangle has a length of 15 cm and a width of 10 cm. What is its area?",
        options: ["150 cm²", "100 cm²", "125 cm²", "200 cm²"],
        answer: 0
    },
    {
        question: "If the simple interest on $1000 in 2 years is $200, what is the rate of interest per year?",
        options: ["10%", "20%", "15%", "12%"],
        answer: 1
    },
    {
        question: "The perimeter of a square is 40 cm. What is the length of one side?",
        options: ["5 cm", "10 cm", "8 cm", "15 cm"],
        answer: 1
    },
    {
        question: "A shopkeeper sells two items for $100 each. He makes a profit of 20% on one and a loss of 20% on the other. What is the overall profit or loss?",
        options: ["No loss, no profit", "4% loss", "4% profit", "2% loss"],
        answer: 1
    },
    {
        question: "The speed of a boat in still water is 10 km/hr, and the speed of the current is 2 km/hr. What is the speed of the boat downstream?",
        options: ["12 km/hr", "8 km/hr", "14 km/hr", "10 km/hr"],
        answer: 0
    },
    {
        question: "The HCF of two numbers is 12 and their LCM is 144. If one number is 48, what is the other number?",
        options: ["24", "36", "72", "60"],
        answer: 2
    },
    {
        question: "If 40% of a number is 80, what is the number?",
        options: ["200", "160", "120", "180"],
        answer: 0
    },
    {
        question: "In a class of 60 students, 40 play football and 30 play basketball. If 20 students play both sports, how many students play only football?",
        options: ["20", "30", "10", "25"],
        answer: 0
    },
    {
        question: "If the cost price of an article is $120 and the selling price is $150, what is the profit percentage?",
        options: ["20%", "25%", "30%", "15%"],
        answer: 1
    },
    {
        question: "If the circumference of a circle is 44 cm, what is its radius?",
        options: ["7 cm", "10 cm", "8 cm", "9 cm"],
        answer: 0
    }
];


let currentQuestion = 0;
let score = 0;
let timer = 10;
let timerInterval;
let quizEnded = false;

// Detect tab switch
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        endQuiz("Test ended: You switched tabs! Please try again.", false);
    }
});

// Load question
function loadQuestion() {
    const questionData = questions[currentQuestion];
    document.getElementById("question").textContent = questionData.question;
    const optionsList = document.getElementById("options");
    optionsList.innerHTML = "";

    questionData.options.forEach((option, index) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        li.appendChild(button);
        optionsList.appendChild(li);
    });

    document.getElementById("next-button").style.display = "none";
    startTimer();
}

// Start the timer
function startTimer() {
    timer = 10;
    updateTimer();
    timerInterval = setInterval(() => {
        timer--;
        updateTimer();
        if (timer === 0) {
            clearInterval(timerInterval);
            nextQuestion();
        }
    }, 1000);
}

// Update the timer
function updateTimer() {
    document.getElementById("timer").textContent = `Time left: ${timer}s`;
}

// Handle answer selection
function selectAnswer(selectedIndex) {
    clearInterval(timerInterval);
    if (selectedIndex === questions[currentQuestion].answer) {
        score++;
    }
    document.getElementById("next-button").style.display = "block";
}

// Move to the next question
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endQuiz(`Quiz Over! You scored ${score}/${questions.length}.`, true);
    }
}

// End the quiz
function endQuiz(message, isComplete) {
    clearInterval(timerInterval);
    alert(message);

    if (isComplete) {
        // Redirect to congratulatory page
        window.location.href = "congrats.html";
    } else {
        // Redirect to landing page or retry page
        window.location.href = "index.html";
    }
}

// Initialize the quiz
loadQuestion();
