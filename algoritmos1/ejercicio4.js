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
console.log(romansNumber(3));