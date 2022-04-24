class Enemy {

    constructor(wProperty, srcParam) {
        this.x = canvas.width;
        this.y = 300;
        this.w = wProperty;
        this.h = 150;
        this.img = new Image()
        this.img.src = srcParam
        this.speed = 2;
    }

    // metodos de enemy
    drawEnemy = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    moveEnemy = () => {
        this.x -= this.speed;
    }
};


// 80 y 102