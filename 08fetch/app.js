//Importar os módulos
const express = require('express');
const fetch = require('node-fetch')

const app = express();

//Rotas
app.get('/',(req,res)=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resposta => resposta.json())
    .then(resposta => console.table(resposta))
    res.end()
});

 //Servidor
app.listen(8081,()=>{
    console.log('App rodando em https://localhost:8081')
});