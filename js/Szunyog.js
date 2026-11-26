class Szunyog {
    #x;
    #y;
    #container;
    #speed;
    #element;
    #moveInterval = null;
    #pajzsos;

    static #pont = 0;

    constructor(x, y, speed, container, pajzsos = false) {
        this.setX(x);
        this.setY(y);
        this.setSpeed(speed);
        this.setContainer(container);
        this.#pajzsos = pajzsos;
        this.createElement();
    }

    setX(x) {
        if (x < 0 || x > 800) {
            this.#x = 800;
        } else {
            this.#x = x;
        }
    }

    setY(y) {
        if (y < 0 || y > 550) {
            this.#y = 180;
        } else {
            this.#y = y;
        }
    }

    getY() {
        return this.#y;
    }

    getX() {
        return this.#x;
    }

    getContainer() {
        return this.#container;
    }

    setSpeed(speed) {
        if (speed < 1) {
            this.#speed = 4;
        } else {
            this.#speed = speed;
        }
    }
    getSpeed(){
        return this.#speed;
    }

    setContainer(container) {
        this.#container = document.querySelector(container);
    }

    createElement() {
        this.#element = document.createElement("div");
        this.#element.style.left = this.#x + "px";
        this.#element.style.top = this.#y + "px";

        if (this.#pajzsos) {
            this.#element.classList.add("szunyogPajzs");
        } else {
            this.#element.classList.add("szunyog");
        }

        this.#container.appendChild(this.#element);
    }


    collect() {
        var bekaX = beka.getX();
        var bekaY = beka.getY();

        if (this.#x < bekaX + 120 && this.#x + 50 > bekaX &&
            this.#y < bekaY + 120 && this.#y + 50 > bekaY) {
            Szunyog.#pont++;
            document.querySelector(".pont span").innerHTML = Szunyog.#pont;
            beka.szajNyitas();

            if (this.#pajzsos) {
                beka.pajzsAktivalas();
            }

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
        this.#element.remove();
        clearInterval(this.#moveInterval);
    }


    static getPont() {
        return Szunyog.#pont;
    }

    static resetGame() {
        Szunyog.#pont = 0;
    }

    toString() {
        return "{" + this.getX() + ";" + this.getY() + ";" + this.getContainer() + ";" + this.getSpeed() + "}";
    }
}