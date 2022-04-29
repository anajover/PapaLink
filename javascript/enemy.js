class Enemy {
  constructor() {
    this.x = canvas.width;
    this.y = 300;
    this.h = 150;
    this.speed = 2;
  }

  // metodos de enemy
  drawEnemy = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  moveEnemy = () => {
    this.x -= this.speed;
  };
}

class Banana extends Enemy {
  constructor(x, y, h, speed, w, img) {
    super(x, y, h, speed);
    this.w = 80;
    this.img = new Image();
    this.img.src = "./images/banana-enemy.png";
  }
}

class Pear extends Enemy {
  constructor(x, y, h, speed, w, img) {
    super(x, y, h, speed);
    this.w = 102;
    this.img = new Image();
    this.img.src = "./images/pear-enemy.png";
  }
}

class Boss {
  constructor() {
    this.x = canvas.width;
    this.y = 100;
    this.w = 268;
    this.h = 350;
    this.speed = 1;
    this.img = new Image();
    this.img.src = "./images/boss.png";
  }

  // metodos de enemy
  drawBoss = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  moveBoss = () => {
    this.x -= this.speed;
  };
}
