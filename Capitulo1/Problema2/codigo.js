// Historia de Cofla 1-B: Crear código en JS que nos permita saber cuántos boletos de lotería puede comprar un sintecho con el dinero que tiene, saber el vuelto
// y, si compra más de 3, que nos diga que el sintecho dona el vuelto.

let dinero2 = prompt(`¿Con cuánto dinero cuenta el sintecho?`);
dinero2 = parseFloat(dinero2);

let precioBoleto = prompt (`¿Cuánto sale cada boleto?`);
precioBoleto = parseFloat(precioBoleto);

if ((dinero2 / precioBoleto) >= 3) {
    document.write (`El sintecho se compra ${dinero2 / precioBoleto} boletos. Le sobran $${dinero2 % precioBoleto}. Decide darle ese vuelto a otro sintecho con menos techo que él.`);
}

else if ((dinero2 / precioBoleto) >= 2 && (dinero2 / precioBoleto) < 3) {
    document.write (`El sintecho se compra 2 boletos. Le sobran $${dinero2 % precioBoleto}. Se guarda el vuelto para poder comprarse el tercer boleto en un futuro.`);
}

else if ((dinero2 / precioBoleto) >= 1 && (dinero2 / precioBoleto) < 2) {
    document.write (`El sintecho se compra 1 boleto. Le sobran $${dinero2 % precioBoleto}. Se guarda el vuelto para poder comprarse el segundo boleto en un futuro.`);
}

else {
    document.write (`El sintecho no puede comprarse ningún boleto, se deprime y se compra un vino en cartón.`);
}