require('./polyfills.js');
let d=String.fromCodePoint(97);
console.log("my problem: "+d);
require('dotenv').config();
const express = require('express');

const volunteersRouter = require('./2-api-routers/volunteers.router.js')
const helpRequestsRouter = require('./2-api-routers/helpRequests.router.js')


const app = express();

const host = process.env.HOST;
const port = process.env.PORT;

app.use(express.json());

app.use('/api/volunteers',volunteersRouter)
app.use('/api/helpRequests',helpRequestsRouter);
//teachers..
//marks...

//middleware of error handling
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('An error occurred, please try later...');
})

app.listen(port, host, () => {
    //here we can do stuff that should be done once the server is up
    console.log(`express server is running at http://${host}:${port}`);
})