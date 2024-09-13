const express = require('express');
const router = express.Router();
const livro_controller = require('../controllers/livros_controller.js');
const via_cep = require('../middleware/via_cep.js');

router.post('/', via_cep, livro_controller.createlivros);
router.get('/', livro_controller.getlivros);
router.get('/:id', livro_controller.getlivrosById);
router.put('/:id', livro_controller.updatelivros);
router.delete('/:id', livro_controller.deletelivros);
// router.delete('/:id', livro_controller.deletelivros);

module.exports = router;