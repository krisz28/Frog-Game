class Elemek {
    #x;
    #y;
    #isAg;
    #container;
    #speed;
    #element;
    #moveInterval = null;
    #szajInterval = null;

    static #elet = 3;
    constructor(x, container, speed) {
        this.setX(x);
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
    setContainer(container) {
        this.#container = document.querySelector(container);
    }
    setSpeed(speed) {
        this.#speed = speed;
    }
    static getElet() {
        return Elemek.#elet;
    }
    static tResetElet() {
        Elemek.#elet = 3;
    }

    createElement() {
        this.#element = document.createElement("div");
        this.#element.style.left = this.#x + "px";
        this.#isAg = Math.random() < 0.5;
        this.#y = (this.#isAg ? 20 : 460);
        this.#element.style.top = this.#y + "px";
        this.#element.classList.add(this.#isAg ? "ag" : "ko")
        this.#container.appendChild(this.#element);
    }
    /* collect függvény */
    move() {
        this.#moveInterval = setInterval(() => {
            if (this.#element.parentNode == null) {
                this.remove();
                return;
            }
            this.#x -= this.#speed;
            this.#element.style.left = this.#x + "px";
            this.eletVeszites();
            if (this.#x < -50) {
                this.remove();
            }
        }, 20)
    }

    remove() {
        this.#element.remove();
        clearInterval(this.#moveInterval);
        this.#moveInterval = null;
    }

    eletVeszites() {
        clearTimeout(this.#szajInterval);
        var bekaX = beka.getX();
        var bekaY = beka.getY();
        var szelesseg = (this.#isAg ? 100 : 10);
        var magassag = (this.#isAg ? 200 : 120);

        if (this.#x < bekaX + 80 && this.#x + szelesseg > bekaX &&
            this.#y < bekaY + 80 && this.#y + magassag > bekaY) {
            Elemek.#elet--;
            document.querySelector(".elet span").innerHTML = Elemek.#elet;
            /* béka fájdalom kifejező arc */
            this.remove();
            if (this.#isAg) {
                beka.setElement("url('./img/bekaUgrikUtes.png')")
            }
            else {
                beka.setElement("url('./img/bekaUtes.png')")
            }

            this.#szajInterval = setTimeout(() => {
                if (this.#isAg) {
                    beka.setElement("url('./img/bekaUgrik.png')")
                }
                else {
                    beka.setElement("url('./img/beka.png')")
                }

            }, 200);

        }



    }

}