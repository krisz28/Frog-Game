var gameInterval = null;
var gameArea = document.querySelector("section");
var beka = new Beka(90, 450, "section", 25);

document.querySelector(".kezdes").addEventListener("click", () => {
    if (gameInterval == null) {
        document.querySelector(".ugras").classList.remove("disabled");
        document.querySelector(".ugras").addEventListener("click", () => {
            if (beka != null) {
                beka.ugras();
            }
        });
    }
    gameInterval = setInterval(()=>{
        var y = Math.random()*(gameArea.offsetHeight-50);
        var speed = 1+Math.random()*2;
        var obj = new Elemek(gameArea.offsetWidth, y,"section", speed);
        obj.move();
    }, 1000)

});




