// Crear un sistema que especifique la cantidad de descargas y la puntuacion. Cada app debe poder instalarse, abrir, cerrar y desinstalar.

class app {
    constructor (nombre,descargas,puntuacion) {
        this.nombre = nombre;
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.instalacion = false;
        this.abierto = false;
    }

    instalar() {
        if (this.instalacion == false) {
            alert (`El juego ${this.nombre} se está instalando.`);
            this.instalacion = true;
        }

        else {
            alert (`Capo, ya está instalado el juego. ¿Cuántas veces querés instalarlo?`);
        }
    }

    desinstalar() {
        if (this.instalacion == true) {
            alert (`El juego ${this.nombre} se está desinstalando.`);
            this.instalacion = false;
        }

        else {
            alert (`Capo, ya está desinstalado el juego. ¿Querés que lo instale así lo podés volver a desinstalar?`);
        }
    }

    abrir() {
        if (this.instalacion == true) {
            if (this.abierto == false) {
                alert(`Estás abriendo la aplicación, no desesperés.`);
                this.abierto = true;
            }
            else {
                alert(`Ya está abierta la aplicación maestro.`)
            }
        }
        else {
            alert(`El juego no está instalado maestro.`)
        }
    }

    cerrar() {
        if (this.instalacion == true) {
            if (this.abierto == true) {
                alert(`Estás cerrando la aplicación, no desesperés.`);
                this.abierto = false;
            }
            else {
                alert(`Ya está cerrada la aplicación maestro.`)
            }
        }
        else {
            alert (`El juego no está instalado maestro.`)
        }
    }

    appInfo() {
        document.write (`El juego <b>${this.nombre}</b> ha sido descargado un total de <b>${this.descargas}</b> veces. Su puntuación es de <b>${this.puntuacion}</b> sobre cinco estrellas.<br>`)
    }
}

const Plants = new app ("Plantas VS Zombies", "150000", 5);
const Free = new app ("FreeFire", "99999999", 3.5);
const Fortnite = new app ("Fortnite", "quichicientas", 5);
const Need = new app ("Need for Speed", "infinito al cuadrado", 999999);

Plants.appInfo();
Free.appInfo();
Fortnite.appInfo();
Need.appInfo();
Need.instalar();
Need.instalar();
Need.desinstalar();
Need.desinstalar();
Need.abrir();
Need.cerrar();
Free.instalar();
Free.abrir();
Free.abrir();
Free.cerrar();
Free.cerrar();
