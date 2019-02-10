const encode = document.getElementById('encode');
const decode = document.getElementById('decode');
const home = document.getElementById('home');

const link = document.getElementById('test');

encode.addEventListener('click', (evento) => {
    evento.preventDefault();
        
    const input = document.getElementById('encode');

    let valueInput= inputName.value; //llamar la variable input


    document.getElementById('root').innerHTML
    +=cipher.encode(valueinput); //'Ale'

})





/* primera......


const encode = () => {
    const message = document.getElementById("message").value;
    const offset = document.getElementById("offset").value;

    window.cipher.encode(offset, message);
};

const cambiarTitulo = () => {
    document.getElementById("titulo").innerHTML = "CAMBIE!";
}

const decode = () => {
    const message = document.getElementById("message").value;2wa45rr
    deweeeeeeeeeeeeeeeeeeeere
    const offset = document.getElementById("offset").value;

    window.cipher.decode(offset, message);
};

const events = () => {
    document.getElementById("encode").addEventListener("click", encode);
    document.getElementById("decode").addEventListener("click", cambiarTitulo);
};

encode() /*

/* 1)
hacer referencia al boton con su id.addEventListener("tipo de evento", () => {
    const message = document.getElementById("message").value;
    const offset = document.getElementById("offset").value;

    window.cipher.encode(offset, message);
})

*/

/* 2)
function cipherText(offset, mensaje) {

     let cipher_message = '';

     for (let i = 0; i < mensaje.length; i++) {
       let ascii_char = mensaje.charCodeAt(i);

    if (ascii_char >= 65 && ascii_char <= 90) {
       ascii_char = ((ascii_char - 65 + offset) % 26) + 65;
    }
       cipher_message = cipher_message + String.fromCharCode(ascii_char);
return cipher_message;
*/





/* 3) document.getElementById('hello').addEventListener ('click', (evento) =>{
   evento.preventDefault();

   document.getElementById('welcome').style.display='none';
   document.getElementById('coder').style.display='block';


}) */
