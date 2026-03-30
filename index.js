import express from 'express'
import {getDate, FechaCompleta} from './src/time.js';

const app = express()

app.get('/', (req, res) => {
  res.send('Bienvenido! Hola manunu')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

app.get('/hora', (req, res) => {
  res.send(getDate())
})

app.get('/fechaCompleta', (req, res) => {
  res.send(FechaCompleta())
})

app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada",
    status: 404
  });
});
