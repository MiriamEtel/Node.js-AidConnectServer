const Controller = require('./Controller.js');
const VolunteerService = require('../4-bl-services/VolunteerService.js');

class VolunteerController extends Controller {
    constructor() {
       super(VolunteerService)
    }
    async checkVolunteerExists(req, res) {
        const volunteerId = req.params.id;
      
        try {
          // Call the corresponding function from the BL layer
          const exists = await this.service.checkVolunteerExists(volunteerId);
      
          // Send response indicating whether volunteer exists
          res.json({ exists });
        } catch (error) {
          // Handle any errors or exceptions
          res.status(500).json({ message: error.message });
        }
}
}

module.exports = new VolunteerController();