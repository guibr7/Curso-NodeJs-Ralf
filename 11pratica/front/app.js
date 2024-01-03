const express = require('express')
const handlebars = require('express-handlebars')
const fetch = require('node-fetch')
const bodyParser = require('body-parser')
const app = express()

app.engine('handlebars', handlebars.engine({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    fetch('http://localhost:3000/estoque',{method:'GET'})
    .then(resposta => resposta.json())
    .then(resposta => res.render('inicio', { resposta,produtos:resposta, title: 'Estoque' }))
   
})

app.get('/cadastrar',(req,res)=>{
    res.render('cadastrar')
})

app.post('/cadastrarproduto',(req,res)=>{
    let nome = req.body.nome;
    let quant = req.body.quantidade;
    let preco = req.body.preco
    let produto = {
        'nome':nome,
        'quantidade':quant,
        'preco':preco
    };
    fetch(' http://localhost:3000/estoque',{method:'POST',
    body:JSON.stringify(produto),
    headers:{'Content-Type':'application/json'}})
    .then(res.redirect('/'))

   
})

app.listen(8081,()=>{
    console.log('Servidor rodando em: http://localhost:8081')
})