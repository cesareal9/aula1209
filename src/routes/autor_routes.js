const express = require('express');
const router = express.Router();
const autor_controller = require('../controllers/autor_controller.js');
const via_cep = require('../middleware/via_cep.js');

router.post('/', via_cep, autor_controller.createAutor);
router.get('/', autor_controller.getAutores);
router.get('/:id', autor_controller.getAutorById);
router.put('/:id', autor_controller.updateAutor);
router.delete('/:id', autor_controller.deleteAutor);

module.exports = router;