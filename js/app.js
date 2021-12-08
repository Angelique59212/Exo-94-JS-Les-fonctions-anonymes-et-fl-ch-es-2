let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */
let newTableauUn = document.createElement("div");
let newTableauDeux = document.createElement("div");

document.body.appendChild(newTableauUn);
document.body.appendChild(newTableauDeux);

newTableauUn.innerHTML += (tableauUn.map((event)=>event ** event)).toString() + "<br>";
newTableauUn.innerHTML += (tableauUn.map((event)=>event * 10)).toString() + "<br>";

let age = 33;
newTableauUn.innerHTML += (tableauUn.map((event)=>event + 2 / age)).toString()  + "<br>";
newTableauUn.innerHTML += tableauUn.filter(event => event > 2).toString() + "<br>";
newTableauUn.innerHTML += tableauUn.filter(event => event % 2).toString() + "<br>";
newTableauUn.innerHTML += tableauUn.filter(event => event * 3 > 10).toString() + "<br>";

newTableauDeux.innerHTML += (tableauDeux.map(item => item.length)).toString() + "<br>";
newTableauDeux.innerHTML += (tableauDeux.map(item => item + item.length)).toString() + "<br>";
newTableauDeux.innerHTML += (tableauDeux.map(item => item + item)).toString() + "<br>";

newTableauDeux.innerHTML += (tableauDeux.filter(item => item.length > 2 + 2 )).toString() + "<br>";
newTableauUn.innerHTML += (tableauDeux.filter(item => item.length % 2)).toString() + "<br>";
newTableauDeux.innerHTML += (tableauDeux.filter(item => item.length -3 >10)).toString() + "<br>";
