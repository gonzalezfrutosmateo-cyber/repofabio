function mostrarAlumnos(lista, titulo) {
    if (lista.length === 0) {
        resultado.innerHTML = `<p>No se encontraron alumnos.</p>`;
        return;
    }

    let html = `<h3>${titulo}</h3>`;
    lista.forEach((alumno, index) => {
        html += `
            <div>
                <p>${index + 1}. <strong>${alumno.nombre}</strong> ${alumno.apellido} | ${alumno.materia}</p>
                <p>Notas: ${alumno.nota1} - ${alumno.nota2} - ${alumno.nota3}</p>
                <p>Promedio: ${alumno.promedio}</p>
            </div>
            <hr>
        `;
    });

    resultado.innerHTML = html;
}

function limpiarCampos() {
    document.getElementById("txtNom").value = "";
    document.getElementById("txtAlum").value = "";
    document.getElementById("txtMat").value = "";
    document.getElementById("numNota1").value = "";
    document.getElementById("numNota2").value = "";
    document.getElementById("numNota3").value = "";
}

function agregar() {
    const nombre = document.getElementById("txtNom").value.trim();
    const apellido = document.getElementById("txtAlum").value.trim();
    const materia = document.getElementById("txtMat").value.trim();
    const nota1 = parseFloat(document.getElementById("numNota1").value);
    const nota2 = parseFloat(document.getElementById("numNota2").value);
    const nota3 = parseFloat(document.getElementById("numNota3").value);

    if (!nombre || !apellido || !materia || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor completá todos los campos.");
    }

    const promedio = ((nota1 + nota2 + nota3) / 3).toFixed(2);
    alumnos.push({ nombre, apellido, materia, nota1, nota2, nota3, promedio });

    alert(`Alumno "${nombre}" ${apellido} agregado con promedio ${promedio}.`);
    limpiarCampos();
}

function mostrarTodo() {
    mostrarAlumnos(alumnos, "Lista completa de alumnos");
}

function limpiarTodo() {
    alumnos = [];
    resultado.innerHTML = "<p>Lista limpiada.</p>";
}

function borrarNombre() {
    const busqueda = prompt("Ingresá el nombre del alumno a borrar:").trim().toLowerCase();
    const index = alumnos.findIndex(a => a.nombre.toLowerCase() === busqueda);

    if (index === -1) {
        alert(`No se encontró ningún alumno con el nombre "${busqueda}".`);
        return;
    }

    const alumno = alumnos[index];
    alumnos.splice(index, 1);
    alert(`Alumno "${alumno.nombre} ${alumno.apellido}" eliminado correctamente.`);
}

function buscarNombre() {
    const busqueda = prompt("Ingresá el nombre a buscar:").trim().toLowerCase();
    const filtrados = alumnos.filter(a => a.nombre.toLowerCase().includes(busqueda));
    mostrarAlumnos(filtrados, `Resultados para "${busqueda}"`);
}

function buscarApellido() {
    const busqueda = prompt("Ingresá el apellido a buscar:").trim().toLowerCase();
    const filtrados = alumnos.filter(a => a.apellido.toLowerCase().includes(busqueda));
    mostrarAlumnos(filtrados, `Resultados para apellido "${busqueda}"`);
}

function buscarMateria() {
    const busqueda = prompt("Ingresá la materia a buscar:").trim().toLowerCase();
    const filtrados = alumnos.filter(a => a.materia.toLowerCase().includes(busqueda));
    mostrarAlumnos(filtrados, `Resultados para materia "${busqueda}"`);
}

function buscarAprobados() {
    const aprobados = alumnos.filter(a => parseFloat(a.promedio) >= 7);
    mostrarAlumnos(aprobados, "Alumnos aprobados (promedio ≥ 7)");
}

function buscarDesaprobados() {
    const desaprobados = alumnos.filter(a => parseFloat(a.promedio) < 7);
    mostrarAlumnos(desaprobados, "Alumnos desaprobados (promedio < 7)");
}

let alumnos = [];
const resultado = document.getElementById("resultado");

document.getElementById("btnAgregar").addEventListener("click", agregar);
document.getElementById("btnMostrar").addEventListener("click", mostrarTodo);
document.getElementById("btnLimpiar").addEventListener("click", limpiarTodo);
document.getElementById("btnBorrarNombre").addEventListener("click", borrarNombre);
document.getElementById("btnBuscarNombre").addEventListener("click", buscarNombre);
document.getElementById("btnBuscarApellido").addEventListener("click", buscarApellido);
document.getElementById("btnBuscarMateria").addEventListener("click", buscarMateria);
document.getElementById("btnBuscarAprobados").addEventListener("click", buscarAprobados);
document.getElementById("btnBuscarDesaprobados").addEventListener("click", buscarDesaprobados);