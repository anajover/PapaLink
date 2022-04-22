# PapaLink


## [See the Game]()
NOTE: above link will be added later

# Description

PapaLink is a side-scrolling game where the player has to move the hero in all directions while walk across a stage killing enemies, 2 minibosses and 1 final boss, that will appear on the right side of the screen. The game end when the heroe dies or when you get the princess after defeating the boss.

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

- startGame () {
    splashScreen display
    canvas display
    new game
}
- keyPress () {
    player movement
}
- buttonsEvents ()

## game.js

- Game () {
    this.background;
    this.hero;
    this.enemy;
    this.isGameOn;
    
}
- gameLoop () {}
- checkCollisions (with enemies) {}

## hero.js 

- Hero () {
    this.x;
    this.y;
    this.w;
    this.h;
}
- drawHero () {}
- moveHero () {}

## enemy.js

- Enemy () {
    this.x;
    this.y;
    this.w;
    this.h;
}
- drawEnemy () {}
- moveEnemy () {}

# States and Transitions

- splashScreen
- gameScreen
- gameOver&Retry Screen
- winScreen

# Tasks (Optional)

- main - buildDom
- main - buildSplashScreen
- main - addEventListener
- main - buildGameScreen
- main - buildGameOverScreen
- game - startLoop
- game - buildCanvas
- game - updateCanvas
- game - drawCanvas
- hero - draw
- hero - move
- game - addEnemy
- enemy - draw
- enemy - move
- game - checkCollision
- game - GameOver
- game - addEventListener

# Extra Links (The links can be added later when available)

### Trello
[Link url](https://trello.com/b/CWviY2zv/kraken-brigade-project)

### Slides
[Link Slides.com](https://docs.google.com/presentation/d/138o01hAz-0gXepN78RsDgse12HiiuN7Fz_N_hJnI9_g/edit?usp=sharing)
