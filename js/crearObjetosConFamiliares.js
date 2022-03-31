
class Familiares{
    constructor(edad, salario){
        this.edad = edad;
        this.salario = salario;
    }
}

$btnObjeto.onclick = function(){
    const familiares = document.querySelectorAll('#input-edad-familiar');
    const edad =  obtenerEdadesIntegrantes();
    const salario =  obtenerSalarioIntegrantes();
    const DATOS = [];

    for(let i = 0; i < familiares.length; i++){
        familia = new Familiares(edad[i], salario[i]);
        DATOS.push(familia);
    }
    console.log(DATOS);
}
