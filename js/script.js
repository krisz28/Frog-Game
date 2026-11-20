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
        var speed = 10;
        var obj = new Elemek(gameArea.offsetWidth,"section", speed);
        obj.move();
    }, 1000)

});




