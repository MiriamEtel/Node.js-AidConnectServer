const Repository = require('./Repository.js');
const Volunteer = require('../5-dal-models/volunteer.model.js');

class VolunteerRepo extends Repository {
    constructor() {
        super(Volunteer);
    }
    async checkVolunteerExists(volunteerId) {
        try {
          const volunteer = await Volunteer.findById(volunteerId);
          return !!volunteer; // Return true if volunteer exists, false otherwise
        } catch (error) {
          throw new Error(`Error checking volunteer existence: ${error.message}`);
        }
      }
}

module.exports = new VolunteerRepo();