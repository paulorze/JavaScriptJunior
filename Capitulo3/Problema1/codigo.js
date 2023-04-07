// Crear un sistema en el que se puedan ver el color, peso, resolución de pantalla,
// resolución de cámara y memoria RAM. Cada celular debe poder prender, reiniciar,
// apagar, tomar fotos y grabar.

class Celular {
    constructor(nombre, color,peso,pantalla,camara,ram) {
        this.nombre = nombre;
        this.color = color;
        this.peso = peso;
        this.pantalla = pantalla;
        this.camara = camara;
        this.ram = ram;
        this.encendido = false;
        this.filmando = false;
        this.info = `El teléfono ${this.nombre} es de color ${this.color}. Su peso es de ${this.peso} y su pantalla tiene una resolución de ${this.pantalla}. 
                    Por otro lado, su cámara es de ${this.camara} y su memoria RAM de ${this.ram}.`;
    }

    prender() {
        if (this.encendido == false) {
            alert(`El celular ${this.nombre} está prendiéndose.`);
            this.encendido = true;
        }
        else {
            alert(`El celular ya se encuentra prendido. ¿Para qué querés volver a prenderlo?`);
        }
    }

    apagar() {
        if (this.encendido == true) {
            alert(`El celular ${this.nombre} se está apagando.`);
            this.encendido = false;
        }
        else {
            alert(`El celular ya está apagado, ¿cómo pensás volver a apagarlo?`);
        }
    }

    reiniciar() {
        if (this.encendido == true) {
            alert(`Reiniciando el celular.`);
        }
        else {
            alert(`El celular se encuentra apagado, no insistas con cosas raras.`);
        }
    }

    fotografiar (){
        if (this.encendido == true) {
            alert(`Acabás de sacar una foto de ${this.camara} de resolución.`);
        }
        else {
            alert(`Prendé el celu antes de sacar la foto capo.`);
        }
    }

    filmar (){
        if (this.encendido == true) {
            if (this.filmando == false) {
                alert(`Empezaste a grabar un video. No uses toda la memoria.`);
                this.filmando = true;
            }
            else {
                alert(`Ya terminaste de filmar tu video. ¿Estás contento?`)
            }
        }
        else {
            alert(`Prendé el celu antes de filmar, genio.`)
        }
    }
}

const Motorola = new Celular("Motorola", "Negro", "200 grs.", "768px.", "8 MP", "2 GB");
const Nokia = new Celular("Nokia", "Rojo", "180 grs.", "980px.", "16 MP", "4 GB");
const Sony = new Celular("Sony", "Blanco", "170 grs.", "768px.", "32 MP", "4 GB");

document.write(Motorola.info);
Motorola.prender();
Motorola.apagar();
Nokia.prender();
Nokia.reiniciar();
Sony.fotografiar();
Sony.prender();
Sony.fotografiar();
Motorola.filmar();
Motorola.prender();
Motorola.filmar();