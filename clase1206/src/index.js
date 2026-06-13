//202509FD00587

const color = require('colors');
const express = require('express');
const puerto = 7006;
const app = express();
const ventas = require('./ventas');

console.clear()
app.get('/', (req, res) => {
    res.send('bemvindo a mi servidor express'.yellow.bold);
}
); 
app.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`.magenta.bold);
    });

app.get('/ver', (req, res) => {
    res.send(ventas);
}
);

app.get('/ver/vercli', (req, res) => {
    res.send(ventas.ventas.cliente);
}
)

app.get('/ver/verped', (req, res) => {
    res.send(ventas.pedidos);
}
)
app.get('/ver/vervend', (req, res) => {
    res.send(ventas.vendedor);
}
)
