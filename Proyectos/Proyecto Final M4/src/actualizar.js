const nombre = document.getElementById('nombre');
const raza = document.getElementById('raza');
const imagen = document.getElementById('imagen');
const color = document.getElementById('color');
const edad = document.getElementById('edad');
const jugueteFavorito = document.getElementById('jugueteFavorito');
const personalidad = document.getElementById('personalidad');
const bio = document.getElementById('bio');
const btnEnviar = document.getElementById('btnEnviar');

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

const urlParams = new URLSearchParams(window.location.search);
const dogId = urlParams.get('id');

async function getDogData(id) {
    try {
        const response = await fetch(`https://sample-dogs-api.netlify.app/api/v1/dogs/${id}`);
        const data = await response.json();
        if (!data) {
            alert('Perro no encontrado');
        }
        return data;
    } catch (error) {
        console.error('Error fetching dog data:', error);
    }
}

// Función para llenar el formulario con los datos del perro
async function fillForm() {
    if (dogId) {
        const dogData = await getDogData(dogId);
        if (dogData) {
            nombre.placeholder = dogData.name;
            raza.placeholder = dogData.breed;
            imagen.placeholder = dogData.image;
            color.placeholder = dogData.color;
            edad.placeholder = dogData.age;
            jugueteFavorito.placeholder = dogData.favoriteToy;
            personalidad.placeholder = dogData.personality;
            bio.placeholder = dogData.bio;
        }
    }
}

// Función para obtener los datos del formulario
function obtenerDatos(evento) {
    const eventoNombre = evento.target.name;
    const eventoValue = evento.target.value;
    const newData = { ...datos, [eventoNombre]: eventoValue };
    datos = newData;
    console.log(datos);
}

nombre.addEventListener('change', (evento) => obtenerDatos(evento));
raza.addEventListener('change', (evento) => obtenerDatos(evento));
imagen.addEventListener('change', (evento) => obtenerDatos(evento));
color.addEventListener('change', (evento) => obtenerDatos(evento));
edad.addEventListener('change', (evento) => obtenerDatos(evento));
jugueteFavorito.addEventListener('change', (evento) => obtenerDatos(evento));
personalidad.addEventListener('change', (evento) => obtenerDatos(evento));
bio.addEventListener('change', (evento) => obtenerDatos(evento));

// Función para enviar los datos del formulario
btnEnviar.addEventListener('click', () => {
    fetch(`https://sample-dogs-api.netlify.app/api/v1/dogs/${dogId}`, {
        method: 'PUT',
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
});

// Llamar a la función para llenar el formulario cuando la página cargue
window.onload = fillForm;

