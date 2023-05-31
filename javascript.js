function encriptar(){
    let texto = document.getElementById("texto").value;
    let resultado = document.getElementById("result");

    let textoCifrado = texto
                        .replace(/i/, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/e/gi, "enter") 
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");

    if(texto.length != 0) {
        texto = textoCifrado;
        
    }

    resultado.innerText = textoCifrado;
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let resultado = document.getElementById("result");

    let textoDescifrado = texto
                        .replace(/ai/gi, "a")
                        .replace(/enter/gi, "e")
                        .replace(/imes/gi, "i")
                        .replace(/ober/gi, "o")
                        .replace(/ufat/gi, "u");

    if(texto.length != 0) {
        texto = textoDescifrado;
        
    }

    resultado.innerText = textoDescifrado;
}


function Copiar() {  
    navigator.clipboard.writeText(respuesta.value);
}