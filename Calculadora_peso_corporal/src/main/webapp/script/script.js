

function guardarDatos(){
	
	
	var edad = document.getElementsByName('edad')[0].value;
    
    var altura = document.getElementsByName('altura')[0].value;
    
    var sexo = document.getElementsByName('sexo')[0].value;

    switch (sexo.toLowerCase()){
    
    //Caso de cálculo con eval:
    case 'mujer':    
    let pesoMujer = (50+((altura-150)/4)*3 + (edad - 20)/4)*0.9	;
    document.write("Su peso corporal aproximado es de: "+ pesoMujer);
    break;
    
    //Caso de cálculo sin eval:
    case 'hombre':
    let pesoHombre = 50+((altura-150)/4)*3 + (edad - 20)/4;
    document.write("Su peso corporal aproximado es de: "+ pesoHombre);
    break;
    
    //Un default por si no se escribe alguno de los sexos indicados:
    default:
    document.write("El sexo indicado no coincide con los indicados anteriormente.");
    } 
}



