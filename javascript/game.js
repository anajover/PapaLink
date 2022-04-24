class Game {
    constructor() {
        // todas las propiedades que estarán en el juego
        this.bg = new Image();
        this.bg.src = "./images/super-bg.png";
        this.hero = new Hero();
        // this.enemy = new Enemy();
        this.isGameOn = true;
    }

    gameLoop = () => {
        console.log("juego ejecutandose");
    
        // 1.borrar el canvas
        ctx.clearRect(0, 0, canvas.width,  canvas.height);

        // 2. acciones o movimientos de los elementos
        this.hero.forwardHero();
        this.hero.backwardHero();

        // 3. dibujar los elementos
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
        this.hero.drawHero();

        // 4. control y recursion
        if (this.isGameOn) {
            requestAnimationFrame(this.gameLoop);
        }
    };

    
}

