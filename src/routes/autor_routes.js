const express = require('express');
const router = express.Router();
const autor_controller = require('../controllers/autor_controller.js');
const via_cep = require('../middleware/via_cep.js');

router.post('/', via_cep, autor_controller.createautor);
router.get('/', autor_controller.getautor);
router.get('/:id', autor_controller.getautorById);
router.put('/:id', autor_controller.updateautor);
router.delete('/:id', autor_controller.deleteautor);

module.exports = router;