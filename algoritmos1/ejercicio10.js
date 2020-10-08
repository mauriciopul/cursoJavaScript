/**
10. Elabora un algoritmo que solicite la edad y nombre de dos hermanos y muestre un mensaje 
    indicando la edad y nombre del mayor y cuantos años de diferencia tiene con el menor.
 */

//Se obtiene el mayor
function isHigher(edad1, edad2) {
    return edad1 > edad2 ? true : false;
};

//Se obtiene la diferencia(numero positivo) entre 2 números
function subtract(n1, n2) {
    return n1 > n2 ? n1 - n2 : n2 - n1;
};

function edadHermanos(herm1Nom, herm1Ed, herm2Nom, herm2Ed) {

    let diferencia = subtract(herm1Ed, herm2Ed);
    let hermano1 = { nombre: herm1Nom, edad: herm1Ed };
    let hermano2 = { nombre: herm2Nom, edad: herm2Ed };
    let mayor;

    //A la variable 'mayor' se le asigna el dato del hermano mayor 
    mayor = isHigher(herm1Ed, herm2Ed) ? hermano1 : hermano2;

    return `
    Nombre del mayor: ${mayor.nombre} - Edad: ${mayor.edad} años
    Diferencia de edad: ${diferencia} años`;
};
console.log(edadHermanos('Juan', 25, 'Pedro', 48));





