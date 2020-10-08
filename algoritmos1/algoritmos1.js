/*
1. Dada la calificación de un alumno mostrar en pantalla si es aprobado siempre y cuando 
    tenga el 80% de sus asistencias, en caso de tener menos del 80% de asistencias se 
    mostrará reprobado aún cuando su calificación sea aprobatoria.
2. Leer tres números y decir cuál de ellos es el que tiene el valor intermedio.
3. Leer tres números y decir cuál es el de valor mayor, el de valor intermedio, y el de 
    valor menor.
4. Leer un número entre el 1 y el 10 e imprimir su equivalente en números romanos
5. Leer tres calificaciones de un alumno y determinar su promedio
6. En un almacén se hace un 20% de descuento a los clientes cuya compra supere los $1,000 
    ¿cuál será la cantidad que pagará una persona por su compra?
7. Leer dos números enteros, restar el menor del mayor y mostrar el resultado
8. Leer dos números si el primero es mayor mostrar la Resta de los dos números, por otro 
    lado si el segundo es mayor mostrar la suma de ambos.
9. Diseñe un algoritmo que lea tres números y los imprima de mayor a menor
10. Elabora un algoritmo que solicite la edad y nombre de dos hermanos y muestre un mensaje 
    indicando la edad y nombre del mayor y cuantos años de diferencia tiene con el menor.
*/
/*------------------------------------------------------------------------------------*/
/*
1. Dada la calificación de un alumno mostrar en pantalla si es aprobado siempre y cuando 
    tenga el 80% de sus asistencias, en caso de tener menos del 80% de asistencias se 
    mostrará reprobado aún cuando su calificación sea aprobatoria.
*/
function isApproved(asistencia, nota) {
    return asistencia < 80 ? false : nota < 3 ? false : true;
}
console.log(isApproved(79, 3)?'Aprobado':'Reprobado');

/*
2. Leer tres números y decir cuál de ellos es el que tiene el valor intermedio.
*/

function isHigher(n1, n2) {
    return n1 > n2 ? true : false;
}

function isLess(n1, n2) {
    return n1 < n2 ? true : false;
}

function isMidleNumber(n1, n2, n3) {

    let igual = n1 === n2 || n1 === n3 || n2 === n3;

    if (igual)
        return 'Hay 2 números repetidos';

    if ((isLess(n1, n2) && isHigher(n1, n3)) || (isHigher(n1, n2) && isLess(n1, n3)))
        return n1;

    if ((isLess(n2, n1) && isHigher(n2, n3)) || (isHigher(n2, n1) && isLess(n2, n3)))
        return n2

    if ((isLess(n3, n1) && isHigher(n3, n2)) || (isHigher(n3, n1) && isLess(n3, n2)))
        return n3;
};
console.log(isMidleNumber(8, 9, 6));

/*
3. Leer tres números y decir cuál es el de valor mayor, el de valor intermedio, y el de 
    valor menor.
*/

function numberPositions(n1, n2, n3) {
    let numMenor, numIntermedio, numMayor;
    if (isLess(n1, n2) && isLess(n1, n3)) { numMenor = n1 };
    if (isLess(n2, n1) && isLess(n2, n3)) { numMenor = n2 };
    if (isLess(n3, n1) && isLess(n3, n2)) { numMenor = n3 };

    if (isHigher(n2, n1) && isHigher(n2, n3)) { numMayor = n2 };
    if (isHigher(n1, n2) && isHigher(n1, n3)) { numMayor = n1 };
    if (isHigher(n3, n1) && isHigher(n3, n2)) { numMayor = n3 };

    numIntermedio = isMidleNumber(n1, n2, n3);
    return {
        menor: numMenor,
        intermedio: numIntermedio,
        mayor: numMayor
    };
}
console.log(numberPositions(8, 9, 6));

/*
4. Leer un número entre el 1 y el 10 e imprimir su equivalente en números romanos
*/

function romansNumber(num) {
    switch (num) {
        case 1: return `El número ${num} equivale al 'I'`;
        case 2: return `El número ${num} equivale al 'II'`;
        case 3: return `El número ${num} equivale al 'III'`;
        case 4: return `El número ${num} equivale al 'IV'`;
        case 5: return `El número ${num} equivale al 'V'`;
        case 6: return `El número ${num} equivale al 'VI'`;
        case 7: return `El número ${num} equivale al 'VII'`;
        case 8: return `El número ${num} equivale al 'VIII'`;
        case 9: return `El número ${num} equivale al 'IX'`;
        case 10: return `El número ${num} equivale al 'X'`;
        default: return `El número ${num} no es un número válido`;
    }
}
console.log(romansNumber(0));

/*
5. Leer tres calificaciones de un alumno y determinar su promedio
*/

function average(...numbers) {
    //return ((n1 + n2 + n3) / arguments.length).toFixed(2);
    return ((numbers.reduce((ant,act)=>ant+act)) / numbers.length).toFixed(2);
}
console.log(average(2, 3, 2));

/*
6. En un almacén se hace un 20% de descuento a los clientes cuya compra supere los $1,000 
    ¿cuál será la cantidad que pagará una persona por su compra?
*/
function veintePorciento(compra, desc, montoSupera ) {
    let descu =  ((compra * desc) / 100);    
    return compra > montoSupera ? compra - descu : compra;
}
console.log(`valor a pagar: $${veintePorciento(10022, 20, 1000)}`);





