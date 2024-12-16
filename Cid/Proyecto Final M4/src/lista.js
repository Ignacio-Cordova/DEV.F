const URL = "https://sample-dogs-api.netlify.app/api/v1/dogs";
const contenedorTarjetas = document.getElementById("contenedorTarjetas");
const buscador = document.getElementById("buscador");
const modal = document.getElementById("detallesTarjeta");
const contenedorLoader = document.getElementById("contenedorLoader");
const footer = document.getElementById("footer");
const barraSuperior = document.getElementById("barraSuperior");
const titulo = document.getElementById("titulo");

contenedorLoader.style.display = "flex";
contenedorTarjetas.style.display = "none";
buscador.style.display = "none";
modal.style.display = "none";
footer.style.display = "none";
barraSuperior.style.display = "none";
titulo.style.display = "none";

setTimeout(() => {
  contenedorLoader.style.display = "none";
  contenedorTarjetas.style.display = "flex";
  buscador.style.display = "flex";
  footer.style.display = "flex";
  barraSuperior.style.display = "flex";
  titulo.style.display = "flex";
}, 2000);

let perros = [];

async function obtenerPerros() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    perros = data;
    renderizarPerros(perros);
  } catch (error) {
    console.log(error);
  }
}

function renderizarPerros(perros) {
  contenedorTarjetas.innerHTML = "";
  perros.forEach((perro) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.id = "tarjeta";
    tarjeta.innerHTML = `
      <img src="${perro.image}" alt="Imagen de mascota" class="imagenMascota" id="imagenMascota">
      <div class="textoTarjeta">
        <h2 class="nombrePerro">${perro.name}</h2>
        <p>${perro.breed}</p>
      </div>
      <div class="botones">
        <button id="botonModificar" class="botonTarjeta">Modificar</button>
        <button id="botonEliminar" class="botonTarjeta">Eliminar</button>
      </div>
    `;
    contenedorTarjetas.appendChild(tarjeta);

    const botonModificar = tarjeta.querySelector("#botonModificar");
    const botonEliminar = tarjeta.querySelector("#botonEliminar");
    const imagenMascota = tarjeta.querySelector("#imagenMascota");

    botonModificar.addEventListener("click", () => {
      window.location.href = `./actualizar.html?id=${perro._id}`;
    });

    botonEliminar.addEventListener("click", () => {
      fetch(`${URL}/${perro._id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          obtenerPerros();
        })
        .catch((error) => console.log(error));
    });

    tarjeta.addEventListener("click", (event) => {
      if (event.target !== botonModificar && event.target !== botonEliminar) {
        let texto = `
        <div class="modal-content">
          <div class"detallesModal">
            <img src="${perro.image}" alt="Imagen de mascota" class="imagenMascotaModal" id="imagenMascota">
            <div class="textoTarjetaModal">
              <h2 class="nombrePerro">${perro.name}</h2>
                <div class="textoModal">
                  <strong>Raza:</strong>
                  <p>${perro.breed}</p>
                </div>
                <div class="textoModal">
                  <strong>Color:</strong>
                  <p>${perro.color}</p>
                </div>
                <div class="textoModal">
                  <strong>Edad:</strong>
                  <p>${perro.age}</p>
                </div>
                <div class="textoModal">
                  <strong>Juguete Favorito:</strong>
                  <p>${perro.favoriteToy}</p>
                </div>
                <div class="textoModal">
                  <strong>Personalidad:</strong>
                  <p>${perro.personality}</p>
                </div>
                <div class="textoModal textoLargo">
                  <strong>Biografía:</strong>
                  <p class="textoBio">${perro.bio}</p>
                </div>
            </div>
          </div>
        </div>
            `;
        modal.innerHTML = texto;
        modal.style.display = "block";
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  obtenerPerros();
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
  document.addEventListener("input", (event) => {
    const textoBuscado = event.target.value.toLowerCase();
    const perrosFiltrados = perros.filter((perro) => {
      return perro.name.toLowerCase().includes(textoBuscado);
    });
    renderizarPerros(perrosFiltrados);
  });
});
