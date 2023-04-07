// Crear un código que nos permita verificar la edad de los asistentes de una fiesta (si son mayores de 18 años, pueden pasar).
// A la primera persona que pasa después de las 2 A.M., no se le cobra la entrada.

let entradaGratis = true;

function entrada(edad,horario) {
    if (edad >= 18) {
        document.write (`Joya pibe, mandate adentro pero la próxima con esas zapatillas no pasás. <br>`);
        if (horario >= 2 && entradaGratis == true) {
            document.write (`Felicitaciones, por ser el primero entrás gratarola.<br>`);
            entradaGratis = false;
        }
    }

    else {
        document.write (`A mí no me engañás, volvé a tomar la chocolatada con tu mamá por favor. <br>`)
    }
}

entrada (17, 1);
entrada (18,1);
entrada (19,2);
entrada (20,2);