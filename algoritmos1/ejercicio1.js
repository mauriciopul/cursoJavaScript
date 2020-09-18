/*
1. Dada la calificación de un alumno mostrar en pantalla si es aprobado siempre y cuando 
    tenga el 80% de sus asistencias, en caso de tener menos del 80% de asistencias se 
    mostrará reprobado aún cuando su calificación sea aprobatoria.
*/
function isApproved(asistencia, nota) {
    return asistencia < 80 ? false : nota < 3 ? false : true;
}
console.log(isApproved(79, 3)?'Aprobado':'Reprobado');