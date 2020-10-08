/**
 * 1.Leer el nombre, la edad y peso de una persona y posteriormente imprimirlas.
 */

 function leerEdadPeso(nom, ed, pe){
     let datos = {nombre:nom, edad:ed, peso:pe};
     return `
     Nombre: ${datos.nombre}
     Edad: ${datos.edad} años
     Peso: ${datos.peso} Kilos`;
 };
 console.log(leerEdadPeso('Mauricio Andres', 36, 80));




 