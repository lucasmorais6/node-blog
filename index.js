// ==================== EXTERNAL IMPORTS ==================== //
// O backend é um REST api, vai manter o servidor rodando e atendar as requsições http
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');

// ==================== INTERNAL IMPORTS ==================== //

// ==================== GLOBAL VARIABLES ==================== //

const app = express();

app.use(bodyParser.json()) // requsições do tipo json
app.use(bodyParser.urlencoded({ extended : false})) // requisições do tipo post

// ==================== FUNCTIONS ==================== //

// ==================== FRONT ==================== //
app.use(express.static(__dirname + '/client')) // tratar daqui para frente como arquivos estaticos
//dirname resolve automaticamente o caminho de diretorios até o arquivo atual

// ==================== DATABASE ==================== //

// ==================== ROUTES ==================== //

const routes = require('./routes')
app.use('/api',routes)

// ==================== START SERVER ==================== //

//chegar requisições do tipo GET na barra responder como:

const port = 3001

app.listen(port, () =>{
    console.log("Server runing on http://localhost:3001");
})


// ====================================================== //