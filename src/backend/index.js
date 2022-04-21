//=======[ Settings, Imports & Data ]==========================================

var PORT    = 3000;

var express = require('express');
var cors = require('cors');
var corsOptions={origin:'*' , optionsSuccessStatus:200};

var app     = express();



var routerDisp = require('./routes/dispositivo');
//ruteo medicion
var routerMedicion = require('./routes/medicion');
//ruteo electrovalve
var routerElectrovalve = require('./routes/electrovalve');
//ruteo log Riegos
var routerLogRiegos = require('./routes/logriegos');



// to parse application/json
app.use(express.json()); 
//for letting api to work with cors
app.use(cors(corsOptions));


// to parse received data
var bodyParser = require('body-parser');
const { request } = require('express');


//=======[ Main module code ]==================================================


app.use('/api/dispositivo', routerDisp);

app.use('/api/medicion', routerMedicion);

app.use('/api/electrovalvula', routerElectrovalve);

app.use('/api/logRiegos', routerLogRiegos);


app.listen(PORT, function(req, res) {
    
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================
