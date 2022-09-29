const express = require('express');
const conectarDB = require('./config/db');

// Crear el servidor.
const app = express();

// Conectar a la base de datos.
conectarDB();

// Puerto de la app.
const PORT = process.env.PORT || 4000;

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));

// Definir la página ppal.
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

// Arrancar el server.
app.listen(PORT, () => {
    console.log(`El servidor está corriendo por el puerto ${PORT}`);
});