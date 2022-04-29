class Hero {
  constructor(wProperty) {
    this.x = 40;
    this.y = 300;
    this.w1 = 135;
    this.w2 = 209;
    this.h = 150;
    this.img1 = new Image();
    this.img2 = new Image();
    this.img1.src = "./images/hero.png";
    this.img2.src = "./images/hero-fight.png";
    this.speed = 20;
    this.jump = 250;
    this.gravity = 5;
    this.groundLevel = 450;
  }

  //metodos del heroe
  drawHero1 = () => {
    ctx.drawImage(this.img1, this.x, this.y, this.w1, this.h);
  };

  drawHero2 = () => {
    ctx.drawImage(this.img2, this.x, this.y, this.w2, this.h);
  };

  //movimientos del  heroe
  forwardHero = () => {
    this.x += this.speed;
  };

  backwardHero = () => {
    this.x -= this.speed;
  };

  jumpHero = () => {
    if (this.y + this.h === this.groundLevel) {
      this.y -= this.jump;
    }
  };

  gravityHero = () => {
    if (this.y + this.h < this.groundLevel) {
      this.y += this.gravity;
    }
  };

  heroMoves = () => {
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x > canvas.width - this.w1) {
      this.x = canvas.width - this.w1;
    }
  };

  fightHero = () => {
    // console.log("pegando");
    let heroSword = () => {
      game.heroShow = true;
    };

    game.heroShow = false;
    // console.log(game.heroShow);
    setTimeout(heroSword, 500);
  };
}

class PotatoLife {
  constructor(xParam) {
    this.x = xParam;
    this.y = 25;
    this.w = 36;
    this.h = 50;
    this.img = new Image();
    this.img.src = "./images/potato-life.png";
  }

  //metodos
  drawPotatoLife = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
}
