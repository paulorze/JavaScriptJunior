// Crear función para preguntar a qué materias se quiere inscribir. Si hay más de diez alumnos, denegar inscrición. Si hay menos de diez alumnos, inscribir y añadirlo a la lista.

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

    lista(){
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

let apellido = prompt(`Indicanos cuál es tu apellido.`);
let materia = prompt(`Indicanos a qué materia deseas inscribirte. Escribe 1 para Ciencias Sociales; 2 para Ciencias Naturales; 3 para Inglés; 4 para Música; 5 para Dibujo; 6 para Educación Física; o 7 para Matemática.`)

if (materia == 1) {
    materia = sociales;
}
else if (materia == 2) {
    materia = naturales;
}
else if (materia == 3) {
    materia = ingles;
}
else if (materia == 4) {
    materia = musica;
}
else if (materia == 5) {
    materia = dibujo;
}
else if (materia == 6) {
    materia = fisica;
}
else if (materia == 7) {
    materia = matematica;
}
else {
    alert(`Por favor, ingrese una opción válida`);
}

if (materia.cupo == 10) {
    document.write(`Lo sentimos, el cupo para esta materia ya está cubierto.<br>`);
}
else {
    if (materia.alumnos.includes(apellido)) {
        document.write(`Ya te habías anotado en esta materia.`);
    } else {
        materia.alumnos.push(apellido);
        document.write(`¡Felicitaciones, te anotaste en ${materia.nombre}!`)
        materia.lista();
    }
}