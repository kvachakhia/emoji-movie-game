// Define an array of emoji/movie pairs
const emojiMovies = [
    {
        movie: "The Lion King",
        emoji: "ðĶðð"
    },
    {
        movie: "Spider-Man",
        emoji: "ð·ïļðļïļðĻâðĶē"
    },
    {
        movie: "Star Wars",
        emoji: "ððĻâððĐâðð―"
    },
    {
        movie: "Titanic",
        emoji: "ðĒðð§ð"
    },
    {
        movie: "Jurassic Park",
        emoji: "ðĶðĶðŋðïļ"
    },
    {
        movie: "Forrest Gump",
        emoji: "ððĶðĶðĨ"
    },
    {
        movie: "Finding Nemo",
        emoji: "ðð ðĻâðĶâðĶ"
    },
    {
        movie: "The Godfather",
        emoji: "ððŦðĩïļââïļð"
    },
    {
        movie: "The Matrix",
        emoji: "ððķïļððĪ"
    },
    {
        movie: "Pulp Fiction",
        emoji: "ðð§ððĨ"
    },
    {
        movie: "Ghostbusters",
        emoji: "ðŧðŦðĻâðŽðĻâð"
    },
    {
        movie: "The Terminator",
        emoji: "ðĪðŦð°ïļ"
    },
    {
        movie: "Rocky",
        emoji: "ðĨðïļââïļðĨĐ"
    },
    {
        movie: "Jaws",
        emoji: "ðĶðĢââïļðââïļ"
    },
    {
        movie: "E.T. the Extra-Terrestrial",
        emoji: "ð―ðēðð"
    },
    {
        movie: "Back to the Future",
        emoji: "â°ðð°ïļðĻâðĶē"
    },
    {
        movie: "The Shining",
        emoji: "ðĻâïļðŧðŠ"
    },
    {
        movie: "The Dark Knight",
        emoji: "ðĶðððĨ"
    },
    {
        movie: "Indiana Jones and the Raiders of the Lost Ark",
        emoji: "ðĪ ðšððĩïļââïļ"
    },
    {
        movie: "Ghost",
        emoji: "ðŧðĻââĪïļâðĻððŪ"
    },
    {
        movie: "The Terminator 2: Judgment Day",
        emoji: "ðĪðŦððĨ"
    },
    {
        movie: "The Silence of the Lambs",
        emoji: "ðïļðŠððĩïļââïļ"
    },
    {
        movie: "The Exorcist",
        emoji: "ð§ðĨðð"
    },
    {
        movie: "The Graduate",
        emoji: "ððĻâððĐâðð"
    },
    {
        movie: "A Clockwork Orange",
        emoji: "ðððĶð"
    },
    {
        movie: "Alien",
        emoji: "ðð―ðĻâððŦ"
    },
    {
        movie: "The Breakfast Club",
        emoji: "ðģðððĨ"
    },
    {
        movie: "Dirty Dancing",
        emoji: "ððšðĻââĪïļâðĻð"
    },
    {
        movie: "Groundhog Day",
        emoji: "ð°ïļðŋïļâïļð"
    },
    {
        movie: "Indiana Jones and the Temple of Doom",
        emoji: "ðĪ ðšðĄïļðĩïļââïļ"
    },
    {
        movie: "Jumanji",
        emoji: "ððĶððē"
    },
    {
        movie: "Kill Bill: Vol. 1",
        emoji: "ðĄïļðĐâðĶąðïļðŦ"
    },
    {
        movie: "The Lion King",
        emoji: "ðĶðð"
    },
    {
        movie: "Memento",
        emoji: "ððĪðð"
    },
    {
        movie: "The Prestige",
        emoji: "ððŪðĐðĻâð"
    }
];

let score = 0;
let currentPair = null;
let timerId = null;




// Function to generate a random emoji/movie pair and display the emoji
function generatePair() {
    const randomIndex = Math.floor(Math.random() * emojiMovies.length);
    currentPair = emojiMovies[randomIndex];
    const emojiContainer = document.getElementById("emoji-container");
    emojiContainer.innerHTML = currentPair.emoji;
    startTimer();
}

// Function to start the 10-second timer
function startTimer() {
    const timeLeft = document.getElementById("time-left");
    timeLeft.innerHTML = "10";
    clearInterval(timerId);
    timerId = setInterval(() => {
        let time = parseInt(timeLeft.innerHTML);
        if (time > 0) {
            time--;
            timeLeft.innerHTML = time.toString();
        } else {
            clearInterval(timerId);
            generatePair();
        }
    }, 1000);
}

// Function to check if the user's guess is correct and update the score
function checkGuess(guess) {
    if (guess.toLowerCase() === currentPair.movie.toLowerCase()) {
        score++;
        document.getElementById("score").innerHTML = score;
        clearInterval(timerId);
        generatePair();
    } else {
        const guessInput = document.getElementById("guess-input");
        guessInput.value = "";
        guessInput.placeholder = "Incorrect guess, please try again";
    }
}

// Event listener for the guess form submit button
const guessForm = document.getElementById("guess-form");
guessForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const guessInput = document.getElementById("guess-input");
    const guess = guessInput.value;
    checkGuess(guess);
});

// Initialize the game by generating the first pair
generatePair();