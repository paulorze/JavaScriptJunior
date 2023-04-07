// Crear calculadora que sume, reste, divida, multiplique, calcule potencias y raíces cuadradas y cúbicas.

let operacion = prompt(`¿Qué clase de operación deseas realizar? Escribí el número que corresponda: 1:sumar; 2:restar; 3:multiplicar; 4:dividir; 5:potencia; 6:raíz cuadrada; 7:raíz cúbica.`);

if (operacion == 1 || operacion == 2 || operacion == 3 || operacion == 4 || operacion == 5) {
    let numero1 = parseFloat(prompt(`Escribe el primer número de tu operación.`));
    let numero2 = parseFloat(prompt(`Escribe el segundo número de tu operación.`));
    if (operacion == 1) {
        let resultado = numero1 + numero2;
        document.write(`El resultado de ${numero1} + ${numero2} es igual a ${resultado}. Gracias por usar nuestra calculadora.`);
    }
    else if (operacion == 2) {
        let resultado = numero1 - numero2;
        document.write(`El resultado de ${numero1} - ${numero2} es igual a ${resultado}. Gracias por usar nuestra calculadora.`);
    }

    else if (operacion == 3) {
        let resultado = numero1 * numero2;
        document.write(`El resultado de ${numero1} * ${numero2} es igual a ${resultado}. Gracias por usar nuestra calculadora.`);
    }

    else if (operacion == 4) {
        let resultado = numero1 / numero2;
        document.write(`El resultado de ${numero1} / ${numero2} es igual a ${resultado}. Gracias por usar nuestra calculadora.`);
    }

    else if (operacion == 5) {
        let resultado = Math.pow(numero1, numero2);
        document.write(`El resultado de ${numero1} elevado a ${numero2} es igual a ${resultado}. Gracias por usar nuestra calculadora.`);
    }
}

else if (operacion == 6 || operacion == 7) {
    let numero1 = parseFloat(prompt(`¿De qué número quieres saber la raíz?`));
    if (operacion == 6) {
        let resultado = Math.sqrt(numero1);
        document.write(`El resultado de la raíz cuadrada de ${numero1} es igual a ${resultado}. Gracias por usar nuestra calculadora.`);
    }
    else if (operacion == 7) {
        let resultado = Math.cbrt(numero1);
        document.write(`El resultado de la raíz cúbica de ${numero1} es igual a ${resultado}. Gracias por usar nuestra calculadora.`);
    }
}

else {
    document.write(`Por favor, ingrese una opción válida.`);
}

