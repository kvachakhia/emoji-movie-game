// Define an array of emoji/movie pairs
const emojiMovies = [
    {
        movie: "The Lion King",
        emoji: "🦁👑🐒"
    },
    {
        movie: "Spider-Man",
        emoji: "🕷️🕸️👨‍🦲"
    },
    {
        movie: "Star Wars",
        emoji: "🚀👨‍🚀👩‍🚀👽"
    },
    {
        movie: "Titanic",
        emoji: "🚢💔🧊💏"
    },
    {
        movie: "Jurassic Park",
        emoji: "🦕🦖🌿🏞️"
    },
    {
        movie: "Forrest Gump",
        emoji: "🏃🦐🦁👥"
    },
    {
        movie: "Finding Nemo",
        emoji: "🔍🐠👨‍👦‍👦"
    },
    {
        movie: "The Godfather",
        emoji: "👑🔫🕵️‍♂️🙏"
    },
    {
        movie: "The Matrix",
        emoji: "💊🕶️👊🤖"
    },
    {
        movie: "Pulp Fiction",
        emoji: "🍔🧀🍟👥"
    },
    {
        movie: "Ghostbusters",
        emoji: "👻🚫👨‍🔬👨‍🚒"
    },
    {
        movie: "The Terminator",
        emoji: "🤖🔫🕰️"
    },
    {
        movie: "Rocky",
        emoji: "🥊🏋️‍♂️🥩"
    },
    {
        movie: "Jaws",
        emoji: "🦈🚣‍♂️🏊‍♂️"
    },
    {
        movie: "E.T. the Extra-Terrestrial",
        emoji: "👽🚲🌕🌌"
    },
    {
        movie: "Back to the Future",
        emoji: "⏰🚗🕰️👨‍🦲"
    },
    {
        movie: "The Shining",
        emoji: "🏨❄️👻🪓"
    },
    {
        movie: "The Dark Knight",
        emoji: "🦇🌃🃏👥"
    },
    {
        movie: "Indiana Jones and the Raiders of the Lost Ark",
        emoji: "🤠🏺💎🕵️‍♂️"
    },
    {
        movie: "Ghost",
        emoji: "👻👨‍❤️‍👨💔🔮"
    },
    {
        movie: "The Terminator 2: Judgment Day",
        emoji: "🤖🔫🌎🔥"
    },
    {
        movie: "The Silence of the Lambs",
        emoji: "👁️🔪🐑🕵️‍♀️"
    },
    {
        movie: "The Exorcist",
        emoji: "👧🔥😈🙏"
    },
    {
        movie: "The Graduate",
        emoji: "🎓👨‍🎓👩‍🎓💔"
    },
    {
        movie: "A Clockwork Orange",
        emoji: "🕙🍊👦😈"
    },
    {
        movie: "Alien",
        emoji: "🚀👽👨‍🚀🔫"
    },
    {
        movie: "The Breakfast Club",
        emoji: "🍳🍞🍊👥"
    },
    {
        movie: "Dirty Dancing",
        emoji: "💃🕺👨‍❤️‍👨💔"
    },
    {
        movie: "Groundhog Day",
        emoji: "🕰️🐿️❄️💏"
    },
    {
        movie: "Indiana Jones and the Temple of Doom",
        emoji: "🤠🏺🗡️🕵️‍♂️"
    },
    {
        movie: "Jumanji",
        emoji: "🐒🦁🐘🎲"
    },
    {
        movie: "Kill Bill: Vol. 1",
        emoji: "🗡️👩‍🦱🏍️🔫"
    },
    {
        movie: "The Lion King",
        emoji: "🦁👑🐒"
    },
    {
        movie: "Memento",
        emoji: "🔙🤔📝💉"
    },
    {
        movie: "The Prestige",
        emoji: "🃏🔮🎩👨‍🎓"
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