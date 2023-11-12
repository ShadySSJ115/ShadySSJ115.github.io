class Carrito {
    constructor() {
        // Intenta cargar los productos del almacenamiento local
        this.productos = JSON.parse(localStorage.getItem('carrito')) || [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
        // Guarda los productos en el almacenamiento local cada vez que se agrega uno nuevo
        localStorage.setItem('carrito', JSON.stringify(this.productos));
    }

    verCarrito() {
        return this.productos;
    }
}

// Crear una nueva instancia de Carrito
let carrito = new Carrito();

// Agregar un evento de escucha a cada botón "Agregar al Carrito"
document.querySelectorAll('.product button').forEach((boton, index) => {
    boton.addEventListener('click', () => {
        let producto = document.querySelectorAll('.product h3')[index].innerText;
        carrito.agregarProducto(producto);
        console.log(`Producto agregado: ${producto}`);
        console.log('Carrito:', carrito.verCarrito());
    });
});
