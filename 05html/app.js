//Importar Express
const express = require('express');
const app = express();

//Especificar local do CSS e da imagem
app.use(express.static(__dirname + '/public'))

//Rotas
app.get('/',(req,res)=>{
    //Importar HTML
    res.sendFile(__dirname + '/pagina.html')
})

app.listen(8081);