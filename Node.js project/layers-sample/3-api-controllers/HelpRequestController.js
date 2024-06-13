const Controller = require('./Controller.js');
const HelpRequestService = require('../4-bl-services/HelpRequestService.js');

class HelpRequestController extends Controller {
    constructor() {
       super(HelpRequestService)
    }

    async getByPriority(req, res, next) {
        const { priority } = req.params;

        try {
            const response = await this.HelpRequestService.getByPriority(priority);

            return res.status(response.statusCode).json(response);
        } catch (e) {
            next(e);
        }
    }
    async getByLocation(req, res, next) {
        const { location } = req.params;

        try {
            const response = await this.HelpRequestService.getByLocation(location);

            return res.status(response.statusCode).json(response);
        } catch (e) {
            next(e);
        }
    }
    async getByStatus(req, res, next) {
        const { status } = req.params;

        try {
            const response = await this.HelpRequestService.getByStatus(status);

            return res.status(response.statusCode).json(response);
        } catch (e) {
            next(e);
        }
    }
 




// Route to mark a help request as in progress by a volunteer

async updateRequestInProgress(req, res) {
    const requestId = req.params.id;
    const volunteerId = req.params.volunteerId;
  
    try {
      // Call the corresponding function from the BL layer
      const updatedRequest = await this.HelpRequestService.updateRequestInProgress(requestId, volunteerId);
  
      res.json(updatedRequest);
    } catch (error) {
      // Handle any errors or exceptions
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new HelpRequestController();