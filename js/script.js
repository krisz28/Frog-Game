var gameInterval = null;
var gameIntervalSzunyog = null;
var gameIntervalElemek = null;
var gameArea = document.querySelector("section");
var beka = new Beka(90, 450, "section", 25);
var scoreInterval = null;
var elet = document.querySelector(".elet span");
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
            var pajzsos = Math.random() < 0.1;
            var obj = new Szunyog(gameArea.offsetWidth, y, speed, "section", pajzsos);
            obj.move();
        }, 2000);
        gameIntervalElemek = setInterval(() => {
            var speed = 15;
            var obj = new Elemek(gameArea.offsetWidth, gameArea.offsetHeight, "section", speed);
            obj.move();
        }, 1000);
    }
});

function pontFigyelo() {
    scoreInterval = setInterval(() => {

        var aktualisPont = Szunyog.getPont();
        var aktualisElet = Elemek.getElet();

        pont.innerHTML = aktualisPont;
        elet.innerHTML = aktualisElet;

        if (aktualisElet <= 0) {
            veszitModal();
            document.querySelector(".ugras").classList.add("disabled");

        }
        else if (aktualisPont >= 20) {
            stop();
            nyeresModal.show();
            document.querySelector(".ugras").classList.add("disabled");
        }

    }, 100);
}

function stop() {
    clearInterval(gameIntervalSzunyog);
    clearInterval(gameIntervalElemek);
    clearInterval(scoreInterval);

    gameInterval = null;
    Szunyog.resetGame();
    Elemek.ResetElet();
    document.querySelectorAll(".ko").forEach(ko => ko.remove());
    document.querySelectorAll(".ag").forEach(ag => ag.remove());
    document.querySelectorAll(".szunyog").forEach(szunyog => szunyog.remove());
    document.querySelectorAll(".szunyogPajzs").forEach(szunyog => szunyog.remove());
}
function veszitModal() {
    stop();
    document.querySelector("#nyeres .modal-header").classList.remove("bg-success");
    document.querySelector("#nyeres .modal-header").classList.add("bg-danger");
    document.querySelector("#nyeres .modal-header").innerHTML = "VESZÍTETTÉL";
    document.querySelector("#nyeres .modal-body").innerHTML = "Elfogyott az életed!\nÉhes maradtál!";
    nyeresModal.show();
    document.querySelector("#nyeres .btn-secondary").addEventListener("click", () => {
        document.querySelector("#nyeres .modal-header").classList.add("bg-success");
        document.querySelector("#nyeres .modal-header").classList.remove("bg-danger");
        document.querySelector("#nyeres .modal-header").innerHTML = "NYERTÉL";
        document.querySelector("#nyeres .modal-body").innerHTML = "Elérted a 20 pontot és maradt életed.";
    });



}
