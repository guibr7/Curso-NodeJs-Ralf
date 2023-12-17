//Express
const express = require('express');
//BodyParser
const bodyParser = require('body-parser')

const app = express()

//Configurar BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Rotas
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/formulario.html')
})

app.post('/receber',(req,res)=>{
    res.write('<p>'+'Nome: '+ req.body.nome + '</p>')
    res.write('<p>'+'Sobrenome: '+ req.body.sobrenome + '</p>')
    res.write('<p>'+'Email: '+ req.body.email + '</p>')
    res.end()
})

app.listen(8081);
