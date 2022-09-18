function calcularImc(){
    let img= document.getElementById('img');
    let genero= document.getElementById('genero');
    let altura= document.getElementById('altura').value;
    let peso= document.getElementById('peso').value;
    let imc= peso/(altura*altura).toFixed(2);

    if(imc>=0 && imc <=18.5){
        img.src= 'magro.png'
    }
    else if(imc>=18.5 && imc <24.9){
        img.src= 'peso-ideal.png'
    }
    else if(imc>=25 && imc <30){
        img.src= 'acima.png'
    }
    else if(imc>30 && imc <35){
        img.src= 'gordo.png'
    }
    else if(imc>=35.1 && imc<99){
        img.src= 'obeso.png'
    }
}
let button= document.getElementById('calc');
button.addEventListener('click', calcularImc);