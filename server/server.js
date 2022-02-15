require('./config/config');
var employeeRouter = require('./routes/employeeRoute');
var pointageRouter = require('./routes/pointageRoute');
var {mongoose} = require('./db/mongoose');
const bodyParser = require('body-parser');


const express = require('express');
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('../swagger.json');


var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use('/employee', employeeRouter);
app.use('/pointage', pointageRouter);


app.use(
   '/api-docs',
   swaggerUi.serve, 
   swaggerUi.setup(swaggerDocument)
 );

app.listen(port,()=>{
  console.log(`started on port ${port}`);
})
module.exports = {app};
