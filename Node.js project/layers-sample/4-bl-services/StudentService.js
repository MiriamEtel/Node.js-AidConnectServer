const Service = require('./Service.js');
const repo = require('../5-dal-repositories/StudentRepo.js')
class StudentService extends Service {
    constructor() {
        super(repo);
    }
}

module.exports = new StudentService();