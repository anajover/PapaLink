class Game {
    constructor() {
        // todas las propiedades que estarán en el juego
        this.bg = new Image();
        this.bg.src = "./images/super-bg.png";
        this.hero = new Hero();
        this.enemyArr = [new Banana] ;
        // this.enemies = [new Banana, new Pear];
        this.heroArr = [new Hero("./images/hero.png", 135), new Hero("./images/hero-fight.png", 209)];
        this.isGameOn = true;
        this.heroShow = true;
    }

    addNewEnemies = () => {
        if (this.enemyArr[this.enemyArr.length -1].x < 0) {
            
            let enemies = [new Banana, new Pear,new Banana, new Pear,new Banana, new Pear,];
            let randomNumber = Math.floor(Math.random() * (enemies.length - 1));
            let newEnemy = enemies[randomNumber];
            
            // this.enemyArr.push(newEnemy);
            // console.log(this.enemyArr);

            // let newEnemy = new Banana;
            
            

            this.enemyArr.push(newEnemy);
            console.log("se añade elemento a la Array");
            this.enemyArr.shift();
            console.log("Se quita elemento primero de la Array")
            console.log(this.enemyArr);

        
            
        }
    };

    drawHeroes = () => {
        
        if (this.heroShow === true) {
            this.heroArr[0].drawHero();
        } else  if (this.heroShow === false) {
            this.heroArr[1].drawHero();
        }
        
    }

    gameOverCollision = () => {

        this.enemyArr.forEach((eachEnemy) => {
            if (
                this.hero.x < eachEnemy.x + eachEnemy.w &&
                this.hero.x + this.hero.w > eachEnemy.x &&
                this.hero.y < eachEnemy.y + eachEnemy.h &&
                this.hero.h + this.hero.y > eachEnemy.y
            ) {
                console.log("colisionando");
                this.isGameOn = false;
            }
        })
    }

    // heroFight = () => {
    //     if this.heroShow = 
    // }

   



    // heroMoves = () => {



    //     // if (this.hero.x < canvas.width - this.hero.w && this.hero.x > 0) {
    //         // this.hero.forwardHero();
    //         // this.hero.backwardHero();
    //         if (this.hero.backwardHero()) {
    //             if (this.hero.x < 0) {
    //                 this.hero.x = 0;
    //             }
    //         }
    //         //  else if (this.hero.forwardHero()) {
    //         //     if (this.hero.x > canvas.width - this.hero.w) {
    //         //         this.hero.x = (canvas.width - this.hero.w) - 1;
    //         //     }
    //         // }
    //     // }
    // }

    gameLoop = () => {
        console.log("juego ejecutandose");
    
        // 1.borrar el canvas
        ctx.clearRect(0, 0, canvas.width,  canvas.height);

        // 2. acciones o movimientos de los elementos
        // this.hero.forwardHero();
        // this.hero.backwardHero();
        this.heroArr.forEach((eachHero) => {
            eachHero.heroMoves();
        })
        // this.hero.heroMoves();
        this.addNewEnemies();
        this.enemyArr.forEach((eachEnemy) => {
            eachEnemy.moveEnemy();
        })
        // this.gameOverCollision();
        this.hero.gravityHero();
        // this.hero.jumpHero();
        
        


        // 3. dibujar los elementos
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
        
        this.enemyArr.forEach((eachEnemy) => {
             eachEnemy.drawEnemy();
         });
         this.drawHeroes();
        // this.enemy.drawEnemy();

        // 4. control y recursion
        if (this.isGameOn) {
            requestAnimationFrame(this.gameLoop);
        }
    };

    
}

