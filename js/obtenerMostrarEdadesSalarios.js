
function obtenerEdadesIntegrantes(){
    const $integrantes = document.querySelectorAll('#input-edad-familiar');
    const edades = [];

    for (let i = 0; i < $integrantes.length; i++) {
        edades.push(Number($integrantes[i].value));
    }

    return edades;
}
function mostrarEdad(tipo, valor){
    document.querySelector(`#${tipo}-edad`).textContent = `${tipo} edad: ${valor}`;
}

function obtenerSalarioIntegrantes(){
    const $integrantes = document.querySelectorAll('#input-salario-familiar');
    const salarios = [];

    for (let i = 0; i < $integrantes.length; i++) {
        salarios.push(Number($integrantes[i].value));
    }
    
    return salarios;
}
function mostrarSalarios(tipo, valor){
    document.querySelector(`#${tipo}-salario`).textContent = `${tipo} salario: ${valor}`;
}

// mostrar/ocultar Contenedor resultadoEdades
function mostrarResultadosEdades(){
    $contenedorResultadosEdades.classList.remove('oculto');
}
function ocultarResultadosEdades(){
    $contenedorResultadosEdades.classList.add('oculto');
}
// mostrar/ocultar Contenedor resultadoSalarios
function mostrarResultadoSalarios(){
    $contenedorResultadoSalarios.classList.remove('oculto');
}
function ocultarResultadoSalarios(){
    $contenedorResultadoSalarios.classList.add('oculto');
}

