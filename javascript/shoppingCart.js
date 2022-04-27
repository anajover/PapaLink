// class objects {
    
//     constructor (xParam, yParam, wParam, hParam, srcParam){
//         this.x = xParam;
//         //900
//         this.y = yParam;
//         //200
//         this.w = wParam;
//         //149
//         this.h = hParam;
//         //150
//         this.img = new Image();
//         this.img.src = srcParam;
//         //"./images/shopping-cart.png"
//         this.speed = 2;
//     }

//     //metodos del shopping cart
//     drawObject = () => {
//         ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
//       };

//     //movimientos del shopping cart
//     movObject = (xParam) => {
//         if (this.x > 0) {
//             this.x -=this.speed;
//         } else if (this.x < 0){
//             this.x = xParam;
//         }
//     }

// }

class ShoppingCart {

    constructor () {
        this.x = canvas.width;
        this.y = 200;
        this.w = 149;
        this.h = 150;
        this.img = new Image();
        this.img.src = "./images/shopping-cart.png"
        this.speed = 1;
    }

    //metodos del shopping cart
    drawShoppingCart = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
      };

      //movimientos del shopping cart
      movShoppingCart = () => {
          if (this.x + this.w < 0) {
            this.x = canvas.width;
              
          } else {
            this.x -= this.speed;
          }
      }
}

class Objects1 {

    constructor () {
        this.x = 0;
        this.y = 0;
        this.w = 233;
        this.h = 235;
        this.img = new Image();
        this.img.src = "./images/objects01.png"
        this.speed = 1;
    }

    //metodos
    drawObjects1 = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
      };

      //movimientos
      movObjects1 = () => {
          if (this.x + this.w < 0) {
            this.x = canvas.width;
              
          } else {
            this.x -= this.speed;
          }
      }
}

class Objects2 {

    constructor () {
        this.x = 234;
        this.y = 0;
        this.w = 396;
        this.h = 235;
        this.img = new Image();
        this.img.src = "./images/objects02.png"
        this.speed = 1;
    }

    //metodos
    drawObjects2 = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
      };

      //movimientos
      movObjects2 = () => {
          if (this.x + this.w < 0) {
            this.x = canvas.width;
              
          } else {
            this.x -= this.speed;
          }
      }
}

class Objects3 {

    constructor () {
        this.x = 630;
        this.y = 0;
        this.w = 348;
        this.h = 235;
        this.img = new Image();
        this.img.src = "./images/objects03.png"
        this.speed = 1;
    }

    //metodos
    drawObjects3 = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
      };

      //movimientos
      movObjects3 = () => {
          if (this.x + this.w < 0) {
            this.x = canvas.width;
              
          } else {
            this.x -= this.speed;
          }
      }
}