// GLOBAL VARIABLES
console.log("probando");
const startBtn = document.querySelector("#start-btn");
const splashScreen = document.querySelector("#splash-screen");
const gameOverScreen = document.querySelector("#gameover-screen");
const canvas = document.querySelector("#game-screen");
const ctx = canvas.getContext("2d");

let game;

// STATE MANAGEMENT FUNCTIONS
const startGame = () => {
    console.log("iniciando juego");
    splashScreen.style.display= "none";
    canvas.style.display = "block";

    game = new Game();
    console.log(game);
    game.gameLoop();
}

const keyPress = (event) => {
    if (event.code === "ArrowRight") {
        console.log("apretando adelante");
        game.hero.forwardHero();
    } else if (event.code === "ArrowLeft") {
        console.log("apretando atrás");
        game.hero.backwardHero();
    }
}

// ADD EVENT LISTENERS
startBtn.addEventListener("click", startGame);

window.addEventListener("keydown", keyPress);

