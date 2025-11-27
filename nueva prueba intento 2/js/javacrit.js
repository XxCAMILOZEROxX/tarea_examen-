/*el alert esta en el html*/

let carrito = 0;

const botonesSumar = document.querySelectorAll('.fondo-carrito'); /*tremendo desorden para solo sumar +1*/

const carritoSpan = document.getElementById('carrito');



botonesSumar.forEach(boton => {

    boton.addEventListener('click', () => {

        const id = boton.dataset.id;

        const contador = document.getElementById(`contador-${id}`);

        let cantidad = parseInt(contador.textContent);

        cantidad++;

        contador.textContent = cantidad;

        carrito++;

        carritoSpan.textContent = carrito;

        contador.style.transform = "scale(1)";

        setTimeout(() => {

            contador.style.transform = "scale(1)";

        }, 200);

    });

});

document.getElementById("select-precio").addEventListener("change", function() { /*esta es la cosa que permite que cambie el texto*/
    const textoSeleccionado = this.options[this.selectedIndex].text;
    document.getElementById("criterio").textContent = textoSeleccionado;
});