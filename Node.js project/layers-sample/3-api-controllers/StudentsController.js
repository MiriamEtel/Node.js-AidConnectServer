const Controller = require('./Controller.js');
const studentService = require('../4-bl-services/StudentService.js');

class StudentsController extends Controller {
    constructor() {
       super(studentService)
    }
}

module.exports = new StudentsController();