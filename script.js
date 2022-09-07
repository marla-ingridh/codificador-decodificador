
const inputTexto =  document.querySelector('.input-texto');
const mensagem = document.querySelector('.mensagem');
document.querySelector("#mensagemTrue").style.display = 'none';


// Função para codificar a Mensagem digitada
function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    document.querySelector(".imagem").style.display = 'none';
    document.querySelector("#mensagemTrue").style.display = 'block'
}

function encriptar(stringEncriptada){
    let matrizReferencia = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizReferencia.length; i++){
        
        if(stringEncriptada.includes(matrizReferencia[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizReferencia[i][0],matrizReferencia[i][1]);
        }
    }
    
    return stringEncriptada;
}


function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensagem.value = textoDesencriptado;

}

function desencriptar(stringDesencriptada){
    let matrizReferencia = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizReferencia.length; i++){
        
        if(stringDesencriptada.includes(matrizReferencia[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizReferencia[i][1],matrizReferencia[i][0]);
        }
    }
    
    return stringDesencriptada;
}


function copiar() {
    let textoCriptografado = document.querySelector("#mensagemCriptografada");
    textoCriptografado.select();
    navigator.clipboard.writeText(textoCriptografado.value)
    textoCriptografado.value = "";
  }