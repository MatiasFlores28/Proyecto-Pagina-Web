document.addEventListener("DOMContentLoaded", () => {
    const carritoContainer = document.querySelector("main");

    // Obtener el carrito desde LocalStorage
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length === 0) {
        carritoContainer.innerHTML = "<p>No hay productos en el carrito.</p>";
        return;
    }

    // Renderizar los productos del carrito
    carrito.forEach((producto) => {
        const productoHTML = `
            <div class="producto-carrito">
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
            </div>
        `;
        carritoContainer.innerHTML += productoHTML;
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const carritoContainer = document.getElementById("productos-carrito");
    const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
    const finalizarCompraBtn = document.getElementById("finalizar-compra");

    // Mostrar productos del carrito
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length === 0) {
        carritoContainer.innerHTML = "<p>No hay productos en el carrito.</p>";
    } else {
        carrito.forEach(producto => {
            const productoHTML = `
                <div class="producto-carrito">
                    <h3>${producto.nombre}</h3>
                    <p>Precio: $${producto.precio}</p>
                </div>
            `;
            carritoContainer.innerHTML += productoHTML;
        });
    }

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener("click", () => {
        localStorage.removeItem("carrito");
        location.reload();
    });

    // Finalizar la compra
    finalizarCompraBtn.addEventListener("click", () => {
        alert("¡Compra realizada con éxito!");
        localStorage.removeItem("carrito");
        location.reload();
    });
});
