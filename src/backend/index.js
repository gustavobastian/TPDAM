//=======[ Settings, Imports & Data ]==========================================

var PORT    = 3000;

var express = require('express');
const connection = require('./mysql-connector');
var app     = express();
var utils   = require('./mysql-connector');

// to parse application/json
app.use(express.json()); 
// to serve static files
app.use(express.static('/home/node/app/static/'));
// to parse received data
var bodyParser = require('body-parser');
const { request } = require('express');


//=======[ Main module code ]==================================================



/**
 * Function that sends to the client the list of all the devices in the database in response to a GET request.
 *  
 * @param req: object submit by client
 * @param res: response object from server.
 */

 app.get('/devices/', function(req, res, next) {
 //Devices from the database
    
    connection.query('SELECT *  FROM Dispositivos ', function(error,result, fields){
     //   console.log(result);    
        res.send(result).status(200);
        return;    
    })
});
/**
 * Function that sends to the client the list of all the devices in the database in response to a GET request.
 *  
 * @param req: object submit by client
 * @param res: response object from server.
 */

 app.get('/electrovalve/', function(req, res, next) {
    //Devices from the database
       
       connection.query('SELECT *  FROM Electrovalvulas ', function(error,result, fields){
        //   console.log(result);    
           res.send(result).status(200);
           return;    
       })
   });

 /**
 * Function that sends to the client the list of all the measures of the device in the database in response to a GET request.
 *  
 * @param req: object submit by client
 * @param res: response object from server.
 */

  app.get('/Mesures', function(req, res, next) {
    //Devices from the database
       
       connection.query('SELECT *  FROM Mediciones ', function(error,result, fields){
        //   console.log(result);    
           res.send(result).status(200);
           return;    
       })
   });  
/*

 /**
 * Function that sends to the client the list of all the measures of the device in the database in response to a GET request.
 *  
 * @param req: object submit by client
 * @param res: response object from server.
 */

  app.get('/Log', function(req, res, next) {
    //Devices from the database
       
       connection.query('SELECT *  FROM Log_Riegos ', function(error,result, fields){
        //   console.log(result);    
           res.send(result).status(200);
           return;    
       })
   }); 

 /**
 * Function that sends to the client the list of all the measures of the device in the database in response to a GET request.
 *  
 * @param req: object submit by client
 * @param res: response object from server.
 */

  app.get('/Log', function(req, res, next) {
    //Devices from the database
       
       connection.query('SELECT *  FROM Log_Riegos ', function(error,result, fields){
        //   console.log(result);    
           res.send(result).status(200);
           return;    
       })
   }); 
   
   
/*

app.get('/devices/', function(req, res, next) {
    

   
   //response with Device hardcode here
   /* devices = [
        { 
            'id': 1, 
            'name': 'Lampara 1', 
            'description': 'Luz living', 
            'state': 0, 
            'type': 1, 
        },
        { 
            'id': 2, 
            'name': 'Ventilador 1', 
            'description': 'Ventilador Habitacion', 
            'state': 1, 
            'type': 2, 
        },
    ]
    res.send(JSON.stringify(devices)).status(200);*/

    //response with Devices from a device file
    /*
    let devices=require('./datos.json');
    res.send(devices).status(200);
    */
   
    
    //Devices from the database
/*    
    connection.query('SELECT *  FROM Devices ', function(error,result, fields){
     //   console.log(result);    
        res.send(result).status(200);
        return;    
    })
});
*///
app.listen(PORT, function(req, res) {
    
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================
