const Repository = require('./Repository.js');
const Student = require('../5-dal-models/student.model.js');

class StudentRepo extends Repository {
    constructor() {
        super(Student);
    }
}

module.exports = new StudentRepo();