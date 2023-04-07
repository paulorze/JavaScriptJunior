// Añadir celulares de alta gama que además de lo que tienen los demás celulares, pueden grabar en cámara lenta, tienen reconocimiento facial y una cámara extra.
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

class AltaGama extends Celular {
    constructor (nombre, color,peso,pantalla,camara,ram) {
        super (nombre,color,peso,pantalla,camara,ram)
        this.encendido = false;
        this.filmando = false;
        this.reconocimiento = true;
        this.camaraExtra = true;
    }

    camaraLenta (){
        if (this.encendido == true){
            if (this.filmando == false) {
                alert(`Empezaste a grabar en cámara lenta, mirá qué piola que sos.`);
                this.filmando = true;
            }
            else {
                alert(`¿Cómo querés grabar en cámara lenta si ya estás grabando? Por pistola, dejo de grabar.`);
                this.filmando = false;
            }
        }
        else {
            alert(`Excelente idea la de filmar con el celu apagado Einstein.`)
        }
    }

    reconocer () {
        if (this.reconocimiento == true) {
            alert(`El celu ya te reconoció, lástima lo feo que sos.`);
        }
    }

    otraCamara () {
        if (this.camaraExtra == true) {
            alert(`Diste vuelta el celu para ver si tiene una cámara extra. Sí, la tiene, pero es la cámara frontal capo.`)
        }
    }
}

const Motorola = new Celular("Motorola", "Negro", "200 grs.", "768px.", "8 MP", "2 GB");
const Nokia = new Celular("Nokia", "Rojo", "180 grs.", "980px.", "16 MP", "4 GB");
const Sony = new Celular("Sony", "Blanco", "170 grs.", "768px.", "32 MP", "4 GB");
const IPhone = new AltaGama("Iphone", "Dorado", "100 grs.", "1080px", "64MP", "16 GB");
const Samsung = new AltaGama("Samsung", "Plateado", "100 grs.", "1080px.", "128MP", "32 GB");

IPhone.reconocer();
IPhone.otraCamara();
Samsung.camaraLenta();
Samsung.prender();
Samsung.camaraLenta();


