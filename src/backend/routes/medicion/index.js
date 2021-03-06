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
routerMedicion.post('/', function(req, res) {
    console.log("guardo Medicion");
    console.log(req.body);
    received=(req.body);
    valor=received.valor;
    dispositivoId=received.dispositivoId;
    console.log("disp:"+dispositivoId);
    console.log("valor:"+valor);
  /*   { medicionId: 1,
  fecha: '2020-11-26T21:19:41.000Z',
 valor: '72',
 dispositivoId: 1 }*/

    
    pool.query('Insert into Mediciones (fecha,valor,dispositivoId) values (now(),?,?)', [ valor, dispositivoId], function(err, result, fields) {
        if (err) {
			console.log(result);
            res.send(err).status(400);
            return;
        }
        res.send("Medicion guardada");
    });
});





module.exports = routerMedicion;
