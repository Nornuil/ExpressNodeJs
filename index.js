const Contenedor = require('./claseContenedor');
const express = require('express')
const app = express();


app.get("/productos", (req, res) => {
  const lista = new Contenedor();
  lista.getAll()
  .then(contenido => res.send(contenido))
  .catch( err => console.log(err))
})

app.get("/productosRandom", (req, res) => {
  const producto = new Contenedor();
  producto.getById(Math.round(Math.random()*2))
  .then(contenido => res.send(contenido))
  .catch( err => res.send(err))
})

const server = app.listen(8080, () => {
  console.log(`Started server: http://localhost:${server.address().port}`);
})