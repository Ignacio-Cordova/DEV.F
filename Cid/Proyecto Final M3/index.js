//creación de Paises
class Pais {
  constructor(nombre, imagen, descripcion) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.descripcion = descripcion;
  }
}

const portugal = new Pais(
  "Portugal",
  "./img/Portugal.jpg",
  "Portugal es un país situado en el suroeste de Europa, en la Península Ibérica. Limita al oeste y al sur con el océano Atlántico"
);
const mexico = new Pais(
  "Mexico",
  "./img/Mexico.jpg",
  "México, oficialmente llamado Estados Unidos Mexicanos, es un país situado en la parte meridional de América del Norte. Limita."
);
const brazil = new Pais(
  "Brazil",
  "./img/Brazil.jpg",
  "Brasil, oficialmente llamado República Federativa del Brasil, es un país situado en América del Sur. Limita al norte con Venezuela, Guyana"
);
const japon = new Pais(
  "Japon",
  "./img/Japon.jpg",
  "Japón es un país insular de Asia Oriental. Situado en el océano Pacífico, tiene al norte el mar de Japón, China, Corea del Norte, Corea del Sur y Rusia"
);
const coreaDelSur = new Pais(
  "Corea del Sur",
  "./img/CoreaDelSur.jpg",
  "Corea del Sur, oficialmente República de Corea, es un país soberano de Asia Oriental, ubicado en la parte sur de la península de Corea"
);

// Creación de las variables para los elementos del DOM
const favoriteBox = document.getElementById("cajaTarjetas");
const botonPlaces = document.getElementById("buttonPlaces");
const botonFavorites = document.getElementById("buttonFavorites");
const buscador = document.getElementById("buscador");
const countries = [portugal, mexico, brazil, japon, coreaDelSur];
const favorites = [];
let pestañaActual = "Places";

// Creación de la función para actualizar los favoritos
function actualizarPaises(Lista) {
  let htmlActual = "";
  Lista.forEach((country) => {
    if (favorites.includes(country)) {
      htmlActual += `
    <div class="tarjetasPlaces">
    <img src="${country.imagen}" class="imagenLugar" />
    <div class="tarjetasPlacesSinImagen">
      <h3 class="tituloLugares">${country.nombre}</h3>
      <p class="textoTarjetas">
        ${country.descripcion}
      </p>
      <div class="botonesTarjetas">
        <button class="visitPlaces" id="visitPlace${country.nombre}">Visit place</button>
        <button class="unFavorites" id="unFav${country.nombre}">Eliminar de Favoritos</button>
      </div>
    </div>
  </div>
  `;
    } else {
      htmlActual += `
    <div class="tarjetasPlaces">
    <img src="${country.imagen}" class="imagenLugar" />
    <div class="tarjetasPlacesSinImagen">
      <h3 class="tituloLugares">${country.nombre}</h3>
      <p class="textoTarjetas">
        ${country.descripcion}
      </p>
      <div class="botonesTarjetas">
        <button class="visitPlaces" id="visitPlace${country.nombre}">Visit place</button>
        <button class="favorites" id="fav${country.nombre}">Agregar a Favoritos</button>
      </div>
    </div>
  </div>
  `;
    }
  });
  favoriteBox.innerHTML = htmlActual;
}

