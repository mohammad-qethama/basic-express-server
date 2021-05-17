'use strict';

const express = require('express');
// const { read } = require('node:fs');
const app = express();
const error404 = require('./error-handlers/404.js');
const error500 = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const validator = require ('./middleware/validator.js');



app.use(logger);



// app.get('/person',  (req,res)=>{
//     app.use('/person',validator);

//     res.status(200).json({
//         name:req.query.name
//     });
// });
app.get('/person',validator);

app.use('*',error404);
app.use(error500);

function start(port){

  app.listen(port,()=>{
    console.log(`listening on ${port}`);



  });
}

module.exports = {
  app:app,
  start:start
};
