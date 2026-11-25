class Szunyog {
    #x;
    #y;
    #container;
    #speed;
    #element;
    #moveInterval = null;

    static #pont = 0;

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

    getY() {
        return this.#y;
    }

    getX() {
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
    }


    collect() {
        let bekaX = beka.getX();
        let bekaY = beka.getY();

        if (this.#x < bekaX + 120 && this.#x + 50 > bekaX &&
            this.#y < bekaY + 120 && this.#y + 50 > bekaY) {
            Szunyog.#pont++;
            document.querySelector(".pont span").innerHTML = Szunyog.#pont;
            beka.szajNyitas();
            this.remove();
        }
    }



    move() {
        this.#moveInterval = setInterval(() => {
            this.#x -= this.#speed;
            this.#element.style.left = this.#x + "px";
            this.collect();
            if (this.#x < -60) {
                this.remove();
            }
        }, 20);
    }

    remove() {
        if (this.#element != null) {
            this.#element.remove();
            this.#element = null;
        }

        clearInterval(this.#moveInterval);
    }


    static getPont() {
        return Szunyog.#pont;
    }

    static resetGame() {
        Szunyog.#pont = 0;
    }
}