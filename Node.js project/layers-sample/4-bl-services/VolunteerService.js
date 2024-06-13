const Service = require('./Service.js');
const repo = require('../5-dal-repositories/VoluteerRepo.js')
class VolunteerService extends Service {
    constructor() {
        super(repo);
    }
    async checkVolunteerExists(volunteerId) {
        try {
          // Call the corresponding function from the DAL layer
          return await this.repo.checkVolunteerExists(volunteerId);
        } catch (error) {
          // Handle any errors or exceptions
          throw new Error(`Error checking volunteer existence: ${error.message}`);
        }
      }
}

module.exports = new VolunteerService();