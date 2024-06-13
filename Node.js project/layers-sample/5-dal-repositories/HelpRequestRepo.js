const Repository = require('./Repository.js');
const HelpRequest = require('../5-dal-models/helpRequest.model.js');

class HelpRequestRepo extends Repository {
    constructor() {
        super(HelpRequest);
    }
    async getByPriority(priority) {
        try {
            const item = await this.model.find({priority:priority});

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
            const item = await this.model.find({location:location});

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
            const item = await this.model.find({status:status});

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
    async UpdateRequestInProgress(requestId, volunteerId) {
        try {
          // Find the help request by ID
          const helpRequest = await this.model.findById(requestId);
          if (!helpRequest) {
            throw new Error('Help request not found');
          }
      
          // Update the help request's status and volunteer code
          helpRequest.status = 'in progress';
          helpRequest.volunteerId = volunteerId;
      
          // Save the updated help request
          const updatedRequest = await this.model.save();
      
          return updatedRequest;
        } catch (error) {
          throw new Error(`Error marking request in progress: ${error.message}`);
        }
      }
      
}

module.exports = new HelpRequestRepo();