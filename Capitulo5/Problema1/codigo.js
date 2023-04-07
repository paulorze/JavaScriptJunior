// Crear un sistema que pregunte porcentaje de asistencias, promedio y cantidad de trabajos entregados. Mostrar todo con colores en la consola.

class Regimen {
    constructor (nombre,clases,trabajos,promedio) {
        this.nombre = nombre;
        this.clases = clases;
        this.trabajos = trabajos;
        this.promedio = promedio;
    }
    info() {
        console.log (`%cLa materia ${this.nombre} tuvo un total de ${this.clases} clases. El promedio mínimo para aprobar es de ${this.promedio} y debés tener
                    entregados al menos el 75% de ${this.trabajos} trabajos.`,"color:black;background:white;border: 1px solid blue;padding:5px");
    }
}

const musica = new Regimen ("Música",10,10,7);
const dibujo = new Regimen ("Dibujo",10,5,6);
const matematica = new Regimen ("Matemática",20,10,7);
const sociales = new Regimen ("Ciencias Sociales",20,15,8);

let arrayRegimen = [musica, dibujo, matematica, sociales];

let materia = prompt (`Ingresá aquí la materia por la cual querés realizar tu consulta. 1 para Música; 2 para Dibujo; 3 para Matemática; 4 para Ciencias Sociales.`);

if (materia == 1) {
    materia = musica;
}
else if (materia == 2) {
    materia = dibujo;
}
else if (materia == 3) {
    materia = matematica;
}
else if (materia == 4) {
    materia = sociales;
}
else {
    alert (`Por favor, ingrese un número válido.`)
}

let asistencia = parseInt(prompt(`¿Cuántas clases asististe de ${materia.nombre}?`));
let trabajos = parseInt(prompt(`¿Cuántos trabajos entregaste en ${materia.nombre}?`));
let promedio = parseFloat(prompt(`¿Cuál fue el promedio final de los trabajos que entregaste en ${materia.nombre}?`));

materia.info();

if (asistencia*100/materia.clases >= 75) {
    console.log(`%cHas asistido a el 75% o más de las clases.`,"color:green;background:limegreen;padding:10px");
}
else {
    console.log(`%cHas asistido a menos del 75% de las clases.`,"color:red;background:pink;padding10px");
}

if (trabajos*100/materia.trabajos >= 75) {
    console.log(`%cHas entregado el 75% o más de los trabajos requeridos.`, "color:green;background:limegreen;padding:10px");
}
else {
    console.log(`%cNo has entregado el 75% de los trabajos requeridos`,"color:red;background:pink;padding10px");
}

if (promedio >= materia.promedio) {
    console.log(`%cHas superado la nota mínima de promedio que es ${materia.promedio}.`,"color:green;background:limegreen;padding:10px");
}
else {
    console.log(`%cNo has alcanzado la nota mínima de promedio que es ${materia.promedio}`,"color:red;background:pink;padding10px")
}

if (asistencia*100/materia.clases >= 75 && trabajos*100/materia.trabajos >= 75 && promedio >= materia.promedio) {
    console.log(`%c¡Felicitaciones! ¡Has aprobado ${materia.nombre}`,"color:green;background:limegreen;padding:20px 100px");
}
else {
    console.log(`%cLo sentimos, vas a tener que recursar ${materia.nombre} pedazo de nabo.`,"color:red;background:pink;padding:20px 100px");
}