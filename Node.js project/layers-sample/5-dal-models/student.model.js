//import module mongoose for working with mongoDB
const mongoose = require('mongoose');
//schema
const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});
//model
const Student = mongoose.model('students', studentSchema);

module.pexorts = Student;