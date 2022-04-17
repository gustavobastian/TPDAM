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


/**
 * Function that sends to the client the electrovalve in the database in response to a GET request.
 *  
 * @param req: object submit by client
 * @param res: response object from server.
 */

 routerElectrovalve.get('/:idElectrovalve', function(req, res, next) {
    //Devices from the database
    requestLocal=req.params.idElectrovalve;
       pool.query('SELECT *  FROM Electrovalvulas WHERE electrovalvulaId=?',requestLocal, function(error,result, fields){
        //   console.log(result);    
           res.send(result).status(200);
           return;    
       })
   });   

   //Put method for change electrovalve state
/**
 * Function that saves the change of state of a  electrovalve in the log table. 
 * @req :id - device id
 * @res :value - value to set
 */

 routerElectrovalve.put('/cambio/:idElectrovalve', async function(req, res, next) {
    
    requestLocal=req.params.idElectrovalve;
    
   
    let result=0;
    let actualState=0;
    let results="0";
    let actual_value;
    let action="cerrar";

    pool.query('SELECT * FROM Log_Riegos  WHERE electrovalvulaId=? order by fecha desc',[req.params.idElectrovalve], async function(err,result, fields){                   
        actual_value=result[0];
      
    try{ 
        pool.query('INSERT INTO Log_Riegos (apertura,fecha,electrovalvulaId) values (?, NOW(),?)',[([actual_value.apertura]==0)? 1 : 0,req.params.idElectrovalve],await function(error,result, fields){
              // console.log(result);
                if(error){
                        throw(error);
                    }                
                }) 
            
        
        }catch(error){console.log(error);}
        //;} 
    });


    
    //send response to frontend
    res.send("Item status Updated").status(200);
    res.end();
});






   module.exports = routerElectrovalve;