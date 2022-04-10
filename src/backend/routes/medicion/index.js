var express = require('express');
var routerMedicion = express.Router();
var pool = require('../../mysql');

//Espera recibir por parámetro un id de dispositivo y devuelve su última medición
routerMedicion.get('/:idDispositivo', function(req, res) {
    pool.query('Select * from Mediciones where dispositivoId=? order by fecha desc', [req.params.idDispositivo], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result[0]);
    });
});

//Espera recibir por parámetro un id de dispositivo y devuelve todas sus mediciones
routerMedicion.get('/:idDispositivo/todas', function(req, res) {
    pool.query('Select * from Mediciones where dispositivoId=? order by fecha desc', [req.params.idDispositivo], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

//Espera recibir por parámetro un id de dispositivo y un valor de medición y lo inserta en base de datos.
routerMedicion.post('/agregar', function(req, res) {
    pool.query('Insert into Mediciones (fecha,valor,dispositivoId) values (?,?,?)', [req.body.fecha, req.body.valor, req.body.dispositivoId], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});



 /**
 * Function that sends to the client the list of all the measures of the device in the database in response to a GET request.
 *  
 * @param req: object submit by client
 * @param res: response object from server.
 */

  routerMedicion.get('/all', function(req, res, next) {
    //Devices from the database
       console.log("here");
       pool.query('SELECT *  FROM Mediciones ', function(error,result, fields){
        //   console.log(result);    
           res.send(result).status(200);
           return;    
       })
   });  


module.exports = routerMedicion;