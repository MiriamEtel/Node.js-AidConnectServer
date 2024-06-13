
const express = require('express');
const controller = require('../3-api-controllers/StudentsController.js')

const router = express.Router();
//api/students/
router.get('/', controller.getAll);

router.get('/:studentId', controller.get)

router.post('/', controller.insert)

router.put('/:studentId', controller.update)

router.delete('/:studentId', controller.delete)

module.exports = router;