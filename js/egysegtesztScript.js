 ////////////////////// ELEMEK ///////////////////
var elem1 = new Elemek(400, 20, "section", 15);

console.assert(elem1.getX() === 400, "Hiba a getX() metódus működésében!");

console.assert(elem1.getY() === 20, "Hiba a getY() metódus működésében!");

console.assert(elem1.getSpeed() === 15, "Hiba a getSpeed() metódus működésében!");

console.assert(elem1.toString() === "{400;20;[object HTMLElement];15}", "Hiba a konstruktor adatbeállításaiban!");

var elem2 = new Elemek(900, 20, "section", 15);

console.assert(elem2.getX() === 800, "Hiba a setX() metódus működésében!");

var elem3 = new Elemek(400, 100, "section", 15);
elem3.setY(100);
console.assert(elem3.getY() === 0, "Hiba a setY() metódus működésében!");

var elem4 = new Elemek(400, 20, "section", 0);

console.assert(elem4.getSpeed() === 1, "Hiba a setSpeed() metódus működésében!");

Elemek.ResetElet();

console.assert(Elemek.getElet() === 3, "Hiba a ResetElet() metódus működésében!");

Elemek.ResetElet();

console.assert(Elemek.getElet() === 3, "Hiba az életek visszaállításában!");

document.querySelectorAll(".ko").forEach(ko => ko.remove());
document.querySelectorAll(".ag").forEach(ag => ag.remove());
////////////////////// Szunyog ///////////////////
var szunyog = new Szunyog(100, 100, 2, "section");

console.assert(szunyog.toString() == "{100;100;[object HTMLElement];2}", "A konstruktorban hibás a adatbeállítás");

szunyog.setX(-1);
console.assert(szunyog.getX() === 800, "Hiba a setX() metódusban, engedi a 0-nál kisebb értéket");
szunyog.setX(900);
console.assert(szunyog.getX() === 800, "Hiba a setX() metódusban, engedi a 800-nál nagyobb értéket");

szunyog.setY(-1);
console.assert(szunyog.getY() === 180, "Hiba a setY() metódusban, engedi a 0-nál kisebb értéket");
szunyog.setY(900);
console.assert(szunyog.getY() === 180, "Hiba a setY() metódusban, engedi a 550-nél nagyobb értéket");

szunyog.setSpeed(-1);
console.assert(szunyog.getSpeed() === 4, "Hiba a setSpeed() metódusban, engedi az 1-nél nagyobb értéket");

Szunyog.resetGame();
console.assert(Szunyog.getPont() === 0, "Hiba a resetGame() metódusban, nem állítja 0-ra a pont értéket");

document.querySelectorAll(".szunyog").forEach(szunyog => szunyog.remove());
document.querySelectorAll(".szunyogPajzs").forEach(szunyogPajzs => szunyogPajzs.remove());
////////////////////// Beka /////////////////// 
var tesztBeka = new Beka(100,100,"section",25);

console.assert(tesztBeka.toString() === "{100;100;[object HTMLElement];25}", "A konstruktorban hibás a adatbeállítás");

tesztBeka.setX(-1);

tesztBeka.setX(-1);
console.assert(tesztBeka.getX() === 90, "b Hiba a setX() metódusban, engedi a 0-nál kisebb értéket");
tesztBeka.setX(1000);
console.assert(tesztBeka.getX() === 90, "b Hiba a setX() metódusban, engedi a 680-nál nagyobb értéket");
 
tesztBeka.setY(-1);
console.assert(tesztBeka.getY() === 450, "b Hiba a setY() metódusban, engedi a 0-nál kisebb értéket");
tesztBeka.setY(900);
console.assert(beka.getY() === 450, "b Hiba a setY() metódusban, engedi a 480-nál nagyobb értéket");

tesztBeka.setSpeed(0);
console.assert(tesztBeka.getSpeed() === 25, "b Hiba a setSpeed() metódusban, engedi az 1-nél kisebb értéket");

tesztBeka.remove();
