class Game {
    constructor() {
        // todas las propiedades que estarán en el juego
        this.bg = new Image();
        this.bg.src = "./images/super-bg.png";
        this.hero = new Hero();
        this.enemyArr = [new Enemy(80, "./images/banana-enemy.png")] ;
        this.enemies = [new Enemy(80, "./images/banana-enemy.png"), new Enemy(102, "./images/pear-enemy.png")];
        this.isGameOn = true;
    }

    addNewEnemies = () => {
        if (this.enemyArr[this.enemyArr.length -1].x < 0) {
            
            let randomNumber = Math.floor(Math.random());
            let newEnemy = this.enemies[randomNumber];
            
            this.enemyArr.push(newEnemy);
            console.log(this.enemyArr);
            
        }
    }

    gameLoop = () => {
        console.log("juego ejecutandose");
    
        // 1.borrar el canvas
        ctx.clearRect(0, 0, canvas.width,  canvas.height);

        // 2. acciones o movimientos de los elementos
        this.hero.forwardHero();
        this.hero.backwardHero();
        this.addNewEnemies();
        this.enemyArr.forEach((eachEnemy) => {
            eachEnemy.moveEnemy();
        })

        // 3. dibujar los elementos
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
        this.hero.drawHero();
        this.enemyArr.forEach((eachEnemy) => {
             eachEnemy.drawEnemy();
         });
        // this.enemy.drawEnemy();

        // 4. control y recursion
        if (this.isGameOn) {
            requestAnimationFrame(this.gameLoop);
        }
    };

    
}

