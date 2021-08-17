'use strict';
const express = require('express');
const server = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
// const browserMiddleware = require('./middleware/');
const loggerMeddleware = require('./middleware/logger');
const validator=require('./middleware/validator')
server.use(express.json());

// app.use(browserMiddleware);// using app.use will apply the middleware to all the access points
server.use(loggerMeddleware);


// http://localhost:3001/person?name=laith
server.get('/person',validator)
// server.get('/person', (req, res) => {
//     let name = {
//         name: req.query.name
//     };

//     if (JSON.stringify(req.query) === '{}') {
//         res.status(500).send(errorHandler)
//     } else {

//         res.status(200).json(name);
//     }
// })


server.get('/', (req, res) => {
    res.status(200).send("working fine")
});





server.get('/bad',(req,res,next)=>{
    next('error from bad end point')
})














server.use('*', notFoundHandler);
server.use(errorHandler)



function start(port) {
    server.listen(port, () => { console.log(`listining on ${port}`) });

}


module.exports = {
    start,
    server
}