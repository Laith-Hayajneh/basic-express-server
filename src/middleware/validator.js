'use strict';
const errorHandler=require('../error-handlers/500')
module.exports=(req,res,next)=>{
    // console.log('laithhhhdhdhdh')
    let name = {
        name: req.query.name
    };

    if (JSON.stringify(req.query) === '{}') {
        res.status(500).send(errorHandler)
    } else {
        

        res.status(200).json(name);
    };
    // next();
}