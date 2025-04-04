const db = require('../db/connection.js');

exports.getTareas = (req, res) => {
  db.execute('SELECT * FROM tareas', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.createTarea = (req, res) => {
  const { tarea } = req.body;
  if (!tarea) return res.status(400).json({ error: 'El campo "tarea" es obligatorio.' });

  db.execute('INSERT INTO tareas (tarea) VALUES (?)', [tarea], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, tarea });
  });
};

exports.updateTarea = (req, res) => {
  const { id } = req.params;
  let { tarea, terminado } = req.body;

  // Si alguna propiedad no viene en el request, la convertimos en `null`
  tarea = tarea !== undefined ? tarea : null;
  terminado = terminado !== undefined ? terminado : null;

  db.query(
    'UPDATE tareas SET tarea = COALESCE(?, tarea), terminado = COALESCE(?, terminado) WHERE id = ?',
    [tarea, terminado, id],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Tarea no encontrada.' });
      }

      return res.json({ mensaje: 'Tarea actualizada' });
    }
  );
};



exports.deleteTarea = (req, res) => {
  const { id } = req.params;
  db.execute('DELETE FROM tareas WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Tarea no encontrada.' });
    res.json({ mensaje: 'Tarea eliminada' });
  });
};
