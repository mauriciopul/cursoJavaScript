/**
 8. Leer dos números si el primero es mayor mostrar la Resta de los dos números, por otro 
    lado si el segundo es mayor mostrar la suma de ambos.
 */
function isHigher(nO1, nO2) {
    return nO1 > nO2 ? true : false;
}
function showAddOrSubtract(num1, num2) {
    if (num1 === num2) {
        return 'Los números ingresados son iguales';
    } else {
        return isHigher(num1, num2) ? num1 - num2 : num1 + num2;
    }
};
console.log(showAddOrSubtract(6, 5));

