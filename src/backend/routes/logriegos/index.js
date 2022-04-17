var express = require('express');
var routerLogRiegos = express.Router();
var pool = require('../../mysql');

 /**
 * Function that sends to the client the list of the log of activations of the electrovalves in response to a get request.
 *  
 * @param req: object submit by client
 * @param res: response object from server.
 */

  routerLogRiegos.get('/', function(req, res, next) {
    //Devices from the database
       console.log("here");
       pool.query('SELECT *  FROM Log_Riegos ', function(error,result, fields){
        //   console.log(result);    
             if (err) {
               res.send(err).status(400);
               return;
            }
           res.send(result).status(200);
           return;    
       })
   }); 


/**
 * Function that sends to the client the last of  log of activations of one selected electrovalve in response to a get request.
 *  
 * @param req: object submit by client
 * @param res: response object from server.
 */

 routerLogRiegos.get('/:idElectrovalve', function(req, res) {        
        console.log("here");
       pool.query('SELECT * FROM Log_Riegos  WHERE electrovalvulaId=? order by fecha desc',[req.params.idElectrovalve], function(err,result, fields){           
                if (err) {
                    res.send(err).status(400);
                    return;
                }
                res.send(result[0]).status(200);          
       })
       
   }); 

module.exports = routerLogRiegos;