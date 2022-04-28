// GLOBAL VARIABLES
console.log("probando");
const startBtn = document.querySelector("#start-btn");
const restartBtn = document.querySelector("#restart-btn");
const splashScreen = document.querySelector("#splash-screen");
const gameOverScreen = document.querySelector("#gameover-screen");
const score = document.querySelector("#score-show")
const scoreDOM = document.querySelector("#score");
const canvas = document.querySelector("#game-screen");
const ctx = canvas.getContext("2d");


let game;

//MUSIC:

//GAME SOUND
let gameSound = new Audio("./sounds/main.mp3");
gameSound.volume = 0.1;
gameSound.preload ="auto";
gameSound.load();

//SWORD SOUND
let swordSound = new Audio("./sounds/sword.wav");
swordSound.volume = 1;
swordSound.preload ="auto";
swordSound.load();

//PATATA SOUND
let patataSound = new Audio ("./sounds/patata.mp3");
patataSound.volume = 1;
patataSound.preload ="auto";
patataSound.load();

//JUMP SOUND
let jumpSound = new Audio ("./sounds/jump.wav");
jumpSound.volume = 0.1;
jumpSound.preload ="auto";
jumpSound.load();

//GAMEOVER SOUND
let deadSound = new Audio ("./sounds/dead.wav");
deadSound.volume = 0.5;
deadSound.preload ="auto";
deadSound.load();

//LIFE LOST
let hitSound = new Audio ("./sounds/hit.wav");
hitSound.volume = 0.8;
hitSound.preload ="auto";
hitSound.load();

// STATE MANAGEMENT FUNCTIONS
const startGame = () => {
    console.log("iniciando juego");
    splashScreen.style.display= "none";
    gameOverScreen.style.display = "none"
    canvas.style.display = "block";
    score.style.display = "flex"
    gameSound.load();
    gameSound.play();

    game = new Game();
    console.log(game);
    game.gameLoop();
}

const keyPress = (event) => {
    if (event.code === "ArrowRight") {
        console.log("apretando adelante");
        game.hero.forwardHero();
    } 
    if (event.code === "ArrowLeft") {
        console.log("apretando atrás");
        game.hero.backwardHero();
    }
    if (event.code === "Space") {
        console.log("saltando")
            game.hero.jumpHero();
            jumpSound.play();
    }
    if (event.code === "KeyC") {
        game.hero.fightHero();
        swordSound.play();
        
    }
}




// ADD EVENT LISTENERS
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);

window.addEventListener("keydown", keyPress);





