/**
* 6. Solicitar un entero y determinar sí es múltiplo de 3 y además que se encuentre en 
*      el rango (100-200)
*/

function esMultiplo(num){
    return num % 3 === 0 ? true: false;
};

function enRango(num){
    if(num >=100 && num <=200){
        return esMultiplo(num);
    }else{
        return false;
    };
};
console.log(enRango(198));

