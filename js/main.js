// Variables:
let costo = 0;
let salida = false;
let costoProductos = 0;
let opcion;

// Función constructora:
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

// Objetos:
const sombrero = new Producto("Sombrero", 500);
const camisa = new Producto("Camisa", 800);
const hoodie = new Producto("Hoodie", 1000);
const shorts = new Producto("Shorts", 700);

// Arrays:
const productos = [sombrero, camisa, hoodie, shorts];
const carrito = [];


// Funciones:
function cantidad(nombre) {
    let numeroValido = false;
    let numeroProductos = 0;

    while (numeroValido == false) {
        numeroProductos = parseInt(prompt("Seleccionaste " + nombre + ". Ingresa la cantidad que deseas:"));

        if (numeroProductos > 0) {
            numeroValido = true;
            alert("Productos agregados correctamente");
        } else {
            alert("Error. Ingresaste un número no válido");
        }
    }

    return numeroProductos;
}

function agregarAlCarrito(producto, cantidad) {
    let productoAgregado = producto + " x " + cantidad;
    carrito.push(productoAgregado);
}

function mostrarCarrito() {
    let listaCarrito = "";
    for (const i of carrito) {
        listaCarrito = listaCarrito + "\n" + i;
    }
    return listaCarrito;
}

function precioCantidad(numero, precio) {
    return numero * precio;
}

function buscarPrecio(nombre) {
    const encontrado = productos.find((el) => {
        return el.nombre == nombre;
    });

    return encontrado.precio;
}

// Programa carrito:
alert("Bienvenido a nuestra tienda!");

while (salida == false) {
    costoProductos = 0;
    opcion = prompt("Ingresa el nombre del producto que deseas agregar al carrito de compra. Para salir presiona x: \n\nSombrero - $500 \nCamisa - $800 \nHoodie - $1000 \nShorts - $700 \n\nTotal en el carrito: $" + costo);

    opcion = opcion.charAt(0).toUpperCase() + opcion.slice(1);
    
    if (productos.some((el) => {
        return el.nombre == opcion;

    })) {
        let cant = cantidad(opcion);
        agregarAlCarrito(opcion, cant);
        costoProductos = precioCantidad(cant, buscarPrecio(opcion));
    } else if (opcion == "x" || opcion == "X") {
        salida = true;
    } else {
        alert("Opción no válida");
    }
    costo = costo + costoProductos;

}

alert("Los productos en tu carrito suman un total de: $" + costo + "\n" + mostrarCarrito());

