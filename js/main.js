// VARIABLES GLOBALES
const $btnContinuar = document.querySelector('#btn-continuar');
const $btnReset = document.querySelector('#btn-reset');
const $btnSalarios = document.querySelector('#btn-agregar-salarios');
const $btnObjeto = document.querySelector('#btn-objeto');

const $btnCalcularEdades = document.querySelector('#btn-calcular');
const $btnCalcularSalarios = document.querySelector('#btn-calcular-salarios');

const $contenedorResultadosEdades = document.querySelector('#cont-res-edades');
const $contenedorResultadoSalarios = document.querySelector('#cont-res-salarios');

const $btnCerrarResultadoEdades = document.querySelector('#btn-cerrar-res-edades');
const $btnCerrarResultadoSalarios = document.querySelector('#btn-cerrar-res-salarios');

// BOTONES - EVENT HANDLER
$btnContinuar.onclick = function(){ 
    const $cantidadFamiliares = document.querySelector('#cantidad-familiares');
    const cantidadFamiliares = Number($cantidadFamiliares.value);
    
    removerFamiliares();
    crearFamiliares(cantidadFamiliares);

    return false;
}

$btnReset.onclick = function(){
    resetear();
}

$btnCalcularEdades.onclick = function(){
    const numeros = obtenerEdadesIntegrantes();
    
    mostrarEdad('mayor', calcularMayorEdad(numeros));
    mostrarEdad('menor', calcularMenorEdad(numeros));
    mostrarEdad('promedio', calcularPromedioEdades(numeros));

    mostrarResultadosEdades();

    return false;
}

$btnSalarios.onclick = function(){

    crearInputSalario();

    ocultarBtnSalarios();
    mostrarBtnCalcularSalarios();

    mostrarBtnCrearObjeto();

    $btnCalcularSalarios.style.backgroundColor = "red";
    return false;
}

$btnCalcularSalarios.onclick = function(){
    const salarios = obtenerSalarioIntegrantes();

    ocultarBtnSalarios();
    mostrarResultadoSalarios();
    
    
    mostrarSalarios('mayor', calcularMayorSalario(salarios));
    mostrarSalarios('menor', calcularMenorSalario(salarios));
    mostrarSalarios('promedio', calcularSalarioPromedio(salarios));

    return false;
}

$btnCerrarResultadoEdades.onclick = function(){
    ocultarResultadosEdades();
    
    return false;
}

$btnCerrarResultadoSalarios.onclick = function(){
    ocultarResultadoSalarios();

    return false;
}

