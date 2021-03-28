const express = require('express');
const connectarDB = require('./config/db');

const app = express();

connectarDB();

app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 4000;

app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => {
    console.log(`Servidor disponible en el puerto: ${PORT}`)
})