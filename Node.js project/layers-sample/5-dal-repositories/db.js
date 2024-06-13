
const mongoose = require('mongoose');

//func for connecting the DB
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://MiriCohen:@cluster0.vkjgwpk.mongodb.net/');
        console.log('connected to volunteers managment DB');
    } catch (error) {
        console.log(error);
        throw new Error('Error connecting to db. please try later...');
    }
}

module.exports = { connect };