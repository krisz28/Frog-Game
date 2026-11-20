class Elemek{
    #x;
    #y;
    #isSzunyog;
    #container;
    #spped;
    #element;
    #moveInterval = null;

    static #score = 0;/* nincs */
    static #elet = 3;/* nincs */

    constructor(x,y,container, speed){
        this.setX(x);
        this.setY(y);
        this.setSpeed(speed);
        this.setContainer(container);
        this.createElement();
    }
    setX(x){
        this.#x = x;
    }
    setX(y){
        this.#y = y;
    }
    setX(container){
        this.#container = document.querySelector(container);
    }
    setX(speed){
        this.#speed = speed;
    }

    createElement(){
        this.#element = document.createElement("div");
        this.#element.style.left = this.#x + "px";
        this.#element.style.top = this.#y + "px";
        this.#isSzunyog = Math.random();
        if(this.#isSzunyog <= 0.3){
            this.#element.classList.add("szunyog");
        }else if(this.#isSzunyog >0.3 && this.#isSzunyog <= 0.6 ){
            this.#element.classList.add("ag");
        }else if(this.#isSzunyog > 0.6 && this.#isSzunyog <= 0.9){
            this.#element.classList.add("ko");
        }
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