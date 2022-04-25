class Hero {
  constructor(srcParam, wParam) {
    this.x = 40;
    this.y = 300;
    this.w = wParam;
    this.h = 150;
    this.img = new Image();
    this.img.src = srcParam;
    this.speed = 8;
    this.jump = 250;
    this.gravity = 1;
    this.groundLevel = 300;
    
  }

  //metodos del heroe
  drawHero = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  //movimientos del heroe
  forwardHero = () => {
    this.x += this.speed;
  };

  backwardHero = () => {
    this.x -= this.speed;
  };
  
  jumpHero = () => {
    this.y -= this.jump;
  };
  
  gravityHero = () => {
    
    if (this.y < this.groundLevel) {
      this.y += this.gravity;
    }
  }

  heroMoves = () => {
    if (this.x < 0) {
      this.x = 1;
    } else if (this.x > canvas.width - this.w) {
      this.x = canvas.width - this.w - 1;
    }





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
  };

 fightHero = () => {
   let heroShowOn = () => {
    game.heroShow = true;
   } 
   game.heroShow = false;
   setTimeout(heroShowOn, 250)
 }

}
