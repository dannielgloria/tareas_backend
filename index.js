const express = require('express');
require('dotenv').config();
const tareasRoutes = require('./routes/tareasRoutes.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/tareas', tareasRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
