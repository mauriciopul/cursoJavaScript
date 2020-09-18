/*
2. Leer tres números y decir cuál de ellos es el que tiene el valor intermedio.
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
console.log(isMidleNumber(8, 9, 6));
