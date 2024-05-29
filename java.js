function converter1() {

    let valorTemperatura = document.getElementById("temperatura").value;

    let valorDe = document.getElementById("temperatura2").value;

    let valorPara = document.getElementById("temperatura3").value;

    let resultado = valorTemperatura;
    
    if(valorDe == "celsius" && valorPara == "fahrenheit") {

        resultado = (valorTemperatura * 1.8) + 32;

    }
    
    if(valorDe == "fahrenheit" && valorPara == "celsius") {

        resultado = (valorTemperatura - 32) / 1.8;

    }
    
    document.getElementById("resultado").value = resultado.toFixed(2);

    
}



function converter2() {

    let valorComprimento = document.getElementById("comprimento").value;

    let valorDe2 = document.getElementById("comprimento2").value;

    let valorPara2 = document.getElementById("comprimento3").value;

    let resultado2 = valorComprimento;

    if(valorDe2 == "metros" && valorPara2 == "pes") {

        resultado2 = valorComprimento * 3.281;
    }

    if(valorDe2 == "pes" && valorPara2 == "metros") {

        resultado2 = valorComprimento / 3.281;
    }
    document.getElementById("resultado2").value = resultado2.toFixed(2);
}


function converter3() {

    let valorPeso = document.getElementById("peso").value;

    let valorDe3 = document.getElementById("peso2").value;

    let valorPara3 = document.getElementById("peso3").value;

    let resultado3 = valorPeso;

    if(valorDe3 == "quilograma" && valorPara3 == "libra") {

        resultado3 = valorPeso * 2.2046;
    }

    if(valorDe3 == "libra" && valorPara3 == "quilograma") {

        resultado3 = valorPeso / 2.205
        
    }
    document.getElementById("resultado3").value = resultado3.toFixed(2);
}