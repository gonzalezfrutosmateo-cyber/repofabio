const archivoPeru = 'https://restcountries.com/v3.1/name/peru';
const archivoArg = 'https://restcountries.com/v3.1/name/argentina';
const archivoCol = 'https://restcountries.com/v3.1/name/colombia';
const archivoUru = 'https://restcountries.com/v3.1/name/uruguay';


document.getElementById('mostrar').addEventListener('click',()=>{
    fetch(archivoPeru)
        .then ((rpta)=>{
            return rpta.json();
        })
        .then((datos)=>{
            const contenedor = document.getElementById('result')
            contenedorinnerHTML = "";

            datos.forEach(archivo=> {
                const div=document.createElement('div');
                div.innerHTML =`
                <p>Nombre: ${archivo.name.common}</p>
                <p>Capital: ${archivo.capital}</p>
                <img src="${archivo.flags.png}" placeholder="Bandera">
                
                `
                contenedor.appendChild(div);
            })
        })

        .catch((e)=>{
            alert('error al leer\n${e}')
        })
})