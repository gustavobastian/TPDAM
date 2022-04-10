//=======[ Settings, Imports & Data ]==========================================

var PORT    = 3000;

var express = require('express');

var app     = express();
var utils   = require('./mysql-connector');

//ruteo dispositivo
var routerDisp = require('./routes/dispositivo');
//ruteo medicion
var routerMedicion = require('./routes/medicion');
//ruteo electrovalve
var routerElectrovalve = require('./routes/electrovalve');

// to parse application/json
app.use(express.json()); 
// to serve static files
app.use(express.static('/home/node/app/static/'));
// to parse received data
var bodyParser = require('body-parser');
const { request } = require('express');


//=======[ Main module code ]==================================================


app.use('/api/dispositivo', routerDisp);

app.use('/api/medicion', routerMedicion);

app.use('/api/electrovalve', routerElectrovalve);



 /**
 * Function that sends to the client the list of all the measures of the device in the database in response to a GET request.
 *  
 * @param req: object submit by client
 * @param res: response object from server.
 */
/*
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
 * Function that sends to the client the list of the log of activations of the electrovalves in response to a get request.
 *  
 * @param req: object submit by client
 * @param res: response object from server.
 */
/*
  app.get('/Log', function(req, res, next) {
    //Devices from the database
       
       connection.query('SELECT *  FROM Log_Riegos ', function(error,result, fields){
        //   console.log(result);    
           res.send(result).status(200);
           return;    
       })
   }); 

/**
 * Function that sends to the client the list of the log of activations of one selected electrovalve in response to a get request.
 *  
 * @param req: object submit by client
 * @param res: response object from server.
 */
/*
 app.get('/LogId', function(req, res, next) {
    //Devices from the database
        console.log(req.body);
        requestLocal=(JSON.parse( JSON.stringify(req.body)));
        console.log(requestLocal.id);
        if(requestLocal.id=== 0){res.send("error, id cant be 0");}
        if(isNaN(requestLocal.id)){res.send("error, id is not a number");}
       
       connection.query(`SELECT *  FROM Log_Riegos WHERE electrovalvulaId=${requestLocal.id} `, function(error,result, fields){
           console.log(result);    
           res.send(result).status(200);
           return;    
       })
       //res.send("ok");
   }); 
/**
 * Function that sends to the client the last of  log of activations of one selected electrovalve in response to a get request.
 *  
 * @param req: object submit by client
 * @param res: response object from server.
 */
/*
 app.get('/LastLogId', function(req, res, next) {
    //Devices from the database
        console.log(req.body);
        requestLocal=(JSON.parse( JSON.stringify(req.body)));
        console.log(requestLocal.id);
        if(requestLocal.id=== 0){res.send("error, id cant be 0");}
        if(isNaN(requestLocal.id)){res.send("error, id is not a number");}
       
       connection.query(`
                SELECT *  
                FROM Log_Riegos 
                WHERE electrovalvulaId=${requestLocal.id}
                ORDER BY logRiegoId Desc
                LIMIT 1                
             `, function(error,result, fields){
           console.log(result);    
           res.send(result).status(200);
           return;    
       })
       //res.send("ok");
   }); 
/**
 * Function that sends to the client the list of the measures of one selected device in response to a get request.
 *  
 * @param req: object submit by client
 * @param res: response object from server.
 */
/*
 app.get('/measureId', function(req, res, next) {
    //Devices from the database
        console.log(req.body);
        requestLocal=(JSON.parse( JSON.stringify(req.body)));
        console.log(requestLocal.id);
        if(requestLocal.id=== 0){res.send("error, id cant be 0");}
        if(isNaN(requestLocal.id)){res.send("error, id is not a number");}
       
       connection.query(`SELECT *  FROM Mediciones WHERE dispositivoId=${requestLocal.id} `, function(error,result, fields){
           console.log(result);    
           res.send(result).status(200);
           return;    
       })
       //res.send("ok");
   });       


//Put method for change electrovalve state
/**
 * Function that saves the change of state of a  electrovalve in the log table. 
 * @req :id - device id
 * @res :value - value to set
 */
/*
 app.put('/eVaChange', async function(req, res, next) {
    
    requestLocal=(JSON.parse( JSON.stringify(req.body)));
    console.log(requestLocal);
    if(requestLocal.id=== 0)
        {
            res.send("error, id cant be 0");
        }
    if(isNaN(requestLocal.id))
        {
            res.send("error, id is not a number");
        }

    if ((requestLocal.value< 0 )||(requestLocal.value>1))
        {
            res.send("error, value outside limits");
        }
    
    if ((requestLocal.value != 0 )&&(requestLocal.value!=1))
        {
            res.send("error, value should be 1 or 0");
        }    
    

    let result=0;
    let actualState=0;
    let results="0";

    let sql = `INSERT Log_Riegos 
            (apertura , fecha, electrovalvulaId)
            VALUES (${requestLocal.value}, NOW(), ${requestLocal.id})`;


    try{        
    connection.query(sql
        ,await function(error,result, fields, next ){
       // console.log(result);
        if(error){
            throw(error);
        }
        else{
         results=JSON.parse(JSON.stringify(result));
         }
        } 
    )}
    catch(error)
    { 
            console.log(error);
            res.send("error").status(200);
            res.end();
             
    };
    
    //send response to frontend
    res.send("Item status Updated").status(200);
    res.end();
});

*/

app.listen(PORT, function(req, res) {
    
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================
