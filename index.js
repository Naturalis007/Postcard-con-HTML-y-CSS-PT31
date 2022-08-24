let quien = [
    "el perro",
    "su tortuga",
    "mi abuela",
    "el pajarito"
];

let que = [
    "se comió mi tarea",
    "se enojó",
    "aplastó el pastel",
    "rompió"
];

let cuando = [
    "antes de la clase",
    "justo a tiempo",
    "cuando terminé",
    "durante el almuerzo",
    "mientras oraba"
];


let frase1 = quien[Math.floor(Math.random()*quien.length)];
let frase2 = que[Math.floor(Math.random()*que.length)];
let frase3 = cuando[Math.floor(Math.random()*cuando.length)];

let excusa = frase1+" "+frase2+" "+frase3

console.log(excusa)