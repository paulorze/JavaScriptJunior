// Base de datos con nombre de materia, nombre del profesor, nombre de los alumnos, cantidad de alumnos. La función nos debe indicar en cuántas clases está un alumno y 
// devolver los nombres de esas clases y sus profesores.

class Clases {
    constructor(nombre,profesor,alumnos){
        this.nombre = nombre;
        this.profesor = profesor;
        this.alumnos = alumnos;
        this.cupo = this.alumnos.length;
    }

    info() {
        document.write (`La materia de la cual estás solicitando información es <b>${this.nombre}</b>. El profesor que dicta esta cátedra es <b>${this.profesor}</b> y en ella ya se inscribieron <b>${this.cupo}</b> alumnos.<br>`);
        document.write (`Los nombres de los alumnos inscriptos son:<br>`);
        this.alumnos.forEach(alumno => {
            document.write(`<b>` + alumno + `</b>;<br>`);
        });
    }
}

const sociales = new Clases ("Ciencias Sociales", "Saavedra", [" Martínez","Fernández","Boginovitch"]);
const naturales = new Clases ("Ciencias Naturales", "Hernández", [" Martínez","Fernández","Boginovitch","Stigliano","Cardoso","Cerdeiro","Cofla"]);
const ingles = new Clases ("Inglés", "Orduña", ["Fernández","Boginovitch","Stigliano","Cardoso","Cerdeiro"]);
const musica = new Clases ("Música", "Rzeszut", [" Martínez","Fernández","Boginovitch","Stigliano","Cardoso","Cerdeiro","Cofla"]);
const dibujo = new Clases ("Dibujo", "Debat", [" Martínez","Fernández","Stigliano","Cardoso","Cerdeiro"]);
const fisica = new Clases ("Educacion Fisica", "Romero", [" Martínez","Fernández","Boginovitch","Stigliano","Cardoso","Cerdeiro","Cofla"]);
const matematica = new Clases ("Matemática", "Buffolo", [" Martínez","Fernández","Boginovitch","Stigliano"]);

let materia = parseInt(prompt(`¿De qué materia deseas recibir información? Escribe 1 para Ciencias Sociales; 2 para Ciencias Naturales; 3 para Inglés; 4 para Música; 5 para Dibujo; 6 para Educación Física; o 7 para Matemática.`));
if (materia == 1) {
    sociales.info();
}
else if (materia == 2) {
    naturales.info();
}
else if (materia == 3) {
    ingles.info();
}
else if (materia == 4) {
    musica.info();
}
else if (materia == 5) {
    dibujo.info();
}
else if (materia == 6) {
    fisica.info();
}
else if (materia == 7) {
    matematica.info();
}
else {
    document.write(`Por favor ingrese una opción válida.`);
}

const clasesArray = [sociales,naturales,ingles,musica,dibujo,fisica,matematica];

let alumno = prompt(`¿Quieres saber en qué materias estás anotado? Ingresa tu apellido.`);

clasesArray.forEach(clase => {
    if (clase.alumnos.includes(alumno)) {
        document.write(`${alumno} está anotado en ${clase.nombre}. Su docente para esta materia será ${clase.profesor}.<br>`);
    }
});
