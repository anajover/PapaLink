class Game {
  constructor() {
    // GAME PROPERTIES
    this.bg = new Image();
    this.bg.src = "./images/super-bg.png";
    this.hero = new Hero();
    this.princess = new Princess();
    this.fries = new Fries();
    this.friesArr = [new Fries()];
    this.enemyArr = [new Banana()];
    this.Banana = new Banana();
    this.boss = new Boss();
    this.shoppingCart = new ShoppingCart();
    this.objects1 = new Objects1();
    this.objects2 = new Objects2();
    this.objects3 = new Objects3();
    this.legs1 = new Legs(0);
    this.legs2 = new Legs(canvas.width);
    this.potatoLifeArr = [
      new PotatoLife(800),
      new PotatoLife(850),
      new PotatoLife(900),
    ];
    this.isGameOn = true;
    this.heroShow = true;
    this.bossShow = false;
    this.bossDead = false;
    this.princessOn = false;
    this.score = 0;
    this.count = 0;
    this.bossX = 0;
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

      this.count++;
      this.enemyArr.push(newEnemy);
      // console.log("se añade elemento a la Array");
      this.enemyArr.shift();
      // console.log("Se quita elemento primero de la Array");
      console.log(this.enemyArr);
    }
  };

  addBoss = () => {
    if (this.count > 20) {
      this.bossShow = true;
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
      ) {
        this.friesArr.splice(i, 1);
        this.score += 3;
        patataSound.play();
      }
    });
  };

  difficultLevel = () => {
    this.enemyArr.forEach((eachEnemy) => {
      if (this.score >= 50) {
        eachEnemy.speed = 3;
      } else if (this.score >= 100) {
        eachEnemy.speed = 5;
      }
    });
  };

  gameOverCollision = () => {
    this.enemyArr.forEach((eachEnemy, i) => {
      if (
        this.hero.x < eachEnemy.x + eachEnemy.w &&
        this.hero.x + this.hero.w1 > eachEnemy.x &&
        this.hero.y < eachEnemy.y + eachEnemy.h &&
        this.hero.h + this.hero.y > eachEnemy.y &&
        this.heroShow === true &&
        this.potatoLifeArr.length !== 0
      ) {
        let enemies = [
          new Banana(),
          new Pear(),
          new Banana(),
          new Pear(),
          new Banana(),
          new Pear(),
        ];
        this.count++;
        this.potatoLifeArr.pop();
        this.enemyArr.splice(i, 1);
        let randomNumber = Math.floor(Math.random() * (enemies.length - 1));
        let newEnemy = enemies[randomNumber];
        this.enemyArr.push(newEnemy);
        hitSound.play();
      } else if (
        this.hero.x < eachEnemy.x + eachEnemy.w &&
        this.hero.x + this.hero.w1 > eachEnemy.x &&
        this.hero.y < eachEnemy.y + eachEnemy.h &&
        this.hero.h + this.hero.y > eachEnemy.y &&
        this.heroShow === true &&
        this.potatoLifeArr.length === 0
      ) {
        // console.log("colisionando");

        //1. STOP THE GAME
        this.isGameOn = false;
        //2. CANVAS OUT
        canvas.style.display = "none";
        //3. GAMEOVER SCREEN
        gameOverScreen.style.display = "flex";
        //4 GAME OVER MUSIC
        gameSound.pause();
        deadSound.load();
        deadSound.play();
      } else if (
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
        this.score += 5;
        this.count++
      }
    });
  };

  bossCollision = () => {
    if (
      this.hero.x < this.boss.x + this.boss.w &&
      this.hero.x + this.hero.w1 > this.boss.x &&
      this.hero.y < this.boss.y + this.boss.h &&
      this.hero.h + this.hero.y > this.boss.y &&
      this.heroShow === true &&
      this.potatoLifeArr.length !== 0
    ) {
      this.potatoLifeArr.pop();
      this.boss.x += 50;
      this.hero.x -= 50;

      hitSound.play();
    } else if (
      this.hero.x < this.boss.x + this.boss.w &&
      this.hero.x + this.hero.w1 > this.boss.x &&
      this.hero.y < this.boss.y + this.boss.h &&
      this.hero.h + this.hero.y > this.boss.y &&
      this.heroShow === true &&
      this.potatoLifeArr.length === 0
    ) {
      // console.log("colisionando");

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
    } else if (
      this.hero.x < this.boss.x + this.boss.w &&
      this.hero.x + this.hero.w2 > this.boss.x &&
      this.hero.y < this.boss.y + this.boss.h &&
      this.hero.h + this.hero.y > this.boss.y &&
      this.heroShow === false &&
      this.bossDead === false
    ) {
      this.boss.x += 200;
      this.score += 15;
      this.bossDead = true;
      console.log(this.bossDead);
    }
    if (
      this.hero.x < this.boss.x + this.boss.w &&
      this.hero.x + this.hero.w2 > this.boss.x &&
      this.hero.y < this.boss.y + this.boss.h &&
      this.hero.h + this.hero.y > this.boss.y &&
      this.heroShow === false &&
      this.bossDead === true
    ) {
      // console.log("muerto");
      this.boss.x = 0 - this.boss.w;
      this.score += 20;
      this.princessOn = true;
    }
  };

  winnerGame = () => {
    if (this.princessOn === true) {
      this.isGameOn = false;

      gameSound.pause();
    }
  };

  winnerScreen = () => {
    canvas.style.display = "none";
    winnerScreen.style.display = "flex";
  }

  gameLoop = () => {
    // console.log("juego ejecutandose");

    // 1.DELETE CANVAS
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. ACTIONS O MOVEMENTS

    this.hero.heroMoves();
    this.hero.gravityHero();

    this.addBoss();
    if (this.bossShow === false) {
      this.addNewEnemies();
      this.enemyArr.forEach((eachEnemy) => {
        eachEnemy.moveEnemy();
      });
    } else if (this.bossShow === true && this.boss.x + this.boss.w > 0) {
      this.boss.moveBoss();
    }
    this.bossCollision();

    this.addNewFries();
    this.friesArr.forEach((eachFrie) => {
      eachFrie.movFries();
    });
    this.friesPoints();
    this.difficultLevel();

    this.gameOverCollision();

    if (this.princessOn === true) {
      this.winnerGame();
      setInterval(this.winnerScreen, 5000);
    }
  

    this.shoppingCart.movShoppingCart();
    this.objects1.movObjects1();
    this.objects2.movObjects2();
    this.objects3.movObjects3();
    this.legs1.movBackground();
    this.legs2.movBackground();

    scoreDOM.innerText = Math.floor(this.score);

    // 3. DRAW ELEMENTS
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    this.legs1.drawLegs();
    this.legs2.drawLegs();
    this.objects1.drawObjects1();
    this.objects2.drawObjects2();
    this.objects3.drawObjects3();
    this.shoppingCart.drawShoppingCart();

    this.friesArr.forEach((eachFries) => {
      eachFries.drawFries();
    });

    this.potatoLifeArr.forEach((eachPotato) => {
      eachPotato.drawPotatoLife();
    });

    if (this.bossShow === false) {
      this.enemyArr.forEach((eachEnemy) => {
        eachEnemy.drawEnemy();
      });
    } else if (this.bossShow === true) {
      this.boss.drawBoss();
    }

    if (this.heroShow === true) {
      this.hero.drawHero1();
    } else if (this.heroShow === false) {
      this.hero.drawHero2();
    }

    if (this.princessOn === true) {
      this.princess.drawPrincess();
    }

    // 4. control y recursion
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
