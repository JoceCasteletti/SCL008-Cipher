const encode = document.getElementById('encode');
const decode = document.getElementById('decode');
const start = document.getElementById('start');
const clean = document.getElementById('clean');
const sendEmail = document.getElementById('send_email');

encode.addEventListener('click', (evento) => {
    evento.preventDefault();

    const message = document.getElementById('encode_message').value;
    const offset = parseInt(document.getElementById('encode_offset').value);

    if (message.length > 0 && offset > 0) {
        document.getElementById('result_container').style.display = 'block';
        document.getElementById('result').value = cipher.encode(offset, message);
    } else {
        alert('Debe ingresar el mensaje y desplazamiento para continuar.');
    }

})

decode.addEventListener('click', (evento) => {
    evento.preventDefault();
        
    const message = document.getElementById('decode_message').value;
    const offset = parseInt(document.getElementById('decode_offset').value);

    if (message.length > 0 && offset > 0) {
        document.getElementById('result_container').style.display = 'block';
        document.getElementById('result').value = cipher.decode(offset, message);
    } else {
        alert('Debe ingresar el mensaje y desplazamiento para continuar.');        
    }

})

start.addEventListener('click', (evento) => {
    evento.preventDefault();

    let name = document.getElementById('name').value;

    if (name.length > 0) {

        document.getElementById('welcome_name').innerHTML = `Bienvenid@ ${name}!`;
        document.getElementById('encode_container').style.display = 'block';
        document.getElementById('decode_container').style.display = 'block';

        const elements = document.getElementsByClassName('gamestarted');
        for (let i=0; i < elements.length; i++) {
            elements[i].style.display = 'none';
        }
    
    } else {
        alert('Debe ingresar su nombre para continuar.');
    }


    clean.addEventListener('click', (event) => {
        event.preventDefault();

        document.getElementById('encode_message').value = "";
        document.getElementById('encode_offset').value = "";
        document.getElementById('decode_message').value = "";
        document.getElementById('decode_offset').value = "";
        document.getElementById('result').value = "";
    })

    sendEmail.addEventListener('click', () => {
        alert('Se acaba de enviar resultado E-mail');
    })
})