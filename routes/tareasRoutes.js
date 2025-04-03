const express = require('express');
const router = express.Router();
const tareasController = require('../controllers/tareasController');

router.get('/', tareasController.getTareas);
router.post('/', tareasController.createTarea);
router.put('/:id', tareasController.updateTarea);
router.delete('/:id', tareasController.deleteTarea);

module.exports = router;
