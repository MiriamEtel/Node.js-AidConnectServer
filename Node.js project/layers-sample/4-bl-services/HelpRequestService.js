const Service = require('./Service.js');
const repo = require('../5-dal-repositories/HelpRequestRepo.js')
class HelpRequestService extends Service {
    constructor() {
        super(repo);
    }
    async getByPriority(priority) {
        try {
            const item = await this.repo.getByPriority(priority);

            if (!item) {
                const error = new Error('Item not found');

                error.statusCode = 404;
                throw error;
            }

            return new HttpResponse(item);
        } catch (errors) {
            throw errors;
        }
    }
    async getByLocation(location) {
        try {
            const item = await this.repo.getByLocation(location);

            if (!item) {
                const error = new Error('Item not found');

                error.statusCode = 404;
                throw error;
            }

            return new HttpResponse(item);
        } catch (errors) {
            throw errors;
        }
    }
    async getByStatus(status) {
        try {
            const item = await this.repo.getByStatus(status);

            if (!item) {
                const error = new Error('Item not found');

                error.statusCode = 404;
                throw error;
            }

            return new HttpResponse(item);
        } catch (errors) {
            throw errors;
        }
    }
    async updateRequestInProgress(requestId, volunteerId) {
        try {
          // Call the DAL function to update the help request status
          const updatedRequest = await this.repo.updateRequestInProgress(requestId, volunteerId);
      
          // Add any additional business logic here if needed
      
          return updatedRequest;
        } catch (error) {
          // Handle any errors or exceptions
          throw new Error(`Error marking request in progress: ${error.message}`);
        }
      }
}

module.exports = new HelpRequestService();