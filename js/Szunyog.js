class Szunyog {
    #x;
    #y;
    #container;
    #speed;
    #element;
    #moveInterval = null;

    static #pont = 0;
    static #elet = 3;

    constructor(x, y, speed, container) {
        this.setX(x);
        this.setY(y);
        this.setSpeed(speed);
        this.setContainer(container);
        this.createElement();
    }

    setX(x) {
        this.#x = x;
    }

    setY(y) {
        this.#y = y;
    }

    getY(){
        return this.#y;
    }

    getX(){
        return this.#x;
    }

    setSpeed(speed) {
        this.#speed = speed;
    }

    setContainer(container) {
        this.#container = document.querySelector(container);
    }

    createElement() {
        this.#element = document.createElement("div");
        this.#element.style.left = this.#x + "px";
        this.#element.style.top = this.#y + "px";
        this.#element.classList.add("szunyog");
        this.#container.appendChild(this.#element);
        this.#element.addEventListener("click", () => this.collect());
    }

    collect() {
        if (Szunyog.getY() == Beka.getY()) {
            Szunyog.#pont++;
            this.remove();
        }
    }

    move() {
        this.#moveInterval = setInterval(() => {
            this.#x -= this.#speed;
            this.#element.style.left = this.#x + "px";
        }, 20);
    }

    remove() {
        this.#element.remove();
        clearInterval(this.#moveInterval);
        this.#moveInterval = null;
    }

    static getElet() {
        return Szunyog.#elet;
    }

    static getPont() {
        return Szunyog.#pont;
    }

    static resetGame() {
        Szunyog.#elet = 3;
        Szunyog.#pont = 0;
    }
}