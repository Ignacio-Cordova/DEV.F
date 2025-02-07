const btnVerPerros = document.getElementById("btnVerPerros");
const btnCrearPerro = document.getElementById("btnCrearPerro");



document.addEventListener("DOMContentLoaded", () => {

    addEventListener("click", (e) => {
        if (e.target === btnVerPerros) {
            window.location.href = "../html/lista.html";
        }
        if (e.target === btnCrearPerro) {
            window.location.href = "../html/formulario.html";
        }
    });
    

});