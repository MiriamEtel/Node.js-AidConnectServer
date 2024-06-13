
const express = require('express');
const controller = require('../3-api-controllers/VolunteerController.js')

const router = express.Router();
//api/students/
router.get('/', controller.getAll);

router.get('/:volunteerId', controller.get)

router.get('/:id/exists', controller.checkVolunteerExists);

router.post('/', controller.insert)

router.put('/:volunteerId', controller.update)

router.delete('/:volunteerId', controller.delete)


module.exports = router;