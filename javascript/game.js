class Game {
  constructor() {
    // todas las propiedades que estarán en el juego
    this.bg = new Image();
    this.bg.src = "./images/super-bg.png";
    this.hero = new Hero();
    this.fries = new Fries(canvas.width);
    this.friesArr = [new Fries(canvas.width)];
    this.enemyArr = [new Banana()];
    this.Banana = new Banana();
    this.shoppingCart = new ShoppingCart();
    this.objects1 = new Objects1();
    this.objects2 = new Objects2();
    this.objects3 = new Objects3();
    this.legs1 = new Legs(0);
    this.legs2 = new Legs(canvas.width);
    // this.enemies = [new Banana, new Pear];
    // this.heroArr = [new Hero("./images/hero.png", 135), new Hero("./images/hero-fight.png", 209)];
    this.isGameOn = true;
    this.heroShow = true;
    // this.noKill = false;
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

      // this.enemyArr.push(newEnemy);
      // console.log(this.enemyArr);

      // let newEnemy = new Banana;

      this.enemyArr.push(newEnemy);
      console.log("se añade elemento a la Array");
      this.enemyArr.shift();
      console.log("Se quita elemento primero de la Array");
      console.log(this.enemyArr);
    }
  };

//   addFries

  gameOverCollision = () => {
    this.enemyArr.forEach((eachEnemy, i) => {
      // if (
        // this.hero.x < eachEnemy.x + eachEnemy.w &&
        // this.hero.x + this.hero.w2 > eachEnemy.x &&
        // this.hero.y < eachEnemy.y + eachEnemy.h &&
        // this.hero.h + this.hero.y > eachEnemy.y

      //     this.heroShow === false)
      // {
      //     console.log("muerto")
      //     this.enemyArr.splice(i, 1);

      // }else
      if (
        this.hero.x < eachEnemy.x + eachEnemy.w &&
        this.hero.x + this.hero.w1 > eachEnemy.x &&
        this.hero.y < eachEnemy.y + eachEnemy.h &&
        this.hero.h + this.hero.y > eachEnemy.y &&
        this.heroShow === true
      ) {
        console.log("colisionando");

        //1. el juego se detiene
        this.isGameOn = false;
        //2. el canvas desaparece
        canvas.style.display = "none";
        //3. la pantalla final aparece
        gameOverScreen.style.display = "flex";
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
      }
    });
  };

  gameLoop = () => {
    console.log("juego ejecutandose");

    // 1.borrar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. acciones o movimientos de los elementos
    // this.hero.forwardHero();
    // this.hero.backwardHero();
    this.hero.heroMoves();
    this.hero.gravityHero();
    // this.heroSword.fightHero();

    this.addNewEnemies();
    this.enemyArr.forEach((eachEnemy) => {
      eachEnemy.moveEnemy();
    });

    this.gameOverCollision();
    // this.killEnemy();

    // this.hero.gravityHero();
    // this.hero.jumpHero();
    // this.legs.repLegs();
    this.shoppingCart.movShoppingCart();
    this.objects1.movObjects1();
    this.objects2.movObjects2();
    this.objects3.movObjects3();
    this.legs1.movBackground();
    this.legs2.movBackground();

    // 3. dibujar los elementos
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    this.legs1.drawLegs();
    this.legs2.drawLegs();
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
