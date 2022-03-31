// FUNCIONES AGREGAR/QUITAR ELEMENTOS
function removerFamiliares(){
    const $formularioFamiliares = document.querySelectorAll('#form-familiar');
    for(let i=0; i < $formularioFamiliares.length; i++){
        $formularioFamiliares[i].remove();
    }
}

function crearFamiliares(cantidadFamiliares){
    if(cantidadFamiliares > 0){
        ocultarBtnContinuar();
        mostrarBtnCalcularEdades();
        mostrarBtnSalarios();
        for(let i=0; i < cantidadFamiliares; i++){
            crearIntegrante(i);
        }
    } else {
        alert('no ingresaste un número válido');
        resetear();
    };
};

function crearIntegrante(i){
    const $div = document.createElement('div');
    $div.setAttribute("id", "form-familiar");
    
    const $labelEdad = document.createElement('label');
    $labelEdad.setAttribute("id", "label-familiar");  
    
    const $textoLabelEdad = document.createTextNode(`Edad de Familiar n° ${i+1}:`);
    $labelEdad.appendChild($textoLabelEdad);
    
    const $inputEdad = document.createElement('input');
    $inputEdad.setAttribute("id", "input-edad-familiar");
    $inputEdad.setAttribute("placeholder", "Ingrese edad del familiar");

    const nodoPagina = document.querySelector('#form-edad-container');
    
    
    nodoPagina.appendChild($div);
    $div.appendChild($labelEdad);
    $div.appendChild($inputEdad);
}

function crearInputSalario(){
    const nodoPagina = document.querySelectorAll('#form-familiar');
    if(nodoPagina.length > 0){
        for(let i = 0; i < nodoPagina.length; i++){
            const $inputSalario = document.createElement('input');
            $inputSalario.setAttribute("id", "input-salario-familiar");
            $inputSalario.setAttribute("placeholder", "Ingrese salario del familiar");
            nodoPagina[i].appendChild($inputSalario);
        }
    }
}

function resetear(){
    removerFamiliares();
    ocultarBtnCalcularEdades();
    ocultarResultadosEdades();
    
    ocultarBtnCalcularSalarios();
    ocultarBtnSalarios();
    ocultarResultadoSalarios();
    
    ocultarBtnCrearObjeto();

    mostrarBtnContinuar();
};
