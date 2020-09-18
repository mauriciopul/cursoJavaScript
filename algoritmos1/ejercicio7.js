/*
7. Leer dos números enteros, restar el menor del mayor y mostrar el resultado
*/
function isHigher(nH1, nH2) {
    return nH1 > nH2 ? nH1 : nH2;
};

function isLess(nL1, nL2) {
    return nL1 < nL2 ? nL1 : nL2;
};

function subtract(num1, num2) {
    return isHigher(num1, num2) - isLess(num1, num2);
};
// console.log(isLess(7, 11));
// console.log(isHigher(7, 11));
console.log(subtract(7, 11));


