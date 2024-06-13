//import module mongoose for working with mongoDB
const mongoose = require('mongoose');
//schema
const helpRequestSchema = new mongoose.Schema({
    id:Number,
    location: String,
    description: String,
    phoneNumber:String,
    status:Number,
    numOfPeople:Number,
    priority:Number,
    volunteerId:Number
});
//model
const HelpRequest = mongoose.model('helpRequests', helpRequestSchema);

module.pexorts = HelpRequest;