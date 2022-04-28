class Game {
  constructor() {
    // todas las propiedades que estarán en el juego
    this.bg = new Image();
    this.bg.src = "./images/super-bg.png";
    this.hero = new Hero();
    this.fries = new Fries();
    this.friesArr = [new Fries()];
    this.enemyArr = [new Banana()];
    this.Banana = new Banana();
    this.shoppingCart = new ShoppingCart();
    this.objects1 = new Objects1();
    this.objects2 = new Objects2();
    this.objects3 = new Objects3();
    this.legs1 = new Legs(0);
    this.legs2 = new Legs(canvas.width);
    this.potatoLifeArr = [new PotatoLife(800), new PotatoLife(850), new PotatoLife(900)]
    this.isGameOn = true;
    this.heroShow = true;
    this.score = 0;
    
  }

  addNewEnemies = () => {
    if (this.enemyArr[this.enemyArr.length - 1].x < 0) {
      let enemies = [
        new Banana(),
        new Pear(),
        new Banana(),
        new Pear(),
        new Banana(),
        new Pear(),
      ];
      let randomNumber = Math.floor(Math.random() * (enemies.length - 1));
      let newEnemy = enemies[randomNumber];

      

      this.enemyArr.push(newEnemy);
      console.log("se añade elemento a la Array");
      this.enemyArr.shift();
      console.log("Se quita elemento primero de la Array");
      console.log(this.enemyArr);
    }
  };


  addNewFries = () => {
        let randomIntervalFries = Math.floor(Math.random() * canvas.width);
        if (this.friesArr[this.friesArr.length - 1].x < randomIntervalFries - 200) {
            
            let newFries = new Fries();
            this.friesArr.push(newFries);
            
        
        }
           
    };

    friesPoints = () => {
        this.friesArr.forEach((eachFrie, i) => {
            if (
                this.hero.x < eachFrie.x + eachFrie.w &&
                this.hero.x + this.hero.w1 > eachFrie.x &&
                this.hero.y < eachFrie.y + eachFrie.h &&
                this.hero.h + this.hero.y > eachFrie.y
                )
                 {
                    this.friesArr.splice(i, 1);
                    this.score++
                    patataSound.play();
                }
        })
        
    }

    difficultLevel = () => {
      this.enemyArr.forEach((eachEnemy) => { 
        if (this.score >= 50) {
          eachEnemy.speed = 5;
        }
      })
    }

  




  


  gameOverCollision = () => {
    this.enemyArr.forEach((eachEnemy, i) => {
      
      if (
        this.hero.x < eachEnemy.x + eachEnemy.w &&
        this.hero.x + this.hero.w1 > eachEnemy.x &&
        this.hero.y < eachEnemy.y + eachEnemy.h &&
        this.hero.h + this.hero.y > eachEnemy.y &&
        this.heroShow === true && this.potatoLifeArr.length !== 0
      ) { 
        let enemies = [
          new Banana(),
          new Pear(),
          new Banana(),
          new Pear(),
          new Banana(),
          new Pear(),
        ];
        this.potatoLifeArr.pop();
        this.enemyArr.splice(i, 1);
        let randomNumber = Math.floor(Math.random() * (enemies.length - 1));
        let newEnemy = enemies[randomNumber];
        this.enemyArr.push(newEnemy);
        hitSound.play();
        
      }
      else if (
        this.hero.x < eachEnemy.x + eachEnemy.w &&
        this.hero.x + this.hero.w1 > eachEnemy.x &&
        this.hero.y < eachEnemy.y + eachEnemy.h &&
        this.hero.h + this.hero.y > eachEnemy.y &&
        this.heroShow === true && this.potatoLifeArr.length === 0
      ) {
        console.log("colisionando");

        //1. el juego se detiene
        this.isGameOn = false;
        //2. el canvas desaparece
        canvas.style.display = "none";
        //3. la pantalla final aparece
        gameOverScreen.style.display = "flex";
        //4 suena música de game Over
        gameSound.pause();
        deadSound.load();
        deadSound.play();
      } 
      else if (
        this.hero.x < eachEnemy.x + eachEnemy.w &&
        this.hero.x + this.hero.w2 > eachEnemy.x &&
        this.hero.y < eachEnemy.y + eachEnemy.h &&
        this.hero.h + this.hero.y > eachEnemy.y &&
        this.heroShow === false
      ) {
        let enemies = [
            new Banana(),
            new Pear(),
            new Banana(),
            new Pear(),
            new Banana(),
            new Pear(),
          ];
        let randomNumber = Math.floor(Math.random() * (enemies.length - 1));
        let newEnemy = enemies[randomNumber];
        this.enemyArr.splice(i, 1);
        this.enemyArr.push(newEnemy);
        this.score++
      }
    });
  };

  gameLoop = () => {
    console.log("juego ejecutandose");

    // 1.borrar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. acciones o movimientos de los elementos
   
    this.hero.heroMoves();
    this.hero.gravityHero();
    

    this.addNewEnemies();
    this.enemyArr.forEach((eachEnemy) => {
      eachEnemy.moveEnemy();
    });
    this.addNewFries();
    this.friesArr.forEach((eachFrie) => {
        eachFrie.movFries();
    });
    this.friesPoints();
    this.difficultLevel();

   
    

    this.gameOverCollision();
    

    this.shoppingCart.movShoppingCart();
    this.objects1.movObjects1();
    this.objects2.movObjects2();
    this.objects3.movObjects3();
    this.legs1.movBackground();
    this.legs2.movBackground();


    scoreDOM.innerText = Math.floor(this.score)

    // 3. dibujar los elementos
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    this.legs1.drawLegs();
    this.legs2.drawLegs();
    this.objects1.drawObjects1();
    this.objects2.drawObjects2();
    this.objects3.drawObjects3();
    this.shoppingCart.drawShoppingCart(); 
    
    this.friesArr.forEach((eachFries) => {
        eachFries.drawFries();
    })

    this.potatoLifeArr.forEach((eachPotato) => {
      eachPotato.drawPotatoLife();
    });


       
    
    

    this.enemyArr.forEach((eachEnemy) => {
      eachEnemy.drawEnemy();
    });
    

    if (this.heroShow === true) {
      this.hero.drawHero1();
    } else if (this.heroShow === false) {
      this.hero.drawHero2();
    }

 

    // 4. control y recursion
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
