const archivo = 'https://jsonplaceholder.typicode.com/users'

document.getElementById('ver').addEventListener('click',()=>{
    fetch(archivo)
        .then ((rpta)=>{
            return rpta.json();
        })
        .then((datos)=>{
            const contenedor = document.getElementById('result')
            contenedorinnerHTML = "";

            datos.forEach(archivo=> {
                const div=document.createElement('div');
                div.innerHTML =`
                <p>Nombre: ${archivo.name}</p>
                <p>Correo: ${archivo.email}</p>
                <p>Telefono: ${archivo.phone}</p>
                `
                contenedor.appendChild(div);
            })
        })

        .catch((e)=>{
            alert('error al leer\n${e}')
        })
})