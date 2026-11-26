var elem1 = new Elemek(400, 20, "section", 15);

console.assert(elem1.getX() === 400, "Hiba a getX() metódus működésében!");

console.assert(elem1.getY() === 20, "Hiba a getY() metódus működésében!");

console.assert(elem1.getSpeed() === 15, "Hiba a getSpeed() metódus működésében!");

console.assert(elem1.toString() === "{400;20;[object HTMLElement];15}", "Hiba a konstruktor adatbeállításaiban!");

var elem2 = new Elemek(900, 20, "section", 15);

console.assert(elem2.getX() === 800, "Hiba a setX() metódus működésében!");

var elem3 = new Elemek(400, 100, "section", 15);

console.assert(elem3.getY() === 0, "Hiba a setY() metódus működésében!");

var elem4 = new Elemek(400, 20, "section", 0);

console.assert(elem4.getSpeed() === 0, "Hiba a setSpeed() metódus működésében!");

Elemek.ResetElet();

console.assert(Elemek.getElet() === 3, "Hiba a ResetElet() metódus működésében!");

Elemek.ResetElet();

console.assert(Elemek.getElet() === 3, "Hiba az életek visszaállításában!");

document.querySelectorAll(".ko").forEach(ko => ko.remove());
document.querySelectorAll(".ag").forEach(ag => ag.remove());
////////////////////// ELEMEK ///////////////////

