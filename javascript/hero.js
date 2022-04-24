class Hero {
    constructor() {
    this.x = 40;
    this.y = 300;
    this.w = 135;
    this.h = 150;
    this.img = new Image();
    this.img.src = "./images/hero.png"
    this.speed = 4;
}

//metodos del heroe
drawHero = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}

//movimientos del heroe
forwardHero = () => {
    this.x += this.speed;
}

backwardHero = () => {
    this.x -= this.speed;
}
};