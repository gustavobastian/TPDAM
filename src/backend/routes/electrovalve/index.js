var express = require('express');
var routerElectrovalve = express.Router();
var pool = require('../../mysql');


/**
 * Function that sends to the client the list of all the devices in the database in response to a GET request.
 *  
 * @param req: object submit by client
 * @param res: response object from server.
 */

 routerElectrovalve.get('/', function(req, res, next) {
    //Devices from the database
       
       pool.query('SELECT *  FROM Electrovalvulas ', function(error,result, fields){
        //   console.log(result);    
           res.send(result).status(200);
           return;    
       })
   });

   module.exports = routerElectrovalve;