// Historia de Cofla 1-C: Crear código en JS que le permita a la máquina de descargas eléctricas dar descargas eléctricas si el sospechoso miente, si no miente no hacer nada y si está indecisa, pedir más precisión
// en la pregunta

let respuesta = prompt(`¿El sospechoso miente?`);

const miente = "Si";
const noMiente = "No";

if (respuesta === miente) {
    document.write (`¿Con que estás mintiendo? Tomá por chistoso ¡¡BZZZZZ!!`);
}

else if (respuesta === noMiente) {
    document.write (`No miente, pero tomá para que sepas lo que te espera si mentís ¡BZZZZ!`);
}

else {
    document.write (`Por favor, conteste "Si" o "No", porque sino, no entiendo. Me molesta no entender, así que tomá ¡BZZZZZ!`);
}