class Beka {
    #x;
    #y;
    #container;
    #element;
    #speed;
    #moveInterval = null;

    constructor(x, y, container, speed) {
        this.setX(x);
        this.setY(y);
        this.setContainer(container);
        this.setSpeed(speed);
        this.createElement();
    }

    setX(x) {
        this.#x = x;
    }

    setY(y) {
        this.#y = y;
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
        this.#element.classList.add("beka");
        this.#container.appendChild(this.#element);
    }



    ugras() {
        if (this.#moveInterval != null) {
            return;
        }

        var eredetiY = this.#y;
        var kozep = 150;
        var irany = -1;

        this.#element.style.backgroundImage = "url('./img/bekaUgrikNyitottszaj.png')";

        this.#moveInterval = setInterval(() => {

            this.#y += this.#speed * irany;

            if (this.#y <= kozep) {
                irany = 1;
            }

            if (this.#y >= eredetiY) {
                this.#y = eredetiY;

                clearInterval(this.#moveInterval);
                this.#moveInterval = null;
                
                this.#element.style.backgroundImage = "url('./img/bekaNyitottszaj.png')";
            }

            this.#element.style.top = this.#y + "px";

        }, 20);
    }



}