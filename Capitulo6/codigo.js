// Crear una página que permita ver cuatro fotos de veinte productos. Una vez elegido, que llegue esa información a un servidor.
// Durante esta actividad me tuve que apoyar en la resolución propuesta por Dalto, pero tuve que adaptar el código a la card que ya había diseñado.
const contenedor = document.querySelector(".llaves__container");

function displayImagen () {
    img1 = `<img src='./llave.jpg'>`;
    img2 = `<img src='./llave2.jpg'>`;
    img3 = `<img src='./llave3.jpg'>`;
    img4 = `<img src='./llave4.jpeg'>`;
    return [img1,img2,img3,img4];
}

function datosLlave (nombre,precio) {
    nombre = `<p>Llave ${nombre}</p>`;
    precio = `<p><b>Precio: $${precio}</b></p>`;
    return [nombre,precio];
}

const changeHidden = (number)=> {
    document.querySelector(".key-data").value = number;
}

let documentFragment = document.createDocumentFragment();

for (let index = 1; index <= 20; index++) {
    let div = document.createElement("DIV");
    div.classList.add(`llave-${index}`, `llave`);
    div.tabIndex = index;
    div.addEventListener("click", ()=>{changeHidden(index)});
    documentFragment.appendChild(div);
    let divTop = document.createElement("DIV");
    div.appendChild(divTop);
    divTop.classList.add("llave__top");
    let imagen = displayImagen ();
    let divImg0 = document.createElement("DIV");
    divImg0.classList.add ("llave__top__contenedor");
    let divImg1 = document.createElement("DIV");
    divImg1.classList.add ("llave__top__contenedor");
    let divImg2 = document.createElement("DIV");
    divImg2.classList.add ("llave__top__contenedor");
    let divImg3 = document.createElement("DIV");
    divImg3.classList.add ("llave__top__contenedor");
    divTop.appendChild(divImg0);
    divImg0.innerHTML = imagen[0];
    divTop.appendChild(divImg1);
    divImg1.innerHTML = imagen[1];
    divTop.appendChild(divImg2);
    divImg2.innerHTML = imagen[2];
    divTop.appendChild(divImg3);
    divImg3.innerHTML = imagen[3];
    let precioRandom = parseInt(Math.random()*100);
    let texto = datosLlave (index, precioRandom);
    let divText = document.createElement("DIV");
    divText.classList.add("llave__nombre");
    divText.innerHTML = texto[0] + texto[1];
    div.appendChild(divText);
}

contenedor.appendChild(documentFragment);
