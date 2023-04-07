// Historia de Cofla 1-A: Crear código que nos permita evaluar y nos diga cuál es el helado más caro que
// se puede comprar y cuánto dinero queda tras haberlo comprado.

let dinero = prompt ("¿Con cuánto dinero cuentas?");
dinero = parseFloat (dinero);

const precio1 = 2.9;
const precio2 = 1.8;
const precio3 = 1.7;
const precio4 = 1.6;
const precio5 = 1;
const precio6 = 0.6;

if (dinero >= precio1) {
    document.write (`Te podés comprar el 'Potecito de helado con confites' o el 'Pote de 1/4 KG'. Te van a quedar $${dinero - precio1}`);
}

else if (dinero >= precio2 && dinero < precio1) {
    document.write (`Te podés comprar el 'Bombón helado de marca Helardo'. Te van a quedar $${dinero - precio2}`);
}

else if (dinero >= precio3 && dinero < precio2) {
    document.write (`Te podés comprar el 'Bombón helado de marca Heladovich'. Te van a quedar $${dinero - precio3}`);
}

else if (dinero >= precio4 && dinero < precio3) {
    document.write (`Te podés comprar el 'Bombón helado de marca Helardo'. Te van a quedar $${dinero - precio4}`);
}

else if (dinero >= precio5 && dinero < precio4) {
    document.write (`Te podés comprar el 'Bombón helado de marca Helardo'. Te van a quedar $${dinero - precio5}`);
}

else if (dinero >= precio6 && dinero < precio5) {
    document.write (`Te podés comprar el 'Bombón helado de marca Helardo'. Te van a quedar $${dinero - precio6}`);
}

else {
    document.write (`No te alcanza para ningún helado, ponete a estudiar programación y conseguite laburo.`);
}