var gameInterval = null;
var gameArea = document.querySelector("section");
var beka = new Beka(90, 450, "section", 25);
var scoreInterval = null;
var elet = document.querySelector(".elet span");
var pont = document.querySelector(".pont span");

document.querySelector(".kezdes").addEventListener("click", () => {
    if (gameInterval == null) {
        document.querySelector(".ugras").classList.remove("disabled");
        document.querySelector(".ugras").addEventListener("click", () => {
            if (beka != null) {
                beka.ugras();
            }
        });
        scoreListener();
        gameInterval = setInterval(() => {
            var y = Math.random() * (gameArea.offsetHeight - 50);
            var speed = 1 + Math.random() * 2;
            var obj = new Szunyog(gameArea.offsetWidth, y, speed, "section");
            obj.move();
        }, 10000);
    }
});

function scoreListener() {
    scoreInterval = setInterval(() => {
        var pont = Szunyog.getPont();
        var elet = Szunyog.getElet();

        elet.innerHTML = elet;
        pont.innerHTML = pont;

        if (gameInterval != null && elet <= 0) {
            alert("Veszítettél!");
        }
        else if (gameInterval != null && pont >= 20) {
            alert("Nyertél!");
        }
    }, 20);
}




