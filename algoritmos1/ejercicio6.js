/*
6. En un almacén se hace un 20% de descuento a los clientes cuya compra supere los $1,000 
    ¿cuál será la cantidad que pagará una persona por su compra?
*/
function veintePorciento(compra, desc, montoSupera ) {
    let descu =  ((compra * desc) / 100);    
    return compra > montoSupera ? compra - descu : compra;
}
console.log(`valor a pagar: $${veintePorciento(100220, 20, 1000)}`);

