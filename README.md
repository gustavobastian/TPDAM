# TPDAM: : Backend de Sistema de Riego Automatizado 
### Sistema que da soporte a la aplicación multiplataforma de Sensores de DAM 
 (basado en el desarrollo Web App Full Stack Base de "https://www.gotoiot.com/")


## Como hacelo funcionar:
Es necesario poseer instalado docker y docker-compose.\
\
Una vez descargado de https://github.com/gustavobastian/TPDAM.git , ingresar a la carpeta principal del proyecto y correr el siguiente comando:

`docker-compose up`

Durante la primera ejecucion del proyecto se genera la inicialización de la base de datos. Por lo que es conveniente, luego de poseer todo ejecutandose, presionar ctrl+c y volver a lanzar con `docker-compose up`.


## Descripción del sistema:
El sistema consta de una base de datos mysql, un servidor phpmyadmin para poder observar la base de datos y una aplicación en node.
### Conexión a la base de datos:
Se utiliza un pool de conexiones que permite hasta 10 conexiones. 
### Backend node:
Utiliza el paquete CORS para permitir el acceso a los servicios de la api desde ubicaciones no corriendo sobre el mismo docker.

La aplicación utiliza express y express-router para redireccionar las distintas peticiones a cada subsistema en particular.

Los distintos endpoints son servidos en cada módulo por separado.

El acceso general es a traves de "https://localhost:8000/api"

## Lectura de la base de datos
Distintos enpoints que responden a get (y se pueden consultar desde un navegador):


### Dispositivos

* https://localhost:8000/api/dispositivo  : devuelve la lista de todos los dispositivos en formato JSON:\

[\
{"dispositivoId":1,"nombre":"Sensor 1","ubicacion":"Patio","electrovalvulaId":1},\
{"dispositivoId":2,"nombre":"Sensor 2","ubicacion":"Cocina","electrovalvulaId":2},\
{"dispositivoId":3,"nombre":"Sensor 3","ubicacion":"Jardin Delantero","electrovalvulaId":3},\
{"dispositivoId":4,"nombre":"Sensor 4","ubicacion":"Living","electrovalvulaId":4},\
{"dispositivoId":5,"nombre":"Sensor 5","ubicacion":"Habitacion 1","electrovalvulaId":5},\
{"dispositivoId":6,"nombre":"Sensor 6","ubicacion":"Habitacion 2",electrovalvulaId":6}\
]


* https://localhost:8000/api/dispositivo/1 : devuelve información del dispositivo 1 en formato JSON: 

[{"dispositivoId":1,"nombre":"Sensor 1","ubicacion":"Patio","electrovalvulaId":1}]

### Mediciones

* https://localhost:8000/api/medicion/1 : devuelve información de la ultima medición del sensor 1 en formato JSON.\
 {"medicionId":13, "fecha":"2022-04-22T01:44:30.000Z", "valor":"60","dispositivoId":1}

* https://localhost:8000/api/medicion/2/todas : devuelve información de todas las mediciones del sensor 2.
 
  [{"medicionId":3,"fecha":"2020-11-26T21:19:41.000Z","valor":"30","dispositivoId":2  },\
  {"medicionId":11, "fecha":"2020-11-26T21:19:41.000Z","valor":"12","dispositivoId":2 }]

### Log Riegos

* http://localhost:8000/api/logriegos/1 : devuelve la ultima información de riego de la valvula 1:

{"logRiegoId":99,"apertura":1,"fecha":"2022-04-22T01:44:30.000Z",
"electrovalvulaId":1}


* http://localhost:8000/api/logriegos/2/todos : devuelve todo el log  de riego de la valvula 2:
  
[{"logRiegoId":37,"apertura":0,"fecha":"2022-04-17T20:17:07.000Z","electrovalvulaId":2},\
{"logRiegoId":28,"apertura":1,"fecha":"2022-04-10T20:47:53.000Z","electrovalvulaId":2},\
{"logRiegoId":27,"apertura":0,"fecha":"2022-04-10T20:47:48.000Z","electrovalvulaId":2},\
{"logRiegoId":26,"apertura":1,"fecha":"2022-04-10T20:47:38.000Z","electrovalvulaId":2},\
{"logRiegoId":3,"apertura":0,"fecha":"2020-11-26T21:19:41.000Z","electrovalvulaId":2}]

### Electrovalvula
*http://localhost:8000/api/electrovalvula/2/medicion retorna la ultima medicions que realizó el sensor del dispositivo que posee la electrovalvula 2:\
[{"fecha":"2020-11-26T21:19:41.000Z","valor":"30","dispositivoId":2}]

*http://localhost:8000/api/electrovalvula/2 retorna la información de la electrovalvula 2: 
[{"electrovalvulaId":2,"nombre":"eLCocina"}]


## Escritura en la base de datos
### Escritura de mediciones
Al activarse una electroválvula(cerrarse el paso)), el front end envía una peticion de grabación de información de la medicion del sensor en la base de datos. Se utiliza el metodo Post a la direccion http://localhost:8000/api/medicion/  incorporando en el body del Post los valores del sensor y de la medición. El servidor actualiza el tiempo al momento en que se recibió el pedido.
Ejemplo de estructura de body para el post de grabación de la medición:
[{"valor":"12"},{"fecha":"2020-11-26T21:20:41.000Z"},{"dispositivoId":"2"}]
La respuesta del server es(dentro del body):
Medicion guardada


### Escritura en log de riegos
Realizando un put en  http://localhost:8000/api/electrovalvula/:idElectrovalve se escribe en log riegos la alteración del estado de la electrovalvula correspondiente.
Se recibe como respuesta:
Item status Updated
## Autores 👥

* **[Gustavo Bastian](https://github.com/gustavobastian)**: Adaptación del proyecto.

Las colaboraciones originales de la aplicación base (https://github.com/gotoiot/app-fullstack-base) fueron realizadas por:

* **[Agustin Bassi](https://github.com/agustinBassi)**: Ideación, puesta en marcha y mantenimiento del proyecto.
* **[Ernesto Giggliotti](https://github.com/ernesto-g)**: Creación inicial del frontend, elección de Material Design.
* **[Brian Ducca](https://github.com/brianducca)**: Ayuda para conectar el backend a la base de datos, puesta a punto de imagen de Docker.
