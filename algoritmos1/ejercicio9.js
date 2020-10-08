/**
 9. Diseñe un algoritmo que lea tres números y los imprima de mayor a menor
 */

function isHigher(n1, n2) {
    return n1 > n2 ? true : false;
};

function isLess(n1, n2) {
    return n1 < n2 ? true : false;
};

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
        mayor: numMayor,
        intermedio: numIntermedio,
        menor: numMenor
    };
}
console.log(numberPositions(8, 9, 6));


