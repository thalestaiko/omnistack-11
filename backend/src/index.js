const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

/*
Metodos http
*/


/**
 * Tipos de parametros 
 * 
 * Query params: paramentros nomeados enviados na rota apos o "?"(filtrs, paginas, etc)
 * route params: parametros utilizados para identificar recursos
 * Request body
 */

 /**
  * Driver de banco: nominal
  * Query builder : table ('users').select('*').where
  * Knex.js
  */
app.use(cors());
app.use(express.json());
app.use(routes);

 
app.listen(3333);
