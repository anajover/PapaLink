class Game {
    constructor() {
        // todas las propiedades que estarán en el juego
        this.bg = new Image();
        this.bg.src = "./images/super-bg.png";
        this.hero = new Hero();
        // this.heroSword = new HeroSword();
        this.enemyArr = [new Banana()] ;
        this.Banana = new Banana()
        this.shoppingCart = new ShoppingCart();
        this.objects1 = new Objects1();
        this.objects2 = new Objects2();
        this.objects3 = new Objects3();
        // this.enemies = [new Banana, new Pear];
        // this.heroArr = [new Hero("./images/hero.png", 135), new Hero("./images/hero-fight.png", 209)];
        this.isGameOn = true;
        this.heroShow = true;
        // this.noKill = false;
    }

    addNewEnemies = () => {
        if (this.enemyArr[this.enemyArr.length -1].x < 0 ) {
            
            let enemies = [new Banana(), new Pear(),new Banana(), new Pear(),new Banana(), new Pear()];
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

    // addObjects = () => {
    //     if (this.objects.x > 0) {
            
    //         let backgroundObjects = [this.objects("./images/shopping-cart.png", 900, 200, 149, 150)]
    //         backgroundObjects[0].x--;

    //     }
    // }

    // drawHeroes = () => {
        
    //     if (this.heroShow === true) {
    //         this.game.hero;
    //     } else  if (this.heroShow === false) {
    //         this.heroArr[1].drawHero();
    //     }
        
    // }

    gameOverCollision = () => {

        this.enemyArr.forEach((eachEnemy, i) => {

            // if (
            //     this.hero.x + this.hero.w2 > eachEnemy.x &&
            //     this.hero.x + this.hero.w1 > eachEnemy.x &&
                
            //     this.heroShow === false)
            // {
            //     console.log("muerto")
            //     this.enemyArr.splice(i, 1);
                
            // }else
             if (
                this.hero.x < eachEnemy.x + eachEnemy.w &&
                this.hero.x + this.hero.w1 > eachEnemy.x &&
                this.hero.y < eachEnemy.y + eachEnemy.h &&
                this.hero.h + this.hero.y > eachEnemy.y
            ) {
                console.log("colisionando");

                //1. el juego se detiene
                this.isGameOn = false;
                //2. el canvas desaparece
                canvas.style.display = "none";
                //3. la pantalla final aparece
                gameOverScreen.style.display = "flex";


            }
            //  else if (
            //     this.hero.x < eachEnemy.x + eachEnemy.w &&
            //     this.hero.x + this.hero.w1 > eachEnemy.x &&
            //     this.hero.y < eachEnemy.y + eachEnemy.h &&
            //     this.hero.h + this.hero.y > eachEnemy.y &&
            //     this.heroShow === false
            //     ) {
            //         this.enemyArr.shift();
            //     }
            // // if (this.noKill === false &&
            // //     this.hero.x + this.hero.w1 > eachEnemy.x ) {
            // //         console.log("Muerto")
            // //         // this.enemyArr.pop(); 
            // //     }
            // //  else 
        })
    }

    // killEnemy = () => {

    //     this.enemyArr.forEach((eachEnemy) => {

    //         if (this.hero.x < eachEnemy.x + eachEnemy.w2 &&
    //             this.hero.x + this.hero.w2 > eachEnemy.x &&
    //             this.hero.y < eachEnemy.y + eachEnemy.h &&
    //             this.hero.h + this.hero.y > eachEnemy.y &&
    //             this.heroShow === false && this.img2)
    //         {
    //             eachEnemy.y = 
    //             this.enemyArr.pop()
    //         }
    //     })
    // }

   
    

    




    // const keyPress = (event) => {
    //     if (event.code === "ArrowRight") {
    //         console.log("apretando adelante");
    //         game.hero.forwardHero();
    //     } else if (event.code === "ArrowLeft") {
    //         console.log("apretando atrás");
    //         game.hero.backwardHero();
    //     } else if (event.code === "Space") {
    //         console.log("saltando")
    //             game.hero.jumpHero();
    //     }
    //      else if (event.code === "KeyC") {
    //         game.hero.fightHero();
    //     }
    // }
    
    // // ADD EVENT LISTENERS
    // startBtn.addEventListener("click", startGame);
    
    // window.addEventListener("keydown", keyPress);
















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
            this.hero.heroMoves();
            this.hero.gravityHero();
            // this.heroSword.fightHero();
        
            this.addNewEnemies();
            this.enemyArr.forEach((eachEnemy) => {
            eachEnemy.moveEnemy();
                })

            this.gameOverCollision();
            // this.killEnemy();

        // this.hero.gravityHero();
        // this.hero.jumpHero();
        this.shoppingCart.movShoppingCart();
        this.objects1.movObjects1();
        this.objects2.movObjects2();
        this.objects3.movObjects3();
        
        


        // 3. dibujar los elementos
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
        this.objects1.drawObjects1();
        this.objects2.drawObjects2();
        this.objects3.drawObjects3();
        this.shoppingCart.drawShoppingCart();
        
        this.enemyArr.forEach((eachEnemy) => {
             eachEnemy.drawEnemy();
         });
        //  this.drawHeroes();

        if (this.heroShow === true) {
        this.hero.drawHero1();
        } else if (this.heroShow === false) {
            this.hero.drawHero2();
        }

        

        
        // this.hero.drawHero1();

        // this.heroSword.drawHeroSword();

        // this.enemy.drawEnemy();

        // 4. control y recursion
        if (this.isGameOn) {
            requestAnimationFrame(this.gameLoop);
        }
    };

    
}

