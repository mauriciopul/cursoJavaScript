/**
3. Dados 2 valores de entrada imprima siempre la división del mayor entre el menor.
*/

function isHigher(n1, n2) {
    return n1 > n2 ? true : false;
}

function divMayor(n1, n2) {
    return isHigher(n1, n2) ? n1 / n2 : n2 / n1;
}

console.log(divMayor(12, 36));
