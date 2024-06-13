//import module mongoose for working with mongoDB
const mongoose = require('mongoose');
//schema
const volunteerSchema = new mongoose.Schema({
    id:Number,
    firstName: String,
    lastName: String,
    phoneNumber:String,
    specializations:String=[]
});
//model
const Volunteer = mongoose.model('volunteers', volunteerSchema);

module.pexorts = Volunteer;