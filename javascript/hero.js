class Hero {
  constructor(wProperty) {
    this.x = 40;
    this.y = 300;
    this.w1 = 135;
    this.w2 = 209;
    // 135
    // 209
    this.h = 150;
    this.img1 = new Image();
    this.img2 = new Image();
    this.img1.src = "./images/hero.png";
    this.img2.src = "./images/hero-fight.png";
    this.speed = 20;
    this.jump = 250;
    this.gravity = 1;
    this.groundLevel = 450;
    
  }

  //metodos del heroe
  drawHero1 = () => {
    ctx.drawImage(this.img1, this.x, this.y, this.w1, this.h);
  };

  drawHero2 = () => {
    ctx.drawImage(this.img2, this.x, this.y, this.w2, this.h);
  }

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
  }

  heroMoves = () => {
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x > canvas.width - this.w1) {
      this.x = canvas.width - this.w1;
    } 
  }

  fightHero = () => {
    
    console.log("pegando")
    
    let heroSword = () => {
      game.heroShow = true;
      // game.noKill = true;
      // console.log(game.noKill);
      // return;
    }
    
    game.heroShow = false;
    // if ( this.x + this.w1 > eachEnemy.x) {
    //   console.log("Muerto");
    // }
    // game.noKill = false;
    // console.log(game.noKill);
    console.log(game.heroShow)
    
    setTimeout(heroSword, 500);
    
      // this.drawHero2();

    // let heroSword = () => {
    //   game.heroShow = false;
    //   this.drawHero2();
    // }

    // setInterval(heroSword, 250);


        // let hero = () => {
        //  game.heroShow = true;
        // } 
        // game.heroShow = false;
        // this.drawHeroSword();
        // setTimeout(hero, 250)
  };





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
  

//  fightHero = () => {
//    let heroShowOn = () => {
//     game.heroShow = true;
//    } 
//    game.heroShow = false;
//    this.HeroSword
//    setTimeout(heroShowOn, 250)
//  }

//  drawHeroes = () => {
        
//   if (this.heroShow === true) {
//       this.heroArr[0].drawHero();
//   } else  if (this.heroShow === false) {
//       this.heroArr[1].drawHero();
//   }
  
}

 
  


// class HeroSword {
    
//   constructor (xParam, yParam) {
//   this.w = 209;
//   this.h = 150;
//   this.img = new Image();
//   this.img.src = "./images/hero-fight.png";

//   }

//   //metodos
//   drawHeroSword = () => {
//     ctx.drawImage(this.img, game.hero.x, game.hero.y, this.w, this.h);
//   };

//   //movimientos
//   fightHero = () => {
//     console.log("pegando")

//     // let hero = () => {
//     //  game.heroShow = true;
//     // } 
//     // game.heroShow = false;
//     // this.drawHeroSword();
//     // setTimeout(hero, 250)
//   }
// }






