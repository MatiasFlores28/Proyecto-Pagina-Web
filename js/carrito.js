// Inicializar carrito en LocalStorage si no existe
if (!localStorage.getItem("carrito")) {
    localStorage.setItem("carrito", JSON.stringify([]));
}

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`${producto.nombre} se agregó al carrito.`);
}

// Asignar eventos a los botones dinámicamente
document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".agregarCarrito");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            // Leer datos del producto desde los atributos del botón
            const producto = {
                id: boton.getAttribute("data-id"),
                nombre: boton.getAttribute("data-nombre"),
                precio: parseFloat(boton.getAttribute("data-precio"))
            };

            // Agregar producto al carrito
            agregarAlCarrito(producto);
        });
    });
});
