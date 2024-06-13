
const express = require('express');
const controller = require('../3-api-controllers/HelpRequestController.js')

const router = express.Router();
//api/students/
router.get('/', controller.getAll);

router.get('/:helpRequestId', controller.get)

router.post('/', controller.insert)

router.put('/:helpRequestId', controller.update)

router.patch('/:id/volunteer/:volunteerId',controller.updateRequestInProgress)

router.delete('/:helpRequestId', controller.delete)

module.exports = router;