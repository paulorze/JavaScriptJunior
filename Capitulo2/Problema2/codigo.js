//Crear un mini-sistema que permita tomar la asistencia de los alumnos a clase. Pasados X días, mostrar la situación final de todos los alumnos (cantidad de presentes y ausentes)
// Si alguno tiene más de 10% de ausentes, está reprobado.

let apellidos = [["Álvarez",0], ["Benítez",0], ["Cofradino",0], ["Díaz",0], ["Fernández",0], ["Gutiérrez",0], ["Hiena",0], ["Insaurralde",0], ["Jakim",0], ["Rzeszut",0]];

function lista() {
    for (let apellido of apellidos) {
        let presente = prompt(`¡${apellido[0]}!`);
        if (presente == `P` || presente == `p`) {
            apellido[1] ++
        }
    }
}

let dia = 1;

while (dia <= 10) {
    lista ();
    dia++;
}

for (let apellido of apellidos) {
    document.write (`El estudiante ${apellido[0]} estuvo presente en ${apellido[1]} clases. Tiene una asistencia de ${apellido[1] / 10}. <br>`);
    if ((apellido[1]/10) < 0.9) {
        document.write (`Lamentablemente, el porcentaje de asistencias no es suficiente. Nos vemos en Diciembre. <br>`)
    }
}