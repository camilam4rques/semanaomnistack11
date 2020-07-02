const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);



/*
* ROTA / RECURSO
*/

/*
Metodos HTTP

GET: Buscar/Listar uma informação do back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletaar uma informação no back-end
*/

/*
Tipos de parametros

Query Parms: Parametros nomeados eviados na rota após "?" (Filtros, paginação)
Route Parms: Parametros utilizados para identificar recursos
Request Body: Corpo da requisisao utilizado para criar ou alterar recursos

*/

/**
 * SQL: MySQL,SQLite, PosygreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT + FROM users
  * Query Builder: table('users').select('x').where()
  * 
  */

