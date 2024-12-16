const URL = 'https://sample-dogs-api.netlify.app/api/v1/dogs';
const btnEnviar = document.querySelector('#btnEnviar');
const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const raza = document.querySelector('#raza');
const imagen = document.querySelector('#imagen');
const color = document.querySelector('#color');
const edad = document.querySelector('#edad');
const jugueteFavorito = document.querySelector('#jugueteFavorito');
const personalidad = document.querySelector('#personalidad');
const biografia = document.querySelector('#bio');


let datos = {
    name: "",
    breed: "",
    image: "",
    color: "",
    age: "",
    favoriteToy: "",
    personality: "",
    bio: ""
  };

  function obtenerDatos(evento) {
    const eventoNombre = evento.target.name;
    const eventoValue = evento.target.value
  
    const newData = {...datos, [eventoNombre] : eventoValue }
    datos = newData

  }

nombre.addEventListener('change', (evento) => obtenerDatos(evento));
raza.addEventListener('change', (evento) => obtenerDatos(evento));
imagen.addEventListener('change', (evento) => obtenerDatos(evento));
color.addEventListener('change', (evento) => obtenerDatos(evento));
edad.addEventListener('change', (evento) => obtenerDatos(evento));
jugueteFavorito.addEventListener('change', (evento) => obtenerDatos(evento));
personalidad.addEventListener('change', (evento) => obtenerDatos(evento));
biografia.addEventListener('change', (evento) => obtenerDatos(evento));


function enviarDatos(){
    if (!nombre.value || !raza.value || !imagen.value){
        alert('Por favor llena todos los campos principales');
        return;
    }


    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        window.location.href = './lista.html';
    })
    .catch(error => console.log(error));
}

document.addEventListener('DOMContentLoaded', () => {
    btnEnviar.addEventListener('click', enviarDatos);
});
