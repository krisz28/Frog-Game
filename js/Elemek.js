class Elemek {
    #x;
    #y;
    #isAg;
    #container;
    #speed;
    #element;
    #moveInterval = null;
    #szajInterval = null;
    #utkozott = false;
    

    static #elet = 3;
    static #utkozesVedett = false;

    constructor(x, y, container, speed) {
        this.setX(x);
        this.setY(y);
        this.setSpeed(speed);
        this.setContainer(container);
        this.createElement();
    }
    setX(x) {
        if (x > 800 || x < 1) {
            this.#x = 800;
        } else this.#x = x;
    }
    setY(y) {
        if (y != 20 && y != 460) {
            this.#y =  0;
        } else this.#y = y;
    }
    setContainer(container) {
        this.#container = document.querySelector(container);
    }
    setSpeed(speed) {
        if (speed < 1) {
            this.#speed = 1;
        } else this.#speed = speed;
    }
    getX() {
        return this.#x;
    }
    getY() {
        return this.#y;
    }
    getSpeed() {
        return this.#speed;
    }
    getContainer() {
        return this.#container;
    }
    static getElet() {
        return Elemek.#elet;
    }
    static ResetElet() {
        Elemek.#elet = 3;
        Elemek.#utkozesVedett = false;
    }

    static getUtkozesVedett() {
        return Elemek.#utkozesVedett;
    }

    static eletCsokkentes() {
        Elemek.#elet--;

        document.querySelector(".elet span").innerHTML =
            Elemek.#elet;
    }

    createElement() {
        this.#element = document.createElement("div");
        this.#element.style.left = this.#x + "px";
        this.#isAg = Math.random() < 0.5;
        if(this.#y == 0){
            this.#y = (this.#isAg ? 20 : 460);
        }
        this.#element.style.top = this.#y + "px";
        this.#element.classList.add(this.#isAg ? "ag" : "ko")
        this.#container.appendChild(this.#element);
    }

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
        if (this.#element == null || this.#utkozott) {
            return;
        }

        var bekaX = beka.getX();
        var bekaY = beka.getY();

        var szelesseg = this.#isAg ? 100 : 120;
        var magassag = this.#isAg ? 200 : 120;

        if (
            this.#x < bekaX + 80 &&
            this.#x + szelesseg > bekaX &&
            this.#y < bekaY + 120 &&
            this.#y + magassag > bekaY
        ) {
            this.#utkozott = true;

            if (beka.pajzsAktiv()) {
                return;
            }

            if (beka.getUgrik()) {
                beka.setElement("url('./img/bekaUgrikUtes.png')");
            } else {
                beka.setElement("url('./img/bekaUtes.png')");
            }

            if (!Elemek.#utkozesVedett) {
                Elemek.#elet--;
                Elemek.#utkozesVedett = true;

                document.querySelector(".elet span").innerHTML =
                    Elemek.#elet;

                setTimeout(() => {
                    Elemek.#utkozesVedett = false;
                }, 1000);
            }

            clearTimeout(this.#szajInterval);

            this.#szajInterval = setTimeout(() => {
                if (beka.getUgrik()) {
                    beka.setElement("url('./img/bekaUgrik.png')");
                } else {
                    beka.setElement("url('./img/beka.png')");
                }
            }, 200);
        }
    }


    toString() {
        return "{" + this.getX() + ";" + this.getY() + ";" + this.getContainer() + ";" + this.getSpeed() + "}";
    }

}


