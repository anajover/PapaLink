class Princess {
  constructor(xParam) {
    this.x = 500;
    this.y = 320;
    this.w = 82;
    this.h = 130;
    this.img = new Image();
    this.img.src = "./images/princess.png";
  }

  //DRAW PRINCESS
  drawPrincess = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

 
}
