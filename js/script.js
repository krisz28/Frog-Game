var gameInterval = null;
var gameIntervalSzunyog = null;
var gameIntervalElemek = null;
var gameArea = document.querySelector("section");
var beka = new Beka(90, 450, "section", 25);
var scoreInterval = null;
var elet = document.querySelector(".my-5 p span");
var pont = document.querySelector(".pont span");

const nyeresModal = new bootstrap.Modal('#nyeres');

document.querySelector(".kezdes").addEventListener("click", () => {
    if (gameInterval == null) {
        document.querySelector(".ugras").classList.remove("disabled");
        document.querySelector(".ugras").addEventListener("click", () => {
            if (beka != null) {
                beka.ugras();
            }
        });
        pontFigyelo();
        gameIntervalSzunyog = setInterval(() => {
            var y = 180 + Math.random() * 230;
            var speed = 4 + Math.random() * 3;
            var obj = new Szunyog(gameArea.offsetWidth, y, speed, "section");
            obj.move();
        }, 2000);
        gameIntervalElemek = setInterval(() => {
            var speed = 15;
            var obj = new Elemek(gameArea.offsetWidth, "section", speed);
            obj.move();
        }, 1000);
    }
});

function pontFigyelo() {
    scoreInterval = setInterval(() => {

        var aktualisPont = Szunyog.getPont();
        var aktualisElet = Szunyog.getElet();

        pont.innerHTML = aktualisPont;
        elet.innerHTML = aktualisElet;

        if (aktualisElet <= 0) {
            clearInterval(gameIntervalSzunyog);
            clearInterval(gameIntervalElemek);
            clearInterval(scoreInterval);

            gameInterval = null;
            
            
        }
        else if (aktualisPont >= 20) {
            clearInterval(gameIntervalSzunyog);
            clearInterval(gameIntervalElemek);
            clearInterval(scoreInterval);

            gameInterval = null;
            nyeresModal.show();
            
        }

    }, 100);
}
