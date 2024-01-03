const express = require('express')
const handlebars = require('express-handlebars')
const fetch = require('node-fetch')
const app = express()

app.engine('handlebars', handlebars.engine({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
    res.render('inicio',{titulo:'Estoque'})
})

app.listen(8081,()=>{
    console.log('Servidor rodando em: http://localhost:8081')
})