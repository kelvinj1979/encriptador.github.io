const expresion = /[0-9A-ZñáéíóúÑÁÉÍÓÚüÜ]/;

function encriptar(e){
    e.preventDefault();
    var textoEncriptado = "";
    var texto = document.getElementById("mensaje").value;

    if (expresion.test(texto) == true) {
        visualizarAlerta();
        return;
    }

    textoEncriptado = texto.replaceAll("e", "enter");
    textoEncriptado = textoEncriptado.replaceAll("i", "imes");
    textoEncriptado = textoEncriptado.replaceAll("a", "ai");
    textoEncriptado = textoEncriptado.replaceAll("o", "ober");
    textoEncriptado = textoEncriptado.replaceAll("u", "ufat");

    ocultar(textoEncriptado);   
 

}

function desencriptar(e){    
    e.preventDefault();
    var textoDesencriptado = "";
    var texto = document.getElementById("mensaje").value;

    textoDesencriptado = texto.replaceAll("ufat", "u");
    textoDesencriptado = textoDesencriptado.replaceAll("ober", "o");
    textoDesencriptado = textoDesencriptado.replaceAll("ai", "a");
    textoDesencriptado = textoDesencriptado.replaceAll("imes", "i");
    textoDesencriptado = textoDesencriptado.replaceAll("enter", "e");

    ocultar(textoDesencriptado);

}


function ocultar(text) {
    document.getElementById('texto').innerHTML = text;
    document.getElementById('cuadroInicio').classList.add('disable');
    document.getElementById('resultado').classList.remove('disable');
  
}

function copiarTexto(){
    var text = document.getElementById("texto").innerHTML;
    
    navigator.clipboard.writeText(text)
    .then(() => {
        console.log('Text copied to clipboard');
    })
    .catch(err => {
        console.error('Error in copying text: ', err);
    });

}

function visualizarAlerta() {
    var x = document.getElementById("alerta");
    x.classList.remove('disable');
    
}