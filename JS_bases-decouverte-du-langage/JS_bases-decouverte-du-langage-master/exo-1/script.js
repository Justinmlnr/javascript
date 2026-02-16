// valeur en dur , variable const car on la change pas 
/*const kelvins = 294;*/

// prompt pour demander la temp en kelvins a l'utilisateur qui visite la page et ensuite afficher la convertion des autre temps
let kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");

// pour soustraire 273 a kelvin ( 293 ) convertir la temp 
let Celsius = kelvins - 273;

// convertir en fahrenheit
let fahrenheit = Celsius * (9 / 5) + 32;
// pour arrondir le nombre en nombre entier
fahrenheit = Math.floor(fahrenheit);
console.log(`The tempareture is ${fahrenheit} degress Fahrenheit.`)

let newton = Celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The tempareture is ${newton} degress newton.`)