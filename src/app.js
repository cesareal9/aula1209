const express = require('express');

const livro_routes = require('./routes/livro_routes.js');
const autor_routes = require('./routes/autor_routes.js');

const app = express();

app.use(express.json());

app.use('/livro', livro_routes);
app.use('/autor', autor_routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});