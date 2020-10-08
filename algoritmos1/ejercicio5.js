/*
5. Leer tres calificaciones de un alumno y determinar su promedio
*/

function average(...numbers) {
    //return ((n1 + n2 + n3) / arguments.length).toFixed(2);
    return ((numbers.reduce((ant,act)=>ant+act)) / numbers.length).toFixed(2);
}
console.log(average(2, 3, 2));
