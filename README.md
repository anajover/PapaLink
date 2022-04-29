# PapaLink


# Description

PapaLink is a side-scrolling game where the player has to move the hero in all directions while walk across a stage killing enemies, and 1 final boss, that will appear on the right side of the screen. The game end when the heroe dies or when you get the princess after defeating the boss.

# MVP (DOM - CANVAS)

- game has one hero and one enemy.
- enemy kill by touch.
- enemies appear randomly from the right of the screen.
- death of the hero is Game Over.
- game end when you kill the boss and rescue the princess.
- hero kill with the sword.

# Backlog

- Number of lives
- animated characters
- sound and music
- scores by points recolected from the dead enemies and the scenario.
- difficulty incremented with more enemy spawn.
- scenario change with bosses.
- jump skill and atacks in middle air. (with flying enemies)
- enemies movement randomly and attacks when they see you.

# Proyect Structure



## main.js

/GLOBAL VARIABLES
//MUSIC
- startGame () {
    splashScreen display
	gameOverScreen display
    canvas display
    score display
    new game 
    gameloop()}

//BUTTON ACTIONS
- buttonsEvents ()

//KEYBOARD MOVEMENTS
 - keyPress()

## game.js

//GAME PROPERTIES
- Game () {
    this.background;
    this.hero;
    this.princess;
    this.fries;
    this.enemy;
    this.boss;
    this.objects;
    this.lifes;
    this.isGameOn;
    this.variablesVarias;
}

- addNewEnemies()
- addBoss()
- addNewFries()
- friesPoints()
- difficultLevel()
- gameOverCollision()
- bossCollision()
- winnerGame()
- winnerScreen()
- gameLoop () {
//DELETE CANVAS
//ACTION OR MOVEMENTS
//DRAW ELEMENTS
//CONTROL AND RECURSION
}

## hero.js 

- Hero () {
    this.x;
    this.y;
    this.w;
    this.h;
}
- drawHero () {}
- moveHero () {}

- PotatoLife ()

## princess.js

- Princess () {
    this.x;
    this.y;
    this.w;
    this.h;
- drawPrincess ()

## enemy.js

- Enemy () {
    this.x;
    this.y;
    this.w;
    this.h;
}
- drawEnemy () {}
- moveEnemy () {}

- Banana () {}
- Pear () {}
- Boss () {}

## shoppingCart.js

- shoppingCart {}
- Objects1 {}
- Objects2 {}
- Objects3 {}
- Legs {}
- Fries {}

# States and Transitions

- splashScreen
- gameScreen
- gameOver&Retry Screen
- winScreen


# Links 
URls for the project repo and deploy
[Link Repo](https://github.com/anajover/PapaLink.git)
[Link Deploy]((https://anajover.github.io/PapaLink/))

### Slides
URls for the poject presentation (slides)
[Link Slides.com](https://docs.google.com/presentation/d/1draQVAJFNMBFAtKIaCCEiFc8Tu036Su-kaKthSWnd-Q/edit?usp=sharing)
