var gameArea = document.querySelector("section");
var beka = new Beka(90, 450, "section", 5);

document.querySelector(".kezdes").addEventListener("click", () => {
    document.querySelector(".ugras").classList.remove("disabled");
    document.querySelector(".ugras").addEventListener("click", () => {
        if (beka != null) {
            beka.ugras();
        }
    });
});




