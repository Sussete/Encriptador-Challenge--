const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const button = document.getElementById(".button");


//button.disabled=true;

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}


function encriptar(stringEncriptada){
    
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    
    }
    return stringEncriptada;

   
}

function toggleButton(msj) {

   const button=document.getElementById("btncopy");
        if (msj.value != '') {

            document.getElementById('btncopy').disabled= true;

       } else {

            document.getElementById('btncopy').disabled=false;
        }

}


function copiado (){

const copiarTexto = document.querySelector(".mensaje");
copiarTexto.select();
copiarTexto.setSelectionRange(0, 99999);
document.execCommand("copy");

}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
   
}
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    
    }
    return stringDesencriptada;
}





