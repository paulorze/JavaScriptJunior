// Crear una calculadora que sume, reste, multiplique y divida.

let numero1 = prompt(`Coloque aquí el primer número de su ecuación.`);
numero1 = parseFloat(numero1)
let operacion = prompt(`Escriba "sumar", "restar", "multiplicar" o "dividir" para realizar la operación correspondiente.`);
let numero2 = prompt (`Coloque aquí el segundo número de su ecuación`);
numero2 = parseFloat(numero2)
let resultado;

if (operacion == "sumar") {
    let resultado = numero1 + numero2;
    document.write (`El resultado de ${numero1} + ${numero2} es igual a ${resultado}.`);
}

else if (operacion == "restar") {
    let resultado = numero1 - numero2;
    document.write (`El resultado de ${numero1} - ${numero2} es igual a ${resultado}.`);
}

else if (operacion == "multiplicar") {
    let resultado = numero1 * numero2;
    document.write (`El resultado de ${numero1} * ${numero2} es igual a ${resultado}.`);
}

else if (operacion == "dividir") {
    let resultado = numero1 / numero2;
    document.write (`El resultado de ${numero1} / ${numero2} es igual a ${resultado}.`);
}

else {
    document.write (`Por favor, verificá que todo lo que ingresaste fue correcto.`);
}