class ShoppingCart {
  constructor() {
    this.x = canvas.width;
    this.y = 200;
    this.w = 149;
    this.h = 150;
    this.img = new Image();
    this.img.src = "./images/shopping-cart.png";
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
  };
}

class Objects1 {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.w = 233;
    this.h = 235;
    this.img = new Image();
    this.img.src = "./images/objects01.png";
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
  };
}

class Objects2 {
  constructor() {
    this.x = 234;
    this.y = 0;
    this.w = 396;
    this.h = 235;
    this.img = new Image();
    this.img.src = "./images/objects02.png";
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
  };
}

class Objects3 {
  constructor() {
    this.x = 630;
    this.y = 0;
    this.w = 348;
    this.h = 235;
    this.img = new Image();
    this.img.src = "./images/objects03.png";
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
  };
}

class Legs {
  constructor(xParam) {
    this.x = xParam;
    this.y = 250;
    this.w = 977;
    this.h = 51;
    this.img = new Image();
    this.img.src = "./images/patas-estanteria.png";
    this.speed = 1;
  }

  //metodos
  drawLegs = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  //movimiento
  movBackground = () => {
    if (this.x + this.w < 0) {
      this.x = canvas.width;
    } else {
      this.x -= this.speed;
    }
  };
}

class Fries {
  constructor() {
    this.x = canvas.width;
    this.y = 120;
    this.w = 61;
    this.h = 80;
    this.img = new Image();
    this.img.src = "./images/fries.png";
    this.speed = 1;
  }

  //metodos
  drawFries = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  // movimiento
  movFries = () => {
    this.x -= this.speed;
  };
}
