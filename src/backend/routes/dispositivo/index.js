var express = require('express');
var routerDispositivo = express.Router();
var pool = require('../../mysql');


/**
 * Funcion que envia al front end todos los dispositivos
 *  
 * 
 */

routerDispositivo.get('/', function(req, res) {
    console.log("recibido all");
    pool.query('Select * from Dispositivos', function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

//Espera recibir por parámetro un id de dispositivo y devuelve su informacion
routerDispositivo.get('/:idDispositivo', function(req, res) {
    console.log("recibido one");
    pool.query('Select * from Dispositivos where dispositivoId=?', [req.params.idDispositivo], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

module.exports = routerDispositivo;