
console.log('exo-2');



// variable date, new
const myDate = new Date();
const weekDay = "Nous sommes le jour de la semaine";
const weekEnd = "Nous sommes le jour du week end";

// getDay fonction dans objet date , methode = fonction attacher a un objet
// Tester cette variable pour savoir si le jour actuel est un jour de semaine ou du weekend.
let jourSemaine = myDate.getDay();

// time 
let hours = myDate.getHours();
const minute = myDate.getMinutes();
// pour afficher heure + minute 
const time = (hours + ':' + minute);


let isTesting = true;

if (isTesting) {
    jourSemaine = prompt();
    hours = prompt();
}








// En fonction de la réponse, afficher dans la console le message correspondant. boolean
// si le jour de la semaine est supérieur ou égal à 1 (lundi) && (et) que le jour de la semaine et inférieur ou égal a 5 : afficher week day
if ((jourSemaine >= 1 && jourSemaine <= 5) && (hours > 9 && hours <= 17)) {
    console.log(weekDay);
    // sinon si le jour de la semaine et égal (==) à 5 && (et) que l'heure et supérieur ou égal a 17 : afficher week end
} else if (jourSemaine == 5 && hours >= 17) {
    console.log(weekEnd)
    // sinon si le jour de la semaine et égal (==) 1 && (et) que l'heure et inférieur ou égal a 9 : afficher weekDay
} else if (jourSemaine == 1 && hours <= 9) {
    console.log(weekEnd)
    // sinon afficher week end        
} else {
    console.log(weekEnd);
}














