class Elemek{
    #x;
    #y;
    #isAg;
    #container;
    #speed;
    #element;
    #moveInterval = null;

    static #elet = 3;/* nincs */

    constructor(x,container, speed){
        this.setX(x);
        this.setSpeed(speed);
        this.setContainer(container);
        this.createElement();
    }
    setX(x){
        this.#x = x;
    }
    setY(y){
        this.#y = y;
    }
    setContainer(container){
        this.#container = document.querySelector(container);
    }
    setSpeed(speed){
        this.#speed = speed;
    }

    createElement(){
        this.#element = document.createElement("div");
        this.#element.style.left = this.#x + "px";
        this.#element.style.top = this.#y + "px";
        this.#isAg = Math.random() < 0.5;
        this.#element.classList.add(this.#isAg ? "ag" : "ko")
        this.#container.appendChild(this.#element);
    }
    /* collect függvény */
    move(){
        this.#moveInterval = setInterval(() =>{
            if(this.#element.parentNode == null){
                this.remove();
                return;
            }
            this.#x -= this.#speed;
            this.#element.style.left = this.#x + "px";
            if(this.#x < -50){/* változtatni 50-n */
                this.remove();
            }
        },20)
    }
    
    remove(){
        this.#element.remove();
        clearInterval(this.#moveInterval);
        this.#moveInterval = null;
    }
}