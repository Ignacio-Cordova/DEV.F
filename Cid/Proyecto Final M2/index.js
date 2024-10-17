document.addEventListener('DOMContentLoaded', () => {
    const countries = ['Portugal', 'Mexico', 'Brazil']; // Lista de países

    // Iterar sobre los países para asignar los eventos a los botones
    countries.forEach(country => {
        const button = document.getElementById(`visitPlace${country}`);
        
        // Verifica si el botón existe
        if (button) {
            button.addEventListener('click', (event) => {
                event.stopPropagation(); // Evitar que el clic cierre el cuadro

                const infoBox = document.getElementById('detalles');
                const tituloPlace = document.getElementById('tituloPlace');
                const cajaDetalles = document.getElementById('cajaDetalles');
                const imagenPlace = document.getElementById('imagenPlace');
                const detalles = document.getElementById('detalle');
                const fondo = document.getElementById('fondo');
                // Verifica si el infoBox existe
                if (infoBox) {
                    // Asignar el contenido y mostrar el infoBox
                    fondo.style.display = 'flex';  // Asegura que el fondo sea visible
                    fondo.style.backgroundColor = 'black';
                    fondo.style.opacity = 0.5;
                    fondo.style.zIndex = 5;
                    tituloPlace.innerHTML = `${country}`;
                    tituloPlace.style.textAlign = 'center';
                    infoBox.style.display = 'flex';  // Asegura que el cuadro sea visible
                    infoBox.style.backgroundColor = 'white';
                    infoBox.style.color = 'black';
                    infoBox.style.padding = '20px';
                    infoBox.style.zIndex = 6; 
                    cajaDetalles.style.display = 'flex';  // Asegura que la caja de detalles sea visible
                    detalles.style.display = 'flex';  // Asegura que la tarjeta sea visible
                    detalles.zIndex = 6;
                    imagenPlace.style.display = 'flex';  // Asegura que la imagen sea visible
                    imagenPlace.src = `./img/${country}.jpg`;
                    imagenPlace.style.justifyContent = 'start';
                    imagenPlace.style.zIndex = 6;
                
                    
                    if (country === 'Portugal') {
                        detalles.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
                    } else if (country === 'Mexico') {
                        detalles.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
                    } else if (country === 'Brazil') {
                        detalles.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
                    }
                }
            });
        }
    });

    document.addEventListener('click', (event) => {
        const infoBox = document.getElementById('detalles');
        const fondo = document.getElementById('fondo');
        const cajaDetalles = document.getElementById('cajaDetalles');

        if (infoBox && infoBox.style.display === 'block' || infoBox.style.display === "flex" && !infoBox.contains(event.target)) {
            fondo.style.display = 'none';
            infoBox.style.display = 'none';
            cajaDetalles.style.display = 'none';
            detalles.style.display = 'none';
        }
    });
});