document.addEventListener("DOMContentLoaded", () => {
  actualizarPaises(countries);
  document.addEventListener("click", (event) => {
    if (event.target.className === "visitPlaces") {
      countries.forEach((country) => {
        const button = document.getElementById(`visitPlace${country.nombre}`);

        // Verifica si el botón existe
        if (button) {
          button.addEventListener("click", (event) => {
            event.stopPropagation(); // Evitar que el clic cierre el cuadro
            const infoBox = document.getElementById("detalles");
            const tituloPlace = document.getElementById("tituloPlace");
            const cajaDetalles = document.getElementById("cajaDetalles");
            const imagenPlace = document.getElementById("imagenPlace");
            const detalles = document.getElementById("detalle");
            const fondo = document.getElementById("fondo");
            // Verifica si el infoBox existe
            if (infoBox) {
              // Asignar el contenido y mostrar el infoBox
              fondo.style.display = "flex"; // Asegura que el fondo sea visible
              fondo.style.backgroundColor = "black";
              fondo.style.opacity = 0.5;
              fondo.style.zIndex = 5;
              tituloPlace.innerHTML = `${country.nombre}`;
              tituloPlace.style.textAlign = "center";
              infoBox.style.display = "flex"; // Asegura que el cuadro sea visible
              infoBox.style.backgroundColor = "white";
              infoBox.style.color = "black";
              infoBox.style.padding = "20px";
              infoBox.style.zIndex = 6;
              cajaDetalles.style.display = "flex"; // Asegura que la caja de detalles sea visible
              detalles.style.display = "flex"; // Asegura que la tarjeta sea visible
              detalles.zIndex = 6;
              imagenPlace.style.display = "flex"; // Asegura que la imagen sea visible
              imagenPlace.src = `${country.imagen}`;
              imagenPlace.style.justifyContent = "start";
              imagenPlace.style.zIndex = 6;

              if (country === portugal) {
                detalles.innerHTML = portugal.descripcion;
              } else if (country === mexico) {
                detalles.innerHTML = mexico.descripcion;
              } else if (country === brazil) {
                detalles.innerHTML = brazil.descripcion;
              } else if (country === japon) {
                detalles.innerHTML = japon.descripcion;
              } else if (country === coreaDelSur) {
                detalles.innerHTML = coreaDelSur.descripcion;
              }
            }
          });
        }
      });
    }
  });

  document.addEventListener("click", (event) => {
    const infoBox = document.getElementById("detalles");
    const fondo = document.getElementById("fondo");
    const cajaDetalles = document.getElementById("cajaDetalles");

    if (event.target.id === "fondo" || event.target.id === "cerrar") {
      fondo.style.display = "none";
      infoBox.style.display = "none";
      cajaDetalles.style.display = "none";
      detalles.style.display = "none";
    }
  });

  document.addEventListener("click", (event) => {
    if (event.target.className === "favorites") {
      if (event.target.id === "favPortugal" && !favorites.includes(portugal)) {
        favorites.push(portugal);
      } else if (
        event.target.id === "favMexico" &&
        !favorites.includes(mexico)
      ) {
        favorites.push(mexico);
      } else if (
        event.target.id === "favBrazil" &&
        !favorites.includes(brazil)
      ) {
        favorites.push(brazil);
      } else if (
        event.target.id === "favJapon" && 
        !favorites.includes(japon)
      ) {
        favorites.push(japon);
      } else if (
        event.target.id === "favCoreaDelSur" &&
        !favorites.includes(coreaDelSur)
      ) {
        favorites.push(coreaDelSur);
      }
      actualizarPaises(countries);
      console.log(favorites);
    }
  });

  document.addEventListener("click", (event) => {
    if (event.target.id === "buttonFavorites") {
      if (favorites.length > 0) {
        pestañaActual = "Favorites";
        botonFavorites.value = "1";
        botonPlaces.value = "0";
        actualizarPaises(favorites);
      }
    } else if (event.target.id === "buttonPlaces") {
      pestañaActual = "Places";
      botonFavorites.value = "0";
      botonPlaces.value = "1";
      actualizarPaises(countries);
    }
  });
  document.addEventListener("click", (event) => {
    if (event.target.className === "unFavorites") {
      favorites.forEach((favorite) => {
        if (event.target.id === `unFav${favorite.nombre}`) {
          if (pestañaActual === "Favorites" && favorites.length > 1) {
            favorites.splice(favorites.indexOf(favorite), 1);
            actualizarPaises(favorites);
            console.log(favorites);
          } else if (pestañaActual === "Favorites" && favorites.length === 1) {
            favorites.splice(favorites.indexOf(favorite), 1);
            pestañaActual = "Places";
            botonFavorites.value = "0";
            botonPlaces.value = "1";
            actualizarPaises(countries);
          } else if (pestañaActual === "Places") {
            favorites.splice(favorites.indexOf(favorite), 1);
            actualizarPaises(countries);
            console.log(favorites);
          }
        }
      });
    }
  });

  document.addEventListener("input", (event) => {
    const texto = event.target.value;
    if (pestañaActual === "Places") {
      const paisesFiltrados = countries.filter((pais) =>
        pais.nombre.toLowerCase().includes(texto.toLowerCase())
      );
      actualizarPaises(paisesFiltrados);
    } else if (pestañaActual === "Favorites") {
      const paisesFiltrados = favorites.filter((pais) =>
        pais.nombre.toLowerCase().includes(texto.toLowerCase())
      );
      actualizarPaises(paisesFiltrados);
    }
  });
});
