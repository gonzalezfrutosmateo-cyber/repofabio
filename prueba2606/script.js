const productos = [
    { id: 1, nombre: "Laptop", categoria: "Electronica", precio: 1200, stock: 5 },
    { id: 2, nombre: "Mouse", categoria: "Electronica", precio: 25, stock: 30 },
    { id: 3, nombre: "Camisa", categoria: "Ropa", precio: 45, stock: 10 },
    { id: 4, nombre: "Monitor", categoria: "Electronica", precio: 300, stock: 0 },
    { id: 5, nombre: "Pantalón", categoria: "Ropa", precio: 60, stock: 8 }
];

document.getElementById("btn1").addEventListener("click", Ejercicio1);
document.getElementById("btn2").addEventListener("click", Ejercicio2);
document.getElementById("btn3").addEventListener("click", Ejercicio3);
document.getElementById("btnAgregar").addEventListener("click", agregarProductos);
document.getElementById("btnMostrar").addEventListener("click", () => mostrarProductos(productos, "Lista completa de productos"));

function mostrarProductos(productos, titulo) {
    if (productos.length == 0) {
        caja.innerHTML`<p>No se encontraron productos.</p>`;
        return;
    }

    let html = `<h3>${titulo}</h3>`;
    productos.forEach((producto, index) => {
        html += `
            <div>
                <p>${index + 1}. <strong>${producto.nombre}</strong> ${producto.categoria} | ${producto.precio}</p>
                <p>Stock: ${producto.stock}</p>
            </div>
            <hr>
        `;
    });

    caja.innerHTML = html;
}

function mostrarEjercicio3(productos, titulo) {
    if (productos.length == 0) {
        caja.innerHTML`<p>No se encontraron productos.</p>`;
        return;
    }

    let html = `<h3>${titulo}</h3>`;
    html += `
            <div>
                <p><strong>${productos.nombre}</strong> ${productos.categoria} | ${productos.precio}</p>
                <p>Stock: ${productos.stock}</p>
            </div>
            <hr>
        `;

    caja.innerHTML = html;
}
function agregarProductos() {
    const nombre = document.getElementById("txtNom").value.trim();
    const categoria = document.getElementById("txtCat").value.trim();
    const precio = parseFloat(document.getElementById("txtPre").value);
    const stock = parseFloat(document.getElementById("txtStock").value);

    if (!nombre || !categoria || !precio || isNaN(stock)) {
        alert("Por favor completá todos los campos.");
    }
    productos.push({ nombre, categoria, precio, stock });

    alert(`Producto "${nombre}" agregado correctamente.`);
    limpiarCampos();
}

function Ejercicio1() {
    const prodElectronicosMenoresA500 = productos.filter(productos => productos.categoria == "Electronica" && productos.precio < 500);
    mostrarProductos(prodElectronicosMenoresA500, "Productos Electronicos Menores a 500");
}

function Ejercicio2() {
    const prodDescuento = productos.map(producto => {
        const precioConDescuento = producto.precio - (producto.precio * 0.10);
        return {
            nombre: producto.nombre,
            precio: precioConDescuento,
            stock: producto.stock,
            categoria: producto.categoria
        };
    });
    mostrarProductos(prodDescuento, "Productos con 10% de descuento");
}

function Ejercicio3() {
    const prodStock0 = productos.find(producto => producto.stock == 0);
    mostrarEjercicio3(prodStock0, "Producto con stock 0");
}