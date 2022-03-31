// FUNCIONES DE CALCULO DE EDADES

function calcularMayorEdad(numeros){
    let mayorEdad = numeros[0];

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > mayorEdad){
            mayorEdad = numeros[i];
        }
    }
    return mayorEdad;
}
function calcularMenorEdad(numeros){
    let menorEdad = numeros[0];
    for(let i = 0; i < numeros.length; i++){        
        if(numeros[i] < menorEdad){
            menorEdad = numeros[i];
        }
    }
    return menorEdad;
}
function calcularPromedioEdades(numeros){
    let sumaEdades = 0;
    let promedioEdades;
    for(let i = 0; i < numeros.length; i++){
        sumaEdades += numeros[i];
    }
    promedioEdades = sumaEdades / numeros.length;
    
    return promedioEdades;
}


// FUNCIONES DE CALCULO DE SALARIOS
function calcularMayorSalario(salarios){
    let mayorSalario = salarios[0];

    for(let i = 0; i < salarios.length; i++){
        if(salarios[i] > mayorSalario){
            mayorSalario = salarios[i];
        }
    }
    return mayorSalario;
}
function calcularMenorSalario(salarios){
    let menorSalario = salarios[0];
    for(let i = 0; i < salarios.length; i++){        
        if(salarios[i] < menorSalario){
            menorSalario = salarios[i];
        }
    }
    return menorSalario;
}
function calcularSalarioPromedio(salarios){
    let sumaSalarios = 0;
    let salarioPromedio;
    for(let i = 0; i < salarios.length; i++){
        sumaSalarios += salarios[i];
    }
    salarioPromedio = sumaSalarios / salarios.length;
    
    return salarioPromedio;
}